"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

enum THEMES {
  LIGHT = "light",
  DARK = "dark",
}

type Props = React.RefAttributes<HTMLButtonElement>;

export function UserDropdownThemeToggle({ ...props }: Props) {
  const { setTheme, theme } = useTheme();

  return (
    <button
      {...props}
      onClick={() =>
        setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
      }
    >
      {theme === THEMES.DARK ? <Moon /> : <Sun />}
      <span className="capitalize">{theme} Mode</span>
    </button>
  );
}
