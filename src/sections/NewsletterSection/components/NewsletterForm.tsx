import { useState } from "react";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!agreed) {
      setStatus("error");
      setErrorMsg("Please agree to the terms & conditions.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      setEmail("");
      setAgreed(false);
    }, 900);
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 bg-lime-300/40 border-2 border-lime-400 px-6 py-4 font-jost font-bold text-lg">
        <span className="text-2xl">✓</span>
        <span>Thanks for subscribing! Check your inbox soon.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-base box-border caret-transparent leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
      <div className="text-base box-border caret-transparent leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
        <div className="text-base items-stretch box-border caret-transparent gap-x-0 flex flex-wrap leading-[27.2px] gap-y-0 md:text-[17px] md:gap-x-5 md:leading-[28.9px] md:gap-y-5">
          <input
            type="email"
            name="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className={`text-lg font-bold box-border block grow leading-[30.6px] max-w-full min-h-[auto] min-w-[auto] text-start text-nowrap w-full border p-[15px] border-solid font-jost md:text-[22px] md:leading-[37.4px] md:p-5 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all duration-200 ${status === "error" && !email ? "border-red-500" : "border-black"}`}
          />
          <button
            type="submit"
            disabled={loading}
            className="text-white text-lg font-bold bg-black box-border block leading-[18px] min-h-[auto] min-w-[auto] text-center text-nowrap mt-[5px] px-10 py-[15px] font-jost md:text-xl md:leading-5 md:px-[60px] md:py-5 hover:text-black hover:bg-lime-300 transition-colors duration-200 btn-press disabled:opacity-70 cursor-pointer"
          >
            {loading ? "Signing Up…" : "Sign Up Now"}
          </button>
        </div>
        {errorMsg && (
          <p className="text-red-600 text-sm font-jost mt-2">{errorMsg}</p>
        )}
        <div className="text-[11.9px] items-stretch box-border caret-transparent gap-x-0 flex flex-wrap leading-[20.23px] gap-y-0 w-full mt-[15px] md:text-[13.6px] md:gap-x-5 md:leading-[23.12px] md:gap-y-5">
          <input
            name="AGREE_TO_TERMS"
            aria-label="checkbox"
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="text-[13.3333px] bg-transparent box-border leading-[normal] text-start overflow-visible mr-[4.66667px] mt-[4.66667px] p-0 font-arial md:text-[15.64px] md:mr-[5.474px] md:mt-[5.474px] cursor-pointer accent-lime-500"
          />
          <label className="text-[11.9px] box-border caret-transparent leading-[20.23px] md:text-[13.6px] md:leading-[23.12px]">
            I have read and agree to the terms &amp; conditions
          </label>
        </div>
      </div>
    </form>
  );
};
