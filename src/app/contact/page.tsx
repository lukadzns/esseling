import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact, esseling",
};

export default function ContactPage() {
  return <main>
    <Contact />
  </main>;
}
