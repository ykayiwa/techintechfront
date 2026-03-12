import { TopBar } from "@/sections/Header/components/TopBar";
import { DesktopNavbar } from "@/sections/Header/components/DesktopNavbar";
import { MobileNavbar } from "@/sections/Header/components/MobileNavbar";

export const Header = () => {
  return (
    <header className="relative text-base box-border caret-transparent leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
      <aside className="text-base bg-black box-border caret-transparent leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
        <TopBar />
      </aside>
      <div className="relative text-base box-border caret-transparent leading-[27.2px] w-full z-[110] md:text-[17px] md:leading-[28.9px]">
        <div className="text-base box-border caret-transparent leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};
