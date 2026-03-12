import { HeroSection } from "@/sections/HeroSection";
import { NewsletterSection } from "@/sections/NewsletterSection";
import { FeaturedArticle } from "@/sections/FeaturedArticle";
import { AdBanner } from "@/components/AdBanner";
import { CTASection } from "@/sections/CTASection";
import { MustReadSection } from "@/sections/MustReadSection";
import { SidebarSection } from "@/sections/SidebarSection";

export const HomePage = () => {
  return (
    <div className="text-base box-border caret-transparent leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
      <HeroSection />
      <NewsletterSection />
      <FeaturedArticle />
      <AdBanner />
      <CTASection />
      <MustReadSection />
      <SidebarSection />
    </div>
  );
};
