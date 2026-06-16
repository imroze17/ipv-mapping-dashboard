import React, { useState } from "react";
import { sharedFrictions, opportunities, personas, interventionPriorities, synthesizedQuotes } from "../lib/data";
import { AlertCircle, ShieldAlert, Check, Users, Sparkles, Filter, Info, Star, ChevronRight, ChevronDown, ListFilter, ArrowUpDown, BookOpen } from "lucide-react";
import { QuoteCallout } from "../components/QuoteCallout";

export default function AggregateMap() {
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
          <table className="w-full border-collapse text-left min-w-[800px]">
            <thead>
              <tr className="border-b border-border bg-stone-50/50">
                <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-r border-border w-[350px]">
                  Systemic Barrier / Friction Point
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-r border-border text-center w-[120px]">
                  Category
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-r border-border text-center w-[110px]">
                  Amara<br/><span className="text-[9px] font-normal lowercase normal-case text-stone-400">Refugee Class (GAR)</span>
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-r border-border text-center w-[110px]">
                  Priya<br/><span className="text-[9px] font-normal lowercase normal-case text-stone-400">Family Class (Sponsored)</span>
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 border-r border-border text-center w-[110px]">
                  Elena<br/><span className="text-[9px] font-normal lowercase normal-case text-stone-400">Economic Class (TR to PR)</span>
                </th>
                <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-stone-400 text-center w-[110px]">
                  Maya<br/><span className="text-[9px] font-normal lowercase normal-case text-stone-400">Practitioner (Social Worker)</span>
                </th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-border">
              {filteredFrictions.map((item, idx) => {
                return (
                  <tr key={idx} className="hover:bg-stone-50/40 transition-colors">
                    {/* Barrier Name */}
                    <td className="p-4 text-xs font-semibold text-foreground border-r border-border">
                      {item.friction}
                    </td>

                    {/* Category Badge */}
                    <td className="p-4 border-r border-border text-center">
                      <span className={`tag ${getCategoryBadgeStyle(item.category)}`}>
                        {item.category}
                      </span>
                    </td>

                    {/* Amara Cell */}
                    <td className={`p-4 border-r border-border text-center ${item.amara ? "bg-[var(--amara-light)]/20" : ""}`}>
                      {item.amara ? (
                        <div className="flex justify-center">
                          <span className="w-5 h-5 rounded-full bg-[var(--amara-light)] border border-[var(--amara-color)]/20 flex items-center justify-center text-[var(--amara-color)]">
                            <Check size={12} strokeWidth={3} />
                          </span>
                        </div>
                      ) : (
                        <span className="text-stone-300 text-xs">—</span>
                      )}
                    </td>

                    {/* Priya Cell */}
                    <td className={`p-4 border-r border-border text-center ${item.priya ? "bg-[var(--priya-light)]/20" : ""}`}>
                      {item.priya ? (
                        <div className="flex justify-center">
                          <span className="w-5 h-5 rounded-full bg-[var(--priya-light)] border border-[var(--priya-color)]/20 flex items-center justify-center text-[var(--priya-color)]">
                            <Check size={12} strokeWidth={3} />
                          </span>
                        </div>
                      ) : (
                        <span className="text-stone-300 text-xs">—</span>
                      )}
                    </td>

                    {/* Elena Cell */}
                    <td className={`p-4 border-r border-border text-center ${item.elena ? "bg-[var(--elena-light)]/20" : ""}`}>
                      {item.elena ? (
                        <div className="flex justify-center">
                          <span className="w-5 h-5 rounded-full bg-[var(--elena-light)] border border-[var(--elena-color)]/20 flex items-center justify-center text-[var(--elena-color)]">
                            <Check size={12} strokeWidth={3} />
                          </span>
                        </div>
                      ) : (
                        <span className="text-stone-300 text-xs">—</span>
                      )}
                    </td>

                    {/* Maya Cell */}
                    <td className={`p-4 text-center ${item.maya ? "bg-[var(--maya-light)]/20" : ""}`}>
                      {item.maya ? (
                        <div className="flex justify-center">
                          <span className="w-5 h-5 rounded-full bg-[var(--maya-light)] border border-[var(--maya-color)]/20 flex items-center justify-center text-[var(--maya-color)]">
                            <Check size={12} strokeWidth={3} />
                          </span>
                        </div>
                      ) : (
                        <span className="text-stone-300 text-xs">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Synthesis Callout */}
        <div className="bg-stone-50 border border-border rounded-xl p-4 text-xs text-muted-foreground flex gap-2.5 shadow-sm leading-relaxed">
          <Info size={16} className="text-stone-400 flex-shrink-0 mt-0.5" />
          <div>
            <strong>Cross-Persona Insight:</strong> Notice how <strong>"No healthcare navigator role exists in current pathway"</strong>, <strong>"Fear of immigration consequences"</strong>, and <strong>"Safety planning assumes physical departure"</strong> act as universal barriers across all newcomer classes, regardless of their English fluency or geographic isolation. This strongly reinforces the need for an integrated, multi-sector Navigator Practice Toolkit.
          </div>
        </div>
      </div>

      {/* Synthesized Quotes Section */}
      {synthesizedQuotes.some(q => q.placement === "aggregate") && (
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-serif flex items-center gap-2">
            <BookOpen size={16} className="text-stone-500" /> Cross-Cutting Stakeholder Perspectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {synthesizedQuotes
              .filter(q => q.placement === "aggregate")
              .map(quote => (
                <QuoteCallout key={quote.id} quote={quote} />
              ))}
          </div>
        </div>
      )}

      {/* Highest-Impact Opportunities */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-serif">
            Highest-Impact Intervention Opportunities
          </h3>
          <p className="text-xs text-muted-foreground">
            Targeted design interventions for the navigator practice toolkit that address multi-persona friction points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {opportunities.map((opp, idx) => {
            return (
              <div 
                key={idx} 
                className="bg-card text-card-foreground border border-border rounded-xl p-5 shadow-sm space-y-4 hover:border-stone-300 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[var(--intervention-light)] text-[var(--intervention-color)] border border-[var(--intervention-color)]/10 text-[10px] font-bold uppercase tracking-wider">
                      ✦ {opp.type}
                    </span>
                    <span className="text-[10px] font-semibold text-muted-foreground bg-stone-50 border border-border px-1.5 py-0.5 rounded">
                      Stage: {opp.stage}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold font-serif text-foreground leading-snug">
                    {opp.opportunity}
                  </h4>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">
                    Impacts:
                  </span>
                  <div className="flex gap-1.5">
                    {opp.personas.map((name) => {
                      const pColor = 
                        name === "Amara" ? "bg-[var(--amara-light)] text-[var(--amara-color)] border-[var(--amara-color)]/10" :
                        name === "Priya" ? "bg-[var(--priya-light)] text-[var(--priya-color)] border-[var(--priya-color)]/10" :
                        name === "Maya" ? "bg-[var(--maya-light)] text-[var(--maya-color)] border-[var(--maya-color)]/10" :
                        "bg-[var(--elena-light)] text-[var(--elena-color)] border-[var(--elena-color)]/10";
                      
                      return (
                        <span 
                          key={name} 
                          className={`px-2 py-0.5 rounded text-[9px] font-bold border ${pColor}`}
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
      <InterventionPrioritizationTable />
    </div>
  );
}

// Interactive Intervention Prioritization Table Component
function InterventionPrioritizationTable() {
  const [filterCat, setFilterCat] = useState<string>("All");
  const [filterFeasibility, setFilterFeasibility] = useState<string>("All");
  const [filterImpact, setFilterImpact] = useState<string>("All");
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const categories = ["All", "Navigator Practice", "Digital Tool", "System Improvement"];
  const feasibilityLevels = ["All", "High", "Medium", "Low"];
  const impactLevels = ["All", "High", "Medium"];

  const filteredData = interventionPriorities.filter((item) => {
    const matchCat = filterCat === "All" || item.category === filterCat;
    const matchFeas = filterFeasibility === "All" || item.feasibility === filterFeasibility;
    const matchImp = filterImpact === "All" || item.impact === filterImpact;
    return matchCat && matchFeas && matchImp;
  });

  const toggleRow = (id: number) => {
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
    <div className="space-y-6 pt-6 border-t border-border">
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
                      onClick={() => toggleRow(item.id)}
                      className="hover:bg-stone-50/40 transition-colors cursor-pointer"
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
                            <div className="space-y-2">
                              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">Detailed Description</h4>
                              <p className="text-xs text-stone-700 leading-relaxed font-sans">
                                {item.description}
                              </p>
                            </div>
                            <div className="space-y-3">
                              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">Strategic Fit</h4>
                              <div className="bg-white p-3 rounded-lg border border-border space-y-1.5">
                                <div className="flex justify-between text-[11px]">
                                  <span className="font-semibold text-stone-500">Key Gaps Addressed:</span>
                                  <span className="font-bold text-stone-700">{item.gapsAddressed}</span>
                                </div>
                                <div className="flex justify-between text-[11px]">
                                  <span className="font-semibold text-stone-500">Resource Intensity:</span>
                                  <span className="font-bold text-stone-700">{item.resources}</span>
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
                <td colSpan={7} className="p-8 text-center text-xs text-stone-400 italic">
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
