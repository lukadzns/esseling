import Link from "next/link";

const pakketten = [
  {
    naam: "Website",
    tekst: "Een website die helemaal af is. Handig als je al een logo hebt.",
    items: ["Eigen design", "Werkt goed op je telefoon", "Contactformulier", "Binnen 2 weken klaar"],
    uitgelicht: false,
  },
  {
    naam: "Compleet pakket",
    tekst: "Logo, website en boekingssysteem in één keer goed geregeld.",
    items: [
      "Logo + huisstijl",
      "Eigen website",
      "Boekingssysteem",
      "Eén persoon, geen losse partijen",
    ],
    uitgelicht: true,
  },
  {
    naam: "Boekingssysteem",
    tekst: "Een boeksysteem dat je toevoegt aan je huidige website.",
    items: ["Eigen agenda", "Bevestiging per mail", "Werkt naast je huidige site"],
    uitgelicht: false,
  },
];

export default function Pakketten() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-orange">
            Pakketten
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl">
            Alles in één keer,
            <br />
            of gewoon één onderdeel.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            Elke zaak is anders, dus de prijs ook. We bespreken samen wat
            je nodig hebt en wat het kost. Geen vast bedrag vooraf, geen
            verrassingen achteraf.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pakketten.map((pakket) => (
            <div
              key={pakket.naam}
              className={
                pakket.uitgelicht
                  ? "relative flex flex-col rounded-2xl bg-ink-deep p-8 text-white ring-1 ring-orange/40 md:-translate-y-3"
                  : "flex flex-col rounded-2xl bg-paper-soft p-8 ring-1 ring-black/5"
              }
            >
              {pakket.uitgelicht && (
                <span className="absolute -top-3 left-8 rounded-full bg-orange px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink-deep">
                  Meest gekozen
                </span>
              )}

              <h3 className="font-display text-xl font-extrabold">
                {pakket.naam}
              </h3>
              <p
                className={
                  pakket.uitgelicht
                    ? "mt-3 text-sm leading-relaxed text-white/70"
                    : "mt-3 text-sm leading-relaxed text-ink-muted"
                }
              >
                {pakket.tekst}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {pakket.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-orange" aria-hidden="true">
                      ●
                    </span>
                    <span className={pakket.uitgelicht ? "text-white/85" : ""}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className={
                  pakket.uitgelicht
                    ? "mt-6 text-xs font-semibold uppercase tracking-wide text-orange"
                    : "mt-6 text-xs font-semibold uppercase tracking-wide text-ink-muted"
                }
              >
                Prijs in overleg
              </p>

              <Link
                href="/contact"
                className={
                  pakket.uitgelicht
                    ? "mt-3 rounded-md bg-orange px-5 py-3 text-center text-sm font-semibold text-ink-deep transition-colors hover:bg-white"
                    : "mt-3 rounded-md bg-ink px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-orange"
                }
              >
                Vraag een offerte aan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
