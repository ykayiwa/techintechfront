import { CTAContent } from "@/sections/CTASection/components/CTAContent";
import { PopularPosts } from "@/sections/CTASection/components/PopularPosts";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const CTASection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`relative text-base box-border caret-transparent flex flex-col leading-[27.2px] max-w-full w-full mb-10 md:text-[17px] md:leading-[28.9px] reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="text-base box-border caret-transparent gap-x-0 flex flex-col grow flex-wrap h-full leading-[27.2px] max-w-[min(100%,1140px)] min-h-[auto] min-w-[auto] gap-y-0 w-full mx-auto md:text-[17px] md:flex-row md:flex-nowrap md:leading-[28.9px] md:max-w-[1300px]">
        <CTAContent />
        <PopularPosts />
      </div>
    </div>
  );
};
