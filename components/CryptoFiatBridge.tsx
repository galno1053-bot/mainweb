import Badge from "./Badge";

export default function CryptoFiatBridge() {
  return (
    <div
      id="bridge"
      className="relative overflow-hidden rounded-3xl border border-white/10 glass"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brandPurple/6 via-slate-900/40 to-baseBlue/10 pointer-events-none" />
      <div className="relative px-5 md:px-8 py-10 space-y-8">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300/80">
              Dual-rail flow
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Collateralize crypto, release Rupiah, repay to unlock
            </h3>
            <p className="text-slate-300 max-w-2xl">
              Visual bridge showing onchain lock, fiat handoff, and repayment path. Reduced
              motion users see a static snapshot.
            </p>
          </div>
          <Badge tone="purple">Realtime status</Badge>
        </div>

        <div className="relative flex items-center justify-between gap-4 md:gap-8">
          <div className="relative flex flex-col items-center gap-2 text-center">
            <span className="halo purple" aria-hidden />
            <div className="bridge-node crypto border-brandPurple/60 shadow-glowPurple">
              <div className="text-sm font-semibold text-white">ETH &amp; USDC</div>
              <p className="text-xs text-slate-300">Onchain vault</p>
            </div>
            <Badge tone="purple">Glow crypto</Badge>
          </div>

          <div className="flex-1 relative px-2">
            <div className="bridge-line" />
            <div className="bridge-dot ltr left-[16%]">
              <span className="dot" />
              <span className="bridge-label purple">Collateral locked (onchain)</span>
            </div>
            <div className="bridge-dot rtl left-[84%]">
              <span className="dot" />
              <span className="bridge-label blue">Repay → unlock</span>
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-2 text-center">
            <span className="halo blue" aria-hidden />
            <div className="bridge-node fiat border-baseBlue/70 shadow-glowBlue">
              <div className="text-2xl font-semibold text-white">Rp</div>
              <p className="text-xs text-blue-100 flex items-center gap-1">
                <span className="inline-block h-2.5 w-3 rounded-sm bg-baseBlue/90" />
                Bank
              </p>
            </div>
            <Badge tone="blue">Transfer IDR (manual)</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
