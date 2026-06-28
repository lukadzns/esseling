import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-paper/90 backdrop-blur-sm border-b border-black/5">
      <nav className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-5">
        <Link href="/" className="relative h-7 w-[140px]">
          <Image
            src="/brand/esseling-logo-dark.png"
            alt="esseling."
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <div className="flex items-center gap-7 text-sm font-medium">
          <Link href="/pakketten" className="hover:text-orange transition-colors">
            Pakketten
          </Link>
          <Link href="/werk" className="hover:text-orange transition-colors">
            Werk
          </Link>
          <Link href="/over-mij" className="hover:text-orange transition-colors">
            Over mij
          </Link>
          <Link href="/contact" className="hover:text-orange transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
