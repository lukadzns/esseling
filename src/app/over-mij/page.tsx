import type { Metadata } from "next";
import OverMijIntro from "@/components/OverMijIntro";
import Vaardigheden from "@/components/Vaardigheden";

export const metadata: Metadata = {
  title: "Over mij, esseling",
};

export default function OverMijPage() {
  return <main>
    <OverMijIntro />
    <Vaardigheden />
  </main>;
}
