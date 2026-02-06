import { APP_URL, BRAND_NAME } from "../lib/constants";

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

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto max-w-4xl px-6">
        <section className="py-24 text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-black/60">Hook Text</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Pinjaman Rupiah dengan Jaminan Kripto
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/70">
            {BRAND_NAME} membantu kamu menjaminkan ETH atau USDC di blockchain, lalu menerima
            pinjaman Rupiah melalui proses yang ringkas.
          </p>
          <a
            href={APP_URL}
            className="mt-8 inline-flex rounded-xl border border-black bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Buka Aplikasi
          </a>
        </section>

        <section className="py-20 text-center">
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

        <section className="py-20 text-center">
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

      <footer className="border-t border-black/10 px-6 py-8 text-center text-sm text-black/70">
        Produk ini memiliki risiko volatilitas aset kripto. Pastikan memahami risikonya sebelum
        menggunakan layanan.
      </footer>
    </div>
  );
}
