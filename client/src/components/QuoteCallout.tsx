import React from "react";
import { Quote, MessageSquareText } from "lucide-react";
import { SynthesizedQuote } from "@/lib/data";

interface QuoteCalloutProps {
  quote: SynthesizedQuote;
  className?: string;
}

export const QuoteCallout: React.FC<QuoteCalloutProps> = ({ quote, className = "" }) => {
  return (
    <div
      className={`relative bg-stone-50 border-l-4 border-stone-400 p-5 rounded-r-lg shadow-sm transition-all duration-300 hover:shadow-md hover:bg-stone-50/80 ${className}`}
    >
      <div className="absolute top-4 right-4 text-stone-200/80 pointer-events-none">
        <Quote size={40} className="stroke-[1.5]" />
      </div>
      
      <div className="flex items-start gap-3">
        <div className="mt-1 text-stone-500 bg-stone-100 p-1.5 rounded-md">
          <MessageSquareText size={16} />
        </div>
        <div className="space-y-2 max-w-[90%]">
          <span className="inline-block text-[10px] font-bold tracking-wider text-stone-500 uppercase bg-stone-100 px-2 py-0.5 rounded-full">
            {quote.theme}
          </span>
          <p className="text-stone-800 font-serif text-base italic leading-relaxed">
            "{quote.text}"
          </p>
          <p className="text-xs text-stone-500 font-sans font-medium">
            — {quote.attribution}
          </p>
        </div>
      </div>
    </div>
  );
};
