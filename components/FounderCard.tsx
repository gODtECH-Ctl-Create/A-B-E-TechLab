export default function FounderCard() {
  return (
    <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr] md:items-center">
      <div className="aspect-[4/5] overflow-hidden bg-black text-[#b7ff3c]">
        <div className="flex h-full flex-col justify-between p-8">
          <span className="text-xs font-semibold uppercase tracking-[.18em] text-white/50">ABE TechLab</span>
          <span className="font-display text-[clamp(7rem,18vw,13rem)] font-semibold leading-none tracking-[-.1em]">ABE</span>
        </div>
      </div>
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[.18em] text-black/40">The person behind the studio</p>
        <h2 className="font-display mt-5 text-4xl font-semibold leading-none tracking-[-.055em] md:text-6xl">Founded by Ayo Richard ABE.</h2>
        <p className="mt-7 text-lg leading-8 text-black/60">ABE TechLab was founded by Ayo Richard ABE, a product manager and builder working across product strategy, design, technology and growth.</p>
        <p className="mt-6 text-lg leading-8 text-black/60">The founder stays intentionally in the background of the studio brand. The work comes first, while the founder provides the product thinking and direction behind it.</p>
      </div>
    </div>
  );
}
