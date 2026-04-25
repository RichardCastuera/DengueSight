"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// DengueSight logo
const Logo = (props: React.SVGAttributes<SVGElement>) => (
  <svg
    aria-label="DengueSight Logo"
    role="img"
    fill="none"
    height="1em"
    viewBox="0 0 32 32"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 2L4 7v9c0 6.5 5.2 11.5 12 13 6.8-1.5 12-6.5 12-13V7L16 2z"
      fill="currentColor"
    />
    <ellipse cx="16" cy="16" rx="6" ry="4" fill="white" opacity="0.95" />
    <circle cx="16" cy="16" r="2.2" fill="currentColor" />
    <circle cx="17" cy="15" r="0.7" fill="white" opacity="0.8" />
    <line
      x1="13"
      y1="11"
      x2="11"
      y2="8"
      stroke="white"
      strokeWidth="0.8"
      strokeLinecap="round"
      opacity="0.85"
    />
    <line
      x1="19"
      y1="11"
      x2="21"
      y2="8"
      stroke="white"
      strokeWidth="0.8"
      strokeLinecap="round"
      opacity="0.85"
    />
  </svg>
);

export interface NavbarNavLink {
  href: string;
  label: string;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: NavbarNavLink[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

// Default navigation links mapped to your Next.js routes
const defaultNavigationLinks: NavbarNavLink[] = [
  { href: "/user", label: "Overview" },
  { href: "/user/provinces", label: "Provinces" },
  { href: "/user/trends", label: "Trends" },
  { href: "/user/about", label: "About" },
];

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = "/user",
      navigationLinks = defaultNavigationLinks,
      signInText = "Sign In",
      signInHref = "/signin",
      ctaText = "Get Started",
      ctaHref = "/get-started",
      onSignInClick,
      onCtaClick,
      ...props
    },
    ref,
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const pathname = usePathname();

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768);
        }
      };
      checkWidth();
      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }, []);

    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref)
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      },
      [ref],
    );

    return (
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 [&_*]:no-underline",
          className,
        )}
        ref={combinedRef}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center relative">
          {/* Left side — logo */}
          <Link
            href={logoHref}
            className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors"
          >
            <div className="text-2xl">{logo}</div>
            <span className="hidden font-bold text-xl sm:inline-block">
              DengueSight
            </span>
          </Link>

          {/* Center — navigation links */}
          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2">
              <NavigationMenu>
                <NavigationMenuList className="gap-1 items-center">
                  {navigationLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <NavigationMenuItem key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors no-underline",
                            isActive
                              ? "bg-accent text-accent-foreground"
                              : "text-foreground/80 hover:bg-accent hover:text-accent-foreground",
                          )}
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          )}

          {/* Right side — actions */}
          <div className="flex items-center gap-3 ml-auto">
            <Link href={signInHref}>
              <Button
                className="text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                size="sm"
                variant="ghost"
                onClick={onSignInClick}
              >
                {signInText}
              </Button>
            </Link>
            <Link href={ctaHref}>
              <Button
                className="text-sm font-medium px-4 h-9 rounded-md shadow-sm"
                size="sm"
                onClick={onCtaClick}
              >
                {ctaText}
              </Button>
            </Link>
          </div>
        </div>
      </header>
    );
  },
);

Navbar.displayName = "Navbar";
