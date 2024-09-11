"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { navLinks } from "@/data"
import { Button } from "./ui/button"
import { useScrollPosition } from "@/hookes/use-scroll-position"

export default function Navbar() {

  const scrollPosition  = useScrollPosition();

  return (
    <NavigationMenu className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-transparent shadow-md transition-transform duration-300 transform",
      scrollPosition > 0 ? "backdrop-blur-sm" : "bg-transparent"
    )}>
      <span>
        <Link className="text-3xl font-bold text-primary hover:bg-yellow-50" href={'/'}>
          <Image src="/images/logo.jpg" width={40} height={40} alt="logo" className="hover:z-20"/>
        </Link>
      </span>
      <span className="flex gap-3 py-2 px-1 text-xs ">
        {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                {link.title}
              </Button>
            </Link>
        ))}
      </span>
      <Link href="/sign-in">
          <Button className="text-white"> 
            Get Started
          </Button>
        </Link>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"