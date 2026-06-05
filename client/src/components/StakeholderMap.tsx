import React, { useState } from "react";
import { Persona } from "../lib/data";
import { Info, HelpCircle } from "lucide-react";

interface StakeholderMapProps {
  persona: Persona;
}

export default function StakeholderMap({ persona }: StakeholderMapProps) {
  const { stakeholders, color, lightColor } = persona;
  const [selectedActor, setSelectedActor] = useState<typeof stakeholders[0] | null>(null);

  // Actor type style helpers
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "controlling":
        return {
          bg: "bg-[#8B1010]/10",
          text: "text-[#8B1010]",
          border: "border-[#8B1010]",
          fill: "#8B1010"
        };
      case "system":
        return {
          bg: "bg-[#0580A0]/10",
          text: "text-[#0580A0]",
          border: "border-[#0580A0]",
          fill: "#0580A0"
        };
      case "intervention":
        return {
          bg: "bg-[#1A8550]/10",
          text: "text-[#1A8550]",
          border: "border-[#1A8550]",
          fill: "#1A8550"
        };
      case "community":
        return {
          bg: "bg-[#6640B0]/10",
          text: "text-[#6640B0]",
          border: "border-[#6640B0]",
          fill: "#6640B0"
        };
      default:
        return {
          bg: "bg-stone-100",
          text: "text-stone-700",
          border: "border-stone-400",
          fill: "#555"
        };
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Editorial Section Header */}
      <div className="border-b border-border pb-3">
        <h3 className="text-lg font-bold font-serif text-foreground">
          Section D — {persona.name}'s Circle
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          An interactive map visualizing the social, medical, legal, and community influences in {persona.name}'s network. Bubble sizes reflect relative influence/power over her trajectory.
        </p>
      </div>

      {/* Main Map Container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Interactive Canvas (3 cols on large screens) */}
        <div className="lg:col-span-3 bg-stone-50 border border-border rounded-xl p-4 shadow-sm relative h-[450px] lg:h-[500px] overflow-hidden select-none">
          
          {/* Background SVG for connector lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              {/* Supportive connection arrow marker */}
              <marker id="arrow-supportive" viewBox="0 0 10 10" refX="25" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#CBD5E1" />
              </marker>
              {/* Controlling connection arrow marker */}
              <marker id="arrow-controlling" viewBox="0 0 10 10" refX="25" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#EF4444" />
              </marker>
            </defs>

            {/* Render connections from each actor to the center (Persona) */}
            {stakeholders.map((actor) => {
              if (actor.id === "persona") return null;
              
              const isControlling = actor.category === "controlling";
              const strokeColor = isControlling ? "#EF4444" : "#CBD5E1";
              const strokeDash = isControlling ? "4 4" : "none";
              
              // Center is roughly at (50%, 50%) for the persona bubble
              return (
                <line
                  key={`line-${actor.id}`}
                  x1={`${actor.position.x}%`}
                  y1={`${actor.position.y}%`}
                  x2="50%"
                  y2="50%"
                  stroke={strokeColor}
                  strokeWidth={isControlling ? "1.5" : "1"}
                  strokeDasharray={strokeDash}
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>

          {/* Absolute Positioned Node Elements */}
          <div className="absolute inset-0 z-10">
            {/* Center Persona Bubble */}
            <div 
              style={{ 
                left: "50%", 
                top: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: lightColor,
                borderColor: color,
                boxShadow: `0 10px 25px -5px oklch(from ${color} l c h / 0.2)`
              }}
              className="absolute w-20 h-24 lg:w-28 lg:h-28 rounded-full border-2 flex flex-col items-center justify-center text-center p-3 z-30 cursor-default"
            >
              <span style={{ color }} className="text-xs font-extrabold font-serif">{persona.name}</span>
              <span className="text-[9px] text-muted-foreground leading-tight mt-1 uppercase tracking-wider font-semibold">Survivor</span>
            </div>

            {/* Surrounding Stakeholder Bubbles */}
            {stakeholders.map((actor) => {
              if (actor.id === "persona") return null;
              const styles = getCategoryStyles(actor.category);
              
              // Size based on influence
              const sizeClasses = 
                actor.influence === "High" ? "w-24 h-24 lg:w-28 lg:h-28 text-xs" :
                actor.influence === "Medium" ? "w-20 h-20 lg:w-24 lg:h-24 text-[11px]" :
                "w-16 h-16 lg:w-20 lg:h-20 text-[10px]";

              const isSelected = selectedActor?.id === actor.id;

              return (
                <button
                  key={actor.id}
                  onClick={() => setSelectedActor(actor)}
                  style={{
                    left: `${actor.position.x}%`,
                    top: `${actor.position.y}%`,
                    transform: "translate(-50%, -50%)",
                    boxShadow: isSelected ? `0 0 0 3px ${styles.fill}33, 0 8px 20px -4px rgba(0,0,0,0.1)` : "0 4px 10px -3px rgba(0,0,0,0.05)"
                  }}
                  className={`absolute rounded-full border-2 bg-white flex flex-col items-center justify-center text-center p-2.5 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer z-20 ${sizeClasses} ${styles.border} ${isSelected ? "border-current" : "border-opacity-60"}`}
                >
                  <span className={`font-bold leading-tight font-serif ${styles.text}`}>
                    {actor.name}
                  </span>
                  <span className="text-[8px] text-muted-foreground uppercase tracking-wider mt-1 font-semibold">
                    {actor.influence} Power
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Help Tip */}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm border border-border rounded-lg px-3 py-1.5 text-[10px] text-muted-foreground flex items-center gap-1.5 shadow-sm">
            <Info size={12} />
            <span>Click any bubble to view relationship notes and role details.</span>
          </div>
        </div>

        {/* Info & Relationship Sidebar Panel (1 col) */}
        <div className="bg-card text-card-foreground rounded-xl border border-border p-5 shadow-sm space-y-4 flex flex-col justify-between min-h-[300px]">
          {selectedActor ? (
            <div className="space-y-4 animate-fadeIn">
              <div className="border-b border-border pb-3">
                <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${getCategoryStyles(selectedActor.category).bg} ${getCategoryStyles(selectedActor.category).text}`}>
                  {selectedActor.role}
                </span>
                <h4 className="text-base font-bold font-serif text-foreground mt-1.5">
                  {selectedActor.name}
                </h4>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-[10px] font-bold uppercase text-stone-400 tracking-wider">
                    Influence Level
                  </div>
                  <div className="text-xs text-foreground font-medium mt-0.5">
                    {selectedActor.influence} Influence / Agency
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold uppercase text-stone-400 tracking-wider">
                    Relationship Note
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    {selectedActor.note}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-4 text-muted-foreground space-y-2">
              <HelpCircle size={32} className="text-stone-300" />
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">
                Select a Stakeholder
              </h4>
              <p className="text-[11px] text-stone-400 leading-relaxed max-w-[180px]">
                Click any surrounding node on the map to inspect its relationship and power dynamics.
              </p>
            </div>
          )}

          {/* Relationship Lines Legend */}
          <div className="pt-4 border-t border-border space-y-2">
            <h5 className="text-[10px] font-bold uppercase text-stone-400 tracking-wider">
              Connection Types
            </h5>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-stone-300" />
                <span className="text-muted-foreground">Supportive relationship</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 border-t border-dashed border-red-500" />
                <span className="text-rose-600 font-medium">Controlling / harmful relationship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
