import { MobileHeader } from "@/sections/Header/components/MobileHeader";
import { MobileMenu } from "@/sections/Header/components/MobileMenu";
import { useUI } from "@/context/UIContext";

export const MobileNavbar = () => {
  const { mobileMenuOpen } = useUI();

  return (
    <div className="text-base box-border caret-transparent flex flex-col leading-[27.2px] z-[1000] md:text-[17px] md:hidden md:flex-row md:leading-[28.9px] md:z-auto">
      <div className="relative text-white text-base bg-[linear-gradient(to_right,rgb(0,0,0)_0%,rgb(0,0,0)_100%)] shadow-[rgba(0,0,0,0.07)_0px_4px_30px_0px] box-border caret-transparent shrink-0 leading-[27.2px] min-h-[auto] min-w-[auto] z-[99] md:text-[17px] md:leading-[28.9px] md:min-h-0 md:min-w-0">
        <MobileHeader />
        <div className={`mobile-menu-enter ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};
