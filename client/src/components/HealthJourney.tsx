import React from "react";
import { Persona } from "../lib/data";
import { HelpCircle, ChevronRight } from "lucide-react";

interface HealthJourneyProps {
  persona: Persona;
}

export default function HealthJourney({ persona }: HealthJourneyProps) {
  const { healthJourney, emotions, color, lightColor } = persona;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Editorial Section Header */}
      <div className="border-b border-border pb-3">
        <h3 className="text-lg font-bold font-serif text-foreground">
          Section C — Health Journey Swim Lanes
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
                Pathway Lanes
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
                  <ul className="space-y-2">
                    {stage.intervention.map((point, pIdx) => (
                      <li key={pIdx} className="text-xs text-stone-700 flex items-start gap-1.5 leading-relaxed font-medium">
                        <span className="text-[var(--intervention-color)] font-bold mt-0.5 flex-shrink-0">✦</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Emotion Line */}
      <div className="space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
          Emotional Trajectory Line
        </h4>
        
        <div className="bg-stone-50 border border-border rounded-xl p-5 shadow-sm">
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4">
            {/* SVG Connector line for desktop */}
            <div className="hidden md:block absolute top-6 left-10 right-10 h-0.5 bg-stone-200 z-0" />

            {emotions.map((item, idx) => {
              const stageColor = healthJourney[idx]?.stageColor || "#ccc";
              return (
                <div key={idx} className="relative z-10 flex md:flex-col items-start md:items-center gap-4 md:gap-2 md:text-center md:w-1/4">
                  {/* Emoji/Indicator Bubble */}
                  <div 
                    style={{ borderColor: stageColor, backgroundColor: "white" }}
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg shadow-sm flex-shrink-0"
                  >
                    {item.emotion.split(" ")[0]}
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-bold text-foreground">
                      {item.emotion.substring(item.emotion.indexOf(" ") + 1)}
                    </div>
                    <div className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider">
                      {item.stage}
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed max-w-[180px] md:mx-auto">
                      {item.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
