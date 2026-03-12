import { FooterNav } from "@/sections/Footer/components/FooterNav";
import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterCategories } from "@/sections/Footer/components/FooterCategories";
import { SocialStats } from "@/sections/Footer/components/SocialStats";

export const FooterContent = () => {
  return (
    <div className="relative text-base bg-black box-border caret-transparent flex flex-col leading-[27.2px] max-w-full w-full border-lime-300 mx-auto px-5 border-t-[5px] border-solid md:text-[17px] md:leading-[28.9px]">
      <div className="text-base items-center box-border caret-transparent gap-x-0 flex grow flex-wrap h-full justify-between leading-[27.2px] max-w-[min(100%,1140px)] min-h-[auto] min-w-[auto] gap-y-0 w-full mx-auto pb-[50px] md:text-[17px] md:leading-[28.9px] md:max-w-[1300px]">
        <FooterNav />
        <FooterLogo />
        <FooterCategories />
        <SocialStats />
        <div className="relative text-neutral-400 text-[13px] box-border caret-transparent gap-x-0 leading-[22.1px] max-w-full min-h-[auto] gap-y-0">
          <div className="box-border caret-transparent h-full">
            {" "}
            Made by ThemeRuby using the Foxiz theme. Powered by WordPress
          </div>
        </div>
      </div>
    </div>
  );
};
