"use client";

import {
  getDiscoverRoute,
  getFeedRoute,
  getHomeRoute,
  getNewRecipeRoute,
  getProfileSettingsRoute,
  getRecipeBookRoute,
} from "@/lib/routes";
import { cn } from "@/lib/utils";
import {
  Book,
  Home,
  LogOut,
  LucideProps,
  Menu,
  Plus,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

type NavLinkProps = {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  name: string;
  href: string;
  mobileOnly?: boolean;
};

const NAV_LINKS: NavLinkProps[] = [
  {
    icon: Home,
    name: "Discover",
    href: getDiscoverRoute(),
  },
  {
    icon: Utensils,
    name: "Your Feed",
    href: getFeedRoute(),
  },
  {
    icon: Book,
    name: "My Book",
    href: getRecipeBookRoute(),
  },
  {
    icon: Plus,
    name: "New Recipe",
    href: getNewRecipeRoute(),
    mobileOnly: true,
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sidebar />

          <Link href={getHomeRoute()}>
            <h1 className="text-2xl font-bold text-primary handwritten">
              Bitelist
            </h1>
          </Link>

          <nav className="hidden md:flex md:gap-6">
            {NAV_LINKS.map((link) =>
              !link.mobileOnly ? <NavLink key={link.href} link={link} /> : null
            )}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* <div className="relative hidden md:block">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary" />
            <Input
              rounded
              type="search"
              placeholder="Search recipes..."
              className="w-[200px] pl-9 md:w-[260px] lg:w-[320px]"
            />
          </div> */}

          <Button
            asChild
            variant="default"
            size="sm"
            className="hidden md:flex rounded-full bg-gradient-to-r from-primary to-purple-400"
          >
            <Link href={getNewRecipeRoute()}>
              <Plus className="h-4 w-4" />
              New Recipe
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Hello, Jane!</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  className="w-full hover:cursor-pointer text-left"
                  href={getProfileSettingsRoute()}
                >
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <button className="w-full hover:cursor-pointer text-left">
                  Logout
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

function Sidebar() {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  // Close sheet on route change
  useEffect(() => {
    if (open) setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={(value) => setOpen(value)}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden rounded-full border-2 border-primary/20 text-primary hover:bg-primary/10"
        >
          <Menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="px-0 border-r-2 border-primary/20">
        <SheetTitle className="sr-only">Nav Sidebar</SheetTitle>

        {/* <div className="relative my-6 px-6 w-full">
          <Search className="absolute left-9 top-3 h-4 w-4 text-primary" />
          <Input
            rounded
            type="search"
            placeholder="Search recipes..."
            className="w-full pl-8"
          />
        </div> */}

        <div className="px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-2xl font-bold text-primary handwritten">
              Bitelist
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-4 py-4 pr-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-2 px-7 py-3 text-lg font-medium transition-colors rounded-r-full",
                pathname === link.href
                  ? "text-primary bg-primary/10 border-l-4 border-primary"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              )}
            >
              <link.icon className="h-5 w-5" />
              {link.name}
            </Link>
          ))}

          <Button
            variant="ghost"
            className="justify-start gap-2 px-7 py-3 text-lg font-medium transition-colors rounded-r-full text-muted-foreground hover:text-primary hover:bg-primary/5"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function NavLink({ link }: { link: NavLinkProps }) {
  const pathname = usePathname();

  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-full",
        pathname === link.href
          ? "text-primary bg-primary/10"
          : "text-muted-foreground"
      )}
    >
      {/* Using call signature to apply height classes directly to icon element */}
      <link.icon className="h-4 w-4" />
      <p>{link.name}</p>
    </Link>
  );
}
