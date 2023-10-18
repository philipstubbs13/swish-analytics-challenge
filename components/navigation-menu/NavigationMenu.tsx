"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu as UiNavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../mode-toggle/ModeToggle";

export const NavigationMenu = () => {
  return (
    <UiNavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="pr-1 md:pr-6">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="pr-1 md:pr-6">
          <Link href="/beat-the-odds" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Beat the Odds
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="pr-1 md:pr-6">
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </UiNavigationMenu>
  );
};
