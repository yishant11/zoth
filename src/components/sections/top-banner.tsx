"use client";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
export function TopBanner() {
  const [visible, setVisible] = useState(true);
  return visible ? (
    <aside className="top-banner" aria-label="Announcement">
      <button
        aria-label="Dismiss announcement"
        className="banner-close"
        onClick={() => setVisible(false)}
      >
        <X size={16} />
      </button>
      <span>Demo</span>
      <a href="#sale">
        Demo <ArrowRight size={16} />
      </a>
    </aside>
  ) : null;
}
