import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Clock,
  FileText,
  ShieldCheck,
  Wrench,
  Building2,
  Factory,
  UtensilsCrossed,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ClipboardCheck,
  HardHat,
  Calendar,
  Camera,
  Hammer,
  Layers,
  Droplets,
  AlertTriangle,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";

// Single-file, production-style homepage mock for The Trenchless Co.
// Swap placeholder phone/email/licensing and connect your form handler.

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function SectionHeader({
  kicker,
  title,
  desc,
  align = "left",
}: {
  kicker: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}> 
      <div className="text-sm tracking-wide text-neutral-400">{kicker}</div>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {desc ? <p className="mt-3 text-neutral-300">{desc}</p> : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-900/70 px-3 py-1 text-xs text-neutral-200 ring-1 ring-neutral-800">
      {children}
    </span>
  );
}

function AnchorLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="rounded-xl px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white"
    >
      {children}
    </a>
  );
}

export default function TrenchlessCoSite() {
  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.08 * i, ease: "easeOut" },
    }),
  };

  const phone = "(520) 000-0000"; // TODO
  const phonePhx = "(602) 000-0000"; // TODO
  const email = "bids@thetrenchlessco.com"; // TODO
  const roc = "ROC #XXXXXX"; // TODO

  const [market, setMarket] = useState<"Tucson" | "Phoenix">("Tucson");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    market: "",
    projectType: "Commercial",
    message: "",
  });

  const marketPhone = market === "Tucson" ? phone : phonePhx;

  const industries = useMemo(
    () => [
      {
        icon: Building2,
        title: "Commercial & Property Management",
        desc: "Portfolio-friendly rehab with defined scope and closeout documentation.",
      },
      {
        icon: UtensilsCrossed,
        title: "Restaurants & Hospitality",
        desc: "Live bypass and sequencing to keep doors open and protect revenue.",
      },
      {
        icon: Factory,
        title: "Industrial & Facilities",
        desc: "Planning-first execution for plants, warehouses, and critical infrastructure.",
      },
      {
        icon: HardHat,
        title: "GC Subcontracting",
        desc: "COI/W-9 ready, schedule support, site walks, and clean handoffs.",
      },
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        title: "Trenchless Sewer Relining (CIPP)",
        icon: Layers,
        bullets: [
          "Structural rehabilitation for compromised sewer lines",
          "Defined start-to-finish scope (Point A → Point B)",
          "Reinstatements, testing, and post-video verification",
        ],
        tags: ["Commercial", "Residential", "GC Sub"],
      },
      {
        title: "Pipe Cleaning & Preparation",
        icon: Wrench,
        bullets: [
          "Cast iron descaling + diameter restoration",
          "Root removal + debris extraction",
          "Camera verification before rehab",
        ],
        tags: ["Commercial", "Restaurants", "Industrial"],
      },
      {
        title: "Epoxy Coating (Targeted)",
        icon: Droplets,
        bullets: [
          "Corrosion protection & flow improvement",
          "Access-based scope (cleanout-to-connection)",
          "Documentation and warranty language available",
        ],
        tags: ["Commercial", "Residential"],
      },
      {
        title: "Live Bypass Pumping (As Needed)",
        icon: AlertTriangle,
        bullets: [
          "Keep facilities operational during rehab",
          "Sequencing with GC schedule and safety plan",
          "Risk-managed setup and monitoring",
        ],
        tags: ["Restaurants", "Industrial", "GC Sub"],
      },
      {
        title: "Commercial Camera Inspections",
        icon: Camera,
        bullets: [
          "Pre-bid video + findings",
          "Locate, map, and document line condition",
          "Budgetary options for rehab vs excavation",
        ],
        tags: ["Commercial", "GC Sub", "Property Mgmt"],
      },
      {
        title: "Spot Repair & Access (When Required)",
        icon: Hammer,
        bullets: [
          "Minimal excavation to create proper access",
          "Transition repairs and connection integrity",
          "Restore surfaces per scope (as contracted)",
        ],
        tags: ["Commercial", "Residential"],
      },
    ],
    []
  );

  const process = useMemo(
    () => [
      { n: "01", title: "Assess", desc: "Camera, locate, and confirm rehab strategy." },
      { n: "02", title: "Plan", desc: "Define scope, access points, sequencing, and safety." },
      { n: "03", title: "Execute", desc: "Prep, rehabilitate, reinstate, and verify." },
      { n: "04", title: "Close Out", desc: "Deliver video, photos, and a simple report." },
    ],
    []
  );

  const proof = useMemo(
    () => [
      {
        title: "Restaurant Sewer Rehab (Live Bypass)",
        label: "Case Study",
        bullets: [
          "Kept doors open during high-volume service",
          "Defined sequencing with management",
          "Pre/post video closeout for records",
        ],
      },
      {
        title: "Multi-Tenant Retail Mainline Rehab",
        label: "Portfolio",
        bullets: [
          "Reduced future backups across multiple units",
          "Rehab plan with phased execution",
          "Documentation package for PM team",
        ],
      },
      {
        title: "GC Subcontract Scope Support",
        label: "GC Partner",
        bullets: [
          "Budgetary quote from plans + video",
          "Site walk and schedule coordination",
          "COI/W-9 and closeout deliverables",
        ],
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "Do you work residential and commercial in both Tucson and Phoenix?",
        a: "Yes. We serve Tucson and Phoenix with commercial, restaurants, and residential rehab — with a focus on trenchless solutions and documentation.",
      },
      {
        q: "Are you set up for GC subcontracting?",
        a: "Yes. COI/W-9 available, site walks, sequencing support, and clean closeout packages. We can support bids with scope language and budgetary numbers.",
      },
      {
        q: "Can you keep a restaurant open during repairs?",
        a: "Often, yes. When required, we can plan live bypass pumping and sequencing to reduce downtime and protect operations.",
      },
      {
        q: "How do you prove the work was completed?",
        a: "We document with pre/post video, photos, and a simple closeout summary so owners, PMs, and GCs have records.",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 border-b border-neutral-800/70 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-neutral-900 ring-1 ring-neutral-800 grid place-items-center">
              <div className="h-3 w-5 rounded-sm bg-gradient-to-r from-neutral-200 to-neutral-500" />
            </div>
            <div className="leading-tight">
              <div className="text-[11px] tracking-widest text-neutral-300">THE</div>
              <div className="text-base font-extrabold tracking-tight sm:text-lg">
                TRENCHLESS <span className="text-red-500">CO.</span>
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-1 lg:flex">
            <AnchorLink href="#services">Services</AnchorLink>
            <AnchorLink href="#industries">Industries</AnchorLink>
            <AnchorLink href="#gc">GC Subcontracting</AnchorLink>
            <AnchorLink href="#case-studies">Case Studies</AnchorLink>
            <AnchorLink href="#faq">FAQ</AnchorLink>
            <AnchorLink href="#contact">Contact</AnchorLink>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
              <Button
                variant={market === "Tucson" ? "default" : "secondary"}
                className={cn(
                  "h-9 rounded-xl px-3",
                  market === "Tucson" ? "bg-red-600 hover:bg-red-500 text-white" : "bg-neutral-900 text-neutral-100 ring-1 ring-neutral-800 hover:bg-neutral-800"
                )}
                onClick={() => setMarket("Tucson")}
              >
                Tucson
              </Button>
              <Button
                variant={market === "Phoenix" ? "default" : "secondary"}
                className={cn(
                  "h-9 rounded-xl px-3",
                  market === "Phoenix" ? "bg-red-600 hover:bg-red-500 text-white" : "bg-neutral-900 text-neutral-100 ring-1 ring-neutral-800 hover:bg-neutral-800"
                )}
                onClick={() => setMarket("Phoenix")}
              >
                Phoenix
              </Button>
            </div>

            <Button
              variant="secondary"
              className="hidden sm:inline-flex bg-neutral-900 text-neutral-100 ring-1 ring-neutral-800 hover:bg-neutral-800"
              onClick={() => {
                const el = document.querySelector("#contact");
                // @ts-ignore
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request a Site Walk
            </Button>
            <Button className="bg-red-600 hover:bg-red-500 text-white" onClick={() => alert(`Call ${marketPhone}`)}>
              Call {market}
            </Button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-600/12 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-[460px] w-[460px] rounded-full bg-neutral-700/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <motion.div className="lg:col-span-7" initial="hidden" animate="visible" variants={fadeUp}>
              <motion.div custom={0} variants={fadeUp} className="flex flex-wrap items-center gap-2">
                <Pill>
                  <ShieldCheck className="mr-2 h-4 w-4 text-red-500" />
                  Pipe Relining & Rehabilitation
                </Pill>
                <Pill>
                  <HardHat className="mr-2 h-4 w-4 text-red-500" />
                  Subcontractor-ready
                </Pill>
                <Pill>
                  <MapPin className="mr-2 h-4 w-4 text-red-500" />
                  {market} + Statewide AZ
                </Pill>
              </motion.div>

              <motion.h1 custom={1} variants={fadeUp} className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Trenchless pipe rehabilitation for residential, commercial, restaurants — and GC subcontracting.
              </motion.h1>

              <motion.p custom={2} variants={fadeUp} className="mt-4 max-w-2xl text-base text-neutral-300 sm:text-lg">
                We rehabilitate sewer and drain infrastructure with defined scope, disciplined field execution, and documentation that holds up for owners, operators, and general contractors.
                When downtime matters, we plan and sequence work to keep operations moving.
              </motion.p>

              <motion.div custom={3} variants={fadeUp} className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  className="bg-red-600 hover:bg-red-500 text-white h-11 px-6"
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    // @ts-ignore
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  className="bg-neutral-900 text-neutral-100 ring-1 ring-neutral-800 hover:bg-neutral-800 h-11 px-6"
                  onClick={() => alert("Hook this button to your Capabilities PDF download.")}
                >
                  Download Capabilities PDF
                </Button>
              </motion.div>

              <motion.div custom={4} variants={fadeUp} className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: FileText, title: "Defined scope", desc: "Clear inclusions, deliverables, and closeout." },
                  { icon: ClipboardCheck, title: "Documentation", desc: "Pre/post video + photos + report." },
                  { icon: Clock, title: "Minimize downtime", desc: "Sequenced execution to protect operations." },
                ].map((it, idx) => (
                  <div key={idx} className="rounded-2xl bg-neutral-900/60 p-4 ring-1 ring-neutral-800">
                    <it.icon className="h-5 w-5 text-red-500" />
                    <div className="mt-2 text-sm font-semibold">{it.title}</div>
                    <div className="mt-1 text-sm text-neutral-300">{it.desc}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: snapshot */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
            >
              <div className="rounded-3xl bg-neutral-900/70 p-6 ring-1 ring-neutral-800">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-neutral-400">PROJECT SNAPSHOT</div>
                    <div className="mt-1 text-lg font-bold">Restaurant Sewer Rehab</div>
                  </div>
                  <Badge className="bg-red-600 text-white hover:bg-red-600">Live Bypass</Badge>
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    { label: "Constraint", value: "No shutdown / high volume" },
                    { label: "Approach", value: "Clean • Prep • Relining • Reinstate" },
                    { label: "Closeout", value: "Video + photos + report" },
                    { label: "Markets", value: "Tucson + Phoenix" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between rounded-2xl bg-neutral-950/60 px-4 py-3 ring-1 ring-neutral-800">
                      <div className="text-xs text-neutral-400">{row.label}</div>
                      <div className="text-sm font-medium text-neutral-100">{row.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-neutral-950/60 p-4 ring-1 ring-neutral-800">
                  <div className="text-xs text-neutral-400">SUBCONTRACTOR READY</div>
                  <div className="mt-2 grid gap-2">
                    {["COI & W-9 available", "Site walk & sequencing", "Safety-first field execution", "Documentation & closeout"].map((t, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-neutral-200">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-500" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* mini trust row */}
          <div className="mt-12 grid gap-3 rounded-3xl bg-neutral-900/40 p-5 ring-1 ring-neutral-800 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Calendar, label: "Site Walks", value: "Fast scheduling" },
              { icon: FileText, label: "Closeout", value: "Video + report" },
              { icon: HardHat, label: "Safety", value: "Plan-driven" },
              { icon: Quote, label: "Bids", value: "Scope support" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 rounded-2xl bg-neutral-950/50 p-4 ring-1 ring-neutral-800">
                <s.icon className="h-5 w-5 text-red-500" />
                <div>
                  <div className="text-xs text-neutral-400">{s.label}</div>
                  <div className="text-sm font-semibold">{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="border-y border-neutral-800/70 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeader
            kicker="WHO WE SERVE"
            title="Built for operations, schedules, and accountability."
            desc="Residential, commercial, restaurants, and GC subcontracting across Tucson and Phoenix — with trenchless-first solutions and documentation." 
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((it, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-2xl bg-neutral-900/60 p-5 ring-1 ring-neutral-800">
                <it.icon className="h-5 w-5 text-red-500" />
                <div>
                  <div className="text-sm font-semibold">{it.title}</div>
                  <div className="mt-1 text-sm text-neutral-300">{it.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl bg-neutral-900/60 p-6 ring-1 ring-neutral-800">
              <div className="text-xs text-neutral-400">RESIDENTIAL</div>
              <div className="mt-2 text-lg font-bold">Long-term sewer rehab without tearing up the property.</div>
              <p className="mt-2 text-sm text-neutral-300">
                For homeowners and residential properties, we focus on trenchless repairs that reduce excavation, protect landscaping,
                and restore reliable flow — with clear before/after proof.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Cast Iron", "Clay", "ABS/PVC transitions", "Root intrusion"].map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-neutral-900/60 p-6 ring-1 ring-neutral-800">
              <div className="text-xs text-neutral-400">COMMERCIAL + RESTAURANTS</div>
              <div className="mt-2 text-lg font-bold">Sequence work to protect uptime and revenue.</div>
              <p className="mt-2 text-sm text-neutral-300">
                We coordinate access, timing, and deliverables for property managers and operators.
                When needed, we plan live bypass and execute in phases to reduce disruption.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Portfolio work", "Live bypass", "Night / off-hours", "Closeout reporting"].map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            kicker="WHAT WE DO"
            title="Trenchless-first services that scale from homes to large commercial projects."
            desc="Clear scope, documentation, and execution — designed for GCs, operators, and owners who need real outcomes." 
          />
          <Button variant="secondary" className="bg-neutral-900 text-neutral-100 ring-1 ring-neutral-800 hover:bg-neutral-800">
            Ask for a Budgetary
          </Button>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, idx) => (
            <Card key={idx} className="bg-neutral-900/60 ring-1 ring-neutral-800 border-0 rounded-3xl">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <svc.icon className="h-5 w-5 text-red-500" />
                      <div className="text-lg font-bold">{svc.title}</div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {svc.tags.map((t) => (
                        <Badge key={t} variant="secondary" className="bg-neutral-950/60 text-neutral-200 ring-1 ring-neutral-800">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="h-9 w-9 rounded-xl bg-neutral-950/60 ring-1 ring-neutral-800 grid place-items-center">
                    <div className="h-2.5 w-4 rounded-sm bg-red-600" />
                  </div>
                </div>

                <div className="mt-4 grid gap-2">
                  {svc.bullets.map((b, i) => (
                    <div key={i} className="flex gap-2 text-sm text-neutral-200">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-500" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex gap-2">
                  <Button
                    className="flex-1 bg-red-600 hover:bg-red-500 text-white"
                    onClick={() => {
                      const el = document.querySelector("#contact");
                      // @ts-ignore
                      el?.scrollIntoView({ behavior: "smooth" });
                      setForm((f) => ({ ...f, projectType: "Service / Scope Request" }));
                    }}
                  >
                    Request Scope
                  </Button>
                  <Button
                    variant="secondary"
                    className="bg-neutral-950/60 text-neutral-100 ring-1 ring-neutral-800 hover:bg-neutral-800"
                    onClick={() => alert("Wire this to a service detail page or modal.")}
                  >
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-neutral-900/40 p-6 ring-1 ring-neutral-800">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-xs text-neutral-400">FAST PATH</div>
              <div className="mt-1 text-lg font-bold">Have video or plans? Email them for a budgetary quote.</div>
              <div className="mt-1 text-sm text-neutral-300">We can respond with questions, scope notes, and a number to keep your job moving.</div>
            </div>
            <Button className="bg-red-600 hover:bg-red-500 text-white" onClick={() => alert(`Email plans to ${email}`)}>
              Email Plans
            </Button>
          </div>
        </div>
      </section>

      {/* GC Subcontracting */}
      <section id="gc" className="border-t border-neutral-800/70 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <SectionHeader
                kicker="GC SUBCONTRACTING"
                title="A trenchless subcontractor that supports your schedule and closeout." 
                desc="We show up prepared, execute cleanly, and hand the job back with documentation. Perfect for commercial TI, retail, restaurants, and facilities." 
              />

              <div className="mt-6 grid gap-3">
                {["COI & W-9 available", "Site walk + sequencing", "Scope language for bids", "Pre/post video closeout"].map((t, i) => (
                  <div key={i} className="flex items-start gap-2 rounded-2xl bg-neutral-900/60 p-4 ring-1 ring-neutral-800">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-500" />
                    <span className="text-sm text-neutral-200">{t}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button className="bg-red-600 hover:bg-red-500 text-white" onClick={() => alert("Hook to Capabilities PDF download.")}
                >
                  Download Capabilities
                </Button>
                <Button
                  variant="secondary"
                  className="bg-neutral-900 text-neutral-100 ring-1 ring-neutral-800 hover:bg-neutral-800"
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    // @ts-ignore
                    el?.scrollIntoView({ behavior: "smooth" });
                    setForm((f) => ({ ...f, projectType: "GC Bid / Subcontract" }));
                  }}
                >
                  Request COI & W-9
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-neutral-900/60 p-7 ring-1 ring-neutral-800">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-neutral-400">BID SUPPORT CHECKLIST</div>
                    <div className="mt-1 text-lg font-bold">What we can provide for your proposal</div>
                  </div>
                  <Badge className="bg-neutral-950/60 text-neutral-200 ring-1 ring-neutral-800">{roc}</Badge>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {["Budgetary pricing", "Scope language", "Sequencing notes", "Access plan", "Safety considerations", "Closeout deliverables"].map(
                    (t, i) => (
                      <div key={i} className="flex items-start gap-2 rounded-2xl bg-neutral-950/60 p-4 ring-1 ring-neutral-800">
                        <ClipboardCheck className="mt-0.5 h-4 w-4 text-red-500" />
                        <span className="text-sm text-neutral-200">{t}</span>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-6 rounded-2xl bg-neutral-950/60 p-4 ring-1 ring-neutral-800">
                  <div className="text-xs text-neutral-400">COMMON PROJECTS</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Retail TI", "Restaurants", "Multi-tenant", "Hotels", "Industrial parks", "HOAs"].map((t) => (
                      <Badge key={t} variant="secondary" className="bg-neutral-900 text-neutral-200 ring-1 ring-neutral-800">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeader
          kicker="PROOF"
          title="Documentation-driven work that holds up to scrutiny."
          desc="Case studies are where you separate from ‘plumbers who also do trenchless.’ Swap these placeholders with your real wins." 
          align="center"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {proof.map((p, i) => (
            <Card key={i} className="bg-neutral-900/60 ring-1 ring-neutral-800 border-0 rounded-3xl">
              <CardContent className="p-6">
                <Badge className="bg-red-600 text-white hover:bg-red-600">{p.label}</Badge>
                <div className="mt-3 text-lg font-bold">{p.title}</div>
                <div className="mt-4 grid gap-2">
                  {p.bullets.map((b, j) => (
                    <div key={j} className="flex gap-2 text-sm text-neutral-200">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-500" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="secondary"
                  className="mt-5 w-full bg-neutral-950/60 text-neutral-100 ring-1 ring-neutral-800 hover:bg-neutral-800"
                  onClick={() => alert("Link this to a dedicated case study page.")}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-neutral-800/70 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                kicker="HOW WE WORK"
                title="A process designed for schedule, safety, and closeout." 
                desc="We collaborate early, document clearly, and execute with a plan that reduces surprises — then deliver proof." 
              />
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button className="bg-red-600 hover:bg-red-500 text-white" onClick={() => alert("Hook to scheduling.")}
                >
                  Schedule a Site Walk
                </Button>
                <Button variant="secondary" className="bg-neutral-900 text-neutral-100 ring-1 ring-neutral-800 hover:bg-neutral-800">
                  Request a Call Back
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 md:grid-cols-2">
                {process.map((step, i) => (
                  <div key={i} className="rounded-3xl bg-neutral-900/60 p-6 ring-1 ring-neutral-800">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-neutral-200">{step.title}</div>
                      <div className="text-xs font-bold text-red-500">{step.n}</div>
                    </div>
                    <div className="mt-2 text-sm text-neutral-300">{step.desc}</div>
                    <div className="mt-4 h-1 w-full rounded-full bg-neutral-800">
                      <div className="h-1 rounded-full bg-red-600" style={{ width: `${(i + 1) * 25}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeader kicker="FAQ" title="Quick answers for owners, operators, and GCs." />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-3xl bg-neutral-900/60 p-6 ring-1 ring-neutral-800">
              <div className="text-sm font-bold">{f.q}</div>
              <div className="mt-2 text-sm text-neutral-300">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-neutral-800/70 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-neutral-900/60 p-8 ring-1 ring-neutral-800">
                <div className="flex items-center gap-2 text-sm text-neutral-200">
                  <MapPin className="h-4 w-4 text-red-500" />
                  Tucson • Phoenix • Statewide AZ
                </div>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight">Send details — we’ll respond with questions and a plan.</h3>
                <p className="mt-2 text-neutral-300">
                  For GCs: include plans/specs and your schedule constraints.
                  For restaurants: include operating hours and any downtime windows.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {["Name", "Company", "Email", "Phone"].map((label) => (
                    <div key={label} className="rounded-2xl bg-neutral-950/60 p-4 ring-1 ring-neutral-800">
                      <div className="text-xs text-neutral-400">{label}</div>
                      <input
                        value={(form as any)[label.toLowerCase()] || ""}
                        onChange={(e) => setForm((f) => ({ ...f, [label.toLowerCase()]: e.target.value }))}
                        className="mt-2 w-full bg-transparent text-sm outline-none placeholder:text-neutral-600"
                        placeholder={label}
                      />
                    </div>
                  ))}

                  <div className="rounded-2xl bg-neutral-950/60 p-4 ring-1 ring-neutral-800">
                    <div className="text-xs text-neutral-400">Market</div>
                    <select
                      value={form.market || market}
                      onChange={(e) => setForm((f) => ({ ...f, market: e.target.value }))}
                      className="mt-2 w-full bg-transparent text-sm outline-none"
                    >
                      <option value="Tucson">Tucson</option>
                      <option value="Phoenix">Phoenix</option>
                      <option value="Statewide">Statewide</option>
                    </select>
                  </div>

                  <div className="rounded-2xl bg-neutral-950/60 p-4 ring-1 ring-neutral-800">
                    <div className="text-xs text-neutral-400">Project Type</div>
                    <select
                      value={form.projectType}
                      onChange={(e) => setForm((f) => ({ ...f, projectType: e.target.value }))}
                      className="mt-2 w-full bg-transparent text-sm outline-none"
                    >
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Restaurants</option>
                      <option>GC Bid / Subcontract</option>
                      <option>Service / Scope Request</option>
                    </select>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl bg-neutral-950/60 p-4 ring-1 ring-neutral-800">
                  <div className="text-xs text-neutral-400">Message</div>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="mt-2 min-h-[110px] w-full resize-none bg-transparent text-sm outline-none placeholder:text-neutral-600"
                    placeholder="Brief scope, constraints, and what you need (quote, site walk, bid support)."
                  />
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button
                    className="bg-red-600 hover:bg-red-500 text-white"
                    onClick={() => alert("Connect this to your form handler / CRM (Housecall Pro, HubSpot, etc.).")}
                  >
                    Submit Request
                  </Button>
                  <Button
                    variant="secondary"
                    className="bg-neutral-950/60 text-neutral-100 ring-1 ring-neutral-800 hover:bg-neutral-800"
                    onClick={() => alert(`Email: ${email}`)}
                  >
                    Email Plans
                  </Button>
                </div>

                <div className="mt-4 text-xs text-neutral-500">
                  *Swap in your license/ROC, service area specifics, and link your form to your CRM.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-neutral-900/60 p-8 ring-1 ring-neutral-800">
                <div className="text-sm tracking-wide text-neutral-400">DIRECT</div>

                <div className="mt-4 grid gap-3">
                  <div className="flex items-center gap-3 rounded-2xl bg-neutral-950/60 p-4 ring-1 ring-neutral-800">
                    <Phone className="h-5 w-5 text-red-500" />
                    <div>
                      <div className="text-sm font-semibold">{marketPhone}</div>
                      <div className="text-xs text-neutral-400">Quotes during business hours • active sewer issues 24/7</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-neutral-950/60 p-4 ring-1 ring-neutral-800">
                    <Mail className="h-5 w-5 text-red-500" />
                    <div>
                      <div className="text-sm font-semibold">{email}</div>
                      <div className="text-xs text-neutral-400">Send plans, photos, or video for review</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-neutral-950/60 p-4 ring-1 ring-neutral-800">
                  <div className="text-xs text-neutral-400">WHAT TO SEND (FASTEST QUOTE)</div>
                  <div className="mt-2 grid gap-2">
                    {["Video or photos", "Address + access points", "Constraints (downtime, hours)", "Desired timeline"].map((t, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-neutral-200">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-red-500" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-neutral-950/60 p-4 ring-1 ring-neutral-800">
                  <div className="text-xs text-neutral-400">SERVICE AREAS</div>
                  <div className="mt-2 text-sm text-neutral-200">Tucson • Phoenix • Statewide Arizona</div>
                  <div className="mt-2 text-xs text-neutral-500">Add your exact cities/zip coverage here.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800/70 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-neutral-400">© {new Date().getFullYear()} The Trenchless Co. • Pipe Relining & Rehabilitation • {roc}</div>
            <div className="flex flex-wrap gap-2">
              {["Services", "Industries", "GC", "Case Studies", "FAQ", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l === "GC" ? "gc" : l.toLowerCase().replace(" ", "-")}`}
                  className="rounded-xl px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4 text-xs text-neutral-600">
            Disclaimer: This is a mockup. Swap placeholder info, add licensing, insurance, and warranty specifics, and connect the contact form to your CRM.
          </div>
        </div>
      </footer>
    </div>
  );
}
