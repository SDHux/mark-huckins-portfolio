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
    title: "SRENE.io",
    subtitle: "Brand & GTM",
    tag: "SRENE.IO",
    tagColor: "#6c8ee0",
    icon: <Sparkles className="w-6 h-6" />,
    description: "Built the company from the ground up: positioning, pricing tiers, licensing structure, and brand architecture for a portfolio of sales-focused products.",
    proof: ["GTM Strategy", "Pricing & Packaging", "Brand Architecture"],
    link: "https://www.srene.io"
  },
  {
    title: "myBivy",
    subtitle: "Commercial Product",
    tag: "MYBIVY",
    tagColor: "#5fb8a8",
    icon: <Workflow className="w-6 h-6" />,
    description: "A deal-room tool built by a salesperson for salespeople. Designed the workflow, built the product using Claude, and shipped a working self-service licensable platform.",
    proof: ["Process Intelligence", "Anthropic / Claude", "Product Design"],
    link: "https://www.mybivy.com"
  },
  {
    title: "LiVD",
    subtitle: "Consumer Brand",
    tag: "LIVD",
    tagColor: "#d99a5f",
    icon: <Globe className="w-6 h-6" />,
    description: "Luxury outdoor adventure travel brand. Full marketing site, brand identity, and consumer-facing positioning, a different muscle from B2B SaaS GTM.",
    proof: ["Marketing", "Brand Identity", "Consumer Positioning"],
    link: "https://livdirl.com"
  }
];

  const buildStack = [
    "Anthropic / Claude",
    "Supabase",
    "GitHub",
    "Replit Agent",
    "Netlify",
    "GTM Strategy",
    "AI Marketing and Automations",
    "Pricing & Packaging",
    "Process Intelligence"
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
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative
