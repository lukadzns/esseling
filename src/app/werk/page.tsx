import type { Metadata } from "next";
import Cases from "@/components/Cases";

export const metadata: Metadata = {
  title: "Werk, esseling",
};

export default function WerkPage() {
  return <main>
    <Cases />
  </main>;
}
