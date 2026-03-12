import { useUI } from "@/context/UIContext";

export const TopBar = () => {
  const { topBarVisible, hideTopBar } = useUI();

  if (!topBarVisible) return null;

  return (
    <div className="relative text-white text-[11.9px] items-center box-border caret-transparent flex leading-[20.23px] max-w-full overflow-hidden mx-auto px-5 py-[7px] md:text-[13.6px] md:leading-[23.12px] transition-all duration-300">
      <div className="text-[11.9px] box-border caret-transparent grow leading-[20.23px] min-h-[auto] min-w-[auto] md:text-[13.6px] md:leading-[23.12px]">
        By using this site, you agree to the{" "}
        <a
          href="#"
          className="text-[11.9px] font-bold box-border caret-transparent leading-[20.23px] underline decoration-dotted decoration-1 md:text-[13.6px] md:leading-[23.12px] hover:text-lime-400 transition-colors duration-200"
        >
          Privacy Policy
        </a>
        {" "}and{" "}
        <a
          href="#"
          className="text-[11.9px] font-bold box-border caret-transparent leading-[20.23px] underline decoration-dotted decoration-1 md:text-[13.6px] md:leading-[23.12px] hover:text-lime-400 transition-colors duration-200"
        >
          Terms of Use
        </a>
        .
      </div>
      <div className="text-[11.9px] box-border caret-transparent leading-[20.23px] min-h-[auto] min-w-[auto] md:text-[13.6px] md:leading-[23.12px]">
        <button
          onClick={hideTopBar}
          className="text-[11px] font-bold bg-zinc-500/20 box-border caret-transparent flex shrink-0 leading-[11px] text-nowrap ml-5 px-[15px] py-[5px] font-jost md:text-xs md:leading-3 hover:bg-lime-600 transition-colors duration-200 cursor-pointer btn-press"
        >
          <span className="text-[11px] box-border caret-transparent block leading-[11px] min-h-[auto] min-w-[auto] text-nowrap md:text-xs md:leading-3">
            Accept
          </span>
        </button>
      </div>
    </div>
  );
};
