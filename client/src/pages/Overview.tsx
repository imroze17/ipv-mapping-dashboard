import React from "react";
import { Link } from "wouter";
import { personas, synthesizedQuotes } from "../lib/data";
import { Users, AlertTriangle, ArrowRight, ClipboardList, Shield, Compass, BookOpen } from "lucide-react";
import { QuoteCallout } from "../components/QuoteCallout";

interface OverviewProps {
  onTabChange: (tab: string) => void;
}

export default function Overview({ onTabChange }: OverviewProps) {
  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Hero Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900 via-[#2a1c1c] to-[#1c2133] text-white p-8 lg:p-12 shadow-md">
        {/* Subtle decorative background shape */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Vesta SIT | IPV Toolkit
          </div>
          <h1 className="text-3xl lg:text-5xl font-serif font-bold tracking-tight text-stone-100 leading-tight">
            Healthcare Pathway Mapping
          </h1>
          <p className="text-stone-300 text-sm lg:text-base max-w-2xl font-normal leading-relaxed">
            Visualizing the healthcare journeys of newcomer women survivor personas experiencing intimate partner violence (IPV) in Canada. Identifying systemic gaps, friction points, and opportunities for navigator intervention.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onTabChange("aggregate")}
              className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium text-xs transition-all flex items-center gap-2 shadow-sm"
            >
              Explore Aggregate Map <ArrowRight size={14} />
            </button>
            <a
              href="#personas-section"
              className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-stone-200 font-medium text-xs transition-all flex items-center gap-2"
            >
              Meet the Personas
            </a>
          </div>
        </div>
      </div>

      {/* Project Purpose & Executive Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-card text-card-foreground rounded-xl border border-border p-6 lg:p-8 shadow-sm space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground">
              Executive Summary & Purpose
            </h2>
            <p className="text-xs text-muted-foreground">
              Draft — June 2026 | Prepared for VESTA
            </p>
          </div>
          
          <div className="text-xs lg:text-sm text-muted-foreground space-y-4 leading-relaxed">
            <p>
              This interactive dashboard serves as an internal working tool to analyze how newcomer women experiencing Intimate Partner Violence (IPV) navigate the Canadian healthcare system. From their initial contact, through treatment, discharge, and eventual return, we track their physical, digital, and emotional trajectories.
            </p>
            <p>
              Newcomers face compounding layers of vulnerability. Language barriers, fear of sponsorship cancellation, isolation, lack of child care, and unfamiliarity with Canadian legal and healthcare frameworks create severe friction points. 
            </p>
            <p>
              By visualizing these distinct journeys, we identify critical coordination failures across healthcare, settlement, and legal sectors. Ultimately, these maps highlight <strong>high-impact intervention opportunities</strong> where specialized navigators or digital toolkits can step in to provide safe, confidential, and culturally-adapted pathways to safety.
            </p>
            <p>
              Regardless of immigration status, urban vs rural living location, education or entry point; we recognize that agency of all who are victims of IPV is enormously affected by the abuser. Abusers use every type of control they can to maintain the control they have over the victim. The list of Friction and Equity Gaps is non exhaustive for each of the personas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-lg bg-stone-50 border border-border flex items-start gap-3">
              <div className="p-2 rounded bg-orange-100 text-orange-800">
                <AlertTriangle size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-foreground">Friction & Equity Gaps</h4>
                <p className="text-[11px] text-muted-foreground mt-1">Pinpointing where language, status, and fear stall help-seeking.</p>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-stone-50 border border-border flex items-start gap-3">
              <div className="p-2 rounded bg-purple-100 text-purple-800">
                <ClipboardList size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-foreground">Coordination Failures</h4>
                <p className="text-[11px] text-muted-foreground mt-1">Identifying the drop-off points between medical and settlement agencies.</p>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-stone-50 border border-border flex items-start gap-3">
              <div className="p-2 rounded bg-emerald-100 text-emerald-800">
                <Shield size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-foreground">Safe Interventions</h4>
                <p className="text-[11px] text-muted-foreground mt-1">Highlighting where navigators can co-create safety plans.</p>
              </div>
            </div>
          </div>

          {/* Synthesized Research Quotes Section */}
          <div className="space-y-4 pt-4 border-t border-border">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2">
              <BookOpen size={14} /> Key Synthesized Findings from Research & Interviews
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {synthesizedQuotes
                .filter(q => q.placement === "overview")
                .map(quote => (
                  <QuoteCallout key={quote.id} quote={quote} />
                ))}
            </div>
          </div>
        </div>

        {/* Project Context & Stakeholders */}
        <div className="bg-card text-card-foreground rounded-xl border border-border p-6 lg:p-8 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-serif border-b border-border pb-2">
              Toolkit Context
            </h3>
            <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
              <p>
                This mapping deliverable directly informs the design of a larger <strong>Navigator Practice Toolkit</strong>.
              </p>
              <p>
                Frontline workers at Community Health Centres (CHCs), Refugee Health Clinics, Emergency Departments, and Settlement Agencies will utilize this tool to coordinate care.
              </p>
              <p>
                <strong>Sources:</strong> Literature review, first-hand interviews, and Subject Matter Expert review.
              </p>
              <p>
                
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-border space-y-2">
            <div className="text-xs font-bold text-foreground">Need Technical Help?</div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              This dashboard is maintained by Changemark. For content updates or feedback, please contact the project coordinator.
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Personas Section */}
      <div id="personas-section" className="space-y-6 pt-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-serif font-bold text-foreground">
            The Pathway Personas
          </h2>
          <p className="text-xs text-muted-foreground max-w-xl">
            One map can't capture the diversity of the newcomer experience. Instead, we created personas — representing both survivor pathways and frontline practitioner workflows — to show how different immigration classes, systemic barriers, and navigation styles intersect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona) => {
            const iconColorClass = 
              persona.id === "amara" ? "text-[var(--amara-color)] bg-[var(--amara-light)]" :
              persona.id === "priya" ? "text-[var(--priya-color)] bg-[var(--priya-light)]" :
              persona.id === "maya" ? "text-[var(--maya-color)] bg-[var(--maya-light)]" :
              "text-[var(--elena-color)] bg-[var(--elena-light)]";
            
            const borderHoverClass = 
              persona.id === "amara" ? "hover:border-[var(--amara-color)]/50" :
              persona.id === "priya" ? "hover:border-[var(--priya-color)]/50" :
              persona.id === "maya" ? "hover:border-[var(--maya-color)]/50" :
              "hover:border-[var(--elena-color)]/50";

            return (
              <div
                key={persona.id}
                className={`bg-card text-card-foreground rounded-xl border border-border p-6 shadow-sm transition-all duration-300 hover:shadow-md ${borderHoverClass} flex flex-col justify-between space-y-6 group`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className={`p-2.5 rounded-lg ${iconColorClass}`}>
                      <Users size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 border border-stone-200">
                      {persona.type}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold font-serif text-foreground flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <span>{persona.name}</span>
                      <span className="text-xs font-normal text-muted-foreground">
                        — {persona.status}
                      </span>
                    </h3>
                    <div className="flex flex-wrap gap-2 text-[10px] text-muted-foreground">
                      <span className="bg-stone-50 border border-border px-1.5 py-0.5 rounded">
                        <strong>Location:</strong> {persona.location}
                      </span>
                      <span className="bg-stone-50 border border-border px-1.5 py-0.5 rounded">
                        <strong>Agency:</strong> {persona.agency}
                      </span>
                      <span className="bg-stone-50 border border-border px-1.5 py-0.5 rounded">
                        <strong>Entry Point:</strong> {persona.entryPoint}
                      </span>
                    </div>
                  </div>

                  <blockquote className="border-l-2 pl-3 py-0.5 italic text-xs text-muted-foreground leading-relaxed">
                    "{persona.quote}"
                  </blockquote>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {persona.description}
                  </p>
                </div>

                <button
                  onClick={() => onTabChange(persona.id)}
                  className="w-full py-2 rounded-lg bg-stone-50 hover:bg-stone-100 text-foreground font-medium text-xs border border-border transition-all flex items-center justify-center gap-1.5 group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                >
                  View Pathway Map <ArrowRight size={12} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
