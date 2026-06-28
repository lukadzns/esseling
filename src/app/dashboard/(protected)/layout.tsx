import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/dashboard/LogoutButton";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  // Extra check naast de middleware: nooit het dashboard renderen zonder gebruiker
  if (!data.user) {
    redirect("/dashboard/login");
  }

  return (
    <div className="min-h-screen bg-paper-soft">
      <header className="border-b border-black/5 bg-paper">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/dashboard" className="font-display text-lg font-extrabold lowercase tracking-tight">
            esseling. <span className="text-orange">dashboard</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/dashboard/berichten" className="hover:text-orange transition-colors">
              Berichten
            </Link>
            <Link href="/dashboard/content" className="hover:text-orange transition-colors">
              Site bewerken
            </Link>
            <Link href="/" className="text-ink-muted hover:text-orange transition-colors">
              Bekijk site ↗
            </Link>
            <LogoutButton />
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  );
}
