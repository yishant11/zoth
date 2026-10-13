import Image from "next/image";
import type { CSSProperties } from "react";
const partners = [
  { name: "Borderless", file: "borderless", width: 97, height: 26 },
  { name: "TAISU", file: "taisu", width: 80, height: 14 },
  {
    name: "Blockchain Founders Fund",
    file: "blockchain",
    width: 122,
    height: 32,
  },
  { name: "Chainlink", file: "chainlink", width: 86, height: 27 },
  { name: "Coinbase", file: "coinbase", width: 82, height: 15 },
  { name: "Mindfulness Capital", file: "capital", width: 103, height: 53 },
  { name: "Partner mark", file: "partner-symbol", width: 20, height: 26 },
];
export function PartnersStrip() {
  return (
    <section className="partners-strip" id="partners" aria-label="Partners">
      <div className="container partners-inner">
        <p className="partner-label">
          DEMO
          <br />
          DEMO
        </p>
        <div className="partners-viewport">
          <div className="partners-track">
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {partners.map((p) => (
                  <li key={p.file}>
                    <Image
                      src={`/assets/${p.file}.${p.file === "partner-symbol" ? "png" : "svg"}`}
                      width={p.width}
                      height={p.height}
                      alt={copy === 0 ? p.name : ""}
                      style={{ "--logo-width": p.width } as CSSProperties}
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
