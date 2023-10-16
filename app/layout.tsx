import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import clsx from "clsx";
import { ThemeProvider } from "@/components/theme-provider/ThemeProvider";
import { ModeToggle } from "@/components/mode-toggle/ModeToggle";
import { PropsWithChildren } from "react";

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
          <div className={"p-6"}>
            <ModeToggle />
          </div>
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
}
