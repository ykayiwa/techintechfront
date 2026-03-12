import { PostGrid } from "@/sections/MustReadSection/components/PostGrid";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const MustReadSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`relative text-base box-border caret-transparent flex flex-col leading-[27.2px] max-w-full w-full mb-5 px-5 md:text-[17px] md:leading-[28.9px] md:mb-[30px] reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="text-base box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full leading-[27.2px] max-w-[min(100%,1140px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:max-w-[1300px]">
        <div className="relative text-base box-border caret-transparent gap-x-5 leading-[27.2px] max-w-full min-h-[auto] gap-y-5 md:text-[17px] md:leading-[28.9px]">
          <div className="text-base box-border caret-transparent h-full leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
            <div className="text-base box-border caret-transparent leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
              <div className="relative text-base items-center box-border caret-transparent gap-x-2.5 flex leading-[27.2px] w-full md:text-[17px] md:leading-[28.9px]">
                <h2 className="relative text-[26px] font-bold box-border caret-transparent tracking-[-0.76466px] leading-[26px] min-h-[auto] min-w-[auto] break-words font-plus_jakarta_sans md:text-[34px] md:tracking-[-0.99994px] md:leading-[34px]">
                  <span className="relative text-[35px] box-border caret-transparent tracking-[-0.5px] leading-[35px] break-words z-[1] font-jost md:text-6xl md:leading-[60px]">
                    ⚐ Must Read
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <PostGrid />
        <div className="relative text-base self-center box-border caret-transparent gap-x-5 leading-[27.2px] max-w-full min-h-[auto] gap-y-5 w-full md:text-[17px] md:leading-[28.9px]">
          <div className="text-base box-border caret-transparent h-full leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
            <div className="text-base box-border caret-transparent leading-4 text-center md:text-[17px] md:leading-[17px]">
              <span className="text-[10px] box-border caret-transparent block leading-[10px] mb-2.5 font-jost md:text-[13px] md:leading-[13px]">
                - Advertisement -
              </span>
              <div className="text-base box-border caret-transparent inline-block leading-[0px] max-w-full overflow-hidden md:text-[17px]">
                <a href="#" className="text-base box-border caret-transparent md:text-[17px] hover:opacity-80 transition-opacity duration-200">
                  <img
                    src="https://c.animaapp.com/mmnh9bqovGnzGh/assets/banner-new.jpg"
                    alt="Ad image"
                    className="text-base aspect-[auto_1300_/_300] box-border caret-transparent inline max-w-full object-cover w-[1300px] md:text-[17px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
