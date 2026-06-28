"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/dashboard/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-md bg-ink px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-orange"
    >
      Uitloggen
    </button>
  );
}
