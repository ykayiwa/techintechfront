import { NewsletterForm } from "@/sections/NewsletterSection/components/NewsletterForm";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const NewsletterSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      id="newsletter"
      ref={ref}
      className={`relative text-base box-border caret-transparent flex flex-col leading-[27.2px] max-w-full w-full mb-5 px-5 md:text-[17px] md:leading-[28.9px] md:mb-10 reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="text-base box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-start leading-[27.2px] max-w-[min(100%,1140px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:max-w-[1300px]">
        <div className="relative text-base box-border caret-transparent gap-x-5 leading-[27.2px] max-w-full min-h-[auto] gap-y-5 md:text-[17px] md:leading-[28.9px]">
          <div className="text-base bg-lime-300/50 box-border caret-transparent h-full leading-[27.2px] p-5 border-t-[5px] border-solid cta-border-pulse md:text-[17px] md:leading-[28.9px] md:px-[60px] md:py-[30px]">
            <div className="relative text-base box-border caret-transparent leading-[27.2px] overflow-clip md:text-[17px] md:leading-[28.9px]">
              <div className="relative text-base items-start box-border caret-transparent gap-x-[15px] flex flex-col grow leading-[27.2px] max-w-full gap-y-[15px] text-left z-[2] md:text-[17px] md:leading-[28.9px]">
                <h2 className="text-3xl font-extrabold box-border caret-transparent tracking-[-0.8823px] leading-[39px] min-h-[auto] min-w-[auto] break-words font-plus_jakarta_sans md:text-[80px] md:tracking-[-2.3528px] md:leading-[100px]">
                  Our Newsletter ↷
                </h2>
                <div className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-[28px] md:leading-[42px]">
                  Subscribe now for a front-row seat to the latest in
                  technology, marketing strategies, and market trends – Your
                  Gateway to Innovation
                </div>
                <div className="text-base box-border caret-transparent grow leading-[27.2px] min-h-[auto] min-w-[auto] w-full md:text-[17px] md:leading-[28.9px]">
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-base box-border caret-transparent gap-x-5 flex flex-wrap justify-between leading-[27.2px] min-h-[auto] gap-y-5 w-full mt-2.5 mb-0 md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:mt-5 md:mb-2.5">
          <div className="relative text-base box-border caret-transparent gap-x-5 leading-[27.2px] max-w-full min-h-[auto] gap-y-5 w-full md:text-[17px] md:leading-[28.9px] md:w-4/5">
            <div className="text-base box-border caret-transparent h-full leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
              <div className="text-base box-border caret-transparent leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
                <div className="relative text-base items-center box-border caret-transparent gap-x-2.5 flex flex-wrap leading-[27.2px] w-full md:text-[17px] md:leading-[28.9px]">
                  <h2 className="relative text-[26px] font-bold box-border caret-transparent tracking-[-0.76466px] leading-[26px] min-h-[auto] min-w-[auto] break-words font-plus_jakarta_sans md:text-[34px] md:tracking-[-0.99994px] md:leading-[34px]">
                    <span className="relative text-3xl box-border caret-transparent tracking-[-0.5px] leading-[30px] break-words z-[1] font-jost md:text-6xl md:leading-[60px]">
                      Recommended →
                    </span>
                  </h2>
                  <div className="text-base font-bold items-center box-border caret-transparent gap-x-[5px] flex tracking-[-0.5px] leading-4 min-h-[auto] min-w-[auto] break-words gap-y-[5px] w-full ml-auto mt-2.5 font-plus_jakarta_sans md:mt-[5px]">
                    <span className="text-[15px] italic font-normal box-border caret-transparent block leading-[25.5px] min-h-[auto] min-w-[auto] break-words md:text-[19px] md:leading-[32.3px]">
                      Our Recommended Posts are a curated exploration of the
                      most significant trends, innovations, and insights that
                      are making waves in Technology, from cutting-edge
                      technologies to revolutionary market strategies.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-base box-border caret-transparent gap-x-5 leading-[27.2px] max-w-full min-h-[auto] gap-y-5 w-3/5 md:text-[17px] md:leading-[28.9px] md:w-[15%]">
            <div className="text-base box-border caret-transparent h-full leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
              <div className="text-base box-border caret-transparent leading-4 text-center md:text-[17px] md:leading-[17px]">
                <div className="text-base box-border caret-transparent inline-block leading-[0px] max-w-full overflow-hidden md:text-[17px]">
                  <a href="#" className="text-base box-border caret-transparent md:text-[17px] hover:opacity-80 transition-opacity duration-200">
                    <img
                      src="https://c.animaapp.com/mmnh9bqovGnzGh/assets/small-ad.jpg"
                      alt="Ad image"
                      className="text-base aspect-[auto_380_/_242] box-border caret-transparent inline max-w-full object-cover w-[380px] md:text-[17px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-base box-border caret-transparent gap-x-5 leading-[27.2px] max-w-full min-h-[auto] gap-y-5 md:text-[17px] md:leading-[28.9px]">
          <div className="text-base box-border caret-transparent h-full leading-[27.2px] mb-2.5 md:text-[17px] md:leading-[28.9px] md:mb-5">
            <div className="relative text-white text-base box-border caret-transparent leading-[27.2px] -mx-px md:text-[17px] md:leading-[28.9px]">
              <div className="text-base box-border caret-transparent flex grow flex-nowrap leading-[27.2px] overflow-x-scroll overflow-y-auto gap-y-[30px] md:text-[17px] md:flex-wrap md:leading-[28.9px] md:overflow-x-visible md:overflow-y-visible md:gap-y-[35px]">
                {[
                  { href: "#", img: "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m18-615x410.jpg", cat: "Advertising", catHref: "#", title: "Intersection of Technology and Finance in Shaping the Economy" },
                  { href: "#", img: "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m21-615x410.jpg", cat: "Marketing", catHref: "#", title: "Innovators Redefining Modern Industries Through Revolutionary Ideas" },
                  { href: "#", img: "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m35-615x410.jpg", cat: "Market Trends", catHref: "#", title: "Analyzing Market Trends as Consumer Priorities Redefine Product" },
                  { href: "#", img: "https://c.animaapp.com/mmnh9bqovGnzGh/assets/m38-615x410.jpg", cat: "Marketing", catHref: "#", title: "Tech Weapons We Need To Combat Global Warming" },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="relative text-base box-border caret-transparent basis-full leading-[27.2px] max-w-[290px] min-h-[auto] min-w-[290px] w-full px-px md:text-[17px] md:basis-3/12 md:leading-[28.9px] md:max-w-none md:min-w-[auto] md:w-3/12"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="relative text-base bg-slate-950 box-border caret-transparent h-full leading-[27.2px] pb-[30px] md:text-[17px] md:leading-[28.9px] group hover:shadow-lg transition-shadow duration-300">
                      <div className="relative text-base box-border caret-transparent leading-[27.2px] max-w-full z-10 mb-2.5 md:text-[17px] md:leading-[28.9px] md:mb-3">
                        <div className="relative text-base box-border caret-transparent leading-[27.2px] overflow-hidden pb-[100%] img-zoom md:text-[17px] md:leading-[28.9px]">
                          <a href={card.href} className="absolute text-base box-border caret-transparent block leading-[27.2px] z-[1] inset-0 md:text-[17px] md:leading-[28.9px]">
                            <img src={card.img} alt="" className="absolute text-base aspect-[auto_615_/_410] box-border caret-transparent h-full leading-[27.2px] max-w-full object-cover w-full inset-0 md:text-[17px] md:leading-[28.9px]" />
                          </a>
                        </div>
                        <div className="absolute text-[10px] font-semibold items-stretch box-border caret-transparent gap-x-[3px] flex grow flex-wrap tracking-[1px] leading-[17px] gap-y-[3px] uppercase z-20 bottom-0 inset-x-[25px] font-jost">
                          <a href={card.catHref} className="relative text-black text-[9px] bg-lime-300 box-border caret-transparent flex leading-[9px] min-h-[auto] min-w-[auto] z-[1] px-[6.3px] py-[2.7px] hover:text-white hover:bg-slate-950 transition-colors duration-200">
                            {card.cat}
                          </a>
                        </div>
                      </div>
                      <h2 className="text-[19px] font-bold box-border caret-transparent tracking-[-0.55879px] leading-[24.7px] break-words mb-2.5 mx-[25px] font-plus_jakarta_sans md:text-[28px] md:tracking-[-0.82348px] md:leading-[35px] md:mb-3">
                        <a href={card.href} className="relative text-[19px] bg-[linear-gradient(rgb(194,255,116),rgb(194,255,116))] bg-no-repeat bg-size-[0%_100%] box-border caret-transparent tracking-[-0.55879px] leading-[24.7px] break-words underline-offset-[1.9px] bg-[position:0px_100%] link-highlight md:text-[28px] md:tracking-[-0.82348px] md:leading-[35px] md:underline-offset-[2.8px] hover:text-black">
                          {" "}{card.title}{" "}
                        </a>
                      </h2>
                      <div className="relative text-base box-border caret-transparent leading-[27.2px] mx-[25px] md:text-[17px] md:leading-[28.9px]">
                        <time className="text-xs box-border caret-transparent block leading-[20.4px] min-h-[auto] min-w-[auto] md:text-[13px] md:leading-[22.1px]">
                          January 31, 2024
                        </time>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
