"use client";
import { ui } from "@/lib/ui-styles";
import { cn } from "@/lib/utils";
import { useClock } from "@/hooks/use-clock";
import { AlarmClock } from "lucide-react";
import { getRemaining } from "@/lib/sale";
export function Countdown({ closesAt }: { closesAt: string }) {
  const now = useClock();
  const time = getRemaining(closesAt, now || Date.parse(closesAt));
  return (
    <div className={cn(ui["panel"], ui["countdown"])}>
      <div>
        <p>
          <AlarmClock size={20} />{" "}
          {now && time.expired ? "Sale closed" : "Closes in"}
        </p>
        <span>Lorem ipsum dolor sit amet consectetur</span>
      </div>
      <div
        className={ui["clock"]}
        role="timer"
        aria-label={
          now
            ? `${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds remaining`
            : "Loading countdown"
        }
      >
        {[
          ["days", time.days],
          ["hours", time.hours],
          ["mins", time.minutes],
          ["secs", time.seconds],
        ].map(([label, n]) => (
          <div key={label}>
            <strong>{now ? String(n).padStart(2, "0") : "--"}</strong>
            <small>{label}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
