import { useUI } from "@/context/UIContext";

export const MenuButton = () => {
  const { mobileMenuOpen, toggleMobileMenu } = useUI();

  return (
    <div className="text-base items-stretch box-border caret-transparent flex shrink-0 leading-[27.2px] min-h-[auto] min-w-[auto] w-[30%] md:text-[17px] md:leading-[28.9px] md:min-h-0 md:min-w-0">
      <div className="text-base items-stretch box-border caret-transparent flex leading-[27.2px] min-h-[auto] min-w-[auto] md:text-[17px] md:leading-[28.9px] md:min-h-0 md:min-w-0">
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={mobileMenuOpen}
          className="text-base items-center box-border caret-transparent flex leading-[27.2px] min-h-[auto] min-w-[auto] pr-2.5 md:text-[17px] md:leading-[28.9px] md:min-h-0 md:min-w-0 cursor-pointer"
        >
          <span className="relative text-base box-border caret-transparent block h-4 leading-[27.2px] min-h-[auto] min-w-[auto] w-6 md:text-[17px] md:leading-[28.9px] md:min-h-0 md:min-w-0">
            <span
              className={`absolute text-base bg-white box-border caret-transparent block h-0.5 leading-[27.2px] rounded-sm left-0 md:text-[17px] md:leading-[28.9px] transition-all duration-300 origin-center ${mobileMenuOpen ? "w-full top-2 rotate-45" : "w-full top-0"}`}
            ></span>
            <span
              className={`absolute text-base bg-white box-border caret-transparent block h-0.5 leading-[27.2px] rounded-sm left-0 top-2/4 md:text-[17px] md:leading-[28.9px] transition-all duration-300 ${mobileMenuOpen ? "w-0 opacity-0" : "w-[65%] opacity-100"}`}
            ></span>
            <span
              className={`absolute text-base bg-white box-border caret-transparent block h-0.5 leading-[27.2px] rounded-sm left-0 md:text-[17px] md:leading-[28.9px] transition-all duration-300 origin-center ${mobileMenuOpen ? "w-full bottom-2 -rotate-45" : "w-2/5 bottom-0"}`}
            ></span>
          </span>
        </button>
      </div>
    </div>
  );
};
