import { getHomeRoute } from "@/lib/routes";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-primary/10 bg-white/50 py-6">
      <div className="container">
        <section className="flex flex-col gap-4">
          <Link href={getHomeRoute()}>
            <p className="handwritten text-primary text-2xl">Bitelist</p>
          </Link>

          <ul className="flex gap-4 flex-wrap">
            <li>
              <Link
                href="/todo"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/todo"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/todo"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                href="/todo"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center text-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bitelist
            </p>
            <p className="handwritten text-xl text-primary">
              Made for cooks who care.
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
}
