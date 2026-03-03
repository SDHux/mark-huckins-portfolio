import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  Globe, 
  Target,
  Mail,
  Linkedin,
  Phone,
  MessageSquare,
  LayoutDashboard,
  DoorOpen,
  Workflow,
  ExternalLink,
  Briefcase
} from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";
import { Button } from "@/components/ui/button";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const { toast } = useToast();
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const stats = [
    { number: "127%", label: "Quota Achievement" },
    { number: "$2.5M+", label: "ARR Managed" },
    { number: "95%+", label: "Client Retention" },
    { number: "136%", label: "ACV Growth" }
  ];

  const categories = [
    {
      title: "Enterprise Sales",
      skills: ["Complex deal orchestration", "C-suite engagement", "Multi-stakeholder consensus", "Strategic account management", "Pipeline generation & forecasting"]
    },
    {
      title: "Solution Selling",
      skills: ["MEDDIC methodology", "Challenger sales approach", "Sandler sales expertise", "ROI analysis & value mapping", "Technical requirement navigation", "Cross-functional collaboration"]
    },
    {
      title: "Strategic Partnerships",
      skills: ["Joint go-to-market planning", "Executive alignment", "Ecosystem development", "Co-selling orchestration", "Channel management"]
    }
  ];

  const aiTools = [
    "Salesforce",
    "HubSpot",
    "LinkedIn Sales Nav",
    "ZoomInfo",
    "Google Workspace",
    "Slack",
    "DocuSign",
    "Zoom",
    "Chorus",
    "Clari",
    "Claude",
    "ChatGPT",
    "Copilot"
  ];

  const aiPortfolio = [
    {
      title: "Sales Pro Platform",
      subtitle: "Dashboard & Intelligence",
      icon: <LayoutDashboard className="w-6 h-6" />,
      features: [
        "Influenced by custom ICP",
        "Automated scraping (job listings, prospective companies, contacts)",
        "Outreach campaigns & messaging",
        "Pipeline progression tracking"
      ],
      tech: ["Claude / Anthropic API", "GitHub", "Netlify", "Firebase"],
      link: "https://salesproplatform.netlify.app/dashboard"
    },
    {
      title: "Hux Deal Room",
      subtitle: "Interface & Methodology",
      icon: <DoorOpen className="w-6 h-6" />,
      features: [
        "Role-based UI (internal sales rep / external prospect)",
        "Framework based on applied sales methodology (discovery, exec summary, key stakeholder alignment, mutual action plan)",
        "Example resource repository"
      ],
      tech: ["SerpApi", "Railway", "Groq", "Supabase"],
      link: "https://buyersagent.netlify.app"
    }
  ];

  const clientPartnerships = [
    {
      industry: "Technology & Software",
      companies: ["Microsoft", "IBM", "Oracle", "eBay", "Lyft"]
    },
    {
      industry: "Healthcare & Life Sciences",
      companies: ["Medtronic", "Boston Scientific", "ConMed", "Philips Healthcare", "Daiichi Sankyo"]
    },
    {
      industry: "Consumer Packaged Goods",
      companies: ["Procter & Gamble", "McCormick & Company", "Kellogg's", "Dean Foods", "Spectrum Brands"]
    },
    {
      industry: "Retail & Consumer Brands",
      companies: ["Walmart", "Kroger", "Staples", "Best Buy", "Levi's", "Mattel", "Fortune Brands", "Owens Corning"]
    },
    {
      industry: "Automotive & Manufacturing",
      companies: ["Nissan", "Subaru", "Volkswagen", "Bosch", "Moen"]
    }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-white/20 text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-serif italic font-medium tracking-wide">Mark M. Huckins</div>
          <div className="hidden md:flex items-center space-x-8 text-sm text-white/60">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#ai-portfolio" className="hover:text-white transition-colors">AI Portfolio</a>
            <a href="#partners" className="hover:text-white transition-colors">Partners</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <Button 
            variant="outline" 
            className="bg-white/5 border-white/10 hover:bg-white/10 hover:text-white rounded-full px-6"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            Resume
          </Button>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/80 to-background z-10" />
          <img 
            src={heroBg} 
            alt="Abstract background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
              <TrendingUp className="w-4 h-4 text-white/70" />
              <span className="text-xs font-medium tracking-widest text-white/70 uppercase">Enterprise Sales Professional</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeUp}
              className="text-5xl md:text-7xl font-serif tracking-tight mb-6 leading-tight"
            >
              Driving growth through <span className="text-white/50 italic">strategic partnership.</span>
            </motion.h1>
            
            <motion.div variants={fadeUp} className="space-y-4 text-white/60 text-lg font-light leading-relaxed max-w-xl">
              <p>
                With over a decade of experience in enterprise SaaS sales, I specialize in helping Fortune 1000 companies navigate digital transformation through innovative technology solutions.
              </p>
              <p>
                My approach centers on building lasting partnerships with C-suite executives, translating technical capabilities into strategic business value, and consistently exceeding revenue targets.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 h-14 px-8 transition-transform hover:scale-105 active:scale-95">
                Connect on LinkedIn
              </Button>
              <Button size="lg" variant="outline" className="rounded-full glass h-14 px-8 group" onClick={() => document.getElementById('ai-portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                View AI Portfolio
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://i.imgur.com/WeXoLnz.png" 
                alt="Mark M. Huckins" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating accent elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 glass-dark rounded-2xl border border-white/10 z-20 flex items-center justify-center animate-bounce-slow">
              <Shield className="w-10 h-10 text-white/50" />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 glass rounded-full border border-white/10 z-20 flex items-center justify-center animate-pulse">
              <Zap className="w-8 h-8 text-white/80" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background relative z-30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif mb-2">{stat.number}</div>
                <div className="text-sm text-white/40 uppercase tracking-widest font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Portfolio Section */}
      <section id="ai-portfolio" className="py-32 relative z-20 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-24">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="inline-flex items-center space-x-2 text-white/50 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold">
              <span className="w-8 h-[1px] bg-white/20" />
              <span>Innovating the workflow</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Art of the Deal: <span className="italic text-white/50">Applying AI to Sales.</span></h2>
            <p className="text-white/50 text-xl font-light leading-relaxed">
              Self-generated AI-enabled sales tools architected from proven methodologies. My portfolio demonstrates practical application of emerging technologies to the sales process, combining strategic frameworks with modern development capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {aiPortfolio.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-dark rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-700 flex flex-col group"
              >
                <div className="p-10 md:p-12">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                      {project.icon}
                    </div>
                    <div className="flex gap-2 flex-wrap justify-end max-w-[200px]">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 border border-white/5 rounded-full text-white/40">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-3xl font-serif mb-2">{project.title}</h3>
                    <p className="text-sm text-white/30 uppercase tracking-widest font-medium mb-8">{project.subtitle}</p>
                    
                    <ul className="space-y-4">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-white/50 text-sm font-light leading-relaxed">
                          <Workflow className="w-4 h-4 mt-0.5 shrink-0 opacity-30" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant="outline" 
                    className="mt-4 rounded-full glass border-white/5 hover:bg-white/10 group/btn"
                    onClick={() => project.link !== "#" && window.open(project.link, '_blank')}
                  >
                    View Project Details
                    <ExternalLink className="ml-2 w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partnerships Section */}
      <section id="partners" className="py-32 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Proud to have partnered with <span className="italic text-white/50">world-class brands</span> across multiple industries.</h2>
            <p className="text-white/50 text-xl font-light leading-relaxed">Building strategic value for global leaders through innovative enterprise solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientPartnerships.map((group, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark p-10 rounded-3xl border border-white/5"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Briefcase className="w-5 h-5 text-white/40" />
                </div>
                <h3 className="text-lg font-medium text-white/80 mb-6 uppercase tracking-widest">{group.industry}</h3>
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {group.companies.map((company, idx) => (
                    <span key={idx} className="text-white/40 text-sm font-light flex items-center gap-2">
                      {company}
                      {idx < group.companies.length - 1 && <span className="w-1 h-1 rounded-full bg-white/20" />}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Sales <span className="italic text-white/50">Mastery.</span></h2>
            <p className="text-white/50 text-xl font-light leading-relaxed">Core competencies that drive success in complex enterprise environments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-dark p-10 rounded-3xl border border-white/5 group hover:border-white/20 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {i === 0 ? <Users className="w-6 h-6" /> : i === 1 ? <Target className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
                </div>
                <h3 className="text-2xl font-serif mb-6">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.skills.map((skill, j) => (
                    <li key={j} className="text-white/40 text-sm flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-32 relative z-20 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-4 italic">Enterprise Sales Stack</h2>
          <p className="text-white/40 mb-12 max-w-2xl mx-auto font-light">Leveraging industry-standard tools to accelerate the sales cycle.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {aiTools.map((tool, i) => (
              <motion.span 
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/70"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative z-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-dark rounded-[3rem] p-12 md:p-20 border border-white/5 relative overflow-hidden text-center">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-radial from-white/10 to-transparent pointer-events-none opacity-50" />
            
            <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10 italic">Let's build the future of your revenue.</h2>
            <p className="text-white/50 text-xl mb-12 max-w-2xl mx-auto relative z-10 font-light">
              Available for strategic enterprise roles and advisory.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mt-12">
              <a href="mailto:mark.huckins@gmail.com" className="glass p-8 rounded-2xl hover:bg-white/10 transition-all group">
                <Mail className="w-6 h-6 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-medium">Email Me</div>
              </a>
              <a href="https://linkedin.com" className="glass p-8 rounded-2xl hover:bg-white/10 transition-all group">
                <Linkedin className="w-6 h-6 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-medium">LinkedIn</div>
              </a>
              <a href="tel:8587524321" className="glass p-8 rounded-2xl hover:bg-white/10 transition-all group">
                <Phone className="w-6 h-6 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-medium">858.752.4321</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 relative z-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif italic text-white/80">Mark M. Huckins</div>
          <div className="flex gap-8 text-xs text-white/30 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
          <div className="text-sm text-white/20 font-light">
            © {new Date().getFullYear()} Mark M. Huckins. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Chat Button Mockup */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-white text-black shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
}
