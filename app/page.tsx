import Badge from "../components/Badge";
import Button from "../components/Button";
import Card from "../components/Card";
import CryptoFiatBridge from "../components/CryptoFiatBridge";
import FAQAccordion from "../components/FAQAccordion";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Stepper from "../components/Stepper";
import { APP_URL, BRAND_NAME } from "../lib/constants";

const ringkasan = [
  {
    title: "Jaminan Onchain",
    description:
      "ETH atau USDC dikunci di blockchain sebagai jaminan yang transparan dan mudah diverifikasi.",
  },
  {
    title: "Pencairan Rupiah",
    description:
      "Pencairan dilakukan melalui transfer bank lokal secara manual dengan alur operasional yang jelas.",
  },
  {
    title: "Fleksibel",
    description:
      "Pinjaman bisa dilunasi kapan saja untuk membuka kembali jaminan sesuai status pinjaman terbaru.",
  },
];

const langkah = [
  {
    title: "Pilih jaminan",
    description: "Pilih aset jaminan ETH atau USDC sebelum membuat pengajuan pinjaman.",
  },
  {
    title: "Masukkan jumlah pinjaman (maks LTV 70%)",
    description:
      "Tentukan jumlah pinjaman Rupiah sesuai batas LTV maksimum 70% dari nilai jaminan.",
  },
  {
    title: "Isi rekening penerima",
    description: "Masukkan data rekening bank tujuan untuk proses pencairan Rupiah.",
  },
  {
    title: "Konfirmasi transaksi (jaminan terkunci onchain)",
    description:
      "Setelah konfirmasi transaksi, jaminan terkunci di smart contract dan status pinjaman tercatat.",
  },
  {
    title: "Admin transfer IDR -> pelunasan kapan saja -> ambil jaminan",
    description:
      "Tim admin melakukan transfer IDR. Anda dapat melunasi kapan saja untuk mengambil kembali jaminan.",
  },
];

const parameter = [
  { title: "Pasangan", value: "ETH -> IDR, USDC -> IDR" },
  { title: "Maksimum LTV", value: "70%" },
  { title: "Likuidasi", value: "95%" },
  { title: "Bunga", value: "APR harian (simple interest)" },
];

const faqItems = [
  {
    question: "Apakah pencairan otomatis?",
    answer:
      "Belum. Pencairan Rupiah dilakukan manual oleh admin, sementara status pinjaman tetap dipantau melalui sistem.",
  },
  {
    question: "Berapa lama pencairan?",
    answer:
      "Waktu pencairan mengikuti jam operasional bank dan antrean proses internal tim admin.",
  },
  {
    question: "Apakah perlu akun?",
    answer:
      "Untuk MVP, akses fitur mengikuti alur dApp dan validasi wallet. Mekanisme akun dapat ditambah di tahap berikutnya.",
  },
  {
    question: "Bagaimana cara pelunasan?",
    answer:
      "Pelunasan dilakukan sesuai instruksi yang tersedia di aplikasi. Setelah lunas, jaminan bisa diambil kembali.",
  },
  {
    question: "Apa itu likuidasi 95%?",
    answer:
      "Jika LTV mencapai 95%, posisi pinjaman masuk ambang likuidasi sesuai kebijakan manajemen risiko.",
  },
  {
    question: "Bisa tambah jaminan?",
    answer:
      "Bisa, selama fitur top-up jaminan aktif. Tujuannya menurunkan LTV agar posisi lebih aman.",
  },
  {
    question: "Salah isi rekening bagaimana?",
    answer:
      "Segera hubungi admin sebelum transfer diproses. Perubahan rekening setelah transfer diproses tidak bisa dijamin.",
  },
  {
    question: "Apakah kontrak sudah diaudit?",
    answer:
      "Audit penuh belum tersedia untuk MVP. Penggunaan disarankan dengan nominal terukur dan pemahaman risiko.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Section id="home" className="pb-20 pt-24">
          <div className="flex justify-center">
            <Badge tone="blue">Hybrid MVP • Jaminan onchain • Pencairan IDR manual</Badge>
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-medium text-black md:text-5xl">
            Jembatan Crypto ke Rupiah
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base font-normal leading-relaxed text-black/70 md:text-lg">
            Jaminkan ETH atau USDC di blockchain, lalu terima pinjaman Rupiah melalui transfer
            bank. Status pinjaman tercatat onchain, proses Rupiah dilakukan secara hybrid.
          </p>

          <div className="mt-10 flex justify-center">
            <CryptoFiatBridge />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href={APP_URL} variant="primary">
              Buka Aplikasi
            </Button>
            <Button href="#cara-kerja" variant="secondary">
              Lihat Cara Kerja
            </Button>
          </div>
        </Section>

        <Section className="py-20" title="Ringkasan" description="Model hybrid untuk akses likuiditas Rupiah dengan jaminan aset digital.">
          <div className="grid gap-4 md:grid-cols-3">
            {ringkasan.map((item) => (
              <Card key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </Section>

        <Section
          id="cara-kerja"
          kicker="Cara Kerja"
          title="Alur pinjaman dari jaminan hingga pelunasan"
        >
          <Stepper steps={langkah} />
          <p className="mx-auto mt-7 max-w-2xl text-sm font-light text-black/70">
            Catatan: Proses Rupiah dilakukan secara manual (hybrid).
          </p>
        </Section>

        <Section
          id="parameter"
          kicker="Parameter"
          title="Parameter utama untuk model pinjaman"
        >
          <div className="grid gap-4 md:grid-cols-4">
            {parameter.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-black/10 bg-white p-4 text-center shadow-[0_12px_24px_rgba(0,0,0,0.05)]"
              >
                <p className="text-sm font-light uppercase tracking-[0.12em] text-baseBlue">
                  {item.title}
                </p>
                <p className="mt-3 text-base font-medium text-black">{item.value}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-baseBlue/30 bg-baseBlue/5 p-6 text-center">
            <p className="text-sm font-normal text-black">
              Jaminan dan status pinjaman tercatat onchain
            </p>
            <p className="mt-2 text-sm font-normal text-black">
              Data rekening disimpan offchain (tidak onchain)
            </p>
          </div>
        </Section>

        <Section id="faq" kicker="FAQ" title="Pertanyaan yang sering ditanyakan">
          <FAQAccordion items={faqItems} />
        </Section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl rounded-xl border border-brandPurple/40 bg-gradient-to-b from-white to-brandPurple/10 p-10 text-center shadow-[0_18px_36px_rgba(0,0,0,0.06)]">
            <h2 className="text-3xl font-medium text-black md:text-4xl">
              Siap mencoba {BRAND_NAME}?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-relaxed text-black/70">
              Buka aplikasi untuk melihat simulasi pinjaman, status jaminan, dan alur pelunasan.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={APP_URL} variant="primary">
                Buka Aplikasi
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 pb-12">
        <div className="mx-auto max-w-4xl border-t border-black/10 pt-7 text-center text-sm font-light text-black/70">
          Produk ini memiliki risiko volatilitas aset kripto. Likuidasi dapat terjadi saat LTV
          mencapai 95%.
        </div>
      </footer>
    </div>
  );
}

