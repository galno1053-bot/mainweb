import Image from "next/image";

export default function Home() {
  return (
    <div className="page">
      <div className="backdrop" aria-hidden="true">
        <span className="grid" />
        <span className="orb orb-a" />
        <span className="orb orb-b" />
      </div>

      <div className="watermark" aria-hidden="true">
        <Image src="/logo.svg" alt="" width={560} height={560} priority />
      </div>

      <header className="nav">
        <div className="logo">
          <Image src="/logo.svg" alt="Nexa logo" width={36} height={36} />
          <span className="logo-text">Nexa</span>
        </div>
        <nav className="nav-links">
          <a href="#">Produk</a>
          <a href="#">Cara Kerja</a>
          <a href="#">Docs</a>
        </nav>
        <div className="nav-actions">
          <button className="ghost" type="button">
            ID
          </button>
          <button className="primary" type="button">
            Launch App
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow rise delay-1">Nexa Lending</p>
            <h1 className="hero-title rise delay-2">
              Jembatan crypto ke rupiah yang nyata.
            </h1>
            <p className="hero-desc rise delay-3">
              Pinjam IDR dengan jaminan crypto. Singkat, transparan, dan cair
              cepat. Saat ini hanya mendukung ETH dan USDC di Base.
            </p>
            <div className="hero-actions rise delay-4">
              <button className="primary" type="button">
                Mulai Sekarang
              </button>
              <button className="ghost" type="button">
                Lihat Docs
              </button>
            </div>
            <div className="support rise delay-5">
              <span className="support-label">Support saat ini</span>
              <span className="chip">ETH</span>
              <span className="chip">USDC</span>
              <span className="chip neutral">Base</span>
            </div>
          </div>

          <div className="hero-bridge">
            <div className="bridge-card">
              <div className="bridge-stage">
                <div className="bridge-side left">
                  <span className="bridge-title">CRYPTO</span>
                  <span className="bridge-mini">ETH · USDC</span>
                </div>

                <div className="bridge-center">
                  <svg
                    className="bridge-svg"
                    viewBox="0 0 700 190"
                    role="img"
                    aria-label="Bridge animation"
                  >
                    <defs>
                      <linearGradient
                        id="bridgeGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#22f1a3" />
                        <stop offset="50%" stopColor="#3ad5ff" />
                        <stop offset="100%" stopColor="#f9d648" />
                      </linearGradient>
                    </defs>
                    <path
                      className="bridge-path bridge-glow"
                      d="M40 150 C180 20, 520 20, 660 150"
                      fill="none"
                      stroke="url(#bridgeGradient)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="bridge-path"
                      d="M40 150 C180 20, 520 20, 660 150"
                      fill="none"
                      stroke="url(#bridgeGradient)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle className="bridge-dot" r="6" fill="#f4f7f5">
                      <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        path="M40 150 C180 20, 520 20, 660 150"
                      />
                    </circle>
                    <rect
                      x="24"
                      y="120"
                      width="28"
                      height="56"
                      rx="12"
                      fill="#1e2530"
                    />
                    <rect
                      x="648"
                      y="120"
                      width="28"
                      height="56"
                      rx="12"
                      fill="#1e2530"
                    />
                  </svg>
                </div>

                <div className="bridge-side right">
                  <span className="bridge-title">FIAT</span>
                  <span className="bridge-mini">IDR / Rupiah</span>
                </div>
              </div>
              <p className="bridge-caption">Jaminan crypto, cair rupiah.</p>
            </div>
          </div>
        </section>

        <section className="cards">
          <article className="card">
            <h3>Agunan Terkunci</h3>
            <p>Crypto tetap aman hingga pinjaman lunas.</p>
          </article>
          <article className="card">
            <h3>Tarik IDR Cepat</h3>
            <p>Cair ke rekening rupiah tanpa ribet.</p>
          </article>
          <article className="card">
            <h3>Base Ready</h3>
            <p>Support ETH &amp; USDC di jaringan Base.</p>
          </article>
        </section>
      </main>

      <footer className="footer">
        <span>Nexa Lending</span>
        <span>Bridge crypto ke fiat IDR.</span>
      </footer>
    </div>
  );
}
