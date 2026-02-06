import Image from "next/image";

export default function Home() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <Image src="/logo.svg" alt="Nexa logo" width={28} height={28} />
          <span className="brand-name">Nexa</span>
        </div>
        <nav className="nav-links">
          <a href="#">Produk</a>
          <a href="#">Cara Kerja</a>
          <a href="#">Docs</a>
        </nav>
        <button className="primary" type="button">
          Launch App
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">Nexa Lending</p>
            <h1>Pinjam IDR dengan jaminan crypto.</h1>
            <p className="lead">
              Ringkas dan jelas. Saat ini mendukung ETH dan USDC di Base.
            </p>
            <div className="actions">
              <button className="primary" type="button">
                Mulai Sekarang
              </button>
              <button className="ghost" type="button">
                Lihat Docs
              </button>
            </div>
          </div>

          <div className="bridge">
            <div className="bridge-side">
              <span className="label">CRYPTO</span>
              <span className="value">ETH · USDC</span>
            </div>

            <div className="bridge-center" aria-label="Bridge animation">
              <svg viewBox="0 0 480 120" className="bridge-svg" role="img">
                <path
                  d="M20 96 C120 10, 360 10, 460 96"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle r="4" fill="#2e6bff">
                  <animateMotion
                    dur="3.2s"
                    repeatCount="indefinite"
                    path="M20 96 C120 10, 360 10, 460 96"
                  />
                </circle>
              </svg>
            </div>

            <div className="bridge-side right">
              <span className="label">FIAT</span>
              <span className="value">IDR / Rupiah</span>
            </div>
          </div>
        </section>

        <section className="features">
          <article>
            <h3>Agunan Aman</h3>
            <p>Crypto tetap terkunci sampai pinjaman lunas.</p>
          </article>
          <article>
            <h3>Cair Cepat</h3>
            <p>Pinjaman IDR cair ke rekening lokal.</p>
          </article>
          <article>
            <h3>Support Base</h3>
            <p>ETH dan USDC di jaringan Base.</p>
          </article>
        </section>
      </main>

      <footer className="footer">
        <span>Nexa Lending</span>
        <span>Crypto collateral for real IDR.</span>
      </footer>
    </div>
  );
}