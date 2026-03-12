import { Link } from "react-router-dom";
import { useUI } from "@/context/UIContext";

export const MobileMenu = () => {
  const { closeMobileMenu } = useUI();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Marketing", href: "#" },
    { label: "Startups", href: "#" },
    { label: "Advertising", href: "#" },
    { label: "Market Trends", href: "#" },
    { label: "Tech Moves", href: "#" },
    { label: "Blog", href: "/category" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div className="relative text-base box-border caret-transparent leading-[27.2px] w-full overflow-auto border-t-black/10 border-b-white border-x-white border-t md:text-[17px] md:leading-[28.9px]">
      <ul className="text-base box-border caret-transparent flex flex-wrap leading-[27.2px] list-none pl-0 md:text-[17px] md:leading-[28.9px]">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="text-base box-border caret-transparent leading-[27.2px] min-h-[auto] min-w-[auto] md:text-[17px] md:leading-[28.9px] md:min-h-0 md:min-w-0"
          >
            {item.href === "#" ? (
              <a
                href="#"
                onClick={closeMobileMenu}
                className="relative text-base font-semibold items-center box-border caret-transparent flex h-[42px] tracking-[-0.32px] leading-[27.2px] text-nowrap px-[15px] font-jost hover:text-lime-400 transition-colors duration-200"
              >
                <span className="relative items-center box-border caret-transparent gap-x-[4.8px] flex leading-4 min-h-[auto] min-w-[auto] text-nowrap md:min-h-0 md:min-w-0">
                  {item.label}
                </span>
              </a>
            ) : (
              <Link
                to={item.href}
                onClick={closeMobileMenu}
                className="relative text-base font-semibold items-center box-border caret-transparent flex h-[42px] tracking-[-0.32px] leading-[27.2px] text-nowrap px-[15px] font-jost hover:text-lime-400 transition-colors duration-200"
              >
                <span className="relative items-center box-border caret-transparent gap-x-[4.8px] flex leading-4 min-h-[auto] min-w-[auto] text-nowrap md:min-h-0 md:min-w-0">
                  {item.label}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
