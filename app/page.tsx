import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";

export const metadata = {
  title: "CompetitorSpy - Monitoriza a tu competencia",
  description: "Recibe alertas automaticas cuando tus competidores cambien precios o landing pages.",
  openGraph: {
    type: "website",
    url: "https://competitorspy.com",
    title: "CompetitorSpy - Monitoriza a tu competencia",
    description: "Recibe alertas automaticas cuando tus competidores cambien precios o landing pages.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "CompetitorSpy - Monitoriza a tu competencia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://competitorspy.com",
    title: "CompetitorSpy - Monitoriza a tu competencia",
    description: "Recibe alertas automaticas cuando tus competidores cambien precios o landing pages.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
