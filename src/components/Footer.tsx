import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="relative h-7 w-[140px]">
              <Image
                src="/brand/esseling-logo-white.png"
                alt="esseling."
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Ik maak logo&apos;s, huisstijls en websites voor kleine
              ondernemers. Vanuit Tilburg.
            </p>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white/40">
              esseling
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/pakketten" className="hover:text-orange transition-colors">
                  Pakketten
                </Link>
              </li>
              <li>
                <Link href="/werk" className="hover:text-orange transition-colors">
                  Werk
                </Link>
              </li>
              <li>
                <Link href="/over-mij" className="hover:text-orange transition-colors">
                  Over mij
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white/40">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/contact" className="hover:text-orange transition-colors">
                  Plan een gesprek
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lukaesseling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <Link
              href="/contact"
              className="rounded-md bg-orange px-5 py-3 text-sm font-semibold text-ink-deep transition-colors hover:bg-white"
            >
              Vraag een offerte aan
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} esseling, Luka Esseling, Tilburg</p>
          <p>Branding · Websites · Boekingssystemen</p>
        </div>
      </div>
    </footer>
  );
}
