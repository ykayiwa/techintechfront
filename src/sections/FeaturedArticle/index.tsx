import { ArticleCard } from "@/components/ArticleCard";
import { SpotlightSection } from "@/sections/FeaturedArticle/components/SpotlightSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const FeaturedArticle = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`relative text-base box-border caret-transparent flex flex-col leading-[27.2px] max-w-full w-full mb-[30px] px-5 md:text-[17px] md:leading-[28.9px] md:mb-10 md:px-0 reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="text-base box-border caret-transparent gap-x-0 flex flex-col grow flex-wrap h-full leading-[27.2px] max-w-[min(100%,1140px)] min-h-[auto] min-w-[auto] gap-y-0 w-full mx-auto md:text-[17px] md:flex-row-reverse md:flex-nowrap md:leading-[28.9px] md:max-w-[1300px]">
        <div className="relative text-base box-border caret-transparent gap-x-5 flex flex-col shrink-0 flex-wrap leading-[27.2px] min-h-[auto] gap-y-5 w-full md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:w-[55%]">
          <div className="relative text-base box-border caret-transparent gap-x-5 leading-[27.2px] max-w-full min-h-[auto] gap-y-5 md:text-[17px] md:leading-[28.9px]">
            <div className="text-base box-border caret-transparent h-full leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
              <div className="relative text-base box-border caret-transparent leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
                <div className="text-base box-border caret-transparent flex grow flex-wrap leading-[27.2px] gap-y-[30px] -mx-5 md:text-[17px] md:leading-[28.9px] md:gap-y-[35px]">
                  <ArticleCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SpotlightSection />
      </div>
    </div>
  );
};
