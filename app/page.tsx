import Image from "next/image";

export default function Home() {
  return (
    <div className="page">
      <div className="bg" aria-hidden="true">
        <span className="grid" />
        <span className="halo halo-blue" />
        <span className="halo halo-yellow" />
        <span className="slash slash-left" />
        <span className="slash slash-right" />
      </div>

      <div className="logo-ghost" aria-hidden="true">
        <Image src="/logo.svg" alt="" width={720} height={720} priority />
      </div>

      <header className="nav">
        <div className="brand">
          <Image src="/logo.svg" alt="Nexa logo" width={34} height={34} />
          <div className="brand-text">
            <span className="brand-name">Nexa</span>
            <span className="brand-sub">Crypto Lending IDR</span>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#">Produk</a>
          <a href="#">Skema</a>
          <a href="#">Jaminan</a>
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
          <div className="hero-copy">
            <p className="kicker">Nexa Lending</p>
            <h1>Jembatani crypto ke rupiah tanpa drama.</h1>
            <p className="lead">
              Pinjam uang nyata IDR dengan jaminan ETH atau USDC di Base.
              Ringkas, transparan, dan siap untuk web app.
            </p>
            <div className="cta">
              <button className="primary" type="button">
                Mulai Sekarang
              </button>
              <button className="ghost" type="button">
                Lihat Docs
              </button>
            </div>
            <div className="chip-row">
              <span className="chip">ETH</span>
              <span className="chip">USDC</span>
              <span className="chip neutral">Base</span>
              <span className="chip outline">IDR</span>
            </div>
          </div>

          <div className="hero-bridge">
            <div className="bridge-card">
              <div className="bridge-header">
                <span className="bridge-kicker">Bridge Hook</span>
                <span className="bridge-status">Connecting</span>
              </div>
              <div className="bridge-stage">
                <div className="bridge-panel">
                  <span className="panel-title">CRYPTO</span>
                  <span className="panel-sub">ETH · USDC</span>
                </div>

                <div className="bridge-anim">
                  <svg
                    className="bridge-svg"
                    viewBox="0 0 620 200"
                    role="img"
                    aria-label="Bridge animation"
                  >
                    <defs>
                      <linearGradient
                        id="bridgeLine"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#2e6bff" />
                        <stop offset="55%" stopColor="#4a83ff" />
                        <stop offset="100%" stopColor="#e8ff45" />
                      </linearGradient>
                    </defs>
                    <path
                      className="bridge-arc bridge-glow"
                      d="M40 160 C170 20, 450 20, 580 160"
                      fill="none"
                      stroke="url(#bridgeLine)"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      className="bridge-arc"
                      d="M40 160 C170 20, 450 20, 580 160"
                      fill="none"
                      stroke="url(#bridgeLine)"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <circle className="bridge-dot" r="6" fill="#f7f8ff">
                      <animateMotion
                        dur="3.6s"
                        repeatCount="indefinite"
                        path="M40 160 C170 20, 450 20, 580 160"
                      />
                    </circle>
                    <circle
                      className="bridge-dot bridge-dot-2"
                      r="4"
                      fill="#e8ff45"
                    >
                      <animateMotion
                        dur="3.6s"
                        begin="1.2s"
                        repeatCount="indefinite"
                        path="M40 160 C170 20, 450 20, 580 160"
                      />
                    </circle>
                  </svg>
                  <div className="bridge-pylons">
                    <span />
                    <span />
                  </div>
                </div>

                <div className="bridge-panel right">
                  <span className="panel-title">FIAT</span>
                  <span className="panel-sub">IDR / Rupiah</span>
                </div>
              </div>
              <div className="bridge-footer">
                <span>Jaminan crypto, cair rupiah.</span>
                <span className="bridge-note">Support: ETH &amp; USDC di Base</span>
              </div>
            </div>
          </div>
        </section>

        <section className="value">
          <article className="value-card">
            <h3>Agunan Terkunci</h3>
            <p>Crypto tetap aman sampai pinjaman selesai.</p>
          </article>
          <article className="value-card">
            <h3>Cair IDR Cepat</h3>
            <p>Tarik rupiah langsung ke rekening lokal.</p>
          </article>
          <article className="value-card">
            <h3>Rasio Jelas</h3>
            <p>Simulasi transparan sebelum kamu mulai.</p>
          </article>
        </section>

        <section className="app-preview">
          <div className="app-copy">
            <p className="kicker muted">Web App</p>
            <h2>Siap untuk dashboard lending penuh.</h2>
            <p className="lead">
              Struktur layout sudah disiapkan untuk halaman app. Nantinya fokus
              pada monitoring agunan, simulasi LTV, dan penarikan IDR.
            </p>
            <button className="ghost" type="button">
              Masuk ke App
            </button>
          </div>
          <div className="app-card">
            <div className="app-top">
              <span />
              <span />
              <span />
              <div className="app-title">Nexa App Preview</div>
            </div>
            <div className="app-body">
              <div className="app-metric">
                <span className="metric-label">Collateral</span>
                <span className="metric-value">3.2 ETH</span>
              </div>
              <div className="app-metric">
                <span className="metric-label">Pinjaman</span>
                <span className="metric-value">IDR 48.000.000</span>
              </div>
              <div className="app-bar">
                <span />
              </div>
              <div className="app-row">
                <span>Health</span>
                <span className="status">Safe</span>
              </div>
            </div>
          </div>
        </section>

        <section className="steps">
          <div className="steps-head">
            <h2>Alur singkat</h2>
            <p>3 langkah untuk sampai ke rupiah.</p>
          </div>
          <div className="steps-grid">
            <div className="step">
              <span className="step-num">01</span>
              <h3>Kunci agunan</h3>
              <p>Deposit ETH atau USDC ke kontrak.</p>
            </div>
            <div className="step">
              <span className="step-num">02</span>
              <h3>Pinjam IDR</h3>
              <p>Pilih jumlah, dana cair ke rekening.</p>
            </div>
            <div className="step">
              <span className="step-num">03</span>
              <h3>Lunasi</h3>
              <p>Bayar pinjaman, agunan kembali.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Nexa Lending</span>
        <span>Crypto collateral for real IDR.</span>
      </footer>
    </div>
  );
}