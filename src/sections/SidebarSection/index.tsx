import { TodayWidget } from "@/sections/SidebarSection/components/TodayWidget";
import { SponsoredWidget } from "@/sections/SidebarSection/components/SponsoredWidget";
import { CategoryWidget } from "@/sections/SidebarSection/components/CategoryWidget";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const SidebarSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`relative text-base box-border caret-transparent flex flex-col leading-[27.2px] max-w-full w-full mb-5 px-2.5 md:text-[17px] md:leading-[28.9px] md:mb-10 reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="text-base box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full leading-[27.2px] max-w-[min(100%,1140px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-2.5 md:text-[17px] md:flex-row md:flex-nowrap md:leading-[28.9px] md:max-w-[1320px]">
        <TodayWidget />
        <SponsoredWidget />
        <CategoryWidget />
      </div>
    </div>
  );
};
