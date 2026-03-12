import { useState } from "react";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] bg-black text-white text-sm px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-3 shadow-lg">
      <p className="font-jost text-[13px] leading-[22px] opacity-80">
        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
        <a href="#" className="underline hover:text-lime-300 transition-colors duration-200">Learn more</a>
      </p>
      <div className="flex gap-3 shrink-0">
        <button
          onClick={() => setVisible(false)}
          className="text-[12px] font-bold font-jost bg-lime-400 text-black px-4 py-2 hover:bg-lime-300 transition-colors duration-200 btn-press cursor-pointer"
        >
          Accept
        </button>
        <button
          onClick={() => setVisible(false)}
          className="text-[12px] font-bold font-jost bg-zinc-700 text-white px-4 py-2 hover:bg-zinc-600 transition-colors duration-200 btn-press cursor-pointer"
        >
          Decline
        </button>
      </div>
    </div>
  );
};
