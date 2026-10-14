import styles from "./hero-backdrop.module.css";

// Shared vanishing point keeps the ceiling and wall intersections aligned.
const center = { x: 849, y: 700 };
const backScale = 0.61;
const ceilingRows = [16, 40, 72, 101, 129, 154, 178, 200, 220, 239, 257, 274, 283];
const columns = Array.from({ length: 17 }, (_, index) => -15 + index * 108);
const wallRows = Array.from({ length: 9 }, (_, index) => 16 + index * 144);
const project = (value: number, origin: number, scale: number) =>
  origin + (value - origin) * scale;

export function HeroBackdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <svg
        className={styles.grid}
        viewBox="0 0 1698 989"
        preserveAspectRatio="none"
        fill="none"
        stroke="url(#hero-grid-stroke)"
      >
        <defs>
          <linearGradient
            id="hero-grid-stroke"
            x1="0"
            y1="0"
            x2="0"
            y2="989"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="18%" stopColor="#482820" />
            <stop offset="62%" stopColor="#482820" stopOpacity="0.53" />
            <stop offset="100%" stopColor="#482820" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <g className={styles.ceiling}>
          {columns.map((x) => (
            <path
              key={`ceiling-${x}`}
              d={`M ${x} 16 L ${project(x, center.x, backScale)} ${project(16, center.y, backScale)}`}
            />
          ))}
          {ceilingRows.map((y) => {
            const scale = (center.y - y) / (center.y - 16);
            const left = project(0, center.x, scale);
            const right = project(1698, center.x, scale);
            return (
              <path
                key={`depth-${y}`}
                d={`M ${left} 1100 V ${y} H ${right} V 1100`}
              />
            );
          })}
        </g>
        <g className={styles.walls}>
          {wallRows.map((y) => (
            <path
              key={`wall-${y}`}
              d={`M 0 ${y} L ${project(0, center.x, backScale)} ${project(y, center.y, backScale)} M 1698 ${y} L ${project(1698, center.x, backScale)} ${project(y, center.y, backScale)}`}
            />
          ))}
        </g>
        <g className={styles.back}>
          {columns.slice(1, -1).map((x) => (
            <path
              key={`back-${x}`}
              d={`M ${project(x, center.x, backScale)} ${project(16, center.y, backScale)} V 989`}
            />
          ))}
          {wallRows.slice(1).map((y) => (
            <path
              key={`back-row-${y}`}
              d={`M ${project(0, center.x, backScale)} ${project(y, center.y, backScale)} H ${project(1698, center.x, backScale)}`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
