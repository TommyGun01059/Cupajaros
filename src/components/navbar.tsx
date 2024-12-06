"use client";

import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import NextLink from "next/link";
import { Settings } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

import { ThemeSelector } from "./theme-selector";

import { Logo } from "@/components/icons/logos";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <Logo size={32} />
            {/* TODO: Add name and custom logo */}
            <p className="font-bold text-inherit">GameGenie</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Button isIconOnly as={Link} href="/settings">
            <Settings className="stroke-foreground" />
          </Button>
          <ThemeSelector
            icon={<Image className="p-2" src="/logos/steam.png" />}
            themeName="steam"
          />
          <ThemeSelector
            icon={<Image className="p-2" src="/logos/epic.png" />}
            themeName="epic"
          />
          <ThemeSelector
            icon={<Image className="p-2" src="/logos/g2a.png" />}
            themeName="g2a"
          />
          <ThemeSelector
            icon={<Image className="p-2" src="/logos/eneba.png" />}
            themeName="eneba"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="flex items-center justify-evenly">
          <Button isIconOnly as={Link} href="/settings">
            <Settings className="stroke-foreground" />
          </Button>
          <ThemeSelector
            icon={<Image className="p-2" src="/logos/steam.png" />}
            themeName="steam"
          />
          <ThemeSelector
            icon={<Image className="p-2" src="/logos/epic.png" />}
            themeName="epic"
          />
          <ThemeSelector
            icon={<Image className="p-2" src="/logos/g2a.png" />}
            themeName="g2a"
          />
          <ThemeSelector
            icon={<Image className="p-2" src="/logos/eneba.png" />}
            themeName="eneba"
          />
        </div>

        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
