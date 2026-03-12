import { MenuButton } from "@/components/MenuButton";
import { MobileLogo } from "@/components/MobileLogo";
import { MobileActions } from "@/sections/Header/components/MobileActions";

export const MobileHeader = () => {
  return (
    <div className="text-base items-center box-border caret-transparent flex leading-[27.2px] min-h-[42px] px-5 md:text-[17px] md:leading-[28.9px]">
      <MenuButton />
      <div className="text-base items-stretch box-border caret-transparent flex justify-center leading-[27.2px] min-h-[auto] min-w-[auto] w-2/5 md:text-[17px] md:leading-[28.9px] md:min-h-0 md:min-w-0">
        <MobileLogo />
      </div>
      <MobileActions />
    </div>
  );
};
