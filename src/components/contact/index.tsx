"use client";

import { ToastProvider } from "../ui/toast";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactMethods from "./ContactMethods";

export default function Contact() {
  return (
    <ToastProvider position="top-right">
      <section id="contacts" className="mx-auto px-4 py-20 md:px-0">
        <ContactHeader />
        <ContactMethods />
        <ContactForm />
      </section>
    </ToastProvider>
  );
}
