import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Briefcase,
  ChevronRight,
  Download,
  Globe2,
  Handshake,
  LineChart,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
  FileText,
  Fuel,
  Cpu,
  Users,
  Newspaper,
  Mail,
  MapPin,
  BarChart3,
  Workflow,
  Factory,
  Landmark,
  MessageCircle,
} from "lucide-react";

const companies = [
  {
    key: "zknl",
    short: "Zebedee Korie Nig Ltd",
    name: "Zebedee Korie Nig Ltd",
    rc: "RC 1729997",
    label: "Technology, AI & Business Services",
    descriptor: "IT Consulting • Digital Services • Business Facilitation",
    heroCopy:
      "AI-enabled consulting and digital execution for growth, operations, market intelligence, and cross-border business enablement.",
    accent: "from-amber-400/20 to-transparent",
  },
  {
    key: "zcml",
    short: "Zeberike Crude Oil Marketing Nig Ltd",
    name: "Zeberike Crude Oil Marketing Nig Ltd",
    rc: "RC 1709207",
    label: "Energy, Oil & Gas Services",
    descriptor: "Oil & Gas Services • Upstream • Downstream",
    heroCopy:
      "Commercial, technical, and compliance support across petroleum products, upstream asset review, LNG vendor support, and sector-focused IT consulting.",
    accent: "from-sky-400/20 to-transparent",
  },
];

const services = [
  {
    slug: "ai-content-agency",
    name: "AI Content Agency",
    company: "zknl",
    pillar: "Digital Services",
    summary:
      "AI-assisted corporate content operations for marketing, thought leadership, sales enablement, and digital publishing.",
    outcomes: ["Content velocity", "Brand consistency", "Lower production cost"],
    deliverables: [
      "Editorial calendars",
      "Website copy systems",
      "Executive thought leadership",
      "Sales collateral and campaign assets",
    ],
    process: ["Discovery", "Messaging architecture", "Content production", "Governance & review"],
    industries: ["Professional Services", "Energy", "SMEs", "Trade"],
  },
  {
    slug: "ai-customer-support-outsourcing",
    name: "AI Customer Support Outsourcing",
    company: "zknl",
    pillar: "Digital Services",
    summary:
      "AI-augmented support operations for inbound queries, ticket triage, FAQ automation, and service workflow optimisation.",
    outcomes: ["Faster response times", "Scalable support", "Operational efficiency"],
    deliverables: [
      "Support workflow design",
      "Knowledge base structure",
      "Chat and email support systems",
      "Escalation and reporting flows",
    ],
    process: ["Support audit", "Workflow design", "Deployment", "Performance monitoring"],
    industries: ["Retail", "Technology", "Service Businesses", "Export"],
  },
  {
    slug: "ai-recruitment-agency",
    name: "AI Recruitment Agency",
    company: "zknl",
    pillar: "Business Facilitation",
    summary:
      "Talent sourcing and screening support using structured workflows for faster shortlisting and quality hiring decisions.",
    outcomes: ["Better candidate screening", "Reduced hiring friction", "Faster placement cycles"],
    deliverables: [
      "Role definition support",
      "Candidate funnel design",
      "Screening workflows",
      "Shortlist reporting",
    ],
    process: ["Role intake", "Sourcing", "Screening", "Presentation of shortlist"],
    industries: ["Technology", "Operations", "Energy", "Professional Services"],
  },
  {
    slug: "market-research-intelligence",
    name: "Market Research Intelligence",
    company: "zknl",
    pillar: "IT Consulting",
    summary:
      "Commercial intelligence and market analysis for entry strategy, sector scans, competitor mapping, and opportunity assessment.",
    outcomes: ["Sharper decisions", "Local market clarity", "Lower entry risk"],
    deliverables: [
      "Sector research briefs",
      "Competitor scans",
      "Customer and market analysis",
      "Opportunity reports",
    ],
    process: ["Research scope", "Data gathering", "Analysis", "Decision-ready reporting"],
    industries: ["Trade", "Technology", "Consumer Markets", "Energy"],
  },
  {
    slug: "cloud-migration-consulting",
    name: "Cloud Migration Consulting",
    company: "zknl",
    pillar: "IT Consulting",
    summary:
      "Cloud transition planning for infrastructure modernisation, application migration, security posture, and operational continuity.",
    outcomes: ["Resilient infrastructure", "Modern operations", "Security and scalability"],
    deliverables: [
      "Migration roadmap",
      "Architecture review",
      "Risk and dependency mapping",
      "Governance recommendations",
    ],
    process: ["Assessment", "Target architecture", "Migration planning", "Optimisation"],
    industries: ["SMEs", "Energy", "Professional Services", "Commerce"],
  },
  {
    slug: "nigeria-market-entry-facilitation",
    name: "Nigeria Market Entry Facilitation",
    company: "zknl",
    pillar: "Business Facilitation",
    summary:
      "Advisory support for international businesses entering Nigeria through local positioning, partner alignment, and execution readiness.",
    outcomes: ["Faster market readiness", "Stronger local footing", "Reduced operational uncertainty"],
    deliverables: [
      "Entry-readiness advisory",
      "Local ecosystem mapping",
      "Go-to-market support",
      "Stakeholder coordination",
    ],
    process: ["Market diagnosis", "Entry strategy", "Partner mapping", "Execution support"],
    industries: ["International Trade", "Technology", "Energy", "Industrial Services"],
  },
  {
    slug: "international-partnership-contract-facilitation",
    name: "International Partnership & Contract Facilitation",
    company: "zknl",
    pillar: "Business Facilitation",
    summary:
      "Commercial facilitation for partnerships, deal structuring support, local alignment, and business relationship development.",
    outcomes: ["Stronger partnerships", "Clearer engagement structure", "Cross-border deal support"],
    deliverables: [
      "Partner identification support",
      "Engagement coordination",
      "Commercial documentation support",
      "Transaction workflow assistance",
    ],
    process: ["Requirement mapping", "Counterparty alignment", "Commercial coordination", "Follow-through"],
    industries: ["Trade", "Energy", "Technology", "International Business"],
  },
  {
    slug: "petroleum-products-marketing-distribution",
    name: "Petroleum Products Marketing & Distribution",
    company: "zcml",
    pillar: "Downstream",
    summary:
      "Commercial support across petroleum products marketing, supply coordination, and distribution-oriented business operations.",
    outcomes: ["Market presence", "Commercial execution", "Supply coordination"],
    deliverables: [
      "Commercial support",
      "Distribution coordination",
      "Business development materials",
      "Stakeholder engagement workflows",
    ],
    process: ["Commercial planning", "Route-to-market alignment", "Execution support", "Reporting"],
    industries: ["Energy", "Industrial Buyers", "Transport", "Bulk Trade"],
  },
  {
    slug: "abandoned-well-analysis-revival",
    name: "Abandoned Well Analysis & Revival",
    company: "zcml",
    pillar: "Upstream",
    summary:
      "Preliminary technical-commercial review support for abandoned well opportunities, recovery potential, and revival positioning.",
    outcomes: ["Asset opportunity visibility", "Screening clarity", "Revival support positioning"],
    deliverables: [
      "Opportunity review framework",
      "Technical-commercial analysis support",
      "Revival positioning documents",
      "Stakeholder briefing materials",
    ],
    process: ["Asset review", "Opportunity assessment", "Risk framing", "Revival support path"],
    industries: ["Upstream", "Field Services", "Investors", "Technical Partners"],
  },
  {
    slug: "lng-sector-vendor-services",
    name: "LNG Sector Vendor Services",
    company: "zcml",
    pillar: "Oil & Gas Services",
    summary:
      "Vendor-facing support for LNG sector opportunities, onboarding readiness, proposal support, and commercial participation.",
    outcomes: ["Vendor readiness", "Stronger proposals", "Sector access support"],
    deliverables: [
      "Vendor capability positioning",
      "Bid support materials",
      "Engagement coordination",
      "Opportunity readiness assistance",
    ],
    process: ["Capability review", "Opportunity alignment", "Proposal support", "Engagement follow-through"],
    industries: ["LNG", "Industrial Services", "Supply Chain", "Energy Vendors"],
  },
  {
    slug: "oil-gas-it-consulting",
    name: "Oil & Gas IT Consulting",
    company: "zcml",
    pillar: "Oil & Gas Services",
    summary:
      "Digital, reporting, workflow, and systems consulting tailored to oil and gas operating environments and service firms.",
    outcomes: ["Better workflows", "Sector-specific digitisation", "Operational visibility"],
    deliverables: [
      "Digital workflow mapping",
      "Data and reporting structure",
      "Operational system recommendations",
      "Process modernisation support",
    ],
    process: ["Current-state review", "Workflow redesign", "Implementation roadmap", "Performance visibility"],
    industries: ["Upstream", "Downstream", "Service Companies", "Engineering"],
  },
  {
    slug: "regulatory-compliance-support",
    name: "Regulatory Compliance Support",
    company: "zcml",
    pillar: "Oil & Gas Services",
    summary:
      "Support for regulatory readiness, documentation alignment, compliance coordination, and structured operating discipline.",
    outcomes: ["Stronger compliance posture", "Better documentation readiness", "Reduced operational friction"],
    deliverables: [
      "Compliance checklists",
      "Documentation coordination",
      "Readiness support",
      "Regulatory process guidance",
    ],
    process: ["Compliance review", "Gap identification", "Documentation support", "Readiness tracking"],
    industries: ["Oil & Gas", "Energy Vendors", "Industrial Services", "Trading"],
  },
];

const industries = [
  { name: "Oil & Gas", icon: Fuel },
  { name: "Technology & Digital", icon: Cpu },
  { name: "International Trade", icon: Globe2 },
  { name: "Professional Services", icon: Briefcase },
  { name: "Industrial & Infrastructure", icon: Factory },
  { name: "Public & Regulatory Stakeholders", icon: Landmark },
];

const insights = [
  {
    title: "AI Outsourcing Models for High-Growth Nigerian Businesses",
    category: "Technology",
    date: "March 2026",
    excerpt:
      "How structured AI-enabled service models improve speed, support quality, and commercial efficiency.",
  },
  {
    title: "Commercial Readiness in Nigeria’s LNG Vendor Ecosystem",
    category: "Energy",
    date: "March 2026",
    excerpt:
      "Positioning vendors for stronger participation through capability visibility and better engagement workflows.",
  },
  {
    title: "Entering Nigeria with the Right Local Business Facilitation Layer",
    category: "Market Entry",
    date: "March 2026",
    excerpt:
      "Why local coordination, stakeholder mapping, and execution support matter for market entry success.",
  },
];

const stats = [
  { label: "Corporate Group", value: "1" },
  { label: "Specialised Companies", value: "2" },
  { label: "Service Lines", value: "12" },
  { label: "Market Focus", value: "Nigeria + International" },
];

const nav = [
  { key: "home", label: "Home" },
  { key: "about", label: "About the Group" },
  { key: "companies", label: "Our Companies" },
  { key: "services", label: "Services" },
  { key: "industries", label: "Industries" },
  { key: "insights", label: "Insights / News" },
  { key: "contact", label: "Contact" },
];

const sectionTitle = (eyebrow, title, copy) => (
  <div className="max-w-3xl space-y-4">
    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">{eyebrow}</p>
    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
    <p className="text-base leading-7 text-slate-300">{copy}</p>
  </div>
);

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-300/30 to-slate-800 shadow-[0_0_30px_rgba(251,191,36,0.12)]">
        <span className="text-lg font-semibold tracking-wider text-amber-300">ZG</span>
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200">Zeberike Group</p>
        <p className="text-xs text-slate-400">Nigeria-led • International-facing</p>
      </div>
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
      {children}
    </span>
  );
}

function Button({ children, variant = "primary", onClick, className = "", href }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-amber-400 text-slate-950 hover:bg-amber-300"
      : variant === "ghost"
      ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
      : "bg-white text-slate-950 hover:bg-slate-100";

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}

function Surface({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}

function Input({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-amber-400/40"
    />
  );
}

function Select({ children }) {
  return (
    <select className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none focus:border-amber-400/40">
      {children}
    </select>
  );
}

function TextArea({ placeholder }) {
  return (
    <textarea
      rows={5}
      placeholder={placeholder}
      className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-amber-400/40"
    />
  );
}

export default function ZeberikeGroupCorporateSite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState("home");

  const serviceMap = useMemo(
    () => Object.fromEntries(services.map((service) => [service.slug, service])),
    []
  );

  const groupedServices = useMemo(() => {
    return companies.map((company) => ({
      ...company,
      services: services.filter((service) => service.company === company.key),
    }));
  }, []);

  const go = (next) => {
    setPage(next);
    setMobileOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderHome = () => (
    <div className="space-y-8 pb-16">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(56,189,248,0.12),_transparent_22%),linear-gradient(180deg,_rgba(15,23,42,1),_rgba(2,6,23,1))] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-7">
            <div className="flex flex-wrap gap-2">
              <Pill>Premium Corporate Identity</Pill>
              <Pill>Nigeria-led Business Group</Pill>
              <Pill>Technology + Energy</Pill>
            </div>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                A modern Nigerian business group built for <span className="text-amber-300">technology, energy, market access,</span> and execution.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                ZEBERIKE GROUP unites two specialised companies under one premium corporate identity — delivering AI-enabled services, business facilitation, oil & gas support, and regulatory-facing execution for local and international clients.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => go("consultation")}>Request Consultation <ArrowRight className="h-4 w-4" /></Button>
              <Button variant="ghost" onClick={() => go("services")}>Explore Services</Button>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-3 sm:grid-cols-4">
              {stats.map((item) => (
                <Surface key={item.label} className="p-4">
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
                </Surface>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-4"
          >
            {groupedServices.map((company) => (
              <Surface key={company.key} className="overflow-hidden p-0">
                <div className={`bg-gradient-to-r ${company.accent} p-6`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-300">{company.rc}</p>
                      <h3 className="text-xl font-semibold text-white">{company.name}</h3>
                      <p className="text-sm text-slate-300">{company.descriptor}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-3 text-amber-300">
                      {company.key === "zknl" ? <Cpu className="h-5 w-5" /> : <Fuel className="h-5 w-5" />}
                    </div>
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <p className="text-sm leading-7 text-slate-300">{company.heroCopy}</p>
                  <div className="flex flex-wrap gap-2">
                    {company.services.slice(0, 3).map((service) => (
                      <Pill key={service.slug}>{service.name}</Pill>
                    ))}
                  </div>
                  <button
                    onClick={() => go("companies")}
                    className="inline-flex items-center gap-2 text-sm font-medium text-amber-300"
                  >
                    View division details <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </Surface>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Surface className="p-8">
          {sectionTitle(
            "Group Overview",
            "One parent identity with two distinct specialist companies.",
            "The website architecture is built to clarify the group structure, separate the divisions cleanly, and route enquiries according to service line, operating focus, and client need."
          )}
        </Surface>
        <div className="grid gap-6 md:grid-cols-2">
          {groupedServices.map((company) => (
            <Surface key={company.key} className="p-7">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{company.rc}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{company.short}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{company.label}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {company.services.map((service) => (
                  <button
                    key={service.slug}
                    onClick={() => go(service.slug)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 transition hover:bg-white/10"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </Surface>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        {sectionTitle(
          "Services",
          "Twelve service lines organised for clarity, trust, and conversion.",
          "Every service has a dedicated landing page to support SEO, lead qualification, and clear routing between the technology/business division and the oil & gas division."
        )}
        <div className="grid gap-6 xl:grid-cols-2">
          {groupedServices.map((company) => (
            <Surface key={company.key} className="p-7">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{company.label}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{company.short}</h3>
                </div>
                <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
                  {company.services.length} services
                </span>
              </div>
              <div className="grid gap-4">
                {company.services.map((service) => (
                  <button
                    key={service.slug}
                    onClick={() => go(service.slug)}
                    className="group rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-left transition hover:border-amber-400/30 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.26em] text-slate-500">{service.pillar}</p>
                        <h4 className="mt-2 text-lg font-medium text-white">{service.name}</h4>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{service.summary}</p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 text-slate-500 transition group-hover:text-amber-300" />
                    </div>
                  </button>
                ))}
              </div>
            </Surface>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Surface className="p-8">
          {sectionTitle(
            "Why ZEBERIKE GROUP",
            "A serious, premium identity designed for credibility in Nigeria and confidence abroad.",
            "The positioning framework combines market proximity, service specificity, premium visual design, and a structure that helps clients immediately understand where to engage."
          )}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, title: "Clear Corporate Structure", copy: "Parent group identity with explicit division-level positioning." },
              { icon: Handshake, title: "Lead Routing by Need", copy: "Consultation pathways mapped to company and service line." },
              { icon: Globe2, title: "International-facing", copy: "Built for local execution and global commercial conversations." },
              { icon: LineChart, title: "Premium Market Perception", copy: "High-end design language instead of commodity template styling." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                <item.icon className="h-5 w-5 text-amber-300" />
                <h3 className="mt-4 text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.copy}</p>
              </div>
            ))}
          </div>
        </Surface>

        <Surface className="p-8">
          {sectionTitle(
            "Industries Served",
            "Sector coverage across technology, trade, and energy value chains.",
            "The platform is structured to speak to operating buyers, strategic partners, investors, and international businesses seeking capable Nigerian execution partners."
          )}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {industries.map((item) => (
              <div key={item.name} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                <item.icon className="h-5 w-5 text-amber-300" />
                <p className="mt-4 font-medium text-white">{item.name}</p>
              </div>
            ))}
          </div>
        </Surface>
      </section>

      <section className="space-y-6">
        {sectionTitle(
          "Authority Block",
          "Compact proof architecture that reinforces trust at a glance.",
          "This module can later connect to real data, awards, partner logos, certifications, client sectors, and downloadable profile materials."
        )}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: Building2, label: "Registered Companies", value: "2" },
            { icon: Workflow, label: "Service Landing Pages", value: "12" },
            { icon: Globe2, label: "Market Scope", value: "Nigeria + International" },
            { icon: FileText, label: "Lead Paths", value: "Company + Service Routed" },
          ].map((item) => (
            <Surface key={item.label} className="p-6">
              <item.icon className="h-5 w-5 text-amber-300" />
              <p className="mt-6 text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-slate-400">{item.label}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          {sectionTitle(
            "Insights / News",
            "Thought leadership and sector-facing updates.",
            "A structured insight system supports SEO, authority building, and ongoing corporate activity visibility."
          )}
          <Button variant="ghost" onClick={() => go("insights")}>View all insights</Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {insights.map((item) => (
            <Surface key={item.title} className="p-6">
              <Pill>{item.category}</Pill>
              <h3 className="mt-5 text-xl font-medium text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
                <span>{item.date}</span>
                <button className="text-amber-300">Read more</button>
              </div>
            </Surface>
          ))}
        </div>
      </section>

      <section>
        <Surface className="overflow-hidden p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">Request Consultation</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Route your enquiry to the right company, the right service line, and the right conversation.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                The consultation system is designed for qualified lead capture, clearer client intent, and better internal handling across both business divisions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => go("consultation")}>Request Consultation</Button>
                <Button variant="ghost" onClick={() => go("downloads")}>Download Company Profile</Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Surface className="p-5">
                <MessageCircle className="h-5 w-5 text-amber-300" />
                <h3 className="mt-4 text-lg font-medium text-white">WhatsApp CTA</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">Fast contact path for inbound commercial enquiries.</p>
              </Surface>
              <Surface className="p-5">
                <BarChart3 className="h-5 w-5 text-amber-300" />
                <h3 className="mt-4 text-lg font-medium text-white">Analytics-ready</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">Structured for events, funnels, and source attribution.</p>
              </Surface>
            </div>
          </div>
        </Surface>
      </section>
    </div>
  );

  const renderAbout = () => (
    <div className="space-y-8">
      <Surface className="p-8 sm:p-10">
        {sectionTitle(
          "About the Group",
          "A dual-division corporate group built around capability, trust, and execution.",
          "ZEBERIKE GROUP is positioned as the parent corporate identity for two specialised Nigerian companies serving distinct but complementary markets across AI-enabled services, business facilitation, oil & gas support, and regulatory-facing operations."
        )}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { title: "Parent Identity", copy: "A unified brand system that houses both companies without collapsing their distinct service positioning." },
            { title: "Operational Clarity", copy: "Every page, CTA, and lead path signals which company owns which capability." },
            { title: "Premium Presentation", copy: "Built to inspire confidence among Nigerian and international business stakeholders." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
            </div>
          ))}
        </div>
      </Surface>
      <div className="grid gap-6 lg:grid-cols-2">
        {groupedServices.map((company) => (
          <Surface key={company.key} className="p-7">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{company.rc}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{company.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{company.heroCopy}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {company.services.map((service) => (
                <Pill key={service.slug}>{service.name}</Pill>
              ))}
            </div>
          </Surface>
        ))}
      </div>
    </div>
  );

  const renderCompanies = () => (
    <div className="space-y-6">
      {groupedServices.map((company) => (
        <Surface key={company.key} className="p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-400">{company.rc}</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white">{company.name}</h2>
              <p className="text-base leading-7 text-slate-300">{company.descriptor}</p>
              <p className="text-sm leading-7 text-slate-300">{company.heroCopy}</p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => go("consultation")}>Consult this division</Button>
                <Button variant="ghost" onClick={() => go("downloads")}>View profile materials</Button>
              </div>
            </div>
            <div className="grid gap-4">
              {company.services.map((service) => (
                <button
                  key={service.slug}
                  onClick={() => go(service.slug)}
                  className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-left transition hover:border-amber-400/30 hover:bg-white/[0.04]"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{service.pillar}</p>
                  <h3 className="mt-2 text-lg font-medium text-white">{service.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{service.summary}</p>
                </button>
              ))}
            </div>
          </div>
        </Surface>
      ))}
    </div>
  );

  const renderServices = () => (
    <div className="space-y-8">
      <Surface className="p-8 sm:p-10">
        {sectionTitle(
          "Service Architecture",
          "Dedicated landing pages for all 12 services.",
          "The service layer is intentionally separated by company to improve SEO, lead qualification, and user understanding. Each service page can later support sector case studies, FAQs, downloadable materials, and conversion forms."
        )}
      </Surface>
      {groupedServices.map((company) => (
        <div key={company.key} className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400">{company.label}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{company.name}</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {company.services.map((service) => (
              <Surface key={service.slug} className="p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{service.pillar}</p>
                <h3 className="mt-2 text-xl font-medium text-white">{service.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.outcomes.map((outcome) => (
                    <Pill key={outcome}>{outcome}</Pill>
                  ))}
                </div>
                <button onClick={() => go(service.slug)} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber-300">
                  Open service page <ArrowRight className="h-4 w-4" />
                </button>
              </Surface>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderIndustries = () => (
    <div className="space-y-8">
      <Surface className="p-8 sm:p-10">
        {sectionTitle(
          "Industries",
          "Sector-specific positioning for credibility and relevance.",
          "The site should speak to different buying contexts — corporate growth, market entry, vendor readiness, sector digitisation, oil & gas operations, and compliance-facing execution."
        )}
      </Surface>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((item) => (
          <Surface key={item.name} className="p-7">
            <item.icon className="h-6 w-6 text-amber-300" />
            <h3 className="mt-5 text-xl font-medium text-white">{item.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Content, proof points, and CTAs can be tailored per industry to create more relevant entry points for prospects.
            </p>
          </Surface>
        ))}
      </div>
    </div>
  );

  const renderInsights = () => (
    <div className="space-y-8">
      <Surface className="p-8 sm:p-10">
        {sectionTitle(
          "Insights / News",
          "A premium thought leadership layer for visibility and authority.",
          "The insights system is structured for article cards, category filtering, featured posts, and long-form article templates."
        )}
      </Surface>
      <div className="grid gap-6 xl:grid-cols-3">
        {insights.map((item) => (
          <Surface key={item.title} className="p-6">
            <div className="flex items-center justify-between gap-4">
              <Pill>{item.category}</Pill>
              <span className="text-xs text-slate-500">{item.date}</span>
            </div>
            <h3 className="mt-5 text-xl font-medium text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.excerpt}</p>
            <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber-300">
              Read article <ArrowRight className="h-4 w-4" />
            </button>
          </Surface>
        ))}
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <Surface className="p-8 sm:p-10">
        {sectionTitle(
          "Contact",
          "Corporate contact, consultation intake, and direct business routing.",
          "This page supports general enquiries, direct division-level contact, WhatsApp CTA, and a structured request flow for new consultations."
        )}
        <div className="mt-8 space-y-5 text-sm text-slate-300">
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-4 w-4 text-amber-300" />
            <div>
              <p className="font-medium text-white">Email</p>
              <p>info@zeberikegroup.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-4 w-4 text-amber-300" />
            <div>
              <p className="font-medium text-white">Phone / WhatsApp</p>
              <p>Nigeria: +234 802 352 1941</p>
              <p>International (Germany): +49 176 405 54575</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-4 w-4 text-amber-300" />
            <div>
              <p className="font-medium text-white">Operating Focus</p>
              <p>Nigeria with international business reach</p>
            </div>
          </div>
        </div>
      </Surface>

      <Surface className="p-8 sm:p-10">
        <div className="space-y-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400">General Enquiry</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Send a message</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="Full name" />
            <Input placeholder="Company name" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="Email address" type="email" />
            <Input placeholder="Phone number" />
          </div>
          <Select>
            <option>Select company</option>
            {companies.map((company) => (
              <option key={company.key}>{company.name}</option>
            ))}
          </Select>
          <Select>
            <option>Select service</option>
            {services.map((service) => (
              <option key={service.slug}>{service.name}</option>
            ))}
          </Select>
          <TextArea placeholder="Project details or business need" />
          <div className="flex flex-wrap gap-3">
            <Button>Submit enquiry</Button>
            <Button variant="ghost" href="https://wa.me/4917640554575?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services">WhatsApp us</Button>
          </div>
        </div>
      </Surface>
    </div>
  );

  const renderDownloads = () => (
    <div className="space-y-8">
      <Surface className="p-8 sm:p-10">
        {sectionTitle(
          "Company Profile / Downloads",
          "Structured download page for company profile materials.",
          "This area can host PDF company profiles, service brochures, capability decks, and division-specific documents with analytics tracking on downloads."
        )}
      </Surface>
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          { title: "Group Company Profile", meta: "Parent identity overview, both divisions, service map" },
          { title: "Zebedee Korie Nig Ltd Profile", meta: "IT consulting, digital services, business facilitation" },
          { title: "Zeberike Crude Oil Marketing Nig Ltd Profile", meta: "Oil & gas services, upstream, downstream support" },
        ].map((item) => (
          <Surface key={item.title} className="p-6">
            <Download className="h-5 w-5 text-amber-300" />
            <h3 className="mt-5 text-xl font-medium text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.meta}</p>
            <Button className="mt-6 w-full">Download PDF</Button>
          </Surface>
        ))}
      </div>
    </div>
  );

  const renderConsultation = () => (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <Surface className="p-8 sm:p-10">
        {sectionTitle(
          "Request Consultation",
          "Qualified lead capture for both divisions and all service lines.",
          "The consultation page is designed to capture business intent, route enquiries intelligently, and support follow-up with the correct internal context."
        )}
        <div className="mt-8 space-y-4">
          {[
            "Route by company and service",
            "Capture business need and timeline",
            "Enable internal lead tagging",
            "Support future CRM or CMS integration",
          ].map((point) => (
            <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-300">
              <ShieldCheck className="h-4 w-4 text-amber-300" /> {point}
            </div>
          ))}
        </div>
      </Surface>

      <Surface className="p-8 sm:p-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input placeholder="Full name" />
          <Input placeholder="Organisation" />
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Input placeholder="Email address" type="email" />
          <Input placeholder="Phone / WhatsApp" />
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Select>
            <option>Preferred company</option>
            {companies.map((company) => (
              <option key={company.key}>{company.name}</option>
            ))}
          </Select>
          <Select>
            <option>Service line</option>
            {services.map((service) => (
              <option key={service.slug}>{service.name}</option>
            ))}
          </Select>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Select>
            <option>Industry</option>
            {industries.map((industry) => (
              <option key={industry.name}>{industry.name}</option>
            ))}
          </Select>
          <Select>
            <option>Project timeline</option>
            <option>Immediate</option>
            <option>Within 30 days</option>
            <option>Within 90 days</option>
            <option>Exploratory</option>
          </Select>
        </div>
        <div className="mt-4">
          <TextArea placeholder="Describe the project, deal, operational need, or support you require" />
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button>Request consultation</Button>
          <Button variant="ghost" href="https://wa.me/4917640554575?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services">WhatsApp consultation</Button>
        </div>
      </Surface>
    </div>
  );

  const renderPrivacy = () => (
    <Surface className="p-8 sm:p-10">
      {sectionTitle(
        "Privacy Policy",
        "Privacy, data handling, and enquiry processing.",
        "This placeholder page is designed for formal legal copy covering data collection, contact forms, cookies, analytics, enquiry handling, and user rights."
      )}
      <div className="mt-8 space-y-4 text-sm leading-7 text-slate-300">
        <p>Sections should include: information collected, legal basis, data retention, cookies and analytics, enquiry handling, downloads, marketing communications, and contact rights.</p>
        <p>Recommended production note: final legal text should be reviewed for the operating jurisdictions and actual website tooling used.</p>
      </div>
    </Surface>
  );

  const renderTerms = () => (
    <Surface className="p-8 sm:p-10">
      {sectionTitle(
        "Terms & Conditions",
        "Commercial website terms and usage framework.",
        "This placeholder page supports formal website terms including permitted use, service information disclaimer, intellectual property, downloads, external links, and limitation language."
      )}
      <div className="mt-8 space-y-4 text-sm leading-7 text-slate-300">
        <p>Sections should include: acceptance of terms, use restrictions, service information, liability framework, intellectual property, submission of enquiries, and governing law.</p>
        <p>Recommended production note: final legal text should align with the final business model, forms stack, and analytics configuration.</p>
      </div>
    </Surface>
  );

  const renderServicePage = (service) => {
    const company = companies.find((item) => item.key === service.company);

    return (
      <div className="space-y-8">
        <Surface className="overflow-hidden p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <Pill>{company.name}</Pill>
                <Pill>{company.rc}</Pill>
                <Pill>{service.pillar}</Pill>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">Service Landing Page</p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{service.name}</h1>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-300">{service.summary}</p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => go("consultation")}>Request Consultation</Button>
                <Button variant="ghost" onClick={() => go("services")}>Back to Services</Button>
              </div>
            </div>
            <Surface className="p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Division</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{company.short}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{company.descriptor}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.industries.map((industry) => (
                  <Pill key={industry}>{industry}</Pill>
                ))}
              </div>
            </Surface>
          </div>
        </Surface>

        <div className="grid gap-6 lg:grid-cols-3">
          <Surface className="p-6 lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-400">Expected Outcomes</p>
            <div className="mt-5 space-y-3">
              {service.outcomes.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </Surface>

          <Surface className="p-6 lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-400">Deliverables</p>
            <div className="mt-5 space-y-3">
              {service.deliverables.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </Surface>

          <Surface className="p-6 lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-400">Process</p>
            <div className="mt-5 space-y-3">
              {service.process.map((item, index) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-200">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[11px] font-semibold text-slate-950">{index + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Surface>
        </div>

        <Surface className="p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-amber-400">Conversion</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Discuss {service.name.toLowerCase()} with ZEBERIKE GROUP</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                This service page is structured to support premium positioning, search visibility, and qualified enquiry capture without blurring the distinction between the two corporate divisions.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button onClick={() => go("consultation")}>Request Consultation</Button>
              <Button variant="ghost" onClick={() => go("contact")}>Contact Team</Button>
            </div>
          </div>
        </Surface>
      </div>
    );
  };

  const currentContent = () => {
    if (serviceMap[page]) return renderServicePage(serviceMap[page]);

    switch (page) {
      case "about":
        return renderAbout();
      case "companies":
        return renderCompanies();
      case "services":
        return renderServices();
      case "industries":
        return renderIndustries();
      case "insights":
        return renderInsights();
      case "contact":
        return renderContact();
      case "downloads":
        return renderDownloads();
      case "consultation":
        return renderConsultation();
      case "privacy":
        return renderPrivacy();
      case "terms":
        return renderTerms();
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-40 mb-6 rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <button onClick={() => go("home")} className="text-left">
              <BrandMark />
            </button>

            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => (
                <button
                  key={item.key}
                  onClick={() => go(item.key)}
                  className={`rounded-xl px-4 py-2 text-sm transition ${page === item.key ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Button variant="ghost" onClick={() => go("downloads")}>Company Profile</Button>
              <Button onClick={() => go("consultation")}>Request Consultation</Button>
            </div>

            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
                  {nav.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => go(item.key)}
                      className="rounded-xl px-4 py-3 text-left text-sm text-slate-200 hover:bg-white/5"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="grid gap-2 pt-2 sm:grid-cols-2">
                    <Button variant="ghost" onClick={() => go("downloads")}>Company Profile</Button>
                    <Button onClick={() => go("consultation")}>Request Consultation</Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <AnimatePresence mode="wait">
          <motion.main
            key={page}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
          >
            {currentContent()}
          </motion.main>
        </AnimatePresence>

        <footer className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-10 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr_1fr_0.9fr]">
            <div className="space-y-4">
              <BrandMark />
              <p className="max-w-sm text-sm leading-7 text-slate-400">
                Nigerian-led business group with two specialised companies and twelve routed service lines.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Group</p>
              <div className="mt-4 grid gap-2 text-sm text-slate-400">
                <button onClick={() => go("about")} className="text-left hover:text-white">About the Group</button>
                <button onClick={() => go("companies")} className="text-left hover:text-white">Our Companies</button>
                <button onClick={() => go("services")} className="text-left hover:text-white">Services</button>
                <button onClick={() => go("industries")} className="text-left hover:text-white">Industries</button>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Resources</p>
              <div className="mt-4 grid gap-2 text-sm text-slate-400">
                <button onClick={() => go("insights")} className="text-left hover:text-white">Insights / News</button>
                <button onClick={() => go("downloads")} className="text-left hover:text-white">Company Profile</button>
                <button onClick={() => go("privacy")} className="text-left hover:text-white">Privacy Policy</button>
                <button onClick={() => go("terms")} className="text-left hover:text-white">Terms & Conditions</button>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Contact</p>
              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <p>info@zeberike.com</p>
                <p>+234 802 352 1941</p>
                <p>Nigeria • International Reach</p>
              </div>
              <Button className="mt-5 w-full" onClick={() => go("consultation")}>Request Consultation</Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
