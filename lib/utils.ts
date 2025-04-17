import { User } from "@clerk/nextjs/server";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getUserInitials = (user: User) => {
  if (!user || !user.username) return "";

  return user.username.substring(0, 2).toUpperCase();
};
