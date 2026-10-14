// Tailwind class groups shared by the page sections.
// Semantic markers anchor scoped utilities and browser checks.
export const ui = {
  "root":
    "[--primary:#ff4509] [--border:#35120d] [--muted:#929292] [--u:min(1px,_0.0588928vw)] [color-scheme:dark] scroll-smooth max-lg:[--u:1px] motion-reduce:scroll-auto",
  "body":
    "m-0 bg-black text-[#f6f6f6] font-sans text-[length:calc(16_*_var(--u))] leading-[1.2] antialiased [&_:where(button)]:touch-manipulation [&_:where(button)]:cursor-pointer [&_:where(a)]:touch-manipulation [&_:where(a)]:text-[inherit] [&_:where(a)]:no-underline [&_:where(input)]:touch-manipulation [&_:where(a:hover)]:text-primary [&_:where(:focus-visible)]:[outline:2px_solid_var(--primary)] [&_:where(:focus-visible)]:outline-offset-[5px] [&_:where(button:disabled)]:cursor-not-allowed max-lg:text-[length:14px] motion-reduce:[&_*]:transition-none",
  "container":
    "page-container w-[81.625%] max-w-[1386px] mx-auto max-lg:w-[calc(100%_-_40px)] max-sm:w-[calc(100%_-_36px)]",
  "page-shell":
    "page-shell relative isolate overflow-clip",
  "top-section":
    "top-section relative overflow-clip min-h-[calc(989_*_var(--u))] isolate min-[1699px]:min-h-[989px] max-lg:min-h-0 max-lg:pb-[70px]",
  "top-banner":
    "top-banner h-[calc(43_*_var(--u))] bg-primary flex items-center justify-center gap-[calc(22_*_var(--u))] relative text-[length:calc(14_*_var(--u))] [&_a]:flex [&_a]:items-center [&_a]:gap-[calc(28_*_var(--u))] [&_a:hover]:text-white [&_a:hover]:underline max-lg:h-[36px] max-lg:text-[length:12px]",
  "banner-close":
    "banner-close absolute left-[calc(24_*_var(--u))] w-[32px] h-[32px] grid [place-items:center] bg-transparent border-0 text-white max-sm:left-[8px]",
  "navbar":
    "navbar h-[calc(122_*_var(--u))] flex items-center justify-between gap-[calc(20_*_var(--u))] max-lg:h-[88px]",
  "brand":
    "brand flex items-center gap-[calc(8_*_var(--u))] font-semibold text-[length:calc(26_*_var(--u))] w-[calc(228_*_var(--u))] [&_img]:w-[calc(30_*_var(--u))] [&_img]:h-[calc(30_*_var(--u))] [&_img]:rounded-full max-lg:text-[length:24px] max-lg:w-auto",
  "desktop-nav":
    "desktop-nav w-[calc(474_*_var(--u))] h-[calc(46_*_var(--u))] flex justify-around items-center bg-[#23130d] shrink-0 text-[length:calc(14_*_var(--u))] text-[#aaa] border-0 max-lg:hidden",
  "nav-actions":
    "nav-actions flex gap-[calc(16_*_var(--u))] [&_button]:h-[calc(44_*_var(--u))] [&_button]:text-[length:calc(16_*_var(--u))] [&_button]:w-[calc(164_*_var(--u))] [&_button:first-child]:w-[calc(180_*_var(--u))] [&_button]:px-0 max-lg:hidden",
  "mobile-menu":
    "mobile-menu hidden max-lg:inline-flex",
  "corner-frame":
    "corner-frame relative border border-[#712409]",
  "hero-layout":
    "hero-layout grid grid-cols-[674fr_680fr] gap-[calc(32_*_var(--u))] pt-[calc(19_*_var(--u))] items-start max-lg:grid-cols-[1fr_1fr] max-lg:gap-[24px] max-lg:pt-[20px] max-sm:grid-cols-[1fr] max-sm:gap-[30px] max-sm:pt-[12px]",
  "hero-left":
    "hero-left pt-[calc(8_*_var(--u))] pr-[calc(32_*_var(--u))] border-r border-[#55200c] min-h-[calc(694_*_var(--u))] max-lg:pr-0 max-lg:border-0 max-lg:min-h-0",
  "hero-copy":
    "hero-copy [&_.eyebrow]:inline-flex [&_.eyebrow]:w-[calc(206_*_var(--u))] [&_.eyebrow]:h-[calc(28_*_var(--u))] [&_.eyebrow]:justify-center [&_.eyebrow]:items-center [&_.eyebrow]:text-primary [&_.eyebrow]:text-[length:calc(16_*_var(--u))] [&_.eyebrow]:tracking-[0.12em] [&_h1]:text-[length:calc(64_*_var(--u))] [&_h1]:font-medium [&_h1]:tracking-[-0.045em] [&_h1]:leading-[1.05] [&_h1]:mt-[calc(34_*_var(--u))] [&_h1]:whitespace-nowrap [&_p]:text-[length:calc(20_*_var(--u))] [&_p]:leading-[1.33] [&_p]:text-[#929292] [&_p]:mt-[calc(22_*_var(--u))] [&_p]:max-w-[642px] max-lg:[&_h1]:text-[length:38px] max-lg:[&_h1]:whitespace-normal max-lg:[&_p]:text-[length:16px] max-lg:[&_.eyebrow]:text-[length:13px] max-lg:[&_.eyebrow]:w-[170px] max-sm:[&_h1]:text-[length:40px] max-sm:[&_h1]:tracking-[-0.045em] max-sm:[&_h1]:mt-[26px] max-sm:[&_p]:text-[length:16px] max-sm:[&_p]:leading-[1.5] max-sm:[&_p]:mt-[18px]",
  "sale-card":
    "sale-card mt-[calc(40_*_var(--u))] scroll-mt-[25px] max-sm:mt-[32px]",
  "sale-totals":
    "sale-totals flex justify-between mb-[calc(26_*_var(--u))] [&_>_div]:flex [&_>_div]:flex-col [&_>_div]:gap-[calc(10_*_var(--u))] [&_>_div:last-child]:text-right [&_span]:text-[#aaa] [&_span]:text-[length:calc(16_*_var(--u))] [&_strong]:text-[length:calc(30_*_var(--u))] [&_strong]:font-normal [&_strong]:leading-[1] max-lg:[&_strong]:text-[length:24px] max-lg:[&_span]:text-[length:14px] max-sm:[&_strong]:text-[length:27px]",
  "progress-track":
    "progress-track h-[calc(6_*_var(--u))] bg-[#401615] overflow-hidden",
  "progress-fill":
    "progress-fill h-full bg-primary",
  "progress-meta":
    "progress-meta flex justify-between text-[#a2a2a2] text-[length:calc(12_*_var(--u))] mt-[calc(8_*_var(--u))]",
  "panel":
    "panel border border-[#311007] bg-[#090201e8]",
  "pool-grid":
    "pool-grid grid grid-cols-[1fr_1fr] gap-[calc(8_*_var(--u))] mt-[calc(32_*_var(--u))] max-sm:gap-[8px] max-sm:mt-[24px]",
  "pool":
    "pool p-[calc(12_*_var(--u))_calc(10_*_var(--u))] text-[length:calc(12_*_var(--u))] [&_>_div:not(.progress-track)]:flex [&_>_div:not(.progress-track)]:justify-between [&_>_div:not(.progress-track)]:gap-[8px] [&_hr]:border-0 [&_hr]:border-t [&_hr]:border-[#351409] [&_hr]:my-[calc(10_*_var(--u))] [&_.progress-track]:my-[calc(16_*_var(--u))_calc(7_*_var(--u))] max-sm:text-[length:10px]",
  "allocation":
    "allocation mt-[calc(8_*_var(--u))] p-[calc(16_*_var(--u))] bg-black flex flex-col gap-[calc(8_*_var(--u))] [&_span]:text-[length:calc(16_*_var(--u))] [&_strong]:font-normal [&_strong]:text-[length:calc(27_*_var(--u))] max-lg:[&_strong]:text-[length:21px] max-sm:[&_strong]:text-[length:23px]",
  "countdown":
    "countdown flex items-center justify-between gap-[calc(12_*_var(--u))] p-[calc(20_*_var(--u))_calc(16_*_var(--u))] mt-[calc(8_*_var(--u))] bg-[#010100] [&_p]:flex [&_p]:items-center [&_p]:gap-[calc(6_*_var(--u))] [&_p]:text-[length:calc(18_*_var(--u))] [&_p]:mb-[calc(10_*_var(--u))] [&_span]:text-[length:calc(14_*_var(--u))] [&_span]:text-[#a3a3a3] max-lg:flex-col max-lg:items-start max-sm:flex-row max-sm:items-center max-sm:flex-wrap max-sm:p-[16px] max-sm:[&_p]:text-[length:16px] max-sm:[&_span]:text-[length:12px]",
  "clock":
    "clock flex gap-[calc(14_*_var(--u))] [&_>_div]:bg-[#1c0b09] [&_>_div]:min-w-[calc(47_*_var(--u))] [&_>_div]:p-[calc(8_*_var(--u))_calc(4_*_var(--u))] [&_>_div]:relative [&_>_div]:flex [&_>_div]:items-center [&_>_div]:flex-col [&_>_div]:gap-[1px] [&_>_div:not(:last-child):after]:content-[':'] [&_>_div:not(:last-child):after]:absolute [&_>_div:not(:last-child):after]:right-[calc(-9_*_var(--u))] [&_>_div:not(:last-child):after]:top-[27%] [&_>_div:not(:last-child):after]:text-white [&_strong]:text-[length:calc(18_*_var(--u))] [&_strong]:font-normal [&_strong]:tabular-nums [&_small]:text-[length:calc(9_*_var(--u))] [&_small]:uppercase [&_small]:text-[#aaa] max-lg:w-full max-lg:justify-between max-lg:gap-[12px] max-lg:[&_>_div]:flex-1 max-sm:mt-[4px] max-sm:[&_>_div]:min-h-[44px] max-sm:[&_strong]:text-[length:18px]",
  "connection-card":
    "connection-card relative p-[calc(22_*_var(--u))] mt-[calc(8_*_var(--u))] min-h-[calc(325_*_var(--u))] border-[#61230c] bg-[#0c0302] before:content-[''] before:absolute before:[inset:calc(-130_*_var(--u))_calc(-140_*_var(--u))_calc(-360_*_var(--u))] before:-z-1 before:pointer-events-none before:[background:radial-gradient(_ellipse_at_44%_56%,_#b638074d_0%,_#8c280538_30%,_#43170324_55%,_transparent_78%_)] [&_h2]:text-[length:calc(16_*_var(--u))] [&_h2]:font-normal [&_h2]:mb-[calc(10_*_var(--u))] [&_p]:text-[length:calc(18_*_var(--u))] [&_p]:text-[#ccc] [&_small]:block [&_small]:text-center [&_small]:text-[length:calc(14_*_var(--u))] [&_small]:text-[#aaa] [&_small]:mt-[calc(21_*_var(--u))] max-lg:p-[20px] max-lg:min-h-0 max-lg:[&_p]:text-[length:16px] max-lg:[&_small]:text-[length:12px] max-sm:mt-0 max-sm:p-[22px] max-sm:[&_small]:leading-[1.6]",
  "connect-action":
    "connect-action flex m-[calc(38_*_var(--u))_calc(6_*_var(--u))_0] border-0 [&_+_.connect-action]:mt-[calc(31_*_var(--u))] [&_button]:h-[calc(60_*_var(--u))] [&_button]:text-[length:calc(17_*_var(--u))] [&_button]:rounded-none max-lg:[&_button]:h-[48px] max-lg:[&_button]:text-[length:14px] max-sm:mt-[30px] max-sm:[&_+_.connect-action]:mt-[24px]",
  "partners-strip":
    "partners-strip bg-[#0b0302] [border-block:1px_solid_#4b1712]",
  "partners-inner":
    "partners-inner flex h-[calc(86_*_var(--u))] border-x border-[#60302c] relative [&_li]:flex [&_li]:items-center [&_li]:min-w-0 [&_img]:block [&_img]:max-w-[none] [&_img]:h-auto [&_img]:w-[calc(var(--logo-width)_*_var(--u))] [&_img]:max-h-[calc(53_*_var(--u))] max-lg:h-auto max-lg:min-h-[86px] max-lg:[&_ul]:flex-nowrap max-lg:[&_ul]:justify-between max-lg:[&_ul]:gap-[16px] max-lg:[&_ul]:p-[20px] max-lg:[&_img]:max-h-[53px] max-sm:flex-col max-sm:border-0 max-sm:[&_ul]:gap-[20px] max-sm:[&_ul]:p-[24px_20px] max-sm:[&_li]:shrink-0 max-sm:[&_li]:justify-center max-sm:[&_img]:max-h-[53px]",
  "partner-label":
    "partner-label flex flex-col justify-center min-w-[calc(225_*_var(--u))] pl-[calc(35_*_var(--u))] border-r border-[#60302c] text-[length:calc(16_*_var(--u))] leading-[1.1] max-lg:min-w-[110px] max-lg:pl-[15px] max-lg:text-[length:12px] max-sm:[border-right:0] max-sm:border-b max-sm:border-[#35170f] max-sm:items-center max-sm:p-[14px] max-sm:min-w-0 max-sm:gap-[4px] max-sm:[&_br]:hidden",
  "partners-viewport":
    "partners-viewport flex-1 min-w-0 overflow-hidden max-lg:overflow-hidden",
  "partners-track":
    "partners-track flex w-[200%] h-full animate-partners [&_ul]:flex [&_ul]:flex-[0_0_50%] [&_ul]:items-center [&_ul]:justify-between [&_ul]:gap-[calc(30_*_var(--u))] [&_ul]:px-[calc(24_*_var(--u))] max-lg:min-w-[1700px] motion-reduce:animate-none motion-reduce:[transform:none] motion-reduce:[&_ul[aria-hidden=true]]:hidden",
  "details-section":
    "details-section py-[calc(110_*_var(--u))_calc(80_*_var(--u))] grid grid-cols-[477fr_790fr] gap-[calc(120_*_var(--u))] min-h-[calc(571_*_var(--u))] max-lg:grid-cols-[1fr_1.4fr] max-lg:gap-[40px] max-lg:py-[70px] max-sm:grid-cols-[1fr] max-sm:gap-[42px] max-sm:py-[60px]",
  "details-left":
    "details-left flex flex-col gap-[calc(54_*_var(--u))] [&_h2]:text-[length:calc(48_*_var(--u))] [&_h2]:font-normal [&_h2]:tracking-[-0.03em] [&_h2]:leading-[1.2] [&_>_div_>_p]:text-[length:calc(22_*_var(--u))] [&_>_div_>_p]:leading-[1.33] [&_>_div_>_p]:text-[#929292] [&_>_div_>_p]:mt-[calc(16_*_var(--u))] max-lg:[&_h2]:text-[length:36px] max-lg:[&_>_div_>_p]:text-[length:16px] max-sm:gap-[30px] max-sm:[&_h2]:text-[length:36px] max-sm:[&_>_div_>_p]:text-[length:17px] max-sm:[&_>_div_>_p]:max-w-[330px]",
  "resources":
    "resources p-[calc(26_*_var(--u))_calc(34_*_var(--u))] shadow-[0_0_100px_-30px_#ff450916] [&_h3]:text-[length:calc(18_*_var(--u))] [&_h3]:font-normal [&_h3]:mb-[calc(32_*_var(--u))] [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-[calc(30_*_var(--u))] [&_li]:flex [&_li]:justify-between [&_li]:gap-[12px] [&_li]:text-[length:calc(14_*_var(--u))] [&_li]:text-[#bbb] max-lg:p-[22px] max-lg:[&_h3]:text-[length:16px] max-lg:[&_li]:text-[length:12px] max-sm:p-[24px] max-sm:[&_h3]:text-[length:18px] max-sm:[&_li]:text-[length:14px] max-sm:[&_li]:items-center",
  "document-link":
    "document-link underline underline-offset-[3px] text-[#898989] bg-transparent border-0 p-0 hover:text-primary max-sm:min-h-[24px]",
  "details-right":
    "details-right flex flex-col gap-[calc(80_*_var(--u))] max-lg:gap-[60px] max-sm:gap-[40px]",
  "timeline":
    "timeline flex relative pt-[calc(4_*_var(--u))] before:content-[''] before:absolute before:left-[calc(9_*_var(--u))] before:right-[calc(185_*_var(--u))] before:h-[1px] before:top-[calc(13_*_var(--u))] before:bg-[#292321] [&_li]:w-[25%] [&_li]:flex [&_li]:flex-col [&_li]:gap-[calc(8_*_var(--u))] [&_li]:relative [&_li]:text-[length:calc(16_*_var(--u))] [&_li.active_.timeline-dot]:border-primary [&_strong]:font-normal [&_strong]:text-[length:calc(18_*_var(--u))] [&_small]:text-[length:calc(14_*_var(--u))] [&_small]:text-[#aaa] max-lg:[&_strong]:text-[length:14px] max-lg:[&_small]:text-[length:11px] max-sm:gap-[8px] max-sm:before:right-[calc(25%_-_4px)] max-sm:[&_li]:min-w-0 max-sm:[&_strong]:text-[length:13px] max-sm:[&_small]:text-[length:11px]",
  "timeline-dot":
    "timeline-dot block w-[calc(18_*_var(--u))] h-[calc(18_*_var(--u))] rounded-full border-2 border-[#3d3632] bg-black mb-[calc(6_*_var(--u))]",
  "timeline-kicker":
    "timeline-kicker text-[length:calc(12_*_var(--u))] text-primary",
  "details-table":
    "details-table border-collapse w-full text-[length:calc(16_*_var(--u))] leading-[1.4] [&_tr]:border-b [&_tr]:border-[#292521] [&_tr:last-child]:[border-bottom:0] [&_th]:py-[calc(9_*_var(--u))] [&_th]:font-normal [&_th]:text-left [&_td]:py-[calc(9_*_var(--u))] [&_td]:font-normal [&_td]:text-right [&_td]:text-[#e0e0e0] [&_th_svg]:text-[#e0e0e0] [&_tr:last-child_td_span]:underline [&_tr:last-child_td_span]:underline-offset-[3px] max-lg:text-[length:13px] max-sm:text-[length:14px] max-sm:[&_td]:max-w-[160px] max-sm:[&_td]:[overflow-wrap:anywhere]",
  "footer":
    "footer pt-[calc(40_*_var(--u))] px-[calc(32_*_var(--u))] max-lg:px-0",
  "footer-main":
    "footer-main grid grid-cols-[2.6fr_0.7fr_0.4fr] gap-[calc(100_*_var(--u))] max-lg:gap-[40px] max-lg:grid-cols-[2fr_1fr_1fr] max-sm:grid-cols-[1fr_1fr] max-sm:gap-[40px]",
  "footer-about":
    "footer-about [&_p]:w-[calc(300_*_var(--u))] [&_p]:text-[length:calc(14_*_var(--u))] [&_p]:text-[#898989] [&_p]:leading-[1.5] max-lg:[&_p]:w-auto max-sm:[grid-column:1/-1] max-sm:[&_p]:max-w-[280px]",
  "socials":
    "socials flex gap-[calc(16_*_var(--u))] mt-[calc(12_*_var(--u))] text-[#888] [&_a:hover]:text-primary max-sm:gap-[20px] max-sm:[&_a]:flex max-sm:[&_a]:items-center max-sm:[&_a]:min-h-[32px]",
  "subscribe":
    "subscribe mt-[calc(48_*_var(--u))] flex w-[calc(345_*_var(--u))] max-w-full h-[calc(50_*_var(--u))] [&_input]:min-w-0 [&_input]:w-[64%] [&_input]:border-0 [&_input]:bg-[#1a0d07] [&_input]:text-white [&_input]:p-[calc(16_*_var(--u))] [&_input]:text-[length:calc(11_*_var(--u))] [&_input]:rounded-none [&_button]:w-[36%] [&_button]:h-full [&_button]:p-0 [&_button]:text-[length:calc(10_*_var(--u))] [&_button]:tracking-[0.18em] [&_button]:rounded-none max-sm:h-[48px] max-sm:mt-[24px] max-sm:w-full max-sm:[&_input]:text-[length:13px] max-sm:[&_button]:text-[length:11px]",
  "footer-links":
    "footer-links flex flex-col gap-[calc(14_*_var(--u))] text-[#898989] text-[length:calc(16_*_var(--u))] [&_h3]:text-[length:calc(18_*_var(--u))] [&_h3]:font-normal [&_h3]:text-white [&_h3]:mb-[calc(12_*_var(--u))] max-sm:text-[length:14px] max-sm:gap-[18px]",
  "footer-legal":
    "footer-legal flex justify-between gap-[30px] mt-[calc(80_*_var(--u))] items-end text-[length:calc(12_*_var(--u))] text-[#888] leading-[1.65] [&_p]:w-[calc(603_*_var(--u))] [&_p]:max-w-[80%] max-lg:text-[length:11px] max-sm:mt-[50px] max-sm:[&_p]:max-w-[85%] max-sm:[&_p]:w-auto",
  "wordmark":
    "wordmark text-[length:calc(475.58_*_var(--u))] font-semibold leading-[0.85] tracking-[-0.065em] flex justify-center text-[#1d0900] mt-[calc(215_*_var(--u))] pb-[0.08em] select-none min-[1699px]:mt-[215px] max-lg:text-[length:28vw] max-lg:mt-[160px] max-sm:mt-[110px] max-sm:text-[length:28vw] max-sm:leading-[1.3]",
  "sale-state":
    "sale-state mt-[calc(40_*_var(--u))] p-[24px] min-h-[calc(390_*_var(--u))] flex flex-col gap-[22px] [&_h2]:text-[length:20px] [&_p]:text-[#aaa] [&_p]:text-[length:14px] max-sm:min-h-[350px] max-sm:mt-[32px]",
  "details-placeholder":
    "details-placeholder text-[#aaa] text-[length:14px]",
  "skeleton":
    "skeleton [background:linear-gradient(90deg,_#21100b_25%,_#382019_50%,_#21100b_75%)] [background-size:200%_100%] animate-shimmer motion-reduce:animate-none",
  "skip-link":
    "skip-link fixed left-[16px] top-[-100px] bg-primary text-white p-[12px] z-100 focus:top-[12px]",
} as const;
