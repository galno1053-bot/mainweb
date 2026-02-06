import { APP_URL, BRAND_NAME, DOCS_URL } from "../lib/constants";

const fitur = [
  {
    title: "Jaminan Onchain",
    description:
      "ETH atau USDC dikunci di blockchain sehingga status pinjaman tetap transparan.",
  },
  {
    title: "Pencairan IDR",
    description:
      "Dana Rupiah dicairkan lewat transfer bank lokal oleh tim operasional.",
  },
  {
    title: "Pelunasan Fleksibel",
    description:
      "Pinjaman bisa dilunasi kapan saja untuk membuka kembali aset jaminan.",
  },
];

const howToLoan = [
  "Hubungkan wallet lalu pilih aset jaminan (ETH atau USDC).",
  "Masukkan nominal pinjaman Rupiah sesuai limit yang tersedia.",
  "Isi data rekening bank penerima untuk proses pencairan.",
  "Konfirmasi transaksi agar jaminan terkunci di blockchain.",
  "Terima transfer IDR dan lunasi kapan saja untuk buka jaminan.",
];

const faq = [
  {
    question: "Apakah proses pencairan otomatis?",
    answer:
      "Belum. Pencairan Rupiah masih dilakukan secara manual oleh tim operasional.",
  },
  {
    question: "Berapa lama pencairan biasanya?",
    answer:
      "Durasi mengikuti jam operasional bank dan antrean proses di sistem.",
  },
  {
    question: "Bagaimana cara pelunasan pinjaman?",
    answer:
      "Pelunasan dilakukan dari aplikasi, lalu status pinjaman diperbarui setelah konfirmasi.",
  },
  {
    question: "Apa risiko utama produk ini?",
    answer:
      "Risiko volatilitas aset kripto dan potensi likuidasi ketika rasio pinjaman meningkat.",
  },
];

function LogoMark() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="28" height="28" rx="9" stroke="black" />
      <path d="M8 21V9L22 21V9" stroke="black" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18.9 3H22L14.7 11.35L23 21H16.5L11.4 15.08L6.2 21H3L10.8 12.14L3 3H9.67L14.28 8.38L18.9 3Z"
        fill="black"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M21.5 4.65L18.22 20.1C17.97 21.2 17.3 21.47 16.38 20.95L11.38 17.27L8.97 19.59C8.7 19.86 8.47 20.09 7.95 20.09L8.31 14.96L17.64 6.53C18.05 6.17 17.55 5.97 17.01 6.33L5.48 13.6L0.52 12.04C-0.56 11.7 -0.58 10.95 0.75 10.43L20.13 2.97C21.03 2.63 21.82 3.17 21.5 4.65Z"
        fill="black"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-20 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="#home" className="inline-flex items-center gap-3">
            <LogoMark />
            <span className="text-base font-semibold">{BRAND_NAME}</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="hover:opacity-70">
              About
            </a>
            <a href="#fitur" className="hover:opacity-70">
              Fitur
            </a>
            <a href="#how-to-loan" className="hover:opacity-70">
              How to Loan
            </a>
            <a href="#faq" className="hover:opacity-70">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6">
        <section id="home" className="py-24 text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-black/60">Hook Text</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Pinjaman Rupiah dengan Jaminan Kripto
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/70">
            {BRAND_NAME} membantu kamu menjaminkan ETH atau USDC di blockchain, lalu menerima
            pinjaman Rupiah melalui proses yang ringkas.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href={APP_URL}
              className="inline-flex rounded-xl border border-black bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Coba Sekarang
            </a>
            <a
              href={DOCS_URL}
              className="inline-flex rounded-xl border border-black px-5 py-3 text-sm font-medium hover:bg-black hover:text-white"
            >
              Docs
            </a>
          </div>
        </section>

        <section id="about" className="py-20 text-center">
          <h2 className="text-3xl font-semibold">About Nexa</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-black/70">
            Nexa adalah platform pinjaman kripto-ke-fiat yang fokus pada alur sederhana, transparan,
            dan mudah dipahami. Jaminan aset diproses onchain, sementara pencairan Rupiah dilakukan
            lewat transfer bank lokal.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-black/10 p-5">
              <h3 className="text-base font-semibold">Transparan</h3>
              <p className="mt-2 text-sm text-black/70">Status pinjaman bisa dipantau dengan jelas.</p>
            </article>
            <article className="rounded-xl border border-black/10 p-5">
              <h3 className="text-base font-semibold">Praktis</h3>
              <p className="mt-2 text-sm text-black/70">Alur dibuat ringkas dari jaminan sampai pelunasan.</p>
            </article>
            <article className="rounded-xl border border-black/10 p-5">
              <h3 className="text-base font-semibold">Fleksibel</h3>
              <p className="mt-2 text-sm text-black/70">Pelunasan dapat dilakukan kapan saja.</p>
            </article>
          </div>
        </section>

        <section id="fitur" className="py-20 text-center">
          <h2 className="text-3xl font-semibold">Fitur</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {fitur.map((item) => (
              <article key={item.title} className="rounded-xl border border-black/10 p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/70">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-to-loan" className="py-20 text-center">
          <h2 className="text-3xl font-semibold">How to Loan</h2>
          <ol className="mx-auto mt-10 max-w-3xl space-y-3 text-left">
            {howToLoan.map((step, index) => (
              <li key={step} className="rounded-xl border border-black/10 p-5">
                <p className="text-sm font-semibold text-black/70">Langkah {index + 1}</p>
                <p className="mt-2 text-sm leading-relaxed text-black">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="faq" className="py-20 text-center">
          <h2 className="text-3xl font-semibold">FAQ</h2>
          <div className="mt-10 space-y-3 text-left">
            {faq.map((item) => (
              <details key={item.question} className="rounded-xl border border-black/10 p-5">
                <summary className="cursor-pointer list-none text-base font-semibold">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-black/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="text-sm font-semibold">{BRAND_NAME}</p>
          <div className="flex items-center gap-2">
            <a
              href="https://x.com"
              aria-label="X"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/15 hover:bg-black hover:text-white"
            >
              <XIcon />
            </a>
            <a
              href="https://t.me"
              aria-label="Telegram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/15 hover:bg-black hover:text-white"
            >
              <TelegramIcon />
            </a>
          </div>
        </div>
        <p className="mx-auto mt-5 max-w-4xl text-center text-sm text-black/70">
          Produk ini memiliki risiko volatilitas aset kripto. Pastikan memahami risikonya sebelum
          menggunakan layanan.
        </p>
      </footer>
    </div>
  );
}
