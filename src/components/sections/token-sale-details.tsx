import { ui } from "@/lib/ui-styles";
import { cn } from "@/lib/utils";
import { Blocks, Coins, Copy, Target, CalendarClock } from "lucide-react";
import type { Sale } from "@/lib/sale";
import { Resources } from "@/components/sections/resources";
const icons = [Blocks, Coins, Copy, Target, Target, CalendarClock];
export function TokenSaleDetails({ sale }: { sale?: Sale | null }) {
  return (
    <section
      className={cn(ui["details-section"], ui["container"])}
      id="timeline"
      aria-labelledby="details-title"
    >
      <div className={ui["details-left"]}>
        <div>
          <h2 id="details-title">Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </p>
        </div>
        <Resources />
      </div>
      <div className={ui["details-right"]}>
        {sale ? (
          <>
            <ol className={ui["timeline"]} aria-label="Token sale timeline">
              {sale.timeline.map((step, index) => (
                <li key={step.id} className={index === 0 ? "active" : ""}>
                  <span className={ui["timeline-dot"]} />
                  <span className={ui["timeline-kicker"]}>
                    {index === 0 ? step.label : "\u00a0"}
                  </span>
                  <strong>{index === 0 ? step.description : step.label}</strong>
                  <small>{index === 0 ? "[XX]" : step.description}</small>
                  <time className="sr-only" dateTime={step.date}>
                    {new Date(step.date).toLocaleString("en-GB", {
                      timeZone: "UTC",
                    })}{" "}
                    UTC
                  </time>
                </li>
              ))}
            </ol>
            <table className={ui["details-table"]}>
              <caption className="sr-only">Token sale details</caption>
              <tbody>
                {sale.details.map((row, index) => {
                  const Icon = icons[index % icons.length];
                  return (
                    <tr key={`${row.label}-${index}`}>
                      <th scope="row">
                        <Icon size={16} />
                        {row.label}
                      </th>
                      <td>{row.value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : (
          <div className={ui["details-placeholder"]} role="status">
            Sale details will appear here when sale data is available.
          </div>
        )}
      </div>
    </section>
  );
}
