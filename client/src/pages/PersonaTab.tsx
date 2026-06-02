import React, { useState, useEffect, useRef } from "react";
import { Persona } from "../lib/data";
import EmpathyMap from "../components/EmpathyMap";
import SettlementJourney from "../components/SettlementJourney";
import HealthJourney from "../components/HealthJourney";
import StakeholderMap from "../components/StakeholderMap";
import { Anchor, Compass, Heart, Map, Users, ChevronDown } from "lucide-react";

interface PersonaTabProps {
  persona: Persona;
}

export default function PersonaTab({ persona }: PersonaTabProps) {
  const [activeSection, setActiveSection] = useState<string>("empathy");
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState<boolean>(false);

  const empathyRef = useRef<HTMLDivElement>(null);
  const settlementRef = useRef<HTMLDivElement>(null);
  const healthRef = useRef<HTMLDivElement>(null);
  const stakeholderRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "empathy", label: "A. Empathy Map", icon: <Heart size={14} />, ref: empathyRef },
    { id: "settlement", label: "B. Settlement Journey", icon: <Compass size={14} />, ref: settlementRef },
    { id: "health", label: "C. Health Journey", icon: <Map size={14} />, ref: healthRef },
    { id: "stakeholder", label: "D. Stakeholder Map", icon: <Users size={14} />, ref: stakeholderRef }
  ];

  // Scroll to section helper
  const scrollToSection = (id: string, ref: React.RefObject<HTMLDivElement | null>) => {
    setActiveSection(id);
    setIsNavDropdownOpen(false);
    if (ref.current) {
      const yOffset = -100; // Header offset
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Trigger slightly early
      
      for (const section of sections) {
        if (section.ref.current) {
          const top = section.ref.current.offsetTop;
          const height = section.ref.current.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Persona Context Banner */}
      <div 
        style={{ 
          backgroundColor: persona.lightColor,
          borderLeftColor: persona.color 
        }} 
        className="rounded-2xl border-l-4 p-6 lg:p-8 shadow-sm relative overflow-hidden"
      >
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="flex flex-wrap gap-2 items-center">
            <span 
              style={{ backgroundColor: persona.color }} 
              className="text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
            >
              {persona.type}
            </span>
            <span className="text-xs font-semibold text-muted-foreground bg-white/60 px-2 py-0.5 rounded border border-stone-200">
              {persona.status}
            </span>
            <span className="text-xs font-semibold text-muted-foreground bg-white/60 px-2 py-0.5 rounded border border-stone-200">
              {persona.location}
            </span>
            <span className="text-xs font-semibold text-muted-foreground bg-white/60 px-2 py-0.5 rounded border border-stone-200">
              {persona.languages}
            </span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground">
            {persona.name}'s Pathway Mapping
          </h2>
          
          <blockquote className="border-l-2 border-stone-400 pl-3 py-0.5 italic text-xs lg:text-sm text-stone-600 leading-relaxed">
            "{persona.quote}"
          </blockquote>

          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            {persona.description}
          </p>
        </div>
      </div>

      {/* Sticky In-Page Anchor Navigation */}
      <div className="sticky top-[73px] z-40 bg-background/95 backdrop-blur-md border border-border rounded-xl p-2 shadow-sm">
        {/* Desktop Anchor Nav */}
        <div className="hidden md:flex items-center justify-between px-2">
          <div className="flex gap-1">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id, section.ref)}
                  style={{
                    color: isActive ? "white" : "var(--foreground)",
                    backgroundColor: isActive ? persona.color : "transparent"
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${!isActive && "hover:bg-stone-100"}`}
                >
                  {section.icon}
                  {section.label}
                </button>
              );
            })}
          </div>
          
          <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
            <Anchor size={12} />
            <span>Anchor Nav</span>
          </div>
        </div>

        {/* Mobile Anchor Nav Dropdown */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
            className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-stone-50 border border-border text-xs font-bold text-foreground"
          >
            <span className="flex items-center gap-2">
              {sections.find((s) => s.id === activeSection)?.icon}
              {sections.find((s) => s.id === activeSection)?.label}
            </span>
            <ChevronDown size={14} className={`transition-transform duration-200 ${isNavDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {isNavDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-lg shadow-md py-1 z-50 animate-fadeIn">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id, section.ref)}
                  className={`w-full px-4 py-2.5 text-left text-xs font-semibold flex items-center gap-2 hover:bg-stone-50 ${activeSection === section.id ? "text-primary" : "text-foreground"}`}
                >
                  {section.icon}
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Pathway Sections Stack */}
      <div className="space-y-16">
        {/* Section A — Empathy Map */}
        <div ref={empathyRef} className="scroll-mt-36">
          <EmpathyMap persona={persona} />
        </div>

        {/* Section B — Settlement Journey */}
        <div ref={settlementRef} className="scroll-mt-36">
          <SettlementJourney persona={persona} />
        </div>

        {/* Section C — Health Journey */}
        <div ref={healthRef} className="scroll-mt-36">
          <HealthJourney persona={persona} />
        </div>

        {/* Section D — Stakeholder Map */}
        <div ref={stakeholderRef} className="scroll-mt-36">
          <StakeholderMap persona={persona} />
        </div>
      </div>
    </div>
  );
}
