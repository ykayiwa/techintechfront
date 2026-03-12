import { useUI } from "@/context/UIContext";
import { PopupForm } from "@/components/PopupForm";

export const PopupNewsletter = () => {
  const { popupVisible, closePopup } = useUI();

  return (
    <div
      className={`popup-overlay fixed inset-0 z-[99999] flex items-center justify-center p-5 bg-black/50 ${popupVisible ? "popup-active" : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) closePopup(); }}
    >
      <div className="popup-card relative text-white text-base box-border max-w-[760px] w-full md:w-full">
        <button
          onClick={closePopup}
          aria-label="Close newsletter popup"
          className="absolute top-3 right-3 z-10 text-white bg-black/40 hover:bg-black/70 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold transition-colors duration-200 cursor-pointer"
        >
          ×
        </button>
        <div className="shadow-[rgba(0,0,0,0.3)_0px_4px_15px_0px] box-border flex flex-wrap leading-[27.2px] w-full overflow-hidden md:flex-nowrap">
          <div className="box-border flex shrink-0 leading-[27.2px] w-full md:w-2/5">
            <div className="relative bg-zinc-500/10 box-border w-full pb-[5px] md:pb-[135%]">
              <img
                src="/assets/images/banners/newsletter-popup.jpg"
                alt=""
                className="absolute aspect-[auto_451_/_600] box-border h-full max-w-full object-cover w-full inset-0"
              />
            </div>
          </div>
          <div className="bg-slate-950 box-border flex flex-col grow justify-evenly leading-[27.2px] w-full p-5 md:w-auto md:p-10">
            <div className="relative box-border leading-[27.2px] py-2.5">
              <h6 className="text-3xl font-extrabold box-border tracking-[-1.1538px] leading-[39px] break-words font-plus_jakarta_sans md:text-[52px] md:tracking-[-1.99992px] md:leading-[62.4px]">
                Our Newsletter
                <span className="absolute text-3xl box-border block tracking-[-1.1538px] leading-[39px] opacity-20 break-words pointer-events-none right-5 top-2.5 md:text-[52px] md:tracking-[-1.99992px] md:leading-[62.4px]">
                  <i className="text-[52px] font-normal box-border tracking-[-1.1538px] leading-[52px] break-words font-ruby_icon md:tracking-[-1.99992px] before:accent-auto before:box-border before:caret-transparent before:text-white before:text-[52px] before:not-italic before:normal-nums before:font-normal before:tracking-[-1.1538px] before:leading-[52px] before:list-outside before:list-disc before:break-words before:pointer-events-none before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ruby_icon before:md:tracking-[-1.99992px]"></i>
                </span>
              </h6>
              <div className="text-[15.64px] box-border leading-[26.588px] mt-[15px]">
                Subscribe now for a front-row seat to the latest in technology,
                marketing strategies, and market trends – Your Gateway to
                Innovation
              </div>
            </div>
            <div className="relative box-border leading-[27.2px] py-2.5">
              <PopupForm />
            </div>
            <div className="relative box-border leading-[27.2px] py-2.5">
              <span className="text-xs box-border leading-[20.4px] opacity-70 font-jost md:text-[13px] md:leading-[22.1px]">
                Zero spam, Unsubscribe at any time.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
