"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");
  const [foutmelding, setFoutmelding] = useState<string | null>(null);
  const [laden, setLaden] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setFoutmelding(null);
    setLaden(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: wachtwoord,
    });

    setLaden(false);

    if (error) {
      setFoutmelding("Email of wachtwoord klopt niet.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-paper-soft px-6">
      <div className="w-full max-w-sm rounded-2xl bg-paper p-8 ring-1 ring-black/5">
        <p className="font-display text-2xl font-extrabold lowercase tracking-tight">
          esseling.
        </p>
        <p className="mt-1 text-sm text-ink-muted">Dashboard inloggen</p>

        <form onSubmit={handleLogin} className="mt-8 flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full rounded-md border border-black/10 bg-paper-soft px-4 py-3 text-sm outline-none focus-visible:border-orange"
            />
          </div>
          <div>
            <label htmlFor="wachtwoord" className="text-sm font-semibold">
              Wachtwoord
            </label>
            <input
              id="wachtwoord"
              type="password"
              required
              value={wachtwoord}
              onChange={(e) => setWachtwoord(e.target.value)}
              className="mt-1.5 w-full rounded-md border border-black/10 bg-paper-soft px-4 py-3 text-sm outline-none focus-visible:border-orange"
            />
          </div>

          {foutmelding && (
            <p className="text-sm font-medium text-red-600">{foutmelding}</p>
          )}

          <button
            type="submit"
            disabled={laden}
            className="mt-2 rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange disabled:opacity-50"
          >
            {laden ? "Bezig..." : "Inloggen"}
          </button>
        </form>
      </div>
    </main>
  );
}
