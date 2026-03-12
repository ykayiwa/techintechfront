const posts = [
  {
    title: "Strategies to Elevate Brand Stories and Capture Audience Attention",
    author: "TechInsider",
    date: "February 1, 2024",
    href: "#",
  },
  {
    title: "Building Meaningful Connections and Loyalty in Modern Marketing",
    author: "TechInsider",
    date: "February 1, 2024",
    href: "#",
  },
  {
    title: "Navigating Optimizing Platforms for Effective Audience Engagement",
    author: "TechInsider",
    date: "February 1, 2024",
    href: "#",
  },
  {
    title: "The Remarkable Developments Pushing the Limits of Innovation",
    author: "TechInsider",
    date: "February 1, 2024",
    href: "#",
  },
  {
    title: "Creating Valuable and Persuasive for Targeted Audiences",
    author: "TechInsider",
    date: "January 31, 2024",
    href: "#",
  },
];

export const TrendingList = () => {
  return (
    <div className="flex flex-col">
      {posts.map((post, i) => (
        <div
          key={i}
          className={`relative pb-5 mb-5 ${i < posts.length - 1 ? "border-b border-black/20" : ""}`}
        >
          {/* Title */}
          <h2 className="text-[19px] font-bold tracking-[-0.55879px] leading-[24.7px] break-words mb-2 font-plus_jakarta_sans md:text-[28px] md:tracking-[-0.82348px] md:leading-[35px]">
            {/* Lightning bolt icon */}
            <span className="inline-block align-middle mr-1 text-black font-bold text-[0.85em]">⚡</span>
            <a
              href={post.href}
              className="relative bg-[linear-gradient(rgb(194,255,116),rgb(194,255,116))] bg-no-repeat bg-left-bottom bg-[size:0%_100%] hover:bg-[size:100%_100%] transition-[background-size] duration-300 ease-in-out"
            >
              {post.title}
            </a>
          </h2>

          {/* Meta: By Author | Date */}
          <div className="flex items-center flex-wrap gap-x-[7px] gap-y-[2px] text-xs font-jost md:text-[13px]">
            <div className="flex items-center gap-x-1">
              <span className="font-normal">By</span>
              <a
                href="#"
                className="font-semibold tracking-[0.5px] underline decoration-transparent underline-offset-2 hover:decoration-black transition-colors duration-200"
              >
                {post.author}
              </a>
            </div>
            <span className="text-black/30 font-normal">|</span>
            <time className="text-black/70">{post.date}</time>
          </div>
        </div>
      ))}
    </div>
  );
};
