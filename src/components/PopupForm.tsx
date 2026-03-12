import { useState } from "react";

export const PopupForm = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
    }, 800);
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-white py-4 font-jost font-bold">
        <span className="text-lime-400 text-2xl">✓</span>
        <span>You're subscribed!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-base box-border caret-transparent leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
      <div className="text-base box-border caret-transparent leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
        <div className="text-base items-stretch box-border caret-transparent gap-x-[7px] flex leading-[27.2px] gap-y-[7px] md:text-[17px] md:leading-[28.9px]">
          <input
            type="email"
            name="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className={`text-sm bg-transparent box-border block grow leading-[23.8px] max-w-full text-nowrap w-full border px-5 py-3 border-solid font-jost focus:outline-none focus:border-lime-400 transition-colors duration-200 ${status === "error" ? "border-red-400" : "border-white"}`}
          />
          <button
            type="submit"
            disabled={loading}
            className="text-[11px] font-bold bg-lime-600 box-border block leading-[34px] text-center text-nowrap px-[15px] py-0 font-jost md:text-xs md:leading-10 hover:text-slate-950 hover:bg-white transition-colors duration-200 cursor-pointer btn-press disabled:opacity-70"
          >
            {loading ? "…" : "Sign Up"}
          </button>
        </div>
        {status === "error" && (
          <p className="text-red-400 text-xs font-jost mt-1">Please enter a valid email.</p>
        )}
        <div className="text-[11.9px] items-stretch box-border caret-transparent gap-x-[7px] flex leading-[20.23px] gap-y-[7px] w-full mt-2.5 md:text-[13.6px] md:leading-[23.12px]">
          <input
            name="AGREE_TO_TERMS"
            aria-label="checkbox"
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="text-[13.3333px] bg-transparent box-border leading-[normal] overflow-visible mr-[4.66667px] mt-[4.66667px] p-0 font-arial cursor-pointer accent-lime-500"
          />
          <label className="text-[11.9px] box-border caret-transparent leading-[20.23px] md:text-[13.6px] md:leading-[23.12px]">
            I have read and agree to the terms &amp; conditions
          </label>
        </div>
      </div>
    </form>
  );
};
