"use client";

import { motion } from "motion/react";
import { FormEvent, useState } from "react";

import { Button } from "../ui/button";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toastManager } from "../ui/toast";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        toastManager.add({
          type: "success",
          title: "Message sent successfully!",
          description: "I'll get back to you as soon as possible.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toastManager.add({
          type: "error",
          title: "Failed to send message",
          description: result.error || "Please try again later.",
        });
      }
    } catch {
      toastManager.add({
        type: "error",
        title: "Failed to send message",
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="mb-6 text-xl font-semibold">Send me a message</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field>
            <FieldLabel>
              Name <span className="text-destructive">*</span>
            </FieldLabel>
            <Input
              name="name"
              placeholder="Your name"
              required
              autoComplete="name"
            />
            <FieldError match="valueMissing">Name is required</FieldError>
          </Field>

          <Field>
            <FieldLabel>Phone</FieldLabel>
            <Input
              name="phone"
              type="tel"
              placeholder="Your phone number"
              autoComplete="tel"
            />
          </Field>
        </div>

        <Field>
          <FieldLabel>
            Email <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
            autoComplete="email"
          />
          <FieldError match="valueMissing">Email is required</FieldError>
          <FieldError match="typeMismatch">
            Please enter a valid email address
          </FieldError>
        </Field>

        <Field>
          <FieldLabel>
            Message <span className="text-destructive">*</span>
          </FieldLabel>
          <Textarea
            name="message"
            placeholder="Your message..."
            required
            className="min-h-32"
          />
          <FieldError match="valueMissing">Message is required</FieldError>
        </Field>

        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </motion.div>
  );
}
