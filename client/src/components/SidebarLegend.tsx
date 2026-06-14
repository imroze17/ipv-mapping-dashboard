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
        <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
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
            <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
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
            <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
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
            <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
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
            <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
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
            <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
              Where static online info fails to provide the dynamic support needed.
            </p>
          </div>
        </div>
      </div>

      {/* Acronym Glossary */}
      <div className="pt-4 border-t border-border space-y-2">
        <div className="text-[10px] font-bold uppercase tracking-wider text-stone-700">
          Acronym Glossary
        </div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] text-stone-600 leading-tight">
          <div><strong>GAR:</strong> Gov't Assisted Refugee</div>
          <div><strong>PR:</strong> Permanent Resident</div>
          <div><strong>TR:</strong> Temporary Resident</div>
          <div><strong>RAP:</strong> Resettlement Assistance</div>
          <div><strong>LINC:</strong> Language Instruction</div>
          <div><strong>CHC:</strong> Community Health Centre</div>
          <div><strong>ED:</strong> Emergency Dept</div>
          <div><strong>OHIP:</strong> Ont. Health Insurance</div>
          <div><strong>IRCC:</strong> Immigration Canada</div>
          <div><strong>UNHCR:</strong> UN Refugee Agency</div>
          <div><strong>OCAP:</strong> Ownership/Control/Access</div>
          <div><strong>SIT:</strong> System Integration Tool</div>
        </div>
      </div>

      <div className="pt-3 border-t border-border">
        <p className="text-[10px] text-stone-600 leading-relaxed">
          <strong>Sources:</strong> Literature review, first-hand interviews, and Subject Matter Expert review.
        </p>
      </div>
    </div>
  );
}
