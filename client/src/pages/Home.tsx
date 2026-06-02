import React, { useState } from "react";
import Overview from "./Overview";
import PersonaTab from "./PersonaTab";
import AggregateMap from "./AggregateMap";
import SidebarLegend from "../components/SidebarLegend";
import { personas } from "../lib/data";
import { LayoutDashboard, Users, Map, HelpCircle, Heart, Compass, ShieldAlert, Sparkles, AlertTriangle } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const renderActiveContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview onTabChange={setActiveTab} />;
      case "amara":
        return <PersonaTab persona={personas[0]} />;
      case "priya":
        return <PersonaTab persona={personas[1]} />;
      case "elena":
        return <PersonaTab persona={personas[2]} />;
      case "aggregate":
        return <AggregateMap />;
      default:
        return <Overview onTabChange={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Global Dashboard Top Bar Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-[#2a1c1c] to-[#1c2133] text-white rounded-lg shadow-inner flex-shrink-0">
              <ShieldAlert size={20} className="text-orange-400" />
            </div>
            <div>
              <h1 className="text-lg font-bold font-serif text-foreground tracking-tight leading-none flex items-center gap-1.5">
                IPV Healthcare Pathway Mapping
                <span className="text-[9px] font-semibold tracking-widest uppercase bg-stone-100 border border-stone-200 text-stone-500 px-1.5 py-0.5 rounded">
                  Vesta SIT
                </span>
              </h1>
              <p className="text-[10px] text-stone-400 font-medium tracking-wide uppercase mt-1">
                Changemark Newcomer IPV Toolkit Deliverable
              </p>
            </div>
          </div>

          {/* Top Level Navigation Tabs */}
          <nav className="flex flex-wrap gap-1 bg-stone-50 border border-border rounded-xl p-1.5 self-start md:self-auto">
            {/* Overview Tab */}
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${activeTab === "overview" ? "bg-stone-900 text-white shadow-sm" : "text-muted-foreground hover:bg-stone-100 hover:text-foreground"}`}
            >
              <LayoutDashboard size={14} />
              Overview
            </button>

            {/* Persona Tabs */}
            {personas.map((p) => {
              const isActive = activeTab === p.id;
              const pActiveColorClass = 
                p.id === "amara" ? "bg-[var(--amara-color)] text-white shadow-sm" :
                p.id === "priya" ? "bg-[var(--priya-color)] text-white shadow-sm" :
                "bg-[var(--elena-color)] text-white shadow-sm";

              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${isActive ? pActiveColorClass : "text-muted-foreground hover:bg-stone-100 hover:text-foreground"}`}
                >
                  <Users size={14} />
                  {p.name}
                </button>
              );
            })}

            {/* Aggregate Map Tab */}
            <button
              onClick={() => setActiveTab("aggregate")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${activeTab === "aggregate" ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:bg-stone-100 hover:text-foreground"}`}
            >
              <Map size={14} />
              Aggregate Map
            </button>
          </nav>
        </div>
      </header>

      {/* Main Grid Content with Side Legend */}
      <main className="flex-grow container max-w-7xl mx-auto py-8 px-6">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 items-start">
          {/* Main View Area (3 cols) */}
          <div className="xl:col-span-3 space-y-8">
            {renderActiveContent()}
          </div>

          {/* Persistent Sidebar Legend (1 col) */}
          <aside className="xl:col-span-1 space-y-6 xl:sticky xl:top-28">
            <SidebarLegend />
          </aside>
        </div>
      </main>

      {/* Global Dashboard Footer */}
      <footer className="border-t border-border bg-stone-50 py-6 mt-16 text-center text-[11px] text-stone-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="leading-relaxed">
            © 2026 Changemark & Vesta SIT. All rights reserved. Prepared by Imroze Singh.
          </p>
          <div className="flex gap-4">
            <span className="font-semibold text-stone-500 uppercase tracking-widest bg-stone-100 border border-stone-200 px-1.5 py-0.5 rounded">
              Version: Draft June 2026
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
