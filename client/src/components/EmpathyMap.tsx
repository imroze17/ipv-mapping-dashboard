import React from "react";
import { Persona } from "../lib/data";
import { Heart, Ear, Eye, MessageSquare, ShieldAlert, CheckCircle2 } from "lucide-react";

interface EmpathyMapProps {
  persona: Persona;
}

export default function EmpathyMap({ persona }: EmpathyMapProps) {
  const { empathy, color, lightColor } = persona;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Editorial Section Header */}
      <div className="border-b border-border pb-3">
        <h3 className="text-lg font-bold font-serif text-foreground">
          Section A — Empathy Map
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          {persona.type === "Practitioner"
            ? `Understanding the internal and external environment of ${persona.name} as she supports survivors and navigates systemic barriers.`
            : `Understanding the internal and external environment of ${persona.name} as she navigates resettlement and abuse.`}
        </p>
      </div>

      {/* 2x2 Grid with Centered Persona Bubble */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Decorative center element for larger screens */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
          <div 
            style={{ 
              backgroundColor: lightColor, 
              borderColor: color,
              boxShadow: `0 10px 25px -5px oklch(from ${color} l c h / 0.15)`
            }} 
            className="w-24 h-24 rounded-full border-2 flex flex-col items-center justify-center text-center p-2 animate-pulse"
          >
            <span style={{ color }} className="text-sm font-bold font-serif">{persona.name}</span>
            <span className="text-[9px] text-muted-foreground leading-tight mt-0.5">{persona.type.split(" ")[0]}</span>
          </div>
        </div>

        {/* Quadrant 1: Thinks & Feels */}
        <div 
          style={{ borderTopColor: color }} 
          className="bg-card text-card-foreground rounded-xl border border-border border-t-4 p-5 shadow-sm space-y-4 md:pr-10"
        >
          <div className="flex items-center gap-2">
            <div style={{ color }} className="p-1.5 rounded-lg bg-stone-50 border border-border">
              <Heart size={16} className="fill-current" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              What she Thinks & Feels
            </h4>
          </div>
          <ul className="space-y-2.5 pl-1">
            {empathy.thinks.map((item, idx) => (
              <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed">
                <span style={{ backgroundColor: color }} className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Quadrant 2: Hears */}
        <div 
          style={{ borderTopColor: color }} 
          className="bg-card text-card-foreground rounded-xl border border-border border-t-4 p-5 shadow-sm space-y-4 md:pl-10"
        >
          <div className="flex items-center gap-2">
            <div style={{ color }} className="p-1.5 rounded-lg bg-stone-50 border border-border">
              <Ear size={16} />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              What she Hears
            </h4>
          </div>
          <ul className="space-y-2.5 pl-1">
            {empathy.hears.map((item, idx) => (
              <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed">
                <span style={{ backgroundColor: color }} className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Quadrant 3: Sees & Observes */}
        <div className="bg-card text-card-foreground rounded-xl border border-border p-5 shadow-sm space-y-4 md:pr-10">
          <div className="flex items-center gap-2">
            <div style={{ color }} className="p-1.5 rounded-lg bg-stone-50 border border-border">
              <Eye size={16} />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              What she Sees & Observes
            </h4>
          </div>
          <ul className="space-y-2.5 pl-1">
            {empathy.sees.map((item, idx) => (
              <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed">
                <span style={{ backgroundColor: color }} className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Quadrant 4: Says & Does */}
        <div className="bg-card text-card-foreground rounded-xl border border-border p-5 shadow-sm space-y-4 md:pl-10">
          <div className="flex items-center gap-2">
            <div style={{ color }} className="p-1.5 rounded-lg bg-stone-50 border border-border">
              <MessageSquare size={16} />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              What she Says & Does
            </h4>
          </div>
          <ul className="space-y-2.5 pl-1">
            {empathy.says.map((item, idx) => (
              <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed">
                <span style={{ backgroundColor: color }} className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pain / Gain Footer Strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {/* Pain Box */}
        <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-rose-800">
            <ShieldAlert size={16} />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              Pain Points (Barriers & Fears)
            </h4>
          </div>
          <p className="text-xs text-rose-900/80 leading-relaxed font-medium">
            {empathy.pain}
          </p>
        </div>

        {/* Gain Box */}
        <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-emerald-800">
            <CheckCircle2 size={16} />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              Gain Points (Aspirations & Hopes)
            </h4>
          </div>
          <p className="text-xs text-emerald-900/80 leading-relaxed font-medium">
            {empathy.gain}
          </p>
        </div>
      </div>
    </div>
  );
}
