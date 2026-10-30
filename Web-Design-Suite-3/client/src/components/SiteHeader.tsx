// The site header and footer. On Home the section links are in-page anchors;
// on any other page they go back to Home first.
export function SiteHeader({ page }: { page: "home" | "life" }) {
  const to = (hash: string) => (page === "home" ? hash : `/${hash}`);
  const link = "text-[#3c3c38] hover:text-[#121212]";
  return (
    <header className="sticky top-0 z-40 bg-[#f6f6f3]/90 backdrop-blur border-b border-[#deded8]">
      <nav aria-label="Main" className="max-w-[1200px] mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-4 items-center justify-between">
        <a href={page === "home" ? "#top" : "/"} className="text-[24px] md:text-[32px] leading-none font-bold uppercase tracking-[-0.01em] no-underline text-[#121212]">
          Mark M. Huckins
        </a>
        <div className="flex flex-wrap gap-5 md:gap-7 items-center text-[14.5px]">
          <a href={to("#approach")} className={`hidden lg:inline ${link}`}>Approach</a>
          <a href={to("#record")} className={`hidden lg:inline ${link}`}>Track record</a>
          <a href={to("#skills")} className={`hidden lg:inline ${link}`}>Skills</a>
          <a href={to("#built")} className={`hidden lg:inline ${link}`}>Built</a>
          <a href={to("#writing")} className={`hidden lg:inline ${link}`}>Writing</a>
          <a href={to("#contact")} className={`hidden md:inline ${link}`}>Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noopener" className="bg-[#121212] text-white px-4 py-2.5 rounded-lg font-semibold hover:opacity-90">
            Resume
          </a>
        </div>
      </nav>
      {/* Phones: the section links in a slim scrollable row under the name. */}
      <nav aria-label="Sections" className="md:hidden border-t border-[#deded8]">
        <div className="px-5 py-2.5 flex gap-5 overflow-x-auto whitespace-nowrap text-[13.5px] [scrollbar-width:none]">
          <a href={to("#approach")} className={link}>Approach</a>
          <a href={to("#record")} className={link}>Track record</a>
          <a href={to("#skills")} className={link}>Skills</a>
          <a href={to("#built")} className={link}>Built</a>
          <a href={to("#writing")} className={link}>Writing</a>
          <a href={to("#contact")} className={link}>Contact</a>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="max-w-[1200px] mx-auto px-5 md:px-8 pt-6 pb-10 border-t border-[#deded8] flex flex-wrap gap-x-6 gap-y-2 justify-between text-[13.5px] text-[#5d5d57]">
      <span>© 2026 Mark M. Huckins · UMass Amherst, Isenberg School of Management · Anthropic Claude certified</span>
      <span className="flex flex-wrap gap-x-6 gap-y-2">
        <a href="/Mark_Huckins_Enterprise_Prospecting_Playbook.pdf" target="_blank" rel="noopener" className="text-[#5d5d57] hover:text-[#121212]">
          Enterprise Prospecting Playbook (PDF)
        </a>
      </span>
    </footer>
  );
}
