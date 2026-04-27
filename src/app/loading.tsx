import ConstructionLoader from "@/components/loaders/ConstructionLoader";
import Logo from "@/components/Logo";
import { siteConfig } from "@/lib/site-config";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-900">
      {/* Blueprint grid de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint-grid bg-grid-32 opacity-15"
      />

      <div className="relative flex flex-col items-center">
        <Logo variant="light" />

        <div className="mt-10 text-brand-200">
          <ConstructionLoader size={120} primary="currentColor" accent="rgba(167,200,255,0.7)" />
        </div>

        <p className="mt-8 font-display text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
          A preparar a obra…
        </p>
        <p className="mt-2 font-body text-xs text-white/40">
          {siteConfig.tagline}
        </p>
      </div>
    </div>
  );
}
