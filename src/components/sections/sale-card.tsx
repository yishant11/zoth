"use client";
import { useClock } from "@/hooks/use-clock";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { type Sale, getProgress, money } from "@/lib/sale";
import { Countdown } from "@/components/countdown";
import { ConnectDialog } from "@/components/connect-dialog";
import { Button } from "@/components/ui/button";
function Progress({
  raised,
  target,
  label,
}: {
  raised: number;
  target: number;
  label: string;
}) {
  const value = getProgress(raised, target);
  return (
    <div
      className="progress-track"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Number(value.toFixed(1))}
    >
      <motion.div
        className="progress-fill"
        initial={false}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );
}
export function SaleCard({ sale }: { sale: Sale }) {
  const now = useClock();
  const closed = now > 0 && now >= Date.parse(sale.closesAt);
  return (
    <section aria-label="Live IDO sale" className="sale-card" id="sale">
      <div className="sale-totals">
        <div>
          <span>{sale.name}</span>
          <strong>{money(sale.raised)}</strong>
        </div>
        <div>
          <span>Lorem ipsum</span>
          <strong className="text-primary">{money(sale.target)}</strong>
        </div>
      </div>
      <Progress
        raised={sale.raised}
        target={sale.target}
        label="Overall sale progress"
      />
      <div className="progress-meta">
        <span>{getProgress(sale.raised, sale.target).toFixed(1)}%</span>
        <span>{sale.ticker}</span>
      </div>
      <div className="pool-grid">
        {sale.pools.map((pool) => (
          <div className="pool panel" key={pool.name}>
            <div>
              <span>{pool.name}</span>
              <span className="text-primary">{money(pool.raised)}</span>
            </div>
            <hr />
            <Progress
              raised={pool.raised}
              target={pool.target}
              label={`${pool.name} progress`}
            />
            <div>
              <span>{getProgress(pool.raised, pool.target).toFixed(1)}%</span>
              <span>{money(pool.target)}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="allocation panel">
        <span>Demo</span>
        <strong>
          {new Intl.NumberFormat("en-US").format(sale.allocation)} {sale.ticker}
        </strong>
      </div>
      <Countdown closesAt={sale.closesAt} />
      {closed && (
        <p className="text-sm text-primary" role="status">
          The sale has ended.
        </p>
      )}
    </section>
  );
}
export function ConnectionCard() {
  return (
    <aside
      className="connection-card panel"
      aria-label="Demo account connections"
    >
      <h2>LOREM IPSUM</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
      <div className="corner-frame connect-action">
        <ConnectDialog kind="wallet" className="w-full" />
      </div>
      <div className="corner-frame connect-action">
        <ConnectDialog kind="sonar" variant="outline" className="w-full" />
      </div>
      <small>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
      </small>
    </aside>
  );
}
export function SaleState({
  status,
  retry,
}: {
  status: "loading" | "error" | "empty";
  retry: () => void;
}) {
  return (
    <div
      className="sale-state panel"
      role={status === "error" ? "alert" : "status"}
      aria-busy={status === "loading"}
    >
      {status === "loading" ? (
        <>
          <span className="sr-only">Loading sale data</span>
          <div className="skeleton h-12 w-full" />
          <div className="skeleton h-2 w-full" />
          <div className="grid grid-cols-2 gap-3">
            <div className="skeleton h-24" />
            <div className="skeleton h-24" />
          </div>
          <div className="skeleton h-20" />
          <div className="skeleton h-20" />
        </>
      ) : (
        <>
          <h2>
            {status === "error" ? "Unable to load the sale" : "No active sale"}
          </h2>
          <p>
            {status === "error"
              ? "Please try again in a moment."
              : "Check back soon for the next IDO."}
          </p>
          <Button
            variant="outline"
            onClick={() => {
              retry();
              toast.info("Refreshing sale data…");
            }}
          >
            <RefreshCw size={16} />
            Try again
          </Button>
        </>
      )}
    </div>
  );
}
