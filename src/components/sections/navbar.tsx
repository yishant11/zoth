"use client";
import Image from "next/image";
import { Menu } from "lucide-react";
import { ConnectDialog } from "@/components/connect-dialog";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
const links = [
  ["Demo", "#sale"],
  ["Demo", "#partners"],
  ["Demo", "#timeline"],
  ["Demo", "#resources"],
];
export function Navbar() {
  return (
    <header className="navbar container">
      <a href="#home" aria-label="Demo home" className="brand">
        <Image src="/assets/demo-mark.png" width={30} height={30} alt="" />
        <span>Demo</span>
      </a>
      <nav className="desktop-nav corner-frame" aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <ConnectDialog kind="sonar" variant="outline" />
        <ConnectDialog kind="wallet" />
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu"
            aria-label="Open navigation"
          >
            <Menu />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Navigation</DialogTitle>
          <DialogDescription className="sr-only">
            Jump to a page section.
          </DialogDescription>
          <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
            {links.map(([, href], i) => (
              <DialogClose asChild key={href}>
                <a href={href}>
                  {["Live sale", "Partners", "Timeline", "Resources"][i]}
                </a>
              </DialogClose>
            ))}
          </nav>
          <ConnectDialog kind="wallet" />
          <ConnectDialog kind="sonar" variant="outline" />
        </DialogContent>
      </Dialog>
    </header>
  );
}
