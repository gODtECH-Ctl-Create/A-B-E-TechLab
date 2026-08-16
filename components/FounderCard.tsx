import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function FounderCard() {
  return (
    <article className="grid overflow-hidden border border-black/10 bg-[#11110f] text-white md:grid-cols-[.9fr_1.1fr]">
      <div className="relative min-h-[420px] bg-[#22221f] md:min-h-[560px]">
        <Image
          src="/images/founder.webp"
          alt="Ayo Richard ABE, Founder and Chief Executive Officer of ABE TechLab"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#b7ff3c]">Founder</p>
          <h3 className="font-display mt-6 text-4xl font-semibold leading-[.95] tracking-[-.055em] md:text-6xl">Ayo Richard ABE</h3>
          <p className="mt-4 text-sm font-medium text-white/60">Founder & Chief Executive Officer (CEO)</p>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/60">Ayo leads ABE TechLab across product strategy, research, product marketing, design, technology and product development, shaping the studio's work from the problem through to the product.</p>
        </div>
        <div className="mt-12 border-t border-white/10 pt-5 text-xs text-white/40">Building products, programmes and technology around problems worth solving.</div>
      </div>
    </article>
  );
}
