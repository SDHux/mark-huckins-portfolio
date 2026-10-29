// Mark Huckins: personal site (design A, "term sheet", Oct 29 2026).
// One page: hero, deal profile, experience, how I sell now, track record,
// skills, tools & disciplines, built, contact. Facts come from the master
// resume; keep "10+ years" (Mark's call).

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

const LINKEDIN = "https://www.linkedin.com/in/mark-m-huckins/";
const EMAIL = "mark.huckins@gmail.com";

const mono = "font-['IBM_Plex_Mono',monospace]";

const dealProfile = [
  { big: "2–3", text: "six-figure deals closed per quarter, on a 3–6 month average cycle" },
  { big: "$325K", text: "average ACV across net new and expansion; $1.2M average multi-year TCV" },
  { big: "$1.5M", text: "largest single deal; Fortune 500 logos include Cisco, Microsoft, Walmart and Kroger" },
  { big: "±10%", text: "forecast accuracy for 11 consecutive quarters; commit called right for 8" },
];

// The hero's example overnight run (an illustration, not real accounts).
const nightLog = [
  { t: "01:12", tag: "research", text: "42 accounts refreshed · 3 changes flagged" },
  { t: "01:40", tag: "signal", text: "New VP Supply Chain at a top-10 account" },
  { t: "02:05", tag: "icp", text: "18 new accounts match the ICP · scored and ranked" },
  { t: "02:30", tag: "map", text: "Buying group updated · 2 gaps to cover" },
  { t: "05:30", tag: "brief", text: "Exec call prep ready for the 9:00" },
  { t: "05:45", tag: "follow-up", text: "4 prospect follow-ups drafted for review" },
  { t: "06:00", tag: "crm", text: "Opportunities current · forecast refreshed" },
];

// Lines appear one at a time, then the human step; all at once for people
// who prefer reduced motion.
function TerritoryLog() {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(nightLog.length + 1);
      return;
    }
    let n = 0;
    const timer = window.setInterval(() => {
      n += 1;
      setShown(n);
      if (n > nightLog.length) window.clearInterval(timer);
    }, 650);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <figure className="m-0 flex flex-col gap-3">
      <div
        role="img"
        aria-label="Example of an overnight run: agents refresh accounts, flag a new executive, score accounts against the ICP, update the buying group, prepare an exec brief, draft follow-ups and update the CRM, then Mark reviews, approves and gets on the phone."
        className={`${mono} bg-[#121212] text-[#e9e9e3] rounded-[18px] p-5 md:p-6 text-[12.5px] md:text-[13.5px] leading-[1.5] shadow-[0_24px_60px_-28px_rgba(18,18,18,0.55)] min-h-[420px] md:min-h-[440px] flex flex-col gap-3`}
      >
        <div className="flex justify-between text-[#8a8a83] pb-2.5 border-b border-[#2e2e2a]">
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#7f95ff] animate-pulse" aria-hidden="true" />territory.log</span>
          <span>overnight</span>
        </div>
        {nightLog.slice(0, shown).map((l) => (
          <div key={l.t} className="flex gap-3.5 animate-in fade-in slide-in-from-bottom-1 duration-300">
            <span className="text-[#8a8a83] shrink-0">{l.t}</span>
            <span><span className="text-[#7f95ff]">{l.tag}</span> {l.text}</span>
          </div>
        ))}
        {shown > nightLog.length && (
          <div className="flex gap-3.5 pt-2.5 mt-auto border-t border-[#2e2e2a] text-white animate-in fade-in duration-500">
            <span className="text-[#8a8a83] shrink-0">07:30</span>
            <span>Mark: reviews, approves, gets on the phone</span>
          </div>
        )}
      </div>
      <figcaption className="text-[12.5px] text-[#5d5d57]">An example overnight run. The agents do the prep; every call that matters is still mine.</figcaption>
    </figure>
  );
}

// Brands Mark has sold to and partnered with, cut from Mark's own logo
// sheets (public/logos/*.png; w×h is each file's size). Sized by shape so wide
// and square logos carry similar weight.
const logos: { name: string; file: string; w: number; h: number }[] = [
  { name: "Walmart", file: "walmart", w: 174, h: 49 },
  { name: "Microsoft", file: "microsoft", w: 425, h: 96 },
  { name: "Kroger", file: "kroger", w: 139, h: 71 },
  { name: "Cisco", file: "cisco", w: 182, h: 96 },
  { name: "Boston Scientific", file: "boston-scientific", w: 222, h: 96 },
  { name: "Ace Hardware", file: "ace-hardware", w: 93, h: 57 },
  { name: "Medtronic", file: "medtronic", w: 100, h: 96 },
  { name: "Bosch", file: "bosch", w: 415, h: 96 },
  { name: "GS1", file: "gs1", w: 89, h: 73 },
  { name: "Kellogg's", file: "kelloggs", w: 275, h: 96 },
  { name: "Ford", file: "ford", w: 266, h: 96 },
  { name: "Associated Wholesale Grocers", file: "awg", w: 80, h: 79 },
  { name: "GE", file: "ge", w: 97, h: 96 },
  { name: "Philips", file: "philips", w: 75, h: 96 },
  { name: "Crossmark", file: "crossmark", w: 198, h: 41 },
  { name: "Daiichi Sankyo", file: "daiichi-sankyo", w: 551, h: 96 },
  { name: "ConMed", file: "conmed", w: 498, h: 96 },
  { name: "SAS (Imperial Trading)", file: "sas", w: 127, h: 41 },
  { name: "Elanco", file: "elanco", w: 190, h: 96 },
  { name: "McCormick", file: "mccormick", w: 130, h: 96 },
  { name: "MealSuite", file: "mealsuite", w: 198, h: 39 },
  { name: "Duracell", file: "duracell", w: 588, h: 96 },
  { name: "Dean Foods", file: "dean-foods", w: 94, h: 96 },
  { name: "Chemonics", file: "chemonics", w: 204, h: 45 },
  { name: "Fortune Brands", file: "fortune-brands", w: 384, h: 96 },
  { name: "Mattel", file: "mattel", w: 97, h: 96 },
  { name: "USAID", file: "usaid", w: 125, h: 38 },
  { name: "Spectrum Brands", file: "spectrum-brands", w: 348, h: 96 },
  { name: "Levi's", file: "levis", w: 193, h: 96 },
  { name: "Mighty Oaks", file: "mighty-oaks", w: 191, h: 54 },
  { name: "Subaru", file: "subaru", w: 155, h: 96 },
  { name: "Audi", file: "audi", w: 184, h: 96 },
  { name: "Nissan", file: "nissan", w: 117, h: 96 },
  { name: "Moen", file: "moen", w: 409, h: 96 },
  { name: "Lyft", file: "lyft", w: 133, h: 96 },
];

function LogoMarquee() {
  const row = (hidden: boolean) => (
    <ul className="marquee-row m-0 p-0 list-none flex items-center gap-14 md:gap-20 pr-14 md:pr-20 shrink-0" aria-hidden={hidden || undefined}>
      {logos.map((l) => {
        const aspect = l.w / l.h;
        const h = Math.max(22, Math.min(48, Math.round(58 / Math.sqrt(aspect))));
        return (
          <li key={l.name} className="shrink-0">
            <img src={`/logos/${l.file}.png`} alt={hidden ? "" : l.name} height={h} width={Math.round(h * aspect)} decoding="async" style={{ height: h, width: "auto" }} />
          </li>
        );
      })}
    </ul>
  );
  return (
    <section aria-label="Brands I've sold to and partnered with" className="border-y border-[#deded8] bg-white/60">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-7 pb-1">
        <span className={`${mono} text-[12px] md:text-[12.5px] tracking-[0.08em] text-[#5d5d57]`}>BRANDS I'VE SOLD TO AND PARTNERED WITH</span>
      </div>
      <div className="marquee relative overflow-hidden py-8">
        <div className="marquee-track flex w-max">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}

const agentWork = [
  "Every account researched overnight, with what changed flagged by morning",
  "The buying group mapped, so no deal hangs on one contact",
  "Executive briefs ready before the calendar invite opens",
  "Follow-up drafted from call notes while the conversation is fresh",
  "The CRM kept current without me touching it",
];

const roles = [
  { when: "2025 – Now", company: "SRENE.io", title: "AI GTM Leader", text: "Designed the go-to-market system for an AI-native product company: positioning, pricing, ICP and partnerships, and put it to work against real deals." },
  { when: "2024 – 2025", company: "1WorldSync", title: "Senior Enterprise Account Manager", text: "127% of net new quota. Grew Tier I ACV 33% across Walmart and Kroger brands; 95%+ retention." },
  { when: "2023 – 2024", company: "Gartner", title: "Global Strategic Account Manager", text: "$900K+ in new service agreements in the first 9 months with Medtronic, ConMed, Boston Scientific and Daiichi Sankyo; 100% renewal." },
  { when: "2021 – 2023", company: "CommerceIQ", title: "Enterprise Account Manager", text: "100% of net new quota from a fully self-sourced pipeline, selling an AI platform into a brand-new market." },
  { when: "2019 – 2021", company: "Salsify", title: "Global Strategic Account Manager", text: "President's Club in the first 6 months. Top five company-wide, $2.5M+ ARR, 136% average ACV growth with Cisco, Bosch, Kellogg's, Spectrum Brands and Fortune Brands." },
  { when: "2011 – 2018", company: "i3BRANDS", title: "VP Business Development · Director of Sales", text: "Grew revenue from $3.5M to $15M and built a 24-person team, with partners and clients including Lyft, Snap-on, Nissan, Infiniti, VW/Audi, Subaru, IBM InfoSphere and Earthbound Farm." },
];

const skills = [
  { n: "01 · AI GTM", title: "AI go-to-market", dark: true, items: ["Agent-deployed territory coverage", "AI account research and signal monitoring", "Buying-group mapping", "Executive call preparation", "GTM system design", "Pricing and packaging"] },
  { n: "02 · Enterprise", title: "Enterprise selling", items: ["Complex deal orchestration", "C-suite engagement", "Multi-stakeholder consensus", "Strategic account management", "Pipeline generation and forecasting"] },
  { n: "03 · Method", title: "Methodology", items: ["MEDDIC", "Challenger", "Sandler", "ROI analysis and value mapping", "Technical requirement navigation"] },
  { n: "04 · Partners", title: "Partnerships", items: ["Joint go-to-market planning", "Executive alignment", "Co-selling orchestration", "Channel management", "Ecosystem development"] },
];

const stack = [
  { layer: "Layer 1", name: "AI & agents", tone: "top", tools: ["Claude", "ChatGPT", "Copilot", "Gemini", "Agent workflows", "MCP"] },
  { layer: "Layer 2", name: "Revenue stack", tone: "mid", tools: ["Salesforce", "HubSpot", "LinkedIn Sales Navigator", "ZoomInfo", "Clari", "Chorus", "DocuSign", "Tableau", "Zoom", "Slack", "Google Workspace"] },
  { layer: "Layer 3", name: "Build", tone: "base", tools: ["Claude Code", "Supabase", "Firebase", "GitHub", "Netlify", "Replit", "Resend", "ElevenLabs", "Stripe"] },
];

const built = [
  { kicker: "AI GTM system", name: "SRENE.io", text: "The go-to-market system: what a modern seller's process looks like when AI runs through all of it.", cta: "srene.io →", href: "https://www.srene.io" },
  { kicker: "Product", name: "myBivy", text: "A deal room built by a seller for sellers, designed and shipped with Claude as a self-service platform.", cta: "Try the demo →", href: "https://mybivy.com/?demo=team" },
  { kicker: "Consumer brand", name: "LiVD", text: "A luxury adventure travel brand: identity, site and positioning. A different muscle from B2B.", cta: "livdirl.com →", href: "https://livdirl.com" },
];

const H2 = ({ children }: { children: React.ReactNode }) => <h2 className="m-0 text-[38px] md:text-[52px] leading-[1.04] tracking-[-0.03em] font-bold">{children}</h2>;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f6f3] text-[#121212] font-['Inter_Tight',system-ui,sans-serif] antialiased">
      <SiteHeader page="home" />

      <main>
        {/* Hero */}
        <section id="top" className="scroll-mt-16 max-w-[1200px] mx-auto px-5 md:px-8 pt-16 md:pt-28 pb-16 md:pb-24 grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-12 lg:gap-14 items-center">
          <div className="flex flex-col gap-7 md:gap-8">
          <span className={`${mono} text-[12.5px] md:text-[13px] tracking-[0.08em] text-[#5d5d57]`}>ENTERPRISE SALES EXECUTIVE · SAN DIEGO</span>
          <h1 className="m-0 text-[46px] sm:text-[60px] lg:text-[72px] leading-[0.98] tracking-[-0.035em] font-bold">I sell to the Fortune&nbsp;500. My agents work the territory.</h1>
          <p className="m-0 text-[18px] md:text-[21px] leading-[1.5] text-[#3c3c38] max-w-[720px]">
            10+ years closing enterprise SaaS with C-suite buyers at Walmart, Microsoft, Kroger and Cisco. Today I run my territory with AI agents aiding the research, ICP mapping and prospect outreach follow-up, so my time goes to buyers.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <a href="/resume.pdf" target="_blank" rel="noopener" className="bg-[#1f3fd6] text-white px-5 py-3.5 rounded-[10px] font-semibold text-[15.5px] hover:bg-[#1833b8]">Download resume</a>
            <a href={LINKEDIN} target="_blank" rel="noopener" className="bg-white text-[#121212] px-5 py-3.5 rounded-[10px] font-semibold text-[15.5px] border border-[#d4d4ce] hover:border-[#121212]">LinkedIn</a>
            <a href={`mailto:${EMAIL}`} className="bg-white text-[#121212] px-5 py-3.5 rounded-[10px] font-semibold text-[15.5px] border border-[#d4d4ce] hover:border-[#121212]">{EMAIL}</a>
          </div>
          </div>
          <TerritoryLog />
        </section>

        <LogoMarquee />

        {/* Deal profile */}
        <section aria-label="Deal profile" className="max-w-[1200px] mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t-2 border-[#121212]">
            {dealProfile.map((d, i) => (
              <div key={d.big} className={`pt-7 pb-6 flex flex-col gap-2.5 ${i % 2 ? "pl-5 border-l border-[#deded8]" : "pr-5"} ${i > 0 ? "lg:pl-6 lg:border-l lg:border-[#deded8]" : ""} ${i > 1 ? "border-t lg:border-t-0 border-[#deded8]" : ""}`}>
                <span className="text-[40px] md:text-[52px] font-bold tracking-[-0.03em] leading-none">{d.big}</span>
                <span className="text-[14.5px] md:text-[15px] leading-[1.45] text-[#3c3c38]">{d.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience, modernized */}
        <section aria-label="About" className="max-w-[1200px] mx-auto px-5 md:px-8 pb-20 md:pb-28 grid md:grid-cols-3 gap-6 md:gap-16">
          <span className={`${mono} text-[13px] tracking-[0.08em] text-[#5d5d57] md:pt-2`}>EXPERIENCE, MODERNIZED</span>
          <div className="md:col-span-2 flex flex-col gap-5">
            <p className="m-0 text-[24px] md:text-[30px] leading-[1.3] tracking-[-0.015em] font-medium">For 10+ years I've built lasting partnerships with C-suite executives, translated technical capability into business value, and beaten my number.</p>
            <p className="m-0 text-[17px] md:text-[19px] leading-[1.55] text-[#3c3c38]">What's changed is how I get there. AI agents now handle the research, account mapping and prep that used to fill my week, so more of my time goes to the executives I'm selling to, and every conversation starts better prepared than the last. Proven relationships, run on a modern process.</p>
          </div>
        </section>

        {/* How I sell now */}
        <section id="approach" className="scroll-mt-16 bg-[#121212] text-[#f6f6f3]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col gap-6">
              <span className={`${mono} text-[13px] tracking-[0.08em] text-[#9a9a92]`}>HOW I SELL NOW</span>
              <H2>
                Most reps use AI.
                <br />
                I deploy it.
              </H2>
              <p className="m-0 text-[17px] md:text-[18px] leading-[1.55] text-[#c8c8c0]">Using AI is asking a chatbot to rewrite an email. Deploying it is building agents that work the territory while I'm in front of buyers. One rep, covering ground like a team of three. Every call that matters is still mine.</p>
            </div>
            <ol className="m-0 p-0 list-none flex flex-col">
              {agentWork.map((w, i) => (
                <li key={w} className={`flex gap-5 py-5 border-t border-[#2e2e2a] ${i === agentWork.length - 1 ? "border-b" : ""}`}>
                  <span className={`${mono} text-[#7f95ff] text-[14px] pt-[3px]`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[17px] md:text-[18px] leading-[1.45]">{w}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Track record */}
        <section id="record" className="scroll-mt-16 max-w-[1200px] mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-16 flex flex-col gap-10">
          <div className="flex flex-wrap gap-4 items-baseline justify-between">
            <H2>Track record</H2>
            <span className={`${mono} text-[13px] text-[#5d5d57]`}>PRESIDENT'S CLUB · 127% QUOTA</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-16 bg-white border border-[#deded8] rounded-[14px] p-6 md:p-8">
            <p className="m-0 text-[20px] md:text-[22px] leading-[1.3] font-semibold tracking-[-0.01em]">Every role, a new system mastered and new revenue unlocked.</p>
            <p className="md:col-span-2 m-0 text-[16px] md:text-[17px] leading-[1.6] text-[#3c3c38]">I join companies at inflection points, ramp fast on new products, categories and buyers, and turn that into net new logos and expansion within the first year: President's Club at Salsify in six months, $900K+ at Gartner in nine, 127% of net new quota at 1WorldSync. The pattern repeats: learn the system, land the logos, unlock the revenue.</p>
          </div>
          <div className="flex flex-col">
            {roles.map((r, i) => (
              <div key={r.company + r.when} className={`grid md:grid-cols-[200px_minmax(0,1fr)_minmax(0,1.4fr)] gap-2 md:gap-8 py-6 md:py-7 border-t border-[#d4d4ce] ${i === roles.length - 1 ? "border-b" : ""}`}>
                <span className={`${mono} text-[13px] md:text-[13.5px] text-[#5d5d57] uppercase`}>{r.when}</span>
                <span className="flex flex-col gap-1"><b className="text-[19px] md:text-[20px]">{r.company}</b><span className="text-[#5d5d57]">{r.title}</span></span>
                <span className="text-[16px] md:text-[16.5px] leading-[1.5] text-[#3c3c38] mt-1 md:mt-0">{r.text}</span>
              </div>
            ))}
          </div>
          <p className="m-0 text-[15px] text-[#5d5d57] leading-[1.6]">Sold to: Walmart · Microsoft · Kroger · Cisco · Bosch · Kellogg's · Spectrum Brands · Fortune Brands · Medtronic · ConMed · Boston Scientific · Daiichi Sankyo · Lyft · Nissan · Subaru · IBM</p>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-16 max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-20 flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-[720px]">
            <H2>Skills</H2>
            <p className="m-0 text-[17px] md:text-[18px] leading-[1.55] text-[#3c3c38]">Classic enterprise craft, with the AI go-to-market skills most sales orgs are still hiring for.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((s) => (
              <div key={s.title} className={`rounded-[14px] p-7 flex flex-col gap-4 ${s.dark ? "bg-[#121212] text-[#f6f6f3]" : "bg-white border border-[#deded8]"}`}>
                <span className={`${mono} text-[12.5px] uppercase ${s.dark ? "text-[#7f95ff]" : "text-[#1f3fd6]"}`}>{s.n}</span>
                <b className="text-[21px]">{s.title}</b>
                <ul className={`m-0 p-0 list-none flex flex-col gap-2.5 text-[15px] leading-[1.4] ${s.dark ? "text-[#d6d6ce]" : "text-[#3c3c38]"}`}>
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="m-0 text-[15px] text-[#5d5d57] leading-[1.6]">Domain depth: product information and master data management (PIM, PXM, MDM), GDSN, commerce platforms and supply chain technology.</p>
        </section>

        {/* Tools & disciplines */}
        <section id="tools" className="scroll-mt-16 max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-20 flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-[720px]">
            <H2>Tools &amp; disciplines</H2>
            <p className="m-0 text-[17px] md:text-[18px] leading-[1.55] text-[#3c3c38]">How the stack fits together: AI agents on top, working across the revenue tools underneath, on systems I've built myself.</p>
          </div>
          <div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] gap-5">
            <div className="flex flex-col gap-2.5" role="img" aria-label="Layered stack: AI and agents on top, then the revenue stack, then the build layer">
              {stack.map((l) => (
                <div
                  key={l.name}
                  className={`rounded-[14px] p-5 md:px-6 md:py-[22px] grid md:grid-cols-[170px_minmax(0,1fr)] gap-4 md:gap-5 items-center ${l.tone === "top" ? "bg-[#1f3fd6] text-white" : l.tone === "mid" ? "bg-[#dfe4fb]" : "bg-[#ececE6]"}`}
                >
                  <span className="flex flex-col gap-1">
                    <span className={`${mono} text-[12px] uppercase ${l.tone === "top" ? "text-[#c9d2ff]" : l.tone === "mid" ? "text-[#3a4fae]" : "text-[#5d5d57]"}`}>{l.layer}</span>
                    <b className="text-[18px]">{l.name}</b>
                  </span>
                  <span className="flex flex-wrap gap-2 text-[14px] font-semibold">
                    {l.tools.map((t) => (
                      <span key={t} className={`px-3 py-[7px] rounded-full ${l.tone === "top" ? "bg-white/15" : "bg-white"}`}>
                        {t}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-[#121212] text-[#f6f6f3] rounded-[14px] p-6 flex flex-col gap-3.5">
              <span className={`${mono} text-[12px] text-[#9a9a92]`}>ACROSS EVERY LAYER</span>
              <b className="text-[18px]">Disciplines</b>
              <ul className="m-0 p-0 list-none flex flex-col gap-2.5 text-[14.5px] leading-[1.4] text-[#d6d6ce]">
                <li>GTM strategy</li>
                <li>Pricing and packaging</li>
                <li>AI marketing and automations</li>
                <li>Process intelligence</li>
                <li>Order-to-cash management</li>
              </ul>
              <span className="mt-auto pt-4 text-[12.5px] leading-[1.5] text-[#9a9a92]">Certified: Anthropic Claude · Celonis Process Mining · Replit</span>
            </div>
          </div>
        </section>

        {/* Built */}
        <section id="built" className="scroll-mt-16 max-w-[1200px] mx-auto px-5 md:px-8 pt-16 md:pt-20 pb-20 md:pb-28 flex flex-col gap-8">
          <div className="flex flex-col gap-3 max-w-[720px]">
            <H2>Built, not pitched</H2>
            <p className="m-0 text-[17px] md:text-[18px] leading-[1.55] text-[#3c3c38]">Three ventures I took from idea to live product with AI as the build team. They're proof I can do more than talk about AI.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {built.map((b) => (
              <a key={b.name} href={b.href} target="_blank" rel="noopener" className="no-underline text-[#121212] bg-white border border-[#deded8] rounded-[14px] p-7 flex flex-col gap-3.5 hover:border-[#121212] transition-colors">
                <span className={`${mono} text-[12.5px] uppercase text-[#1f3fd6]`}>{b.kicker}</span>
                <b className="text-[24px]">{b.name}</b>
                <span className="text-[15.5px] leading-[1.5] text-[#3c3c38]">{b.text}</span>
                <span className="text-[14.5px] font-semibold text-[#1f3fd6] mt-auto">{b.cta}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 border-t border-[#deded8]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-20 md:py-28 flex flex-wrap gap-10 items-end justify-between">
            <div className="flex flex-col gap-4 max-w-[680px]">
              <h2 className="m-0 text-[42px] md:text-[64px] leading-none tracking-[-0.035em] font-bold">Hiring for enterprise sales? Let's talk.</h2>
              <p className="m-0 text-[17px] md:text-[18px] text-[#3c3c38]">Open to Enterprise AE and strategic account roles.</p>
              <Link href="/off-the-clock" className="self-start text-[15.5px] font-semibold text-[#1f3fd6] hover:text-[#132a99]">
                Off the clock: what shaped me →
              </Link>
            </div>
            <div className="flex flex-col gap-2.5 text-[17px] font-semibold">
              <a href={`mailto:${EMAIL}`} className="text-[#1f3fd6] hover:text-[#132a99]">{EMAIL}</a>
              <a href={LINKEDIN} target="_blank" rel="noopener" className="text-[#1f3fd6] hover:text-[#132a99]">linkedin.com/in/mark-m-huckins</a>
              <a href="tel:8587524321" className="text-[#1f3fd6] hover:text-[#132a99]">858.752.4321</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
