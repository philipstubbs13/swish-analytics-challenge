"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  return <NextThemesProvider {...props}>{props.children}</NextThemesProvider>;
};
