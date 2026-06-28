"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function MarkeerGelezenKnop({
  berichtId,
}: {
  berichtId: string;
}) {
  const [laden, setLaden] = useState(false);
  const router = useRouter();

  async function markeerGelezen() {
    setLaden(true);
    const supabase = createClient();
    await supabase
      .from("messages")
      .update({ gelezen: true })
      .eq("id", berichtId);
    setLaden(false);
    router.refresh();
  }

  return (
    <button
      onClick={markeerGelezen}
      disabled={laden}
      className="rounded-md bg-orange px-3 py-1.5 text-xs font-semibold text-ink-deep transition-colors hover:bg-ink hover:text-white disabled:opacity-50"
    >
      {laden ? "..." : "Markeer als gelezen"}
    </button>
  );
}
