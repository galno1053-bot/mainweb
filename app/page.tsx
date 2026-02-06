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
      title: "Lock ETH or USDC on Base",
      description:
        "Sign a single L2 transaction to lock funds into the vault. Collateral state is readable by anyone.",
    },
    {
      title: "Manual IDR transfer",
      description:
        "Ops team moves Rupiah through supported banks while referencing your onchain lock as proof of funds.",
    },
    {
      title: "IDR lands in your account",
      description:
        "Recipient receives a local transfer with your memo. Status stays tied to the lock reference.",
    },
    {
      title: "Repay to unlock",
      description:
        "Send back IDR (or remit onchain) to release the original ETH/USDC. No surprises—line turns calm blue.",
    },
  ];

  const faqs = [
    {
      question: "What chains are supported for collateral?",
      answer:
        "Base L2 to keep gas minimal and settlement fast. Additional chains can be added by deploying the same vault contract.",
    },
    {
      question: "How do you verify the fiat leg?",
      answer:
        "Each IDR transfer is tagged with a reference from the lock transaction hash. Operations reconcile manually and update the offchain mirror.",
    },
    {
      question: "Is there slippage?",
      answer:
        "No automated swap happens here—the crypto stays locked 1:1. FX handling occurs outside the contract so rates are quoted upfront.",
    },
    {
      question: "What if motion is disabled?",
      answer:
        "If your system prefers reduced motion, the bridge shows a static snapshot without moving dots or glow pulses.",
    },
  ];

  return (
    <div className="relative">
      <div className="grain-overlay" aria-hidden />
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 space-y-16 pb-20">
        <Section
          kicker="Base → Indonesia"
          title={`${BRAND_NAME} bridges ETH & USDC into Rupiah with bank-grade clarity.`}
          description="Lock crypto onchain, trigger a manual IDR transfer, and repay to unlock. See the rails in motion—purple for crypto, blue for fiat."
          align="left"
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Start bridging</Button>
            <Button variant="ghost">View docs</Button>
            <Badge tone="purple">Glow on crypto</Badge>
            <Badge tone="blue">Base blue for IDR</Badge>
          </div>
        </Section>

        <CryptoFiatBridge />

        <Section
          kicker="Controls"
          title="Guardrails for moving value between rails"
          description="Minimal surface area: clear ownership of crypto, annotated fiat transfers, and predictable unlock rules."
        >
          <div className="grid md:grid-cols-3 gap-4">
            <Card
              eyebrow="Transparency"
              title="Traceable lock hash"
              description="Bridge line references the vault tx hash so fiat ops know which lock to honor."
              icon={<span>🔗</span>}
            />
            <Card
              eyebrow="Coverage"
              title="Manual IDR, visible state"
              description="Blue glow shows the fiat leg is in motion while collateral remains locked."
              icon={<span>🏦</span>}
            />
            <Card
              eyebrow="Safety"
              title="Repay → unlock"
              description="Right-to-left dot reminds users the vault only opens after repayment confirmation."
              icon={<span>✅</span>}
            />
          </div>
        </Section>

        <Section
          id="how"
          kicker="Flow"
          title="Step-by-step across both rails"
          description="Designed for operators and users who need to see exactly where value sits."
        >
          <Stepper steps={steps} />
        </Section>

        <Section
          id="faq"
          kicker="Support"
          title="FAQ"
          description="Common answers for compliance, operations, and user experience."
        >
          <FAQAccordion items={faqs} />
        </Section>
      </main>
    </div>
  );
}
