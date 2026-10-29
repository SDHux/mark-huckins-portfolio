import { useEffect } from "react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

// "Off the clock": what shaped Mark outside work, and how it shows up in how
// he sells. Photos are Mark's own (public/life/*.jpg).

const mono = "font-['IBM_Plex_Mono',monospace]";

const surfSpots = ["Cape Cod", "Barbados", "California", "Costa Rica", "Hawaii", "Indonesia", "France", "Morocco"];

function Photo({ src, alt, className = "", caption }: { src: string; alt: string; className?: string; caption?: string }) {
  return (
    <figure className="m-0 flex flex-col gap-2.5">
      <img src={src} alt={alt} decoding="async" className={`w-full rounded-[14px] object-cover bg-[#e6e6e0] ${className}`} />
      {caption && <figcaption className="text-[13px] text-[#5d5d57]">{caption}</figcaption>}
    </figure>
  );
}

function Chapter({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-5">
      <span className={`${mono} text-[13px] tracking-[0.08em] text-[#1f3fd6]`}>{n}</span>
      <h2 className="m-0 text-[36px] md:text-[48px] leading-[1.04] tracking-[-0.03em] font-bold">{title}</h2>
      <div className="flex flex-col gap-4 text-[17px] md:text-[18.5px] leading-[1.6] text-[#3c3c38]">{children}</div>
    </div>
  );
}

export default function OffTheClock() {
  useEffect(() => {
    document.title = "Off the clock · Mark M. Huckins";
    window.scrollTo(0, 0);
    return () => {
      document.title = "Mark M. Huckins - Enterprise Sales Executive";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f6f3] text-[#121212] font-['Inter_Tight',system-ui,sans-serif] antialiased">
      <SiteHeader page="life" />

      <main>
        <section className="max-w-[1200px] mx-auto px-5 md:px-8 pt-16 md:pt-28 pb-16 md:pb-24 flex flex-col gap-6">
          <span className={`${mono} text-[12.5px] md:text-[13px] tracking-[0.08em] text-[#5d5d57]`}>OFF THE CLOCK</span>
          <h1 className="m-0 text-[44px] sm:text-[60px] lg:text-[76px] leading-[0.98] tracking-[-0.035em] font-bold max-w-[1000px]">
            Long before I carried a quota, I was chasing a ranking, a wave or a summit.
          </h1>
          <p className="m-0 text-[20px] md:text-[24px] text-[#3c3c38]">The habits stuck.</p>
        </section>

        {/* 01 · Court */}
        <section className="max-w-[1200px] mx-auto px-5 md:px-8 pb-20 md:pb-28 grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 md:gap-16 items-center">
          <Chapter n="01 · THE COURT" title="Built on the court">
            <p className="m-0">
              I grew up playing everything: hockey, soccer, tennis. Tennis won. Junior tennis became the priority, and it took me to IMG Academy in Bradenton, then on to compete as a Division I collegiate athlete.
            </p>
            <p className="m-0">
              Tennis is a lonely sport in the best way. Nobody subs in when you're down a set. You put in the reps when no one's watching, you own the loss, and you figure out the adjustment before the next point. That's still how I approach a number.
            </p>
          </Chapter>
          <Photo src="/life/tennis-family.jpg" alt="Mark on a tennis court with his daughter and son" className="aspect-[4/5] object-[center_35%]" caption="Still on the court, now with the next generation." />
        </section>

        {/* 02 · Water */}
        <section className="bg-[#121212] text-[#f6f6f3]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-20 md:py-28 flex flex-col gap-12">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <div className="flex flex-col gap-5">
                <span className={`${mono} text-[13px] tracking-[0.08em] text-[#7f95ff]`}>02 · THE WATER</span>
                <h2 className="m-0 text-[36px] md:text-[48px] leading-[1.04] tracking-[-0.03em] font-bold">Following the swell</h2>
                <p className="m-0 text-[17px] md:text-[18.5px] leading-[1.6] text-[#c8c8c0]">
                  Surfing has taken me from Cape Cod to Barbados, California to Costa Rica, Hawaii, Indonesia, and the coast from France down to Morocco.
                </p>
              </div>
              <div className="flex flex-col gap-5 md:pt-12">
                <p className="m-0 text-[17px] md:text-[18.5px] leading-[1.6] text-[#c8c8c0]">
                  The ocean teaches patience and timing. You read the conditions, you respect the locals, you wait for the right set, and when it comes you commit completely. Half-committing is how you get worked. Good deals feel the same way.
                </p>
                <ul className="m-0 p-0 list-none flex flex-wrap gap-2">
                  {surfSpots.map((s) => (
                    <li key={s} className={`${mono} text-[12.5px] px-3 py-1.5 rounded-full border border-[#3a3a35] text-[#e9e9e3]`}>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <figure className="m-0 flex flex-col gap-2.5">
                <img src="/life/surf.jpg" alt="Mark surfing a reef wave" decoding="async" className="w-full aspect-[3/2] object-cover rounded-[14px]" />
                <figcaption className="text-[13px] text-[#9a9a92]">Reading the set.</figcaption>
              </figure>
              <figure className="m-0 flex flex-col gap-2.5">
                <img src="/life/wakeboard.jpg" alt="Mark wakeboarding, airborne behind the boat" decoding="async" className="w-full aspect-[3/2] object-cover rounded-[14px]" />
                <figcaption className="text-[13px] text-[#9a9a92]">Any water, any board.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 03 · Now */}
        <section className="max-w-[1200px] mx-auto px-5 md:px-8 py-20 md:py-28 flex flex-col gap-12">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <Chapter n="03 · THESE DAYS" title="Surf, ride, climb">
              <p className="m-0">I've narrowed things down to three: surfing, mountain biking and climbing. With a skate session whenever there's a bowl nearby.</p>
            </Chapter>
            <div className="flex flex-col gap-4 text-[17px] md:text-[18.5px] leading-[1.6] text-[#3c3c38] md:pt-12">
              <p className="m-0">
                Mountain biking is about picking your line and carrying momentum through the rough sections. Climbing is about planning the route, trusting your rope team and moving steadily toward a summit you can't always see from the bottom.
              </p>
              <p className="m-0 font-semibold text-[#121212]">Enterprise sales, more or less.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 max-w-[860px]">
            <Photo src="/life/mtb.jpg" alt="Mark in the air on a mountain bike over a dirt jump" className="aspect-[4/5] object-[center_30%]" caption="Pick the line. Carry the speed." />
            <Photo src="/life/skate.jpg" alt="Mark skating a concrete bowl" className="aspect-[4/5] object-[center_60%]" caption="Still dropping in." />
          </div>
        </section>

        {/* 04 · Why */}
        <section className="border-t border-[#deded8]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-20 md:py-28 grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 md:gap-16 items-center">
            <Photo src="/life/desert-moto.jpg" alt="Mark with his daughter and son in motocross gear in the desert" className="aspect-[4/5] object-[center_40%]" caption="Desert days with my favorite crew." />
            <Chapter n="04 · WHAT DRIVES ME" title="What keeps me going">
              <p className="m-0">
                Family comes first. Then travel, adventure, and the satisfaction of setting a hard goal and reaching it, whether that's a summit, a wave or a number at the end of the quarter.
              </p>
            </Chapter>
          </div>
        </section>

        <section className="bg-[#121212] text-[#f6f6f3]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-20 md:py-28 flex flex-col gap-10">
            <p className="m-0 text-[30px] md:text-[44px] leading-[1.15] tracking-[-0.02em] font-semibold max-w-[980px]">
              I prepare like an athlete, read conditions like a surfer and plan the route like a climber. And I celebrate every summit with the people who helped get there.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="bg-[#f6f6f3] text-[#121212] px-5 py-3.5 rounded-[10px] font-semibold text-[15.5px] no-underline hover:bg-white">
                ← Back to the work
              </Link>
              <a href="/#contact" className="text-[#f6f6f3] px-5 py-3.5 rounded-[10px] font-semibold text-[15.5px] border border-[#3a3a35] hover:border-[#f6f6f3]">
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
