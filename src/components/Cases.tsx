import Image from "next/image";

export default function Cases() {
  return (
    <section className="bg-paper-soft py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-orange">
          Werk
        </p>
        <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl">
          Zo ziet mijn werk eruit.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
          Tek Barbershop is een voorbeeldproject. Ik heb een complete
          huisstijl gemaakt: een logo, visitekaartje, polo, raamsticker
          en een website met een echt werkend boekingssysteem. Het is nog geen bestaande klant. Dit is een voorbeeld van wat ik kan
          maken.
        </p>

        {/* Website + boekingssysteem */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-ink-deep md:grid md:grid-cols-2">
          <div className="p-8 md:p-10">
            <span className="inline-block rounded-full bg-orange/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange">
              Website & boekingssysteem
            </span>
            <h3 className="mt-4 font-display text-2xl font-extrabold text-white">
              Tek Barbershop
            </h3>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <span className="text-orange" aria-hidden="true">●</span>
                Boekingssysteem dat echt werkt, met een database erachter
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange" aria-hidden="true">●</span>
                Diensten, prijzen en openingstijden makkelijk aan te passen
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange" aria-hidden="true">●</span>
                Helemaal zelf ontworpen, geen sjabloon
              </li>
            </ul>
            <a
              href="https://barbershop-tek.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-orange px-5 py-3 text-sm font-semibold text-ink-deep transition-colors hover:bg-white"
            >
              Bekijk het voorbeeld ↗
            </a>
          </div>

          <div className="flex items-center justify-center bg-ink p-10">
            <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-xl border border-white/10 bg-white">
              <Image
                src="/werk/tek-logo.png"
                alt="Logo van Tek Barbershop"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>

        {/* Fysieke huisstijl-toepassingen */}
        <div className="mt-8">
          <span className="inline-block rounded-full bg-orange/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange">
            De huisstijl in het echt
          </span>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Hetzelfde logo en dezelfde kleuren, maar dan op spullen die je
            echt gebruikt, niet alleen op een scherm.
          </p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl bg-paper ring-1 ring-black/5">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/werk/tek-polo.jpg"
                alt="Polo met geborduurd Tek Barbershop logo"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="p-5 text-sm font-medium text-ink-muted">
              Polo met het logo op de borst
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl bg-paper ring-1 ring-black/5">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/werk/tek-raamsticker.jpg"
                alt="Raamsticker met Tek Barbershop logo op een winkelpui"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="p-5 text-sm font-medium text-ink-muted">
              Raamsticker, herkenbaar vanaf de straat
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
