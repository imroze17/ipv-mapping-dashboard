import { useState } from "react";
import { Persona, InterventionItem, interventionPriorities } from "../lib/data";
import { HelpCircle, ChevronRight, BookOpen, MessageSquare, ChevronDown, ArrowUpRight } from "lucide-react";

interface HealthJourneyProps {
  persona: Persona;
  onNavigateToOpportunity?: (id: string) => void;
}

export default function HealthJourney({ persona, onNavigateToOpportunity }: HealthJourneyProps) {
  const { healthJourney } = persona;
  
  // Track open/collapsed state for the evidence layer of each stage
  const [openEvidence, setOpenEvidence] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
    3: false
  });

  const toggleEvidence = (idx: number) => {
    setOpenEvidence(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Helper to find the matching intervention ID based on name keywords
  const findMatchingInterventionId = (text: string): string | null => {
    const cleanText = text.toLowerCase().trim();
    
    // Exact manual mapping for common terms
    if (cleanText.includes("screening protocol") || cleanText.includes("alone time")) {
      return "ipv-informed-ed-screening-protocol-inclu";
    }
    if (cleanText.includes("disclosure script") || cleanText.includes("scripts for staff")) {
      return "culturally-safe-disclosure-scripts-for-s";
    }
    if (cleanText.includes("sponsorship") || cleanText.includes("immigration")) {
      return "sponsorship-rights-and-other-immigration";
    }
    if (cleanText.includes("in-person navigator") || cleanText.includes("follow the client") || cleanText.includes("navigator speak")) {
      return "in-person-navigator-to-follow-the-client";
    }
    if (cleanText.includes("co-located") || cleanText.includes("settlement and health")) {
      return "co-located-services-settlement-and-healt";
    }
    if (cleanText.includes("translated materials") || cleanText.includes("translate information")) {
      return "translated-materials";
    }
    if (cleanText.includes("toolkit") || cleanText.includes("navigator practice toolkit")) {
      return "ipv-toolkit-for-frontline-workers";
    }
    if (cleanText.includes("rural referral") || cleanText.includes("no-wrong-door")) {
      return "no-wrong-door-rural-referral-network";
    }
    if (cleanText.includes("subsidized phone") || cleanText.includes("subsidized internet")) {
      return "subsidized-phone-internet-for-rural-surv";
    }
    if (cleanText.includes("workshops in multiple") || cleanText.includes("education workshops")) {
      return "education-workshops-in-multiple-language";
    }
    if (cleanText.includes("workshops on abuse") || cleanText.includes("workshops for clients")) {
      return "workshops-on-abuse-and-health-for-client";
    }
    if (cleanText.includes("myhealth") || cleanText.includes("patient portal")) {
      return "subtle-wellness-screen-embedded-in-myhea";
    }
    if (cleanText.includes("chat on mobile") || cleanText.includes("chat feature") || cleanText.includes("navigator chat")) {
      return "navigator-accessible-via-chat-on-mobile";
    }
    if (cleanText.includes("disguise") || cleanText.includes("exit feature") || cleanText.includes("safe device")) {
      return "digital-tool-with-disguise-exit-feature";
    }
    if (cleanText.includes("resource hub") || cleanText.includes("digital hub")) {
      return "digital-resource-hub";
    }
    if (cleanText.includes("offline resource") || cleanText.includes("audio") || cleanText.includes("community drop-in")) {
      return "offline-resource-options-audio-community";
    }

    // Fallback: search priorities
    const match = interventionPriorities.find(p => 
      cleanText.includes(p.name.toLowerCase()) || p.name.toLowerCase().includes(cleanText)
    );
    return match ? match.id : null;
  };

  // Helper to map friction text to a relevant intervention
  const getFrictionMatchingInterventionId = (text: string): string | null => {
    const cleanText = text.toLowerCase();
    
    // Manual mapping of key friction points to interventions
    if (cleanText.includes("partner accompanies") || cleanText.includes("private room") || cleanText.includes("disclosure")) {
      return "ipv-informed-ed-screening-protocol-inclu";
    }
    if (cleanText.includes("interpreter") || cleanText.includes("translation") || cleanText.includes("language")) {
      return "culturally-safe-disclosure-scripts-for-s";
    }
    if (cleanText.includes("sponsorship") || cleanText.includes("deportation") || cleanText.includes("immigration")) {
      return "sponsorship-rights-and-other-immigration";
    }
    if (cleanText.includes("isolation") || cleanText.includes("navigation") || cleanText.includes("follow")) {
      return "in-person-navigator-to-follow-the-client";
    }
    if (cleanText.includes("silo") || cleanText.includes("coordination") || cleanText.includes("agencies")) {
      return "co-located-services-settlement-and-healt";
    }
    if (cleanText.includes("rural") || cleanText.includes("transportation") || cleanText.includes("bus")) {
      return "no-wrong-door-rural-referral-network";
    }
    if (cleanText.includes("surveillance") || cleanText.includes("phone") || cleanText.includes("device")) {
      return "digital-tool-with-disguise-exit-feature";
    }
    if (cleanText.includes("quota") || cleanText.includes("caseload") || cleanText.includes("metrics")) {
      return "ipv-toolkit-for-frontline-workers";
    }

    return null;
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Editorial Section Header */}
      <div className="border-b border-border pb-3">
        <h3 className="text-lg font-bold font-serif text-foreground">
          Section C — {persona.type === "Practitioner" ? "Service Support Timeline" : "Health Journey Timeline"}
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          {persona.type === "Practitioner"
            ? "Mapping support touchpoints, administrative frictions, equity gaps, and coordination interventions across four distinct service stages."
            : "Mapping touchpoints, friction, equity gaps, and intervention opportunities across four distinct healthcare stages."}
        </p>
      </div>

      {/* Grid Swim Lanes Layout */}
      <div className="overflow-x-auto custom-scrollbar border border-border rounded-xl shadow-sm bg-card">
        <table className="w-full border-collapse text-left min-w-[800px]">
          <thead>
            <tr className="border-b border-border bg-stone-50/50">
              {/* Corner Header Cell */}
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-r border-border w-[150px] lg:w-[180px]">
                Pathway Stages
              </th>
              
              {/* Four Stage Columns */}
              {healthJourney.map((stage, idx) => (
                <th 
                  key={idx} 
                  className="p-4 border-r border-border last:border-r-0"
                  style={{ width: "25%" }}
                >
                  <div className="flex items-center gap-2">
                    <span 
                      style={{ backgroundColor: stage.stageColor }} 
                      className="text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                    >
                      {stage.stageLabel}
                    </span>
                    <span className="text-sm font-bold font-serif text-foreground">
                      {stage.stage}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody className="divide-y divide-border">
            {/* Row 1: Touchpoints (White bg) */}
            <tr className="bg-white">
              <td className="p-4 font-bold text-xs text-foreground border-r border-border align-top">
                Touchpoints
              </td>
              {healthJourney.map((stage, idx) => (
                <td key={idx} className="p-4 border-r border-border last:border-r-0 align-top">
                  <ul className="space-y-2">
                    {stage.touchpoints.map((point, pIdx) => (
                      <li key={pIdx} className="text-xs text-muted-foreground flex items-start gap-1.5 leading-relaxed">
                        <span className="text-stone-400 mt-1 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            {/* Row 2: Friction Points (Light Red bg) */}
            <tr className="bg-[var(--friction-light)]/40">
              <td className="p-4 font-bold text-xs text-[var(--friction-color)] border-r border-border align-top">
                Friction Points ⚡
              </td>
              {healthJourney.map((stage, idx) => (
                <td key={idx} className="p-4 border-r border-border last:border-r-0 align-top">
                  <ul className="space-y-2">
                    {stage.friction.map((point, pIdx) => {
                      const matchId = getFrictionMatchingInterventionId(point);
                      return (
                        <li key={pIdx} className="text-xs text-stone-700 flex items-start gap-1.5 leading-relaxed">
                          <span className="text-[var(--friction-color)] font-bold mt-0.5 flex-shrink-0">⚡</span>
                          {matchId && onNavigateToOpportunity ? (
                            <button
                              onClick={() => onNavigateToOpportunity(matchId)}
                              className="text-left text-xs hover:underline hover:text-[var(--friction-color)] flex items-center gap-0.5 group font-medium cursor-pointer"
                            >
                              <span>{point}</span>
                              <ArrowUpRight size={10} className="text-[var(--friction-color)] opacity-60 group-hover:opacity-100 flex-shrink-0 transition-opacity" />
                            </button>
                          ) : (
                            <span>{point}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </td>
              ))}
            </tr>

            {/* Row 3: Equity Gaps (Light Amber bg) */}
            <tr className="bg-[var(--equity-light)]/40">
              <td className="p-4 font-bold text-xs text-[var(--equity-color)] border-r border-border align-top">
                Equity Gaps ⚠️
              </td>
              {healthJourney.map((stage, idx) => (
                <td key={idx} className="p-4 border-r border-border last:border-r-0 align-top">
                  <ul className="space-y-2">
                    {stage.equity.map((point, pIdx) => (
                      <li key={pIdx} className="text-xs text-stone-700 flex items-start gap-1.5 leading-relaxed">
                        <span className="text-[var(--equity-color)] font-bold mt-0.5 flex-shrink-0">⚠️</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            {/* Row 4: Intervention Opportunities (Light Green bg) */}
            <tr className="bg-[var(--intervention-light)]/40">
              <td className="p-4 font-bold text-xs text-[var(--intervention-color)] border-r border-border align-top">
                Interventions ✦
              </td>
              {healthJourney.map((stage, idx) => (
                <td key={idx} className="p-4 border-r border-border last:border-r-0 align-top">
                  <ul className="space-y-2.5">
                    {stage.intervention.map((point: InterventionItem, pIdx: number) => {
                      const matchId = findMatchingInterventionId(point.text);
                      return (
                        <li key={pIdx} className="text-xs text-stone-700 flex items-start gap-1.5 leading-relaxed font-medium">
                          <span className="text-[var(--intervention-color)] font-bold mt-0.5 flex-shrink-0">✦</span>
                          <span>
                            <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded mr-1 mb-0.5 ${
                              point.cat === "nav"
                                ? "bg-[var(--intervention-light)] text-[var(--intervention-color)]"
                                : point.cat === "digital"
                                ? "bg-[var(--digital-light)] text-[var(--digital-color)]"
                                : "bg-stone-100 text-stone-500"
                            }`}>
                              {point.cat === "nav" ? "Navigator Practice" : point.cat === "digital" ? "Digital Tool" : "System"}
                            </span>
                            {matchId && onNavigateToOpportunity ? (
                              <button
                                onClick={() => onNavigateToOpportunity(matchId)}
                                className="hover:underline hover:text-[var(--intervention-color)] inline-flex items-center gap-0.5 group cursor-pointer text-left"
                              >
                                <span>{point.text}</span>
                                <ArrowUpRight size={10} className="text-[var(--intervention-color)] opacity-60 group-hover:opacity-100 flex-shrink-0 transition-opacity" />
                              </button>
                            ) : (
                              <span>{point.text}</span>
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              ))}
            </tr>

            {/* Row 5: Collapsible Evidence Base (Light Stone bg) */}
            <tr className="bg-stone-50/70">
              <td className="p-4 font-bold text-xs text-stone-600 border-r border-border align-top">
                Evidence Base 📖
              </td>
              {healthJourney.map((stage, idx) => {
                const isOpen = openEvidence[idx];
                const hasEvidence = stage.evidence && stage.evidence.length > 0;
                
                return (
                  <td key={idx} className="p-4 border-r border-border last:border-r-0 align-top">
                    {hasEvidence ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => toggleEvidence(idx)}
                          className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
                        >
                          <BookOpen size={12} className="text-stone-400" />
                          <span>{isOpen ? "Hide Citations" : `View Citations (${stage.evidence?.length})`}</span>
                          <ChevronRight size={12} className={`text-stone-400 transition-transform ${isOpen ? "rotate-90" : ""}`} />
                        </button>
                        
                        {isOpen && (
                          <div className="bg-white border border-stone-200/60 rounded-lg p-3 space-y-2.5 shadow-inner animate-fadeIn">
                            {stage.evidence?.map((ev, eIdx) => (
                              <div key={eIdx} className="space-y-1 border-b border-stone-100 last:border-b-0 pb-2 last:pb-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-stone-100 text-stone-600">
                                    {ev.type}
                                  </span>
                                  <span className="text-[10px] font-bold text-stone-700 italic">
                                    {ev.source}
                                  </span>
                                </div>
                                <p className="text-[11px] text-stone-600 leading-relaxed font-serif">
                                  "{ev.quote}"
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-[10px] text-stone-400 italic">No citations available</span>
                    )}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
