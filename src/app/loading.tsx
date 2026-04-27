export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-900">
      <div className="flex flex-col items-center gap-5">
        <span
          aria-hidden
          className="h-12 w-12 animate-spin rounded-full border-2 border-white/20 border-t-white"
        />
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
          A carregar
        </p>
      </div>
    </div>
  );
}
