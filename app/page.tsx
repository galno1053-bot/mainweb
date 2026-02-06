import Badge from "../components/Badge";
import Button from "../components/Button";
import Card from "../components/Card";
import CryptoFiatBridge from "../components/CryptoFiatBridge";
import FAQAccordion from "../components/FAQAccordion";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Stepper from "../components/Stepper";
import { BRAND_NAME } from "../lib/constants";

export default function Page() {
  const steps = [
    {
      title: "Kunci ETH atau USDC di Base",
      description:
        "Pengguna menandatangani satu transaksi L2 untuk menaruh dana ke brankas. Status jaminan bisa diverifikasi publik.",
    },
    {
      title: "Transfer IDR dilakukan manual",
      description:
        "Tim operasional mengirim Rupiah melalui bank mitra dengan referensi hash penguncian onchain sebagai bukti.",
    },
    {
      title: "Dana Rupiah masuk ke rekening",
      description:
        "Penerima memperoleh transfer lokal sesuai instruksi. Status tetap terhubung ke referensi transaksi penguncian.",
    },
    {
      title: "Pelunasan untuk membuka jaminan",
      description:
        "Setelah pelunasan terkonfirmasi, brankas membuka ETH atau USDC sesuai porsi yang dikunci di awal.",
    },
  ];

  const faqs = [
    {
      question: "Jaringan apa yang didukung untuk jaminan?",
      answer:
        "Saat ini fokus di Base agar biaya gas lebih efisien dan finalitas cepat. Ekspansi jaringan bisa ditambah lewat deployment brankas serupa.",
    },
    {
      question: "Bagaimana verifikasi sisi fiat dilakukan?",
      answer:
        "Setiap transfer IDR memakai referensi hash penguncian. Tim operasional melakukan rekonsiliasi manual agar pencatatan onchain dan offchain konsisten.",
    },
    {
      question: "Apakah ada slippage?",
      answer:
        "Tidak ada swap otomatis pada alur ini. Kripto tetap terkunci sebagai jaminan, sedangkan nilai fiat dikonfirmasi saat penawaran awal.",
    },
    {
      question: "Apa yang terjadi jika reduced motion aktif?",
      answer:
        "Animasi titik bergerak dan efek cahaya akan dimatikan otomatis, lalu jembatan ditampilkan sebagai tampilan statis.",
    },
  ];

  return (
    <div className="relative">
      <div className="grain-overlay" aria-hidden />
      <Navbar />

      <main className="mx-auto max-w-6xl space-y-16 px-6 pb-20">
        <Section
          kicker="Base ke Indonesia"
          title={`${BRAND_NAME} menghubungkan ETH dan USDC ke Rupiah dengan alur yang jelas.`}
          description="Kunci aset di onchain, proses transfer IDR manual, lalu lunasi untuk membuka jaminan. Semua tahap terlihat dalam satu visual jembatan."
          align="left"
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Mulai Sekarang</Button>
            <Button variant="ghost">Lihat Dokumentasi</Button>
            <Badge tone="purple">Sisi kripto berpendar ungu</Badge>
            <Badge tone="blue">Sisi Rupiah memakai Base Blue</Badge>
          </div>
        </Section>

        <CryptoFiatBridge />

        <Section
          kicker="Kontrol"
          title="Rambu aman agar perpindahan nilai tetap terjaga"
          description="Permukaan produk dibuat ringkas: kepemilikan jaminan jelas, transfer fiat teranotasi, dan aturan buka jaminan tetap tegas."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <Card
              eyebrow="Transparansi"
              title="Hash penguncian dapat ditelusuri"
              description="Jembatan mengaitkan proses operasional dengan hash brankas agar referensi transaksi tidak terputus."
              icon={<span>TX</span>}
            />
            <Card
              eyebrow="Operasional"
              title="Transfer IDR tetap terlihat"
              description="Glow biru menandakan proses transfer fiat berjalan sambil jaminan tetap terkunci."
              icon={<span>IDR</span>}
            />
            <Card
              eyebrow="Kepastian"
              title="Lunasi lalu buka jaminan"
              description="Titik kanan ke kiri mengingatkan bahwa jaminan hanya terbuka setelah pelunasan tervalidasi."
              icon={<span>OK</span>}
            />
          </div>
        </Section>

        <Section
          id="how"
          kicker="Proses"
          title="Langkah demi langkah pada dua rel"
          description="Dirancang agar tim operasional dan pengguna bisa melihat posisi nilai setiap saat."
        >
          <Stepper steps={steps} />
        </Section>

        <Section
          id="faq"
          kicker="Bantuan"
          title="Pertanyaan Umum"
          description="Jawaban cepat untuk aspek operasional, kepatuhan, dan pengalaman pengguna."
        >
          <FAQAccordion items={faqs} />
        </Section>
      </main>
    </div>
  );
}
