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
import { Routes } from "@/constants/router.constants";

export const NavigationMenu = () => {
  return (
    <UiNavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="pr-1 md:pr-6">
          <Link href={Routes.Home} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="pr-1 md:pr-6">
          <Link href={Routes.Data} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Data
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="pr-1 md:pr-6">
          <Link href={Routes.About} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="pr-1 md:pr-6">
          <Link href={Routes.ApiDocumentation} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              API
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </UiNavigationMenu>
  );
};
