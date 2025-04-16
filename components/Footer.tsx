import {
  getDiscoverRoute,
  getHomeRoute,
  getNewRecipeRoute,
  getRecipeBookRoute,
} from "@/lib/routes";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-primary/10 bg-white/50 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Left section - Navigation links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={getHomeRoute()}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={getDiscoverRoute()}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Explore Recipes
                </Link>
              </li>
              <li>
                <Link
                  href={getNewRecipeRoute()}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Create Recipe
                </Link>
              </li>
              <li>
                <Link
                  href={getRecipeBookRoute()}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  My Recipes
                </Link>
              </li>
              {/* TODO: Make About Page */}
              <li>
                <Link
                  href="/todo"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* TODO: Create Legal and Contact Pages */}
          {/* Right section - Legal links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/todo"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
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
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section - Tagline and copyright */}
        <div className="mt-8 flex flex-col items-center text-center">
          <p className="handwritten text-xl text-primary mb-2">
            Made for cooks who care.
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bitelist
          </p>
        </div>
      </div>
    </footer>
  );
}
