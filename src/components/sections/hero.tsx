import { ui } from "@/lib/ui-styles";
import { cn } from "@/lib/utils";
export function Hero() {
  return (
    <div className={ui["hero-copy"]}>
      <span className={cn(ui["corner-frame"], "eyebrow")}>Lorem ipsum</span>
      <h1>Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
        tempor incididunt ut labore et
      </p>
    </div>
  );
}
