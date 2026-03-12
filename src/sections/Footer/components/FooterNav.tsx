export const FooterNav = () => {
  const links = ["Advertise with us", "Newsletters", "Complaint", "Deal"];

  return (
    <div className="relative text-base box-border caret-transparent gap-x-2.5 flex flex-col flex-wrap leading-[27.2px] min-h-[auto] gap-y-2.5 w-full pt-[30px] md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:w-[70%] md:pt-0">
      <div className="relative text-base box-border caret-transparent gap-x-2.5 leading-[27.2px] max-w-full min-h-[auto] gap-y-2.5 md:text-[17px] md:leading-[28.9px]">
        <div className="text-base box-border caret-transparent h-full leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
          <ul className="text-white text-base items-center box-border caret-transparent flex flex-wrap leading-[27.2px] list-none pl-0 md:text-[17px] md:leading-[28.9px]">
            {links.map((link, i) => (
              <li key={i} className="relative text-base box-border caret-transparent flex leading-[27.2px] min-h-[auto] min-w-[auto] md:text-[17px] md:leading-[28.9px]">
                <a
                  href="#"
                  className={`relative text-sm font-semibold box-border caret-transparent flex leading-[23.8px] min-h-[auto] min-w-[auto] font-jost md:text-lg md:leading-[30.6px] hover:text-lime-300 transition-colors duration-200 ${i === 0 ? "pr-3" : "px-3"}`}
                >
                  <span className="relative text-sm items-center box-border caret-transparent gap-x-[4.2px] flex leading-[23.8px] min-h-[auto] min-w-[auto] md:text-lg md:gap-x-[5.4px] md:leading-[30.6px]">
                    {link}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative text-white text-[13px] italic box-border caret-transparent gap-x-2.5 leading-[22.1px] max-w-full min-h-[auto] gap-y-2.5 md:text-[15px] md:leading-[25.5px]">
        <div className="text-[13px] box-border caret-transparent h-full leading-[22.1px] md:text-[15px] md:leading-[25.5px]">
          {" "}
          Stay tuned for a blend of captivating content that not only informs
          but also inspires you to navigate the ever-evolving landscape of
          technology, marketing, and market trends!
        </div>
      </div>
    </div>
  );
};
