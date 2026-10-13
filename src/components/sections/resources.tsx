"use client";
import { FileText, BookOpen, ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
const documents = [
  {
    label: "Whitepaper",
    Icon: FileText,
    description:
      "This is a demo whitepaper placeholder. Review the project documentation before participating in any real sale.",
  },
  {
    label: "Tokenomics",
    Icon: BookOpen,
    description:
      "Demo tokenomics: sale allocation and token price are supplied by the mock API. No real token is being offered.",
  },
  {
    label: "Terms & risks",
    Icon: ShieldCheck,
    description:
      "This page is a frontend demonstration. It does not process payments, connect to a blockchain, or accept commitments.",
  },
];
export function Resources() {
  return (
    <aside className="resources panel" id="resources">
      <h3>Read before you commit</h3>
      <ul>
        {documents.map(({ label, description }) => (
          <li key={label}>
            <span>Lorem ipsum</span>
            <Dialog>
              <DialogTrigger asChild>
                <button className="document-link">{label}</button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className="text-xl">{label}</DialogTitle>
                <DialogDescription className="leading-7 text-neutral-400">
                  {description}
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </li>
        ))}
      </ul>
    </aside>
  );
}
