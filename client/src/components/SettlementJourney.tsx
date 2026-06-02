import React from "react";
import { Persona } from "../lib/data";
import { ArrowRight, HelpCircle } from "lucide-react";

interface SettlementJourneyProps {
  persona: Persona;
}

export default function SettlementJourney({ persona }: SettlementJourneyProps) {
  const { settlement, color, lightColor } = persona;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Editorial Section Header */}
      <div className="border-b border-border pb-3">
        <h3 className="text-lg font-bold font-serif text-foreground">
          Section B — Settlement Journey Timeline
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          A horizontal timeline of her integration pathway in Canada, highlighting key events and emerging systemic barriers.
        </p>
      </div>

      {/* Timeline Scrollable Container */}
      <div className="overflow-x-auto custom-scrollbar pb-6 pt-4 -mx-4 px-4 md:mx-0 md:px-0">
        <div className="min-w-[1000px] relative">
          {/* Horizontal connecting line */}
          <div 
            style={{ backgroundColor: color }} 
            className="absolute top-12 left-10 right-10 h-0.5 z-0 opacity-40" 
          />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {settlement.map((stage, idx) => {
              return (
                <div key={idx} className="space-y-4">
                  {/* Timeline Stage Marker */}
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground h-4">
                      Stage {idx + 1}
                    </div>
                    
                    {/* Node Circle */}
                    <div 
                      style={{ 
                        borderColor: color,
                        backgroundColor: lightColor,
                      }} 
                      className="w-7 h-7 rounded-full border-2 flex items-center justify-center font-bold text-xs z-10 transition-transform duration-300 hover:scale-110 shadow-sm"
                    >
                      <span style={{ color }}>{idx + 1}</span>
                    </div>

                    <div className="text-xs font-bold text-foreground font-serif min-h-[32px] flex items-center justify-center px-2">
                      {stage.stage}
                    </div>
                  </div>

                  {/* Stage Details Card */}
                  <div className="bg-card text-card-foreground rounded-xl border border-border p-4 shadow-sm space-y-3 min-h-[220px] flex flex-col justify-between hover:border-stone-300 transition-colors">
                    {/* Events */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-bold uppercase text-stone-400 tracking-wider">
                        Key Events
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {stage.events}
                      </p>
                    </div>

                    {/* Barriers */}
                    <div className="space-y-2 pt-3 border-t border-border">
                      <div className="text-[10px] font-bold uppercase text-rose-400 tracking-wider">
                        Barriers & Friction
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {stage.barriers.map((barrier, bIdx) => (
                          <span 
                            key={bIdx} 
                            className="tag tag--friction text-[10px] leading-none py-1 px-2 whitespace-normal break-words w-full"
                          >
                            ⚡ {barrier}
                          </span>
                        ))}
                      </div>
                    </div>
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
