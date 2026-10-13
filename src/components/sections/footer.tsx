"use client";
import { ui } from "@/lib/ui-styles";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const socials = [
  { file: "x", label: "X", href: "https://x.com" },
  { file: "youtube", label: "YouTube", href: "https://youtube.com" },
  { file: "discord", label: "Discord", href: "https://discord.com" },
  { file: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  { file: "medium", label: "Medium", href: "https://medium.com" },
];
export function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className={cn(ui["footer"], ui["container"])}>
      <div className={ui["footer-main"]}>
        <div className={ui["footer-about"]}>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed</p>
          <nav aria-label="Social links" className={ui["socials"]}>
            {socials.map(({ file, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in a new tab)`}
              >
                <Image
                  src={`/assets/social-${file}.png`}
                  width={20}
                  height={17}
                  alt=""
                />
              </a>
            ))}
          </nav>
          <form
            className={ui["subscribe"]}
            onSubmit={(e) => {
              e.preventDefault();
              if (!email.trim()) return;
              toast.success(
                "Demo subscription received. Your email has not been sent or stored.",
              );
              setEmail("");
            }}
          >
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              placeholder="[XX]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit">DEMO</Button>
          </form>
        </div>
        <div className={ui["footer-links"]}>
          <h3>DEMO</h3>
          <a href="#sale">Demo</a>
          <a href="#timeline">Demo</a>
        </div>
        <div className={ui["footer-links"]}>
          <h3>DEMO</h3>
          <a href="#resources">Lorem ipsum</a>
          <a href="#partners">Lorem ipsum</a>
          <a href="#home">Lorem ipsum</a>
        </div>
      </div>
      <div className={ui["footer-legal"]}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor
          sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
          ut labore et dolore magna
        </p>
        <span>[XX]</span>
      </div>
      <div className={ui["wordmark"]} aria-label="Demo">
        <span>D</span>EMO
      </div>
    </footer>
  );
}
