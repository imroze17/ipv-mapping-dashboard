import { useState, useRef, useEffect } from "react";
import { Persona, synthesizedQuotes } from "../lib/data";
import EmpathyMap from "../components/EmpathyMap";
import { QuoteCallout } from "../components/QuoteCallout";
import SettlementJourney from "../components/SettlementJourney";
import HealthJourney from "../components/HealthJourney";
import StakeholderMap from "../components/StakeholderMap";
import { Compass, Heart, Map, Users, ChevronDown } from "lucide-react";

interface PersonaTabProps {
  persona: Persona;
  onNavigateToOpportunity?: (id: string) => void;
}

export default function PersonaTab({ persona, onNavigateToOpportunity }: PersonaTabProps) {
  const [activeSection, setActiveSection] = useState<string>("empathy");
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState<boolean>(false);

  const empathyRef = useRef<HTMLDivElement>(null);
  const settlementRef = useRef<HTMLDivElement>(null);
  const healthRef = useRef<HTMLDivElement>(null);
  const stakeholderRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "empathy", label: "A. Empathy Map", icon: <Heart size={14} />, ref: empathyRef },
    { id: "settlement", label: persona.type === "Practitioner" ? "B. Workflow Stages" : "B. Settlement Journey", icon: <Compass size={14} />, ref: settlementRef },
    { id: "health", label: "C. Health Journey Timeline", icon: <Map size={14} />, ref: healthRef },
    { id: "stakeholder", label: persona.type === "Practitioner" ? `D. ${persona.name}'s Workspace` : `D. ${persona.name}'s Circle`, icon: <Users size={14} />, ref: stakeholderRef }
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
    <div className="space-y-8 animate-fadeIn">
      {/* Editorial Persona Header Banner */}
      <div 
        style={{ borderLeftColor: persona.color }} 
        className="bg-white rounded-2xl border border-border border-l-[6px] p-6 lg:p-8 shadow-sm space-y-4"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span 
            style={{ backgroundColor: persona.lightColor, color: persona.color }} 
            className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
          >
            {persona.type}
          </span>
          <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">
            {persona.status}
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl lg:text-3.5xl font-serif font-bold text-foreground leading-tight">
            {persona.name}
          </h2>
          <blockquote className="border-l-2 border-stone-300 pl-3 py-0.5 italic text-xs lg:text-sm text-stone-600 leading-relaxed">
            "{persona.quote}"
          </blockquote>
          <p className="text-xs text-muted-foreground max-w-3xl leading-relaxed">
            {persona.description}
          </p>
        </div>

        {/* Dynamic Context Block */}
        <div className="pt-4 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="space-y-1">
            <span className="font-bold text-stone-400 uppercase tracking-wider text-[10px]">Location & Context</span>
            <p className="text-stone-700 font-medium">{persona.location}</p>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-stone-400 uppercase tracking-wider text-[10px]">Primary Vulnerabilities</span>
            <p className="text-stone-700 font-medium">
              {persona.type === "Practitioner" ? "Burnout, quota pressures, unintegrated tools" : "Isolation, linguistic barriers, systemic gaps"}
            </p>
          </div>
        </div>
      </div>

      {/* Synthesized Research Quote Block */}
      {(() => {
        const personaQuote = synthesizedQuotes.find(q => q.placement === persona.id);
        return personaQuote ? <QuoteCallout quote={personaQuote} /> : null;
      })()}

      {/* Sticky Sub-Navigation */}
      <div className="sticky top-[84px] z-40 bg-stone-50/90 backdrop-blur-md border border-border rounded-xl p-1 shadow-sm">
        {/* Mobile Dropdown Trigger */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
            className="w-full px-4 py-2.5 text-xs font-bold text-stone-700 flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              {sections.find(s => s.id === activeSection)?.icon}
              {sections.find(s => s.id === activeSection)?.label}
            </span>
            <ChevronDown size={14} className={`transition-transform duration-200 ${isNavDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          
          {isNavDropdownOpen && (
            <div className="border-t border-border mt-1 py-1 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id, section.ref)}
                  className={`w-full text-left px-4 py-2 text-xs font-semibold flex items-center gap-2 ${
                    activeSection === section.id 
                      ? "bg-stone-100 text-foreground font-bold" 
                      : "text-muted-foreground hover:bg-stone-50"
                  }`}
                >
                  {section.icon}
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Horizontal List */}
        <div className="hidden md:flex gap-1">
          {sections.map((section) => {
            const isSelected = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id, section.ref)}
                style={{ 
                  backgroundColor: isSelected ? persona.lightColor : "transparent",
                  color: isSelected ? persona.color : "inherit"
                }}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isSelected 
                    ? "shadow-sm font-extrabold" 
                    : "text-muted-foreground hover:bg-stone-100 hover:text-foreground"
                }`}
              >
                {section.icon}
                {section.label}
              </button>
            );
          })}
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
          <HealthJourney persona={persona} onNavigateToOpportunity={onNavigateToOpportunity} />
        </div>

        {/* Section D — Stakeholder Map */}
        <div ref={stakeholderRef} className="scroll-mt-36">
          <StakeholderMap persona={persona} />
        </div>
      </div>
    </div>
  );
}
