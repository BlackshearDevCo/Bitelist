import Link from "next/link";
import React from "react";
import { Home } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/Button";
import { getHomeRoute } from "@/lib/routes";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Link href={getHomeRoute()}>
            <h1 className="text-2xl font-bold text-primary handwritten">
              Bitelist
            </h1>
          </Link>

          <nav className="hidden md:flex md:gap-6">
            <NavLink href={getHomeRoute()}>
              <Home />
              <p>Discover</p>
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
