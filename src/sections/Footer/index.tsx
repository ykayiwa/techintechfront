import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Footer = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <footer
      ref={ref}
      className={`relative text-base box-border caret-transparent leading-[27.2px] z-0 md:text-[17px] md:leading-[28.9px] reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="text-base box-border caret-transparent leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
        <FooterContent />
      </div>
    </footer>
  );
};
