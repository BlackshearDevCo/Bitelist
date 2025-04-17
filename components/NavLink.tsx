"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-full",
        pathname === href
          ? "text-primary bg-primary/10"
          : "text-muted-foreground"
      )}
    >
      {children}
    </Link>
  );
}
