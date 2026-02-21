"use client";

import { ToastProvider } from "../ui/toast";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactMethods from "./ContactMethods";

export default function Contact() {
  return (
    <ToastProvider position="top-right">
      <section id="contacts" className="mx-auto px-2 py-12 md:px-4">
        <ContactHeader />
        <ContactMethods />
        <ContactForm />
      </section>
    </ToastProvider>
  );
}
