import { NavbarContent } from "@/sections/Header/components/NavbarContent";

export const DesktopNavbar = () => {
  return (
    <div className="text-base box-border caret-transparent hidden leading-[27.2px] md:text-[17px] md:block md:leading-[28.9px]">
      <div className="text-base box-border caret-transparent leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
        <NavbarContent />
      </div>
    </div>
  );
};
