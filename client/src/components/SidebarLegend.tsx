import React from "react";
import { AlertCircle, Zap, Users, ShieldAlert, Smartphone } from "lucide-react";

interface SidebarLegendProps {
  isOpen?: boolean;
}

export default function SidebarLegend({ isOpen = true }: SidebarLegendProps) {
  if (!isOpen) return null;

  return (
    <div className="bg-card text-card-foreground rounded-xl border border-border p-5 shadow-sm space-y-4">
      <div>
        <h3 className="text-sm font-bold font-serif tracking-wide text-foreground uppercase border-b border-border pb-2">
          Pathway Legend
        </h3>
        <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
          Standardized classifications used across all newcomer IPV pathway maps.
        </p>
      </div>

      <div className="space-y-3.5">
        {/* Friction Point */}
        <div className="flex gap-3 items-start">
          <div className="flex-shrink-0 p-1.5 rounded bg-[var(--friction-light)] text-[var(--friction-color)] border border-[var(--friction-color)]/10">
            <Zap size={15} className="fill-current" />
          </div>
          <div>
            <div className="text-xs font-bold text-[var(--friction-color)]">
              ⚡ Friction Point
            </div>
            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
              A moment where the system fails, delays, or creates a dead end.
            </p>
          </div>
        </div>

        {/* Equity Gap */}
        <div className="flex gap-3 items-start">
          <div className="flex-shrink-0 p-1.5 rounded bg-[var(--equity-light)] text-[var(--equity-color)] border border-[var(--equity-color)]/10">
            <AlertCircle size={15} />
          </div>
          <div>
            <div className="text-xs font-bold text-[var(--equity-color)]">
              ⚠️ Equity Gap
            </div>
            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
              Where language, immigration status, or culture creates a unique barrier.
            </p>
          </div>
        </div>

        {/* Coordination Failure */}
        <div className="flex gap-3 items-start">
          <div className="flex-shrink-0 p-1.5 rounded bg-[var(--coordination-light)] text-[var(--coordination-color)] border border-[var(--coordination-color)]/10">
            <Users size={15} />
          </div>
          <div>
            <div className="text-xs font-bold text-[var(--coordination-color)]">
              💬 Coordination Failure
            </div>
            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
              Drop-off between agencies — referral not made or not followed through.
            </p>
          </div>
        </div>

        {/* Intervention Opportunity */}
        <div className="flex gap-3 items-start">
          <div className="flex-shrink-0 p-1.5 rounded bg-[var(--intervention-light)] text-[var(--intervention-color)] border border-[var(--intervention-color)]/10">
            <ShieldAlert size={15} />
          </div>
          <div>
            <div className="text-xs font-bold text-[var(--intervention-color)]">
              ✦ Intervention Opportunity
            </div>
            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
              Where a navigator or digital tool could have the highest impact.
            </p>
          </div>
        </div>

        {/* Digital Friction */}
        <div className="flex gap-3 items-start">
          <div className="flex-shrink-0 p-1.5 rounded bg-[var(--digital-light)] text-[var(--digital-color)] border border-[var(--digital-color)]/10">
            <Smartphone size={15} />
          </div>
          <div>
            <div className="text-xs font-bold text-[var(--digital-color)]">
              📱 Digital Friction
            </div>
            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
              Where static online info fails to provide the dynamic support needed.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-border">
        <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">
          Placeholder Status Flags
        </h4>
        <div className="grid grid-cols-2 gap-1.5 text-[10px]">
          <span className="px-1.5 py-0.5 bg-amber-50 text-amber-800 rounded border border-amber-200 text-center font-medium">
            [INTERVIEW DATA — TBD]
          </span>
          <span className="px-1.5 py-0.5 bg-blue-50 text-blue-800 rounded border border-blue-200 text-center font-medium">
            [CONFIRM WITH HOLLY]
          </span>
          <span className="px-1.5 py-0.5 bg-purple-50 text-purple-800 rounded border border-purple-200 text-center font-medium">
            [SME REVIEW]
          </span>
          <span className="px-1.5 py-0.5 bg-rose-50 text-rose-800 rounded border border-rose-200 text-center font-medium">
            [CLIENT FEEDBACK]
          </span>
        </div>
        <p className="text-[10px] text-muted-foreground mt-2 leading-relaxed">
          These tags indicate sections that will be updated following Holly's analysis of provider interviews.
        </p>
      </div>
    </div>
  );
}
