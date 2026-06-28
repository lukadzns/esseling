const vaardigheden = [
  {
    titel: "Ontwerp",
    tekst: "Werk al sinds mijn dertiende met Photoshop en Illustrator: logo's, huisstijls, drukwerk.",
  },
  {
    titel: "Bouwen",
    tekst: "Maak met Next.js, Vercel en Supabase een echte, live website.",
  },
  {
    titel: "Systemen",
    tekst: "Boekingen, formulieren en agenda's die mensen ook echt gebruiken.",
  },
];

export default function Vaardigheden() {
  return (
    <section className="bg-paper-soft py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-2xl font-extrabold md:text-3xl">
          Dit kan ik
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {vaardigheden.map((item) => (
            <div key={item.titel}>
              <h3 className="font-display text-lg font-extrabold text-orange">
                {item.titel}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.tekst}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
