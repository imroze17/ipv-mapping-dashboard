import React from "react";
import { Persona, InterventionItem } from "../lib/data";
import { HelpCircle, ChevronRight } from "lucide-react";

interface HealthJourneyProps {
  persona: Persona;
}

export default function HealthJourney({ persona }: HealthJourneyProps) {
  const { healthJourney, color, lightColor } = persona;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Editorial Section Header */}
      <div className="border-b border-border pb-3">
        <h3 className="text-lg font-bold font-serif text-foreground">
          Section C — Health Journey Timeline
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          Mapping touchpoints, friction, equity gaps, and intervention opportunities across four distinct healthcare stages.
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
                    {stage.friction.map((point, pIdx) => (
                      <li key={pIdx} className="text-xs text-stone-700 flex items-start gap-1.5 leading-relaxed">
                        <span className="text-[var(--friction-color)] font-bold mt-0.5 flex-shrink-0">⚡</span>
                        <span>{point}</span>
                      </li>
                    ))}
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
                    {stage.intervention.map((point: InterventionItem, pIdx: number) => (
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
                          {point.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
