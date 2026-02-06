import Badge from "./Badge";

export default function CryptoFiatBridge() {
  return (
    <div
      id="bridge"
      className="glass relative overflow-hidden rounded-3xl border border-slate-200/80"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brandPurple/10 via-white/50 to-baseBlue/10" />

      <div className="relative space-y-8 px-5 py-10 md:px-8">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Alur Dua Sisi</p>
            <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Kunci kripto, kirim Rupiah, lalu lunasi untuk buka jaminan
            </h3>
            <p className="max-w-2xl text-slate-600">
              Visual jembatan ini menampilkan penguncian onchain, proses transfer fiat, dan jalur
              pelunasan. Jika perangkat memakai reduced motion, tampilan akan statis.
            </p>
          </div>
          <Badge tone="purple">Status Waktu Nyata</Badge>
        </div>

        <div className="relative flex items-center justify-between gap-4 md:gap-8">
          <div className="relative flex flex-col items-center gap-2 text-center">
            <span className="halo purple" aria-hidden />
            <div className="bridge-node crypto border-brandPurple/70 shadow-glowPurple">
              <div className="text-sm font-semibold text-slate-900">ETH &amp; USDC</div>
              <p className="text-xs text-slate-600">Brankas Onchain</p>
            </div>
            <Badge tone="purple">Node Kripto</Badge>
          </div>

          <div className="relative flex-1 px-2">
            <div className="bridge-line" />
            <div className="bridge-dot ltr left-[16%]">
              <span className="dot" />
              <span className="bridge-label purple">Jaminan terkunci (onchain)</span>
            </div>
            <div className="bridge-dot rtl left-[84%]">
              <span className="dot" />
              <span className="bridge-label blue">Lunasi lalu buka jaminan</span>
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-2 text-center">
            <span className="halo blue" aria-hidden />
            <div className="bridge-node fiat border-baseBlue/70 shadow-glowBlue">
              <div className="text-2xl font-semibold text-slate-900">Rp</div>
              <p className="flex items-center gap-1 text-xs text-slate-600">
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
