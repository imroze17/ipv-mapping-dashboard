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
        <p className="text-xs text-stone-700 mt-1.5 leading-relaxed">
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
            <p className="text-xs text-stone-700 mt-0.5 leading-relaxed">
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
            <p className="text-xs text-stone-700 mt-0.5 leading-relaxed">
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
            <p className="text-xs text-stone-700 mt-0.5 leading-relaxed">
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
            <p className="text-xs text-stone-700 mt-0.5 leading-relaxed">
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
            <p className="text-xs text-stone-700 mt-0.5 leading-relaxed">
              Where static online info fails to provide the dynamic support needed.
            </p>
          </div>
        </div>
      </div>

      {/* Acronym Glossary */}
      <div className="pt-4 border-t border-border space-y-2.5">
        <div className="text-xs font-bold uppercase tracking-wider text-stone-800">
          Acronym Glossary
        </div>
        <div className="flex flex-col gap-1.5 text-xs text-stone-700 leading-normal">
          <div><strong className="text-stone-900 font-bold">GAR:</strong> Government Assisted Refugee</div>
          <div><strong className="text-stone-900 font-bold">PR:</strong> Permanent Resident</div>
          <div><strong className="text-stone-900 font-bold">TR:</strong> Temporary Resident</div>
          <div><strong className="text-stone-900 font-bold">RAP:</strong> Resettlement Assistance Program</div>
          <div><strong className="text-stone-900 font-bold">LINC:</strong> Language Instruction for Newcomers to Canada</div>
          <div><strong className="text-stone-900 font-bold">CHC:</strong> Community Health Centre</div>
          <div><strong className="text-stone-900 font-bold">ED:</strong> Emergency Department</div>
          <div><strong className="text-stone-900 font-bold">OHIP:</strong> Ontario Health Insurance Plan</div>
          <div><strong className="text-stone-900 font-bold">IRCC:</strong> Immigration, Refugees and Citizenship Canada</div>
          <div><strong className="text-stone-900 font-bold">UNHCR:</strong> United Nations High Commissioner for Refugees</div>
          <div><strong className="text-stone-900 font-bold">OCAP:</strong> Ownership, Control, Access, and Possession</div>
          <div><strong className="text-stone-900 font-bold">SIT:</strong> System Integration Tool</div>
        </div>
      </div>

      <div className="pt-3.5 border-t border-border">
        <p className="text-xs text-stone-700 leading-relaxed">
          <strong className="text-stone-900">Sources:</strong> Literature review, first-hand interviews, and Subject Matter Expert review.
        </p>
      </div>
    </div>
  );
}
