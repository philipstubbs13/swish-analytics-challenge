import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import clsx from "clsx";
import { ThemeProvider } from "@/components/theme-provider/ThemeProvider";
import { ModeToggle } from "@/components/mode-toggle/ModeToggle";
import { PropsWithChildren } from "react";
import { Toaster } from "@/components/ui/toaster";
import { NavigationMenu } from "@/components/navigation-menu/NavigationMenu";
import { Github } from "lucide-react";
import { Button } from "../components/ui/button";

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
          <div className={"flex items-center justify-between p-4"}>
            <NavigationMenu />
            <div className={"flex items-center gap-4"}>
              <Button variant={"outline"} size={"icon"}>
                <a
                  data-testid={"github-button"}
                  href={
                    "https://github.com/philipstubbs13/swish-analytics-challenge"
                  }
                  target={"_blank"}
                >
                  <Github />
                </a>
              </Button>
              <ModeToggle />
            </div>
          </div>
          {props.children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
