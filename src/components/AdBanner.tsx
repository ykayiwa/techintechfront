export const AdBanner = () => {
  return (
    <div className="relative text-base box-border caret-transparent flex flex-col leading-[27.2px] max-w-full w-full mb-[30px] px-5 md:text-[17px] md:leading-[28.9px] md:mb-[50px]">
      <div className="text-base box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full leading-[27.2px] max-w-[min(100%,1140px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:max-w-[1500px]">
        <div className="relative text-base box-border caret-transparent gap-x-5 leading-[27.2px] max-w-full min-h-[auto] gap-y-5 w-full md:text-[17px] md:leading-[28.9px]">
          <div className="text-base box-border caret-transparent h-full leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
            <div className="text-base box-border caret-transparent leading-4 text-center md:text-[17px] md:leading-[17px]">
              <span className="text-[10px] box-border caret-transparent block leading-[10px] mb-2.5 font-jost md:text-[13px] md:leading-[13px]">
                - Advertisement -
              </span>
              <div className="text-base box-border caret-transparent inline-block leading-[0px] max-w-full overflow-hidden md:text-[17px]">
                <a
                  href="https://1.envato.market/MXYjYo"
                  className="text-base box-border caret-transparent md:text-[17px]"
                >
                  <img
                    src="https://c.animaapp.com/mmnh9bqovGnzGh/assets/banner.jpg"
                    alt="Ad image"
                    className="text-base aspect-[auto_1500_/_250] box-border caret-transparent inline max-w-full object-cover w-[1500px] md:text-[17px]"
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
