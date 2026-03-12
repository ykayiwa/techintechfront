import { TrendingList } from "@/sections/HeroSection/components/TrendingList";

export const TrendingSection = () => {
  return (
    <div className="relative flex flex-col gap-y-5 w-full pt-5 px-5 border-t-[3px] border-solid border-black md:w-[45%] md:pl-10 md:pr-0">
      {/* Heading */}
      <div>
        <h2 className="relative inline-flex items-center text-[35px] font-bold tracking-[-0.5px] leading-[35px] font-jost z-[1] pl-[15px] md:text-[50px] md:leading-[50px]">
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1/2 bg-amber-300 opacity-50 z-[-1]"
          />
          Trending →
        </h2>
      </div>
      <TrendingList />
    </div>
  );
};
