import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { currentUser } from "@clerk/nextjs/server";
import { getUserInitials } from "@/lib/utils";
import { SignOutButton } from "@clerk/nextjs";
import { UserDropdownThemeToggle } from "./UserDropdownThemeToggle";

export async function UserDropdown() {
  const user = await currentUser();

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={user.imageUrl}
            alt={user.username ?? "User Avatar"}
          />
          <AvatarFallback>{getUserInitials(user)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Hello, {user.username}!</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <UserDropdownThemeToggle />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <SignOutButton>Log out</SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
