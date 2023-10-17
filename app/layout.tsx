import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import clsx from "clsx";
import { ThemeProvider } from "@/components/theme-provider/ThemeProvider";
import { ModeToggle } from "@/components/mode-toggle/ModeToggle";
import { PropsWithChildren } from "react";
import { Toaster } from "@/components/ui/toaster";
import { NavigationMenu } from "@/components/navigation-menu/NavigationMenu";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Beat the Odds",
  description:
    "Betting on your favorite nba players just got a whole lot easier",
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang={"en"}>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme={"system"}
          disableTransitionOnChange={true}
          enableSystem={true}
        >
          <NavigationMenu />
          {props.children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
