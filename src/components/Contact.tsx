"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function Contact() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [bericht, setBericht] = useState("");
  const [status, setStatus] = useState<"idle" | "laden" | "verstuurd" | "fout">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("laden");

    const supabase = createClient();
    const { error } = await supabase.from("messages").insert({
      naam,
      email,
      bericht,
    });

    if (error) {
      setStatus("fout");
      return;
    }

    setStatus("verstuurd");
    setNaam("");
    setEmail("");
    setBericht("");
  }

  return (
    <section id="contact" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-orange">
          Contact
        </p>
        <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl">
          Even contact, dan kijken we samen verder.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-muted">
          Vul kort in waar je hulp bij zoekt: een logo, een website,
          boekingen, of alles samen. Je hoort binnen 1-2 dagen van mij.
        </p>

        {status === "verstuurd" ? (
          <div className="mx-auto mt-10 max-w-md rounded-xl bg-paper-soft p-8">
            <p className="font-display text-lg font-extrabold text-orange">
              Verstuurd
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              Bedankt voor je bericht. Je hoort snel van mij.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-4 text-left"
          >
            <div>
              <label htmlFor="naam" className="text-sm font-semibold">
                Naam
              </label>
              <input
                id="naam"
                name="naam"
                type="text"
                required
                value={naam}
                onChange={(e) => setNaam(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-black/10 bg-paper-soft px-4 py-3 text-sm outline-none focus-visible:border-orange"
                placeholder="Je naam"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-black/10 bg-paper-soft px-4 py-3 text-sm outline-none focus-visible:border-orange"
                placeholder="naam@bedrijf.nl"
              />
            </div>
            <div>
              <label htmlFor="bericht" className="text-sm font-semibold">
                Waar kan ik mee helpen?
              </label>
              <textarea
                id="bericht"
                name="bericht"
                rows={4}
                required
                value={bericht}
                onChange={(e) => setBericht(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-black/10 bg-paper-soft px-4 py-3 text-sm outline-none focus-visible:border-orange"
                placeholder="Bijvoorbeeld: een boekingssysteem voor mijn salon"
              />
            </div>

            {status === "fout" && (
              <p className="text-sm font-medium text-red-600">
                Er ging iets mis. Probeer het nog eens.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "laden"}
              className="mt-2 rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange disabled:opacity-50"
            >
              {status === "laden" ? "Bezig met versturen..." : "Versturen"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
