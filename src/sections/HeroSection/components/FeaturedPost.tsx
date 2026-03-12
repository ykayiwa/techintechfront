import { PostCard } from "@/components/PostCard";

export const FeaturedPost = () => {
  return (
    <div className="relative text-base box-border caret-transparent gap-x-5 flex flex-col shrink-0 flex-wrap leading-[27.2px] min-h-[auto] gap-y-5 w-full md:text-[17px] md:flex-nowrap md:leading-[28.9px] md:w-[55%]">
      <div className="relative text-base box-border caret-transparent gap-x-5 leading-[27.2px] max-w-full min-h-[auto] gap-y-5 md:text-[17px] md:leading-[28.9px]">
        <div className="text-base box-border caret-transparent h-full leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
          <div className="relative text-white text-base box-border caret-transparent leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
            <div className="text-base box-border caret-transparent flex grow flex-wrap leading-[27.2px] gap-y-[30px] -mx-5 md:text-[17px] md:leading-[28.9px] md:gap-y-[35px]">
              <PostCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
