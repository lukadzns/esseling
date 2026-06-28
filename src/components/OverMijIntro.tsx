import Image from "next/image";

export default function OverMijIntro() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-orange">
            Over mij
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[0.95] md:text-5xl">
            Luka
            <br />
            Esseling
          </h1>
          <p className="mt-5 text-base font-medium text-ink-muted">
            19 jaar · Tilburg
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl bg-paper-soft">
            <div className="relative aspect-[3/4] w-full max-w-sm">
              <Image
                src="/over-mij/luka-strand.jpg"
                alt="Luka Esseling"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
          <p>
            Ik ben Luka Esseling, 19 jaar en woon in Tilburg. Daar komt
            ook de naam esseling vandaan. Ik werk al sinds mijn dertiende
            met Photoshop. Wat begon als spelen met logo&apos;s en
            lettertypes is een echte passie geworden.
          </p>
          <p>
            Komend jaar begin ik aan mijn tweede leerjaar Mediavormgeven.
            Wat ik daar leer, gebruik ik gelijk in de praktijk. Zo is
            esseling ontstaan: ik maak niet alleen een logo, maar ook de
            website en het boekingssysteem erbij. Alles werkt samen.
          </p>
          <p>
            Geen groot bureau en geen lange wachttijden. Gewoon iemand
            die het zelf bouwt, snel schakelt en het net zo belangrijk
            vindt dat je site goed werkt als dat hij er goed uitziet.
          </p>
        </div>
      </div>
    </section>
  );
}
