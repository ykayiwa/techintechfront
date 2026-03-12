import { Logo } from "@/components/Logo";
import { TopInfo } from "@/sections/Header/components/TopInfo";
import { MainNav } from "@/sections/Header/components/MainNav";

export const NavbarContent = () => {
  return (
    <div className="relative text-base box-border caret-transparent flex flex-col leading-[27.2px] max-w-full w-full border-lime-300 mx-auto border-t-8 border-solid md:text-[17px] md:leading-[28.9px]">
      <div className="text-base box-border caret-transparent gap-x-0 flex grow h-full leading-[27.2px] max-w-[min(100%,1140px)] min-h-0 min-w-0 gap-y-0 w-full mx-auto md:text-[17px] md:leading-[28.9px] md:max-w-[1300px] md:min-h-[auto] md:min-w-[auto]">
        <Logo />
        <div className="relative text-base box-border caret-transparent gap-x-0 flex flex-col flex-wrap leading-[27.2px] min-h-0 gap-y-0 w-full pl-5 md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:min-h-[auto]">
          <TopInfo />
          <MainNav />
        </div>
      </div>
    </div>
  );
};
