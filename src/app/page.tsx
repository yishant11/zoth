"use client";
import { TopBanner } from "@/components/sections/top-banner";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import {
  SaleCard,
  ConnectionCard,
  SaleState,
} from "@/components/sections/sale-card";
import { PartnersStrip } from "@/components/sections/partners-strip";
import { TokenSaleDetails } from "@/components/sections/token-sale-details";
import { Footer } from "@/components/sections/footer";
import { useSale } from "@/hooks/use-sale";
export default function Page() {
  const query = useSale();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="top-section" id="home">
        <div className="world-grid" aria-hidden="true">
          <div className="grid-ceiling" />
          <div className="grid-wall left" />
          <div className="grid-wall right" />
          <div className="grid-back" />
        </div>
        <TopBanner />
        <Navbar />
        <main id="main" tabIndex={-1} className="hero-layout container">
          <div className="hero-left">
            <Hero />
            {query.isPending ? (
              <SaleState status="loading" retry={() => query.refetch()} />
            ) : query.isError && !query.data ? (
              <SaleState status="error" retry={() => query.refetch()} />
            ) : query.data ? (
              <>
                <SaleCard sale={query.data} />
                {query.isError && (
                  <p className="text-sm text-primary" role="status">
                    Could not refresh sale data. Showing the last available
                    data.{" "}
                    <button
                      className="underline"
                      onClick={() => query.refetch()}
                    >
                      Retry
                    </button>
                  </p>
                )}
              </>
            ) : (
              <SaleState status="empty" retry={() => query.refetch()} />
            )}
          </div>
          <ConnectionCard />
        </main>
      </div>
      <PartnersStrip />
      <TokenSaleDetails sale={query.data} />
      <Footer />
    </>
  );
}
