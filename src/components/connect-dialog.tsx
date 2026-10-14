"use client";
import { toast } from "sonner";
import { Wallet, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
export function ConnectDialog({
  kind,
  variant = "default",
  className,
  triggerLabel,
}: {
  kind: "wallet" | "sonar";
  variant?: "default" | "outline";
  className?: string;
  triggerLabel?: string;
}) {
  const label = kind === "wallet" ? "Connect Wallet" : "Connect Sonar";
  const Icon = kind === "wallet" ? Wallet : Radio;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          className={className}
          aria-label={triggerLabel ? label : undefined}
        >
          {triggerLabel ?? label}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Icon className="text-primary" size={28} />
        <DialogTitle className="text-xl">{label}</DialogTitle>
        <DialogDescription className="text-sm leading-6 text-neutral-400">
          This is a placeholder{" "}
          {kind === "wallet" ? "wallet connection" : "Sonar account"} dialog. No
          account, wallet, signature, or personal information is required.
        </DialogDescription>
        <DialogClose asChild>
          <Button
            onClick={() =>
              toast.info("Demo only — no real connection was made.")
            }
          >
            Continue demo
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
