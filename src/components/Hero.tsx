import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-orange">
            Branding & websites voor lokale ondernemers
          </p>

          <h1 className="mt-5 font-display text-[12vw] font-extrabold leading-[0.95] tracking-tight md:text-[3.6rem]">
            Een logo en
            <br />
            site die echt
            <br />
            <span className="text-orange">bij je passen.</span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
            Ik maak logo&apos;s, huisstijls en websites voor kleine
            ondernemers. Geen kant-en-klare sjablonen, maar iets dat echt
            bij jouw zaak past.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange"
            >
              Plan een gesprek
            </Link>
            <Link
              href="/werk"
              className="rounded-md border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-orange hover:text-orange"
            >
              Bekijk het werk
            </Link>
          </div>
        </div>

        {/* Twee simpele blokken die doorlinken, geen zwaar paneel meer */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <Link
            href="/pakketten"
            className="group flex flex-col justify-between rounded-2xl bg-paper-soft p-8 ring-1 ring-black/5 transition-colors hover:ring-orange/40"
          >
            <div>
              <p className="font-display text-xl font-extrabold">
                Pakketten
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Logo, website of alles samen. Bekijk wat erbij hoort.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange">
              Bekijk de pakketten
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>

          <Link
            href="/over-mij"
            className="group flex flex-col justify-between rounded-2xl bg-ink-deep p-8 transition-colors hover:bg-ink"
          >
            <div>
              <p className="font-display text-xl font-extrabold text-white">
                Over mij
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Luka, 19 jaar, Tilburg. Lees wie er achter esseling zit.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange">
              Maak kennis
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
