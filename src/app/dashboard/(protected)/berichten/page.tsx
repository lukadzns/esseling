import { createClient } from "@/lib/supabase/server";
import MarkeerGelezenKnop from "@/components/dashboard/MarkeerGelezenKnop";

export default async function BerichtenPage() {
  const supabase = await createClient();

  const { data: berichten } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold">Berichten</h1>
      <p className="mt-2 text-sm text-ink-muted">
        Alles wat via het contactformulier binnenkomt, staat hier.
      </p>

      <div className="mt-8 flex flex-col gap-3">
        {!berichten || berichten.length === 0 ? (
          <p className="rounded-xl bg-paper p-6 text-sm text-ink-muted ring-1 ring-black/5">
            Nog geen berichten ontvangen.
          </p>
        ) : (
          berichten.map((bericht) => (
            <div
              key={bericht.id}
              className={
                bericht.gelezen
                  ? "rounded-xl bg-paper p-6 ring-1 ring-black/5"
                  : "rounded-xl bg-paper p-6 ring-2 ring-orange/40"
              }
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-display text-base font-extrabold">
                    {bericht.naam}
                  </p>
                  <p className="text-sm text-ink-muted">{bericht.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-xs text-ink-muted">
                    {new Date(bericht.created_at).toLocaleDateString("nl-NL", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  {!bericht.gelezen && (
                    <MarkeerGelezenKnop berichtId={bericht.id} />
                  )}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {bericht.bericht}
              </p>
              <a
                href={`mailto:${bericht.email}?subject=${encodeURIComponent(
                  `Re: je bericht aan esseling`
                )}&body=${encodeURIComponent(
                  `Hoi ${bericht.naam},\n\n\n\nGroetjes,\nLuka`
                )}`}
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange"
              >
                Antwoorden
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
