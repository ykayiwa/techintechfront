import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ─── Data ─── */
const mustReadSidebar = [
  {
    id: 1,
    title: "Fashionable Summer Accessories to Dress Up Your Travel Look",
    image: "/assets/images/avatars/james.jpg",
    author: "TechInsider",
    date: "January 31, 2024",
  },
  {
    id: 2,
    title: "Inspiring Stories at the Intersection of Art and Innovation",
    image: "/assets/images/avatars/sara.jpg",
    author: "TechInsider",
    date: "January 31, 2024",
  },
  {
    id: 3,
    title: "David is Tommy Wiseau in the First Teaser for The Amazon Warrior",
    image: "/assets/images/avatars/marcus.jpg",
    author: "TechInsider",
    date: "February 1, 2024",
  },
  {
    id: 4,
    title: "Dive Into Vibrant Festivals and Events for a Rich Experience",
    image: "/assets/images/articles/mustread-1.jpg",
    author: "TechInsider",
    date: "January 31, 2024",
  },
];

const mustReadHero = {
  id: 0,
  title: "Strategies to Elevate Brand Stories and Capture Audience Attention",
  excerpt: "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.",
  image: "/assets/images/articles/hero-large.jpg",
  category: "Advertising",
  author: "TechInsider",
  date: "February 1, 2024",
  readTime: "5 Min Read",
};

interface LatestPost {
  id: number;
  title: string;
  image: string;
  categories: { label: string; color: string }[];
  date: string;
  sponsored?: string;
}

const latestNews: LatestPost[] = [
  {
    id: 1,
    title: "Strategies to Elevate Brand Stories and Capture Audience Attention",
    image: "/assets/images/articles/brand-stories.jpg",
    categories: [{ label: "Advertising", color: "bg-lime-300 text-black" }],
    date: "February 1, 2024",
  },
  {
    id: 2,
    title: "Building Meaningful Connections and Loyalty in Modern Marketing",
    image: "/assets/images/articles/covid-watch.jpg",
    categories: [{ label: "Marketing", color: "bg-lime-300 text-black" }],
    date: "February 1, 2024",
  },
  {
    id: 3,
    title: "Navigating Optimizing Platforms for Effective Audience Engagement",
    image: "/assets/images/articles/platforms.jpg",
    categories: [{ label: "Advertising", color: "bg-lime-300 text-black" }],
    date: "February 1, 2024",
  },
  {
    id: 4,
    title: "The Remarkable Developments Pushing the Limits of Innovation",
    image: "/assets/images/articles/innovation.jpg",
    categories: [{ label: "Market Trends", color: "bg-lime-300 text-black" }],
    date: "February 1, 2024",
  },
  {
    id: 5,
    title: "Creating Valuable and Persuasive for Targeted Audiences",
    image: "/assets/images/articles/persuasive.jpg",
    categories: [
      { label: "Fashion", color: "bg-orange-400 text-white" },
      { label: "Startups", color: "bg-lime-300 text-black" },
    ],
    date: "January 31, 2024",
  },
  {
    id: 6,
    title: "Forging Authentic Connections that Resonate with Consumers",
    image: "/assets/images/articles/connections.jpg",
    categories: [{ label: "Startups", color: "bg-lime-300 text-black" }],
    date: "February 1, 2024",
  },
  {
    id: 7,
    title: "18 Top Fall Fashion Trends from New York Fashion",
    image: "/assets/images/articles/fashion.jpg",
    categories: [{ label: "Startups", color: "bg-violet-500 text-white" }],
    date: "February 1, 2024",
  },
  {
    id: 8,
    title: "Strategies and Technologies Defending Against Evolving Threats",
    image: "/assets/images/articles/hero-phone.jpg",
    categories: [{ label: "Advertising", color: "bg-lime-300 text-black" }],
    date: "February 1, 2024",
  },
  {
    id: 9,
    title: "Leveraging Authentic Collaborations for Brand Growth",
    image: "/assets/images/articles/wearable-health.jpg",
    categories: [{ label: "Advertising", color: "bg-lime-300 text-black" }],
    date: "February 1, 2024",
  },
  {
    id: 10,
    title: "5G Era and its Impact on Communication, IoT, and Smart Cities",
    image: "/assets/images/articles/emergency-sos.jpg",
    categories: [{ label: "Advertising", color: "bg-lime-300 text-black" }],
    date: "February 1, 2024",
    sponsored: "TechBird",
  },
  {
    id: 11,
    title: "Tracking the Rapid Advances in Technology and Their Impact",
    image: "/assets/images/articles/ai-content.jpg",
    categories: [{ label: "Marketing", color: "bg-lime-300 text-black" }],
    date: "February 1, 2024",
  },
  {
    id: 12,
    title: "Unlocking the Full Potential of Direct Customer Communication",
    image: "/assets/images/articles/hero-large.jpg",
    categories: [{ label: "Advertising", color: "bg-lime-300 text-black" }],
    date: "February 1, 2024",
  },
];

const POSTS_PER_PAGE = 12;

export const CategoryPage = () => {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const { ref: mustReadRef, isVisible: mustReadVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: latestRef, isVisible: latestVisible } = useScrollReveal<HTMLDivElement>();

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="text-base box-border leading-[27.2px] md:text-[17px] md:leading-[28.9px]">
      {/* ═══ MUST READ SECTION ═══ */}
      <div
        ref={mustReadRef}
        className={`max-w-[1300px] mx-auto px-5 pt-6 pb-8 reveal ${mustReadVisible ? "visible" : ""}`}
      >
        {/* Section Title — always visible, above the grid */}
        <div className="flex items-center gap-2.5 mb-5">
          <h2 className="font-plus_jakarta_sans">
            <span className="text-[35px] md:text-[50px] font-jost tracking-[-0.5px] leading-[1]">
              ⚐ Must Read
            </span>
          </h2>
        </div>

        {/* Must Read Grid: sidebar list + hero card */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left: 4 small posts — below hero on mobile, left on desktop */}
          <div className="w-full lg:w-[38%] flex flex-col order-2 lg:order-1">
            {mustReadSidebar.map((post, i) => (
              <Link
                key={post.id}
                to="/article"
                className={`flex gap-5 group py-5 ${i < mustReadSidebar.length - 1 ? "border-b border-zinc-200" : ""}`}
              >
                {/* Thumbnail */}
                <div className="w-[130px] md:w-[150px] shrink-0 overflow-hidden img-zoom">
                  <div className="relative pb-[66%]">
                    <img
                      src={post.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Text */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <h3 className="text-[16px] md:text-[18px] font-extrabold font-plus_jakarta_sans tracking-[-0.4px] leading-[1.3] line-clamp-3 group-hover:text-lime-600 transition-colors mb-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[12px] font-jost text-zinc-400">
                    <span>
                      By{" "}
                      <span className="font-bold text-zinc-800">{post.author}</span>
                    </span>
                    <span className="w-px h-3 bg-zinc-300 mx-0.5" />
                    <time>{post.date}</time>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right: Hero featured post — on top on mobile, right on desktop */}
          <div className="w-full lg:w-[62%] order-1 lg:order-2 flex flex-col">
            <div className="relative overflow-hidden bg-black group">
              <div className="relative pb-[85%] md:pb-[75%] img-zoom">
                <img
                  src={mustReadHero.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
                <span className="text-[9px] md:text-[10px] font-semibold tracking-[1px] uppercase font-jost bg-lime-300 text-black px-2 py-[3px] self-start mb-3 inline-flex items-center leading-none hover:bg-black hover:text-white transition-colors cursor-pointer">
                  {mustReadHero.category}
                </span>
                <h2 className="text-white text-[24px] md:text-[36px] lg:text-[42px] font-extrabold font-plus_jakarta_sans tracking-[-1px] leading-[1.15] mb-3">
                  <Link to="/article" className="hover:text-lime-300 transition-colors">
                    {mustReadHero.title}
                  </Link>
                </h2>
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-4 max-w-xl hidden md:block">
                  {mustReadHero.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs font-jost text-zinc-400">
                  <span>
                    By{" "}
                    <a href="#" className="text-white hover:underline">
                      {mustReadHero.author}
                    </a>
                  </span>
                  <span className="w-px h-3 bg-zinc-500" />
                  <time className="text-zinc-400">{mustReadHero.date}</time>
                  <span className="w-px h-3 bg-zinc-500" />
                  <span className="text-zinc-400">{mustReadHero.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ ADVERTISEMENT BANNER ═══ */}
      <div className="max-w-[1300px] mx-auto px-5 py-4">
        <div className="text-center">
          <span className="text-[10px] md:text-[13px] font-jost block mb-2.5 leading-none text-zinc-400">
            - Advertisement -
          </span>
          <a href="#" className="inline-block hover:opacity-80 transition-opacity">
            <img
              src="/assets/images/banners/ad-banner.jpg"
              alt="Ad"
              className="max-w-full object-cover w-[1300px]"
            />
          </a>
        </div>
      </div>

      {/* ═══ LATEST NEWS SECTION ═══ */}
      <div
        ref={latestRef}
        className={`max-w-[1300px] mx-auto px-5 pt-8 pb-16 reveal ${latestVisible ? "visible" : ""}`}
      >
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[28px] md:text-[38px] font-jost leading-none">→</span>
          <h2 className="text-[28px] md:text-[38px] font-extrabold font-plus_jakarta_sans tracking-[-0.8px] leading-none">
            Latest News
          </h2>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8 stagger-children">
          {latestNews.slice(0, visibleCount).map((post) => (
            <LatestPostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < latestNews.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleShowMore}
              className="bg-lime-300 text-black text-[11px] font-semibold font-jost tracking-[1px] uppercase px-8 py-3 hover:bg-black hover:text-white transition-all duration-200 btn-press"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Latest Post Card ─── */
const LatestPostCard = ({ post }: { post: LatestPost }) => {
  return (
    <article className="group">
      {/* Image */}
      <div className="relative mb-5 img-zoom">
        <Link to="/article" className="block overflow-hidden">
          <div className="relative pb-[68%]">
            <img
              src={post.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </Link>
        {/* Category Badges */}
        <div className="absolute bottom-0 left-3 translate-y-[-8px] z-10 flex gap-[3px]">
          {post.categories.map((cat) => (
            <span
              key={cat.label}
              className={`text-[9px] font-semibold tracking-[1px] uppercase font-jost px-1.5 py-[3px] inline-flex items-center leading-none hover:bg-black hover:text-white transition-colors cursor-pointer ${cat.color}`}
            >
              {cat.label}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="pt-2">
        <h3 className="text-[18px] md:text-[21px] font-extrabold font-plus_jakarta_sans tracking-[-0.5px] leading-[1.3] mb-2 line-clamp-3">
          <Link to="/article" className="hover:text-lime-600 transition-colors">
            {post.title}
          </Link>
        </h3>
        <div className="flex items-center gap-1.5 text-[11px] font-jost text-zinc-400">
          <time>{post.date}</time>
        </div>
        {post.sponsored && (
          <div className="flex items-center gap-1 text-[11px] font-jost text-zinc-400 mt-1">
            <span>Sponsored by</span>
            <span className="font-semibold text-zinc-600">🐦 {post.sponsored}</span>
          </div>
        )}
      </div>
    </article>
  );
};
