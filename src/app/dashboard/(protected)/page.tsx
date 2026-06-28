import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardHome() {
  const supabase = await createClient();

  const { count: aantalBerichten } = await supabase
    .from("messages")
    .select("*", { count: "exact", head: true });

  const { count: ongelezen } = await supabase
    .from("messages")
    .select("*", { count: "exact", head: true })
    .eq("gelezen", false);

  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold">Welkom terug</h1>
      <p className="mt-2 text-sm text-ink-muted">
        Hier beheer je je berichten en de tekst op je site.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Link
          href="/dashboard/berichten"
          className="rounded-2xl bg-paper p-6 ring-1 ring-black/5 transition-colors hover:ring-orange/40"
        >
          <p className="font-display text-3xl font-extrabold">
            {aantalBerichten ?? 0}
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            Berichten ontvangen
            {ongelezen ? `, waarvan ${ongelezen} ongelezen` : ""}
          </p>
        </Link>

        <Link
          href="/dashboard/content"
          className="rounded-2xl bg-ink-deep p-6 transition-colors hover:bg-ink"
        >
          <p className="font-display text-base font-extrabold text-white">
            Site bewerken
          </p>
          <p className="mt-1 text-sm text-white/60">
            Pas teksten aan of voeg blokken toe
          </p>
        </Link>
      </div>
    </div>
  );
}
