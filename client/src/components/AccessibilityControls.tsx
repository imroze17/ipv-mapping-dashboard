import React, { useState, useEffect } from "react";
import { Settings, Check, ZoomIn, ZoomOut, Eye, RefreshCw, Type } from "lucide-react";

export default function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [textSize, setTextSize] = useState<"normal" | "large" | "larger">("normal");
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);

  // Apply settings to document root
  useEffect(() => {
    const root = document.documentElement;
    
    // Text size classes
    root.classList.remove("text-size-normal", "text-size-large", "text-size-larger");
    if (textSize === "normal") root.classList.add("text-size-normal");
    else if (textSize === "large") root.classList.add("text-size-large");
    else if (textSize === "larger") root.classList.add("text-size-larger");

    // High contrast class
    if (highContrast) {
      root.classList.add("accessibility-high-contrast");
    } else {
      root.classList.remove("accessibility-high-contrast");
    }

    // Dyslexic font class
    if (dyslexicFont) {
      root.classList.add("accessibility-dyslexic-font");
    } else {
      root.classList.remove("accessibility-dyslexic-font");
    }
  }, [textSize, highContrast, dyslexicFont]);

  const resetAll = () => {
    setTextSize("normal");
    setHighContrast(false);
    setDyslexicFont(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans print:hidden">
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        className="w-12 h-12 rounded-full bg-stone-900 hover:bg-stone-800 text-white shadow-lg flex items-center justify-center transition-transform duration-200 active:scale-95 border border-stone-700/50 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
      >
        <Settings size={22} className={`transition-transform duration-500 ${isOpen ? "rotate-90" : ""}`} />
      </button>

      {/* Settings Panel */}
      {isOpen && (
        <div 
          className="absolute bottom-16 right-0 w-72 bg-white rounded-xl border border-stone-200 p-5 shadow-2xl space-y-4 animate-fadeIn"
          style={{
            boxShadow: "0 10px 30px -5px rgba(0,0,0,0.15), 0 0 1px 1px rgba(0,0,0,0.05)"
          }}
        >
          <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
              <Eye size={14} className="text-stone-600" />
              Accessibility Options
            </h4>
            <button
              onClick={resetAll}
              className="text-[10px] font-bold text-stone-500 hover:text-stone-800 flex items-center gap-1 uppercase tracking-wider"
            >
              <RefreshCw size={10} />
              Reset
            </button>
          </div>

          <div className="space-y-4">
            {/* Text Size Controls */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 block">Text Size</label>
              <div className="grid grid-cols-3 gap-1">
                <button
                  onClick={() => setTextSize("normal")}
                  className={`py-1 px-2 text-xs rounded border transition-colors ${
                    textSize === "normal"
                      ? "bg-stone-900 border-stone-900 text-white font-bold"
                      : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  Normal
                </button>
                <button
                  onClick={() => setTextSize("large")}
                  className={`py-1 px-2 text-xs rounded border transition-colors flex items-center justify-center gap-1 ${
                    textSize === "large"
                      ? "bg-stone-900 border-stone-900 text-white font-bold"
                      : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  <ZoomIn size={12} />
                  Large
                </button>
                <button
                  onClick={() => setTextSize("larger")}
                  className={`py-1 px-2 text-xs rounded border transition-colors flex items-center justify-center gap-1 ${
                    textSize === "larger"
                      ? "bg-stone-900 border-stone-900 text-white font-bold"
                      : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  <ZoomIn size={12} />
                  Larger
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between py-1 border-t border-stone-50 pt-2.5">
              <div>
                <label className="text-xs font-bold text-stone-700 block">High Contrast Mode</label>
                <span className="text-[10px] text-stone-500">Increases text-to-background contrast</span>
              </div>
              <button
                onClick={() => setHighContrast(!highContrast)}
                role="switch"
                aria-checked={highContrast}
                className={`w-10 h-6 rounded-full p-0.5 transition-colors duration-200 ${
                  highContrast ? "bg-emerald-600" : "bg-stone-200"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                    highContrast ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Dyslexia Friendly Font Toggle */}
            <div className="flex items-center justify-between py-1 border-t border-stone-50 pt-2.5">
              <div>
                <label className="text-xs font-bold text-stone-700 block">Dyslexia-Friendly Font</label>
                <span className="text-[10px] text-stone-500">Uses OpenDyslexic-inspired styling</span>
              </div>
              <button
                onClick={() => setDyslexicFont(!dyslexicFont)}
                role="switch"
                aria-checked={dyslexicFont}
                className={`w-10 h-6 rounded-full p-0.5 transition-colors duration-200 ${
                  dyslexicFont ? "bg-emerald-600" : "bg-stone-200"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                    dyslexicFont ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="border-t border-stone-100 pt-2 text-[10px] text-stone-500 leading-normal text-center">
            Meets <strong className="text-stone-700 font-bold">WCAG 2.1 AA</strong> contrast guidelines.
          </div>
        </div>
      )}
    </div>
  );
}
