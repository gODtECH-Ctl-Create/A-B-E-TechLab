import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const nodes = [
  { label: "IDEA", x: "8%", y: "23%" },
  { label: "PRODUCT", x: "38%", y: "10%" },
  { label: "DESIGN", x: "72%", y: "27%" },
  { label: "BUILD", x: "20%", y: "72%" },
  { label: "SHIP", x: "70%", y: "76%" },
];

const projectImages: Record<string, string> = {
  TechTrack: "/images/techtrack.svg",
  "Portfolio Platform": "/images/portfolio-platform.svg",
  BuMarS: "/images/bumars.svg",
  PROQUREMENT: "/images/procurement.svg",
};

export function StudioVisual() {
  return (
    <div className="studio-visual relative min-h-[520px] overflow-hidden border border-black/10 bg-[#11110f] text-white shadow-[0_30px_80px_rgba(0,0,0,.14)] md:min-h-[600px]">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#b7ff3c] blur-[90px] opacity-25" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#6d5dfc] blur-[100px] opacity-20" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 600" fill="none" aria-hidden="true">
        <path d="M70 140 C220 80 270 110 360 100 S560 100 670 165" stroke="white" strokeOpacity=".25" strokeWidth="1" />
        <path d="M70 140 C160 230 245 260 300 370 S490 470 680 455" stroke="white" strokeOpacity=".18" strokeWidth="1" />
        <path d="M305 65 C350 190 460 205 580 170 S690 300 680 455" stroke="#b7ff3c" strokeOpacity=".45" strokeWidth="1.5" />
        <circle cx="360" cy="100" r="5" fill="#b7ff3c" />
        <circle cx="670" cy="165" r="4" fill="white" />
        <circle cx="300" cy="370" r="4" fill="white" />
        <circle cx="680" cy="455" r="5" fill="#b7ff3c" />
      </svg>

      {nodes.map((node) => (
        <div key={node.label} className="absolute" style={{ left: node.x, top: node.y }}>
          <div className="flex items-center gap-2 border border-white/20 bg-white/[.06] px-2.5 py-1.5 text-[9px] font-semibold tracking-[.16em] text-white/70 backdrop-blur-md sm:px-3 sm:py-2 sm:text-[10px] sm:tracking-[.18em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b7ff3c]" />
            {node.label}
          </div>
        </div>
      ))}

      <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-white/20 bg-white/[.06] backdrop-blur-xl sm:h-48 sm:w-48 md:h-56 md:w-56">
        <div className="text-center">
          <div className="font-display text-5xl font-bold tracking-[-.09em] sm:text-6xl md:text-7xl">ABE</div>
          <div className="mt-1 text-[8px] font-semibold uppercase tracking-[.28em] text-[#b7ff3c] sm:text-[9px] sm:tracking-[.3em]">TECHLAB</div>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-6 sm:left-6 sm:right-6">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[.18em] text-white/40 sm:text-[10px] sm:tracking-[.2em]">Product & technology studio</p>
          <p className="mt-2 max-w-xs text-xs leading-5 text-white/70 sm:text-sm sm:leading-6">We build products and technology for people who learn, teach, work and build.</p>
        </div>
        <Sparkles className="mb-1 shrink-0 text-[#b7ff3c]" size={18} />
      </div>
    </div>
  );
}

export function ProjectVisual({ name, category, index }: { name: string; category: string; index: number }) {
  const accents = ["#b7ff3c", "#8f7cff", "#4dd9ff", "#ff9b71", "#f4e96b"];
  const accent = accents[index % accents.length];
  const image = projectImages[name];

  return (
    <Link href="/work" className="project-visual group relative block aspect-[16/10] overflow-hidden border border-white/10 bg-[#151513] text-white">
      {image ? (
        <img src={image} alt={`${name} project preview`} className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-95" loading="lazy" />
      ) : (
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 75% 20%, ${accent}55, transparent 38%), #151513` }} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/35" />
      <div className="absolute left-5 right-5 top-5 text-[9px] font-semibold uppercase tracking-[.18em] text-white/70 sm:left-7 sm:right-7 sm:top-7 sm:text-[10px] sm:tracking-[.2em]">{category}</div>
      <div className="absolute bottom-20 left-5 right-5 sm:left-7 sm:right-7"><div className="font-display text-3xl font-semibold tracking-[-.06em] sm:text-4xl md:text-5xl">{name}</div></div>
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/20 pt-3 text-[11px] text-white/65 sm:bottom-6 sm:left-7 sm:right-7 sm:pt-4 sm:text-xs">
        <span>Explore project</span>
        <ArrowUpRight className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" size={17} />
      </div>
    </Link>
  );
}
