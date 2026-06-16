import React, { useState, useEffect, useRef } from "react";
import { sharedFrictions, opportunities, personas, interventionPriorities, synthesizedQuotes } from "../lib/data";
import { AlertCircle, ShieldAlert, Check, Users, Sparkles, Filter, Info, Star, ChevronRight, ChevronDown, ListFilter, ArrowUpDown, BookOpen } from "lucide-react";
import { QuoteCallout } from "../components/QuoteCallout";

interface AggregateMapProps {
  highlightedInterventionId?: string | null;
  onClearHighlight?: () => void;
}

export default function AggregateMap({ highlightedInterventionId, onClearHighlight }: AggregateMapProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterCategories = ["All", "Friction", "Equity Gap", "Coordination Failure", "Digital Friction"];

  const filteredFrictions = activeFilter === "All" 
    ? sharedFrictions 
    : sharedFrictions.filter(f => f.category === activeFilter);

  // Category style mapping helper
  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case "Friction":
        return "bg-[var(--friction-light)] text-[var(--friction-color)] border-[var(--friction-color)]/10";
      case "Equity Gap":
        return "bg-[var(--equity-light)] text-[var(--equity-color)] border-[var(--equity-color)]/10";
      case "Coordination Failure":
        return "bg-[var(--coordination-light)] text-[var(--coordination-color)] border-[var(--coordination-color)]/10";
      case "Digital Friction":
        return "bg-[var(--digital-light)] text-[var(--digital-color)] border-[var(--digital-color)]/10";
      default:
        return "bg-stone-100 text-stone-700 border-stone-200";
    }
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Editorial Header */}
      <div className="border-b border-border pb-5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/15 text-[10px] font-bold uppercase tracking-wider mb-2">
          <Sparkles size={10} />
          Systemic View
        </div>
        <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground">
          Section 8 — Aggregate Map & Synthesis
        </h2>
        <p className="text-xs text-muted-foreground mt-1 max-w-3xl leading-relaxed">
          The aggregate view surfaces critical patterns across all three survivor personas. By placing individual pathways side-by-side, we expose systemic friction, recurring equity gaps, and high-impact intervention points for the toolkit design.
        </p>
      </div>

      {/* Grid Comparison Matrix */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-serif">
              Shared Friction & Barrier Matrix
            </h3>
            <p className="text-xs text-muted-foreground">
              A heatmap indicating the presence and impact of systemic barriers across each newcomer persona.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-1.5 items-center bg-stone-50 border border-border rounded-xl p-1.5">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider px-2 flex items-center gap-1">
              <Filter size={10} />
              Filter:
            </span>
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${activeFilter === cat ? "bg-primary text-white" : "text-muted-foreground hover:bg-stone-100 hover:text-foreground"}`}
              >
                {cat === "All" ? "All Gaps" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto custom-scrollbar border border-border rounded-xl shadow-sm bg-card">
          <table className="w-full border-collapse text-left min-w-[850px]">
            <thead>
              <tr className="border-b border-border bg-stone-50/50">
                <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-r border-border w-[350px]">
                  Systemic Barrier / Friction Point
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-r border-border text-center w-[150px]">
                  Category
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-r border-border text-center w-[110px]">
                  Amara<br/><span className="text-[9px] font-normal normal-case text-stone-400">Refugee Class (GAR)</span>
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-r border-border text-center w-[110px]">
                  Priya<br/><span className="text-[9px] font-normal normal-case text-stone-400">Family Class (Sponsored)</span>
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-r border-border text-center w-[110px]">
                  Elena<br/><span className="text-[9px] font-normal normal-case text-stone-400">Economic Class (TR to PR)</span>
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 text-center w-[110px]">
                  Maya<br/><span className="text-[9px] font-normal normal-case text-stone-400">Practitioner (Social Worker)</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredFrictions.map((f, idx) => (
                <tr key={idx} className="hover:bg-stone-50/30 transition-colors">
                  <td className="p-4 border-r border-border">
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-foreground flex items-start gap-1.5">
                        {f.category === "Friction" && <AlertCircle size={13} className="text-[var(--friction-color)] shrink-0 mt-0.5" />}
                        {f.category === "Equity Gap" && <ShieldAlert size={13} className="text-[var(--equity-color)] shrink-0 mt-0.5" />}
                        {f.category === "Coordination Failure" && <Users size={13} className="text-[var(--coordination-color)] shrink-0 mt-0.5" />}
                        {f.category === "Digital Friction" && <Info size={13} className="text-[var(--digital-color)] shrink-0 mt-0.5" />}
                        {f.friction}
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-r border-border text-center">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold border whitespace-nowrap ${getCategoryBadgeStyle(f.category)}`}>
                      {f.category}
                    </span>
                  </td>
                  <td className="p-4 border-r border-border text-center">
                    <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold ${f.amara ? "bg-[var(--amara-light)] text-[var(--amara-color)] border border-[var(--amara-color)]/10" : "text-stone-200"}`}>
                      {f.amara ? "●" : "—"}
                    </span>
                  </td>
                  <td className="p-4 border-r border-border text-center">
                    <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold ${f.priya ? "bg-[var(--priya-light)] text-[var(--priya-color)] border border-[var(--priya-color)]/10" : "text-stone-200"}`}>
                      {f.priya ? "●" : "—"}
                    </span>
                  </td>
                  <td className="p-4 border-r border-border text-center">
                    <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold ${f.elena ? "bg-[var(--elena-light)] text-[var(--elena-color)] border border-[var(--elena-color)]/10" : "text-stone-200"}`}>
                      {f.elena ? "●" : "—"}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold ${f.maya ? "bg-[var(--maya-light)] text-[var(--maya-color)] border border-[var(--maya-color)]/10" : "text-stone-200"}`}>
                      {f.maya ? "●" : "—"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Synthesized Research Quotes */}
      {synthesizedQuotes.filter(q => q.placement === "aggregate").length > 0 && (
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-serif">
              Synthesized Qualitative Feedback
            </h3>
            <p className="text-xs text-muted-foreground">
              Direct, anonymous insights collected from newcomer clients and settlement support practitioners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {synthesizedQuotes
              .filter(q => q.placement === "aggregate")
              .map((quote) => (
                <QuoteCallout key={quote.id} quote={quote} />
              ))}
          </div>
        </div>
      )}

      {/* Highest-Impact Opportunities */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-serif">
            Section 9 — Highest-Impact Opportunities
          </h3>
          <p className="text-xs text-muted-foreground">
            The three core intervention directions that address the most widespread, critical friction points across the pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {opportunities.slice(0, 3).map((opp, index) => {
            const id = index + 1;
            const iconColor = 
              id === 1 ? "bg-emerald-50 text-emerald-700 border-emerald-200/50" :
              id === 2 ? "bg-teal-50 text-teal-700 border-teal-200/50" :
              "bg-purple-50 text-purple-700 border-purple-200/50";
            
            return (
              <div 
                key={id} 
                className="bg-card text-card-foreground rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className={`p-2 rounded-lg border w-fit ${iconColor}`}>
                    {id === 1 && <ShieldAlert size={16} />}
                    {id === 2 && <Sparkles size={16} />}
                    {id === 3 && <Users size={16} />}
                  </div>
                  <h4 className="text-xs font-bold text-foreground leading-snug">
                    {opp.opportunity}
                  </h4>
                </div>

                <div className="pt-3 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider font-bold shrink-0">
                    Impacts:
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-start sm:justify-end">
                    {opp.personas.map((name) => {
                      const pColor = 
                        name === "Amara" ? "bg-[var(--amara-light)] text-[var(--amara-color)] border-[var(--amara-color)]/10" :
                        name === "Priya" ? "bg-[var(--priya-light)] text-[var(--priya-color)] border-[var(--priya-color)]/10" :
                        name === "Maya" ? "bg-[var(--maya-light)] text-[var(--maya-color)] border-[var(--maya-color)]/10" :
                        "bg-[var(--elena-light)] text-[var(--elena-color)] border-[var(--elena-color)]/10";
                      
                      return (
                        <span 
                          key={name} 
                          className={`px-1.5 py-0.5 rounded text-[9px] font-bold border ${pColor}`}
                        >
                          {name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* NEW Section: Intervention Prioritization Table */}
      <div id="prioritization-table-section">
        <InterventionPrioritizationTable 
          highlightedInterventionId={highlightedInterventionId} 
          onClearHighlight={onClearHighlight} 
        />
      </div>
    </div>
  );
}

interface TableProps {
  highlightedInterventionId?: string | null;
  onClearHighlight?: () => void;
}

// Interactive Intervention Prioritization Table Component
function InterventionPrioritizationTable({ highlightedInterventionId, onClearHighlight }: TableProps) {
  const [filterCat, setFilterCat] = useState<string>("All");
  const [filterFeasibility, setFilterFeasibility] = useState<string>("All");
  const [filterImpact, setFilterImpact] = useState<string>("All");
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const tableRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<{ [key: string]: HTMLTableRowElement | null }>({});

  const categories = ["All", "Navigator Practice", "Digital Tool", "System Improvement"];
  const feasibilityLevels = ["All", "High", "Medium", "Low"];
  const impactLevels = ["All", "High", "Medium"];

  // Handle outside highlighting triggers
  useEffect(() => {
    if (highlightedInterventionId) {
      // Find item
      const item = interventionPriorities.find(p => p.id === highlightedInterventionId);
      if (item) {
        // Clear filters so the item is guaranteed to be visible
        setFilterCat("All");
        setFilterFeasibility("All");
        setFilterImpact("All");
        
        // Expand the matching row
        setExpandedRow(highlightedInterventionId);

        // Scroll to the row after a brief delay to let filters reset
        setTimeout(() => {
          const rowEl = rowRefs.current[highlightedInterventionId];
          if (rowEl) {
            rowEl.scrollIntoView({ behavior: "smooth", block: "center" });
            
            // Add a temporary CSS highlight effect
            rowEl.classList.add("bg-amber-50/80", "ring-2", "ring-amber-400/40");
            setTimeout(() => {
              rowEl.classList.remove("bg-amber-50/80", "ring-2", "ring-amber-400/40");
              if (onClearHighlight) onClearHighlight();
            }, 3000);
          }
        }, 150);
      }
    }
  }, [highlightedInterventionId]);

  const filteredData = interventionPriorities.filter((item) => {
    const matchCat = filterCat === "All" || item.category === filterCat;
    const matchFeas = filterFeasibility === "All" || item.feasibility === filterFeasibility;
    const matchImp = filterImpact === "All" || item.impact === filterImpact;
    return matchCat && matchFeas && matchImp;
  });

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const getBadgeStyle = (level: string) => {
    switch (level) {
      case "High":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/50";
      case "Medium":
        return "bg-amber-50 text-amber-700 border-amber-200/50";
      case "Low":
        return "bg-rose-50 text-rose-700 border-rose-200/50";
      default:
        return "bg-stone-50 text-stone-600 border-stone-200";
    }
  };

  const getCategoryStyle = (cat: string) => {
    switch (cat) {
      case "Navigator Practice":
        return "bg-[var(--intervention-light)] text-[var(--intervention-color)] border-[var(--intervention-color)]/10";
      case "Digital Tool":
        return "bg-[var(--digital-light)] text-[var(--digital-color)] border-[var(--digital-color)]/10";
      case "System Improvement":
        return "bg-stone-100 text-stone-600 border-stone-200/60";
      default:
        return "bg-stone-50 text-stone-600 border-stone-200";
    }
  };

  return (
    <div ref={tableRef} className="space-y-6 pt-6 border-t border-border">
      <div className="space-y-1">
        <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-serif flex items-center gap-2">
          <Star size={16} className="text-stone-500 fill-stone-100" /> Intervention Prioritization Table
        </h3>
        <p className="text-xs text-muted-foreground">
          An interactive, multi-factor analysis of potential solutions, evaluating impact, technical/operational feasibility, and required resources.
        </p>
      </div>

      {/* Table Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-stone-50 border border-border rounded-xl p-4">
        {/* Category Filter */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1">
            <ListFilter size={10} /> Filter by Type:
          </label>
          <select
            value={filterCat}
            onChange={(e) => setFilterCat(e.target.value)}
            className="w-full text-xs bg-white border border-border rounded-lg px-2.5 py-1.5 text-stone-700 focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Feasibility Filter */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1">
            <ArrowUpDown size={10} /> Filter by Feasibility:
          </label>
          <select
            value={filterFeasibility}
            onChange={(e) => setFilterFeasibility(e.target.value)}
            className="w-full text-xs bg-white border border-border rounded-lg px-2.5 py-1.5 text-stone-700 focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {feasibilityLevels.map(lvl => (
              <option key={lvl} value={lvl}>{lvl === "All" ? "All Feasibility" : `${lvl} Feasibility`}</option>
            ))}
          </select>
        </div>

        {/* Impact Filter */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1">
            <Star size={10} /> Filter by Impact:
          </label>
          <select
            value={filterImpact}
            onChange={(e) => setFilterImpact(e.target.value)}
            className="w-full text-xs bg-white border border-border rounded-lg px-2.5 py-1.5 text-stone-700 focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {impactLevels.map(lvl => (
              <option key={lvl} value={lvl}>{lvl === "All" ? "All Impact" : `${lvl} Impact`}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Prioritization Grid/Table */}
      <div className="overflow-x-auto custom-scrollbar border border-border rounded-xl shadow-sm bg-card">
        <table className="w-full border-collapse text-left min-w-[800px]">
          <thead>
            <tr className="border-b border-border bg-stone-50/50">
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 w-[40px]"></th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 w-[220px]">Intervention</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 text-center w-[150px]">Type</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 text-center w-[90px]">Impact</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 text-center w-[90px]">Feasibility</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 text-center w-[120px]">Timeline</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 text-center w-[120px]">Effort/Cost</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.length > 0 ? (
              filteredData.map((item) => {
                const isExpanded = expandedRow === item.id;
                return (
                  <React.Fragment key={item.id}>
                    <tr 
                      ref={el => { rowRefs.current[item.id] = el; }}
                      onClick={() => toggleRow(item.id)}
                      className={`hover:bg-stone-50/40 transition-all cursor-pointer ${isExpanded ? "bg-stone-50/20" : ""}`}
                    >
                      {/* Expand Icon */}
                      <td className="p-4 text-center border-r border-border">
                        {isExpanded ? <ChevronDown size={14} className="text-stone-400" /> : <ChevronRight size={14} className="text-stone-400" />}
                      </td>

                      {/* Name */}
                      <td className="p-4 text-xs font-semibold text-foreground border-r border-border">
                        {item.name}
                      </td>

                      {/* Type */}
                      <td className="p-4 border-r border-border text-center">
                        <span className={`tag ${getCategoryStyle(item.category)}`}>
                          {item.category}
                        </span>
                      </td>

                      {/* Impact */}
                      <td className="p-4 border-r border-border text-center">
                        <span className={`tag border ${getBadgeStyle(item.impact)}`}>
                          {item.impact}
                        </span>
                      </td>

                      {/* Feasibility */}
                      <td className="p-4 border-r border-border text-center">
                        <span className={`tag border ${getBadgeStyle(item.feasibility)}`}>
                          {item.feasibility}
                        </span>
                      </td>

                      {/* Timeline */}
                      <td className="p-4 border-r border-border text-center text-xs text-stone-600 font-medium">
                        {item.timeline}
                      </td>

                      {/* Effort/Cost */}
                      <td className="p-4 text-center text-xs text-stone-600 font-medium">
                        {item.effort}
                      </td>
                    </tr>

                    {/* Collapsible Detail Panel */}
                    {isExpanded && (
                      <tr className="bg-stone-50/50">
                        <td colSpan={7} className="p-5 border-t border-b border-border">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Left side: Barriers & Description */}
                            <div className="space-y-2.5">
                              <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1">
                                <AlertCircle size={12} /> Barriers to Entry & Context
                              </h4>
                              <p className="text-xs text-stone-600 leading-relaxed bg-white p-3 rounded-lg border border-border">
                                {item.description}
                              </p>
                            </div>

                            {/* Right side: Gaps Addressed & Resources */}
                            <div className="space-y-4">
                              {/* Gaps Addressed */}
                              <div className="space-y-1.5">
                                <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1">
                                  <Check size={12} className="text-emerald-600" /> Equity Gaps Addressed
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                  {item.gapsAddressed.split(",").map((gap, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-emerald-50/60 text-emerald-800 border border-emerald-100 rounded text-[10px] font-medium">
                                      {gap.trim()}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Resources Required */}
                              <div className="space-y-1.5">
                                <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1">
                                  <BookOpen size={12} className="text-stone-500" /> Operational Resources Required
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                  {item.resources.split(",").map((res, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-stone-100 text-stone-700 border border-stone-200 rounded text-[10px] font-medium">
                                      {res.trim()}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className="p-8 text-center text-xs text-muted-foreground">
                  No interventions match the selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
