import X from "@/components/svgs/X";

export const contactConfig = {
  // Personal Contact Information
  email: "dhavaldudheliya77@gmail.com",
  phone: "+91 9157795624",

  // Time Zone (IANA timezone string)
  timezone: "Asia/Kolkata",

  // DM Links
  dmLinks: [
    {
      name: "X (Twitter)",
      href: "https://x.com/Dhaval_1364",
      icon: <X />,
    },
  ],
};

// Telegram Bot Configuration (uses environment variables)
export const telegramConfig = {
  botToken: process.env.TELEGRAM_BOT_TOKEN,
  chatId: process.env.TELEGRAM_CHAT_ID,
};
