import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Marketing", href: "#" },
  { label: "Startups", href: "#" },
  { label: "Pages", href: "#" },
  { label: "Blog", href: "/category" },
];

export const MainNav = () => {
  const location = useLocation();

  return (
    <div className="relative text-base items-center box-border caret-transparent gap-x-5 flex flex-wrap justify-between leading-[27.2px] min-h-0 gap-y-5 w-full border-t-[3px] border-solid md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:min-h-[auto]">
      <div className="relative text-base items-center box-border caret-transparent gap-x-2.5 flex flex-wrap leading-[27.2px] min-h-0 gap-y-2.5 w-full md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:min-h-[auto]">
        <div className="relative text-base box-border caret-transparent gap-x-2.5 leading-[27.2px] max-w-full min-h-0 gap-y-2.5 md:text-[17px] md:leading-[28.9px] md:min-h-[auto]">
          <div className="text-base box-border caret-transparent h-full leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
            <nav
              aria-label="main menu"
              className="text-base box-border caret-transparent flex leading-[27.2px] md:text-[17px] md:leading-[28.9px]"
            >
              <ul className="text-base items-center box-border caret-transparent flex flex-wrap leading-[27.2px] list-none min-h-0 min-w-0 gap-y-[5px] pl-0 md:text-[17px] md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto]">
                {navItems.map((item) => {
                  const isActive = item.href !== "#" && location.pathname === item.href;
                  return (
                    <li
                      key={item.label}
                      className="relative text-base box-border caret-transparent leading-[27.2px] min-h-0 min-w-0 md:text-[17px] md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto]"
                    >
                      {item.href === "#" ? (
                        <a
                          href="#"
                          className="relative text-base font-semibold items-center box-border caret-transparent flex h-12 tracking-[-0.32px] leading-6 text-nowrap px-3 font-jost nav-link-underline group transition-colors duration-200 hover:text-lime-600"
                        >
                          <span className="relative items-center box-border caret-transparent gap-x-[4.8px] flex min-h-0 min-w-0 text-nowrap border-b-transparent border-b-2">
                            {item.label}
                          </span>
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="relative text-base font-semibold items-center box-border caret-transparent flex h-12 tracking-[-0.32px] leading-6 text-nowrap px-3 font-jost nav-link-underline group transition-colors duration-200 hover:text-lime-600"
                        >
                          <span
                            className={`relative items-center box-border caret-transparent gap-x-[4.8px] flex min-h-0 min-w-0 text-nowrap ${isActive ? "border-b-lime-600 border-b-2" : "border-b-transparent border-b-2"}`}
                          >
                            {item.label}
                          </span>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
        <div className="relative text-base box-border caret-transparent gap-x-2.5 leading-[27.2px] max-w-full min-h-0 gap-y-2.5 md:text-[17px] md:leading-[28.9px] md:min-h-[auto]">
          <div className="text-base box-border caret-transparent h-full leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
            <div className="text-base box-border caret-transparent leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
              <div className="text-base items-center box-border caret-transparent flex leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
                <button
                  type="button"
                  aria-label="Toggle dark mode"
                  className="relative text-base bg-zinc-500/20 box-border caret-transparent block h-3.5 leading-[27.2px] min-h-0 min-w-0 w-[39.984px] rounded-[22px] md:text-[17px] md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto] cursor-pointer hover:bg-zinc-400/30 transition-colors duration-200"
                >
                  <i className="absolute text-base italic items-center bg-white shadow-[rgba(0,0,0,0.12)_0px_1px_4px_0px] box-border caret-transparent flex h-6 justify-center leading-[27.2px] top-[-5px] w-6 rounded-[50%] left-0 md:text-[17px] md:leading-[28.9px] transition-transform duration-300">
                    <img
                      src="https://c.animaapp.com/mmnh9bqovGnzGh/assets/icon-2.svg"
                      alt="Icon"
                      className="text-base box-border caret-transparent h-3.5 leading-[27.2px] align-baseline w-3.5 md:text-[17px] md:leading-[28.9px]"
                    />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-base items-center box-border caret-transparent gap-x-2.5 flex flex-wrap justify-end leading-[27.2px] min-h-0 gap-y-2.5 w-full md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:min-h-[auto] md:w-[400px]">
        <div className="relative text-base box-border caret-transparent gap-x-2.5 leading-[27.2px] max-w-full min-h-0 gap-y-2.5 md:text-[17px] md:leading-[28.9px] md:min-h-[auto]">
          <div className="text-base box-border caret-transparent h-full leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
            <div className="text-base box-border caret-transparent leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
              <div className="text-base items-center box-border caret-transparent gap-x-0 inline-flex flex-wrap leading-[27.2px] gap-y-0 md:text-[17px] md:leading-[28.9px]">
                <a aria-label="Facebook" href="#" className="text-base items-center box-border caret-transparent flex leading-[27.2px] min-h-0 min-w-0 px-[5px] md:text-[17px] md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto] hover:opacity-60 transition-opacity duration-200">
                  <i className="text-base box-border caret-transparent block leading-[27.2px] min-h-0 min-w-0 font-ruby_icon md:text-[17px] md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto] before:accent-auto before:box-border before:caret-transparent before:text-black before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ruby_icon before:md:text-[17px] before:md:leading-[28.9px]"></i>
                </a>
                <a aria-label="X" href="#" className="text-base items-center box-border caret-transparent flex leading-[27.2px] min-h-0 min-w-0 px-[5px] md:text-[17px] md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto] hover:opacity-60 transition-opacity duration-200">
                  <i className="text-base box-border caret-transparent block leading-[27.2px] min-h-0 min-w-0 font-ruby_icon md:text-[17px] md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto] before:accent-auto before:box-border before:caret-transparent before:text-black before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ruby_icon before:md:text-[17px] before:md:leading-[28.9px]"></i>
                </a>
                <a aria-label="YouTube" href="#" className="text-base items-center box-border caret-transparent flex leading-[27.2px] min-h-0 min-w-0 px-[5px] md:text-[17px] md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto] hover:opacity-60 transition-opacity duration-200">
                  <i className="text-base box-border caret-transparent block leading-[27.2px] min-h-0 min-w-0 font-ruby_icon md:text-[17px] md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto] before:accent-auto before:box-border before:caret-transparent before:text-black before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ruby_icon before:md:text-[17px] before:md:leading-[28.9px]"></i>
                </a>
                <a aria-label="Tiktok" href="#" className="text-base items-center box-border caret-transparent flex leading-[27.2px] min-h-0 min-w-0 px-[5px] md:text-[17px] md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto] hover:opacity-60 transition-opacity duration-200">
                  <i className="text-base box-border caret-transparent block leading-[27.2px] min-h-0 min-w-0 font-ruby_icon md:text-[17px] md:leading-[28.9px] md:min-h-[auto] md:min-w-[auto] before:accent-auto before:box-border before:caret-transparent before:text-black before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ruby_icon before:md:text-[17px] before:md:leading-[28.9px]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-[11px] font-bold box-border caret-transparent gap-x-2.5 leading-[18.7px] max-w-full min-h-0 gap-y-2.5 font-jost md:text-xs md:leading-[20.4px] md:min-h-[auto]">
          <div className="text-[11px] box-border caret-transparent h-full leading-[18.7px] md:text-xs md:leading-[20.4px]">
            <div className="text-[11px] box-border caret-transparent leading-[18.7px] md:text-xs md:leading-[20.4px]">
              <a
                href="#newsletter"
                className="text-[15px] font-medium bg-lime-300 box-border caret-transparent inline-block leading-[15px] text-center px-5 py-[7px] font-jost hover:text-white hover:bg-black transition-colors duration-200 btn-press"
              >
                <span className="box-border caret-transparent gap-x-[5px] flex justify-center gap-y-[5px]">
                  <span className="box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                    Newsletter
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative text-base box-border caret-transparent gap-x-2.5 leading-[27.2px] max-w-full min-h-0 gap-y-2.5 md:text-[17px] md:leading-[28.9px] md:min-h-[auto]">
          <div className="text-base box-border caret-transparent h-full leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
            <div className="text-base box-border caret-transparent leading-[27.2px] px-[5px] md:text-[17px] md:leading-[28.9px]">
              <a
                href="#"
                role="button"
                aria-label="Search"
                className="text-base items-center box-border caret-transparent flex leading-[27.2px] md:text-[17px] md:leading-[28.9px] hover:opacity-60 transition-opacity duration-200"
              >
                <span className="[mask-image:url('https://foxiz.io/marketminds/wp-content/uploads/2024/01/search.svg')] text-[19px] bg-black bg-no-repeat box-border caret-transparent block h-[19px] leading-[32.3px] [mask-size:cover] min-h-0 min-w-[19px] md:text-xl md:h-5 md:leading-[34px] md:min-h-[auto] md:min-w-5"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
