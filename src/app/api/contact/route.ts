import { NextResponse } from "next/server";

import { telegramConfig } from "@/config/Contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Check Telegram configuration
    if (!telegramConfig.botToken || !telegramConfig.chatId) {
      console.error("Telegram configuration is missing");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    // Format message for Telegram
    const telegramMessage = `
📬 *New Contact Form Submission*

👤 *Name:* ${escapeMarkdown(name)}
📧 *Email:* ${escapeMarkdown(email)}
📱 *Phone:* ${phone ? escapeMarkdown(phone) : "Not provided"}

💬 *Message:*
${escapeMarkdown(message)}

---
_Received at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST_
    `.trim();

    // Send to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${telegramConfig.botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: telegramConfig.chatId,
          text: telegramMessage,
          parse_mode: "Markdown",
        }),
      },
    );

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error("Telegram API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}

// Helper function to escape Markdown special characters
function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}
