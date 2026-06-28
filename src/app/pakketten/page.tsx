import type { Metadata } from "next";
import Pakketten from "@/components/Pakketten";

export const metadata: Metadata = {
  title: "Pakketten, esseling",
};

export default function PakkettenPage() {
  return <main>
    <Pakketten />
  </main>;
}
