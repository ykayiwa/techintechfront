import { useEffect, useRef, useState, useCallback } from "react";

/* ─────────────────────────────────────────────
   DEMO DATA — 3 articles
───────────────────────────────────────────── */
interface Article {
  id: number;
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  subtitle: string;
  author: string;
  authorAvatar: string;
  authorBio: string;
  date: string;
  readTime: string;
  heroImage: string;
  heroCaption: string;
  tags: string[];
  body: BodyBlock[];
}

type BodyBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "image"; src: string; caption: string }
  | { type: "list"; items: string[] };

const ARTICLES: Article[] = [
  {
    id: 1,
    slug: "phones-most-annoying-feature-saved-my-life",
    category: "Technology",
    categoryColor: "bg-lime-300 text-black",
    title: "How My Phone's Most Annoying Feature Saved My Life",
    subtitle: "The emergency SOS alert I always dismissed turned out to be the most important button I never knew I needed.",
    author: "James Calloway",
    authorAvatar: "/assets/images/avatars/james.jpg",
    authorBio: "James is a senior technology writer covering wearables, mobile, and the human side of digital innovation. Based in San Francisco.",
    date: "March 10, 2026",
    readTime: "7 Min Read",
    heroImage: "/assets/images/articles/hero-phone.jpg",
    heroCaption: "Modern smartphones carry features most users never explore — until they need them.",
    tags: ["Technology", "Mobile", "Health", "Innovation"],
    body: [
      { type: "p", text: "It was a Thursday morning, unremarkable in every way. I was running late for a meeting, wrestling my phone out of my jacket pocket when the screen lit up with a full-bleed red alert. My thumb had accidentally pressed the side buttons in exactly the right sequence — the emergency SOS call was going out." },
      { type: "p", text: "My first instinct was irritation. I'd been accidentally triggering this feature for months, each time fumbling to cancel the countdown before my phone dialed 911. But this time, something made me hesitate." },
      { type: "h2", text: "The Feature Nobody Reads About" },
      { type: "p", text: "Emergency SOS — present on every iPhone since the 8, and on most Android flagships since 2018 — is one of those features buried in setup screens and safety tutorials that most people skip entirely. The premise is simple: press and hold the correct button combination, and your phone calls emergency services while texting your emergency contacts your current location." },
      { type: "p", text: "I'd read about it once, set it up in a lazy five-minute window, and then spent the better part of a year cursing it every time public transit crowds conspired to trigger it in my pocket." },
      { type: "quote", text: "The features we find most annoying are often the ones that cost the most care to design.", cite: "UX researcher Dr. Nina Patel, Stanford HCI Lab" },
      { type: "h2", text: "When Irritation Becomes Gratitude" },
      { type: "p", text: "That Thursday, thirty seconds after the accidental trigger, I felt the chest pain. Sharp, high on the left side, radiating down my arm in a way that every first-aid poster has described since elementary school. The phone was already counting down. I let it finish." },
      { type: "image", src: "/assets/images/articles/emergency-sos.jpg", caption: "Emergency SOS can be configured in Settings > Emergency SOS on both iOS and Android." },
      { type: "p", text: "Within four minutes, paramedics were on the line. Within twelve, I was in an ambulance. The cardiologist later told me that the blockage was significant — another thirty minutes of 'walking it off' and the outcome would have looked very different." },
      { type: "h3", text: "What the Data Actually Says" },
      { type: "p", text: "According to a 2024 report from the National Emergency Number Association, smartphone-initiated SOS calls now account for nearly 18% of all emergency dispatch events in urban areas — up from just 4% in 2019. The rise tracks almost exactly with the mainstream rollout of passive emergency features." },
      { type: "list", items: ["In 2023, Apple reported that crash detection had initiated over 150 emergency calls in the US alone.", "Google's Emergency Location Service is now active in 42 countries.", "80% of people who set up emergency contacts never update them after the initial setup."] },
      { type: "h2", text: "The Design Philosophy Behind Annoyance" },
      { type: "p", text: "There's a deliberate philosophy in building these features to be easy to trigger accidentally. Designers at both Apple and Google have spoken publicly about the tension: make the feature too hard to activate and it fails when trembling hands or impaired consciousness make precision impossible. Make it too easy and you flood dispatch centers with false positives." },
      { type: "p", text: "The current implementation — five rapid side-button presses, or press-and-hold depending on your settings — sits in that awkward middle ground. It catches jacket pockets and bike handlebars, and occasionally, it catches the real thing." },
      { type: "quote", text: "We accept that fire sprinklers sometimes trigger from steam. The cost of a false positive is worth the guarantee of a true positive.", cite: "Apple Human Interface Guidelines, Emergency Features Section" },
      { type: "p", text: "I now leave my phone's Emergency SOS set to maximum sensitivity. I've accepted the occasional pocket-dial as the price of knowing that if I ever hesitate — in pain, in panic, in the dark — the most important call I'll ever make is already halfway dialed." },
    ],
  },
  {
    id: 2,
    slug: "future-of-wearable-health-monitoring",
    category: "Health",
    categoryColor: "bg-orange-400 text-white",
    title: "Your Wrist Knows You're Sick Before You Do",
    subtitle: "A new generation of biosensors is turning everyday wearables into early-warning systems for serious illness.",
    author: "Sara Mendez",
    authorAvatar: "/assets/images/avatars/sara.jpg",
    authorBio: "Sara covers health technology and biotech for Tech in Tech. She holds a degree in biomedical engineering from MIT.",
    date: "March 9, 2026",
    readTime: "6 Min Read",
    heroImage: "/assets/images/articles/covid-watch.jpg",
    heroCaption: "Wearable biosensors are moving beyond step counting into genuine clinical-grade monitoring.",
    tags: ["Health", "Wearables", "AI", "Biotech"],
    body: [
      { type: "p", text: "Three days before Dr. Aisha Torres tested positive for COVID-19 in early 2024, her smartwatch had already flagged an anomaly. Her resting heart rate had climbed six beats per minute above her personal baseline. Her heart rate variability — a measure of autonomic nervous system function — had dropped by 22%. Her sleep patterns showed micro-fragmentation invisible to conscious perception." },
      { type: "p", text: "She wasn't feeling unwell. She was, in fact, preparing for a half marathon. But Aisha had been participating in a passive monitoring study, and the algorithm watching her wrist data sent a quiet notification: 'Your body metrics suggest early physiological stress. Consider rest and monitoring.'" },
      { type: "h2", text: "The Biology of Early Warning" },
      { type: "p", text: "The human body doesn't get sick suddenly. Most acute illnesses — viral infections, cardiac events, even certain cancers — are preceded by days or weeks of subtle systemic changes. The problem has always been that these signals are too quiet for conscious awareness and too variable for single-point measurements." },
      { type: "p", text: "Wearables solve both problems. They operate continuously, capturing thousands of data points daily. And they operate personally — calibrated not to population averages but to each wearer's individual baseline, making small deviations statistically meaningful." },
      { type: "quote", text: "The most powerful diagnostic tool isn't in the hospital. It's the device people already wear 24 hours a day.", cite: "Dr. Eric Topol, Scripps Research Translational Institute" },
      { type: "h2", text: "From Steps to Biomarkers" },
      { type: "image", src: "/assets/images/articles/wearable-health.jpg", caption: "Next-gen wearables now monitor dozens of biomarkers simultaneously using non-invasive sensors." },
      { type: "p", text: "Today's leading wearables — the Apple Watch Series 10, Galaxy Watch 7, and research-grade devices like the WHOOP 5 — track metrics that would have required a clinical visit a decade ago. Electrodermal activity. Blood oxygen saturation. Skin temperature. Atrial fibrillation detection. Some emerging devices are beginning to approach non-invasive glucose monitoring." },
      { type: "list", items: ["Stanford's Apple Heart Study enrolled over 400,000 participants and detected AFib with 84% sensitivity.", "Fitbit's respiratory rate monitoring showed 73% accuracy in predicting COVID-19 positive tests 2 days before symptoms.", "Continuous glucose monitors are now available without a prescription in 17 countries."] },
      { type: "h3", text: "The Privacy Paradox" },
      { type: "p", text: "The data that makes these devices powerful is also the data that makes them politically and ethically fraught. Health insurers in the US have already begun requesting access to wearable data as part of 'wellness incentive' programs. The line between incentive and coercion has never been thinner." },
      { type: "p", text: "For now, Dr. Torres says the tradeoff feels worth it. Her early warning meant self-isolation before she infected anyone else at her running club. It meant rest when she would have pushed through. And it meant a conversation with her doctor that started three days earlier than it otherwise would have." },
    ],
  },
  {
    id: 3,
    slug: "ai-revolution-in-content-creation",
    category: "AI",
    categoryColor: "bg-violet-500 text-white",
    title: "The Quiet Revolution: How AI is Rewriting the Rules of Storytelling",
    subtitle: "From newsroom automation to synthetic voices, artificial intelligence isn't replacing writers — it's changing what writing means.",
    author: "Marcus Li",
    authorAvatar: "/assets/images/avatars/marcus.jpg",
    authorBio: "Marcus is a media critic and technology essayist. His work has appeared in WIRED, The Atlantic, and MIT Technology Review.",
    date: "March 8, 2026",
    readTime: "8 Min Read",
    heroImage: "/assets/images/articles/ai-content.jpg",
    heroCaption: "The relationship between human creativity and machine production is being renegotiated in real time.",
    tags: ["AI", "Media", "Creativity", "Future"],
    body: [
      { type: "p", text: "The first time a major newspaper published an AI-generated article without a human byline was in 2014, when the Associated Press began automating quarterly earnings reports. The stories were functional. They were accurate. They were, by every meaningful measure, indistinguishable from the human-written versions they replaced." },
      { type: "p", text: "Nobody cried. Nobody canceled their subscriptions. The revolution, when it came to journalism, arrived not with a manifesto but with a spreadsheet." },
      { type: "h2", text: "What Changed and What Didn't" },
      { type: "p", text: "A decade later, the landscape looks simultaneously more radical and more mundane than anyone predicted. Yes, AI can write. It can write quickly, cheaply, and often well. But the newsrooms that have leaned hardest into automation have largely converged on the same discovery: the things AI does well are exactly the things that were never the core value of human journalism." },
      { type: "quote", text: "AI is extraordinarily good at the parts of writing that are, truthfully, not interesting. Which reveals something uncomfortable about how much of professional writing was never really that interesting.", cite: "Ann Friedman, journalist and media critic" },
      { type: "image", src: "/assets/images/articles/brand-stories.jpg", caption: "AI writing tools have become standard in most major newsroom workflows as of 2025." },
      { type: "h2", text: "The New Division of Labor" },
      { type: "p", text: "What has emerged, in the newsrooms that are getting this right, is a cleaner division of labor than journalism has ever had before. Machine intelligence handles the structured, templated, data-rich content: earnings summaries, sports box scores, property listings, weather updates. Human writers handle everything else — and in doing so, occupy their time more fully with the work only humans can do." },
      { type: "list", items: ["Reuters uses AI to generate approximately 3,500 stories per month, freeing reporters for investigation.", "The Washington Post's Heliograf system covered the 2016 Olympics, publishing 300 reports in real time.", "BuzzFeed's ai-generated 'personalized quizzes' increased engagement by 40% before the company's 2023 restructuring."] },
      { type: "h3", text: "The Authenticity Premium" },
      { type: "p", text: "There is a growing body of evidence that readers can feel the difference, even when they cannot identify it. Studies from the Reuters Institute show that trust in AI-generated content trails trust in human-bylined content by a consistent 15–20%, even when the underlying quality is rated equivalently." },
      { type: "p", text: "This is the authenticity premium — and it may be the most important economic signal in media right now. Readers are not leaving human-written journalism because they prefer automation. They are leaving because they don't trust any of it, and AI is currently taking the blame for a credibility collapse that began long before the first language model was trained." },
      { type: "h2", text: "The Question Nobody Can Answer" },
      { type: "p", text: "Will AI produce great literature? Great journalism? The honest answer is that we don't know, because we don't fully understand what makes those things great. We know that a story about a chest pain that started with a pocket-dial, or a wristwatch that caught a virus in its data before the body felt sick, is compelling not because the facts are remarkable — but because a human chose to look there, to find meaning in the small and the overlooked, and to believe someone else might care." },
      { type: "p", text: "That instinct — where to look, and the belief that it matters — is what no model has learned to fake. At least not yet." },
    ],
  },
];

/* ─────────────────────────────────────────────
   RELATED POSTS (sidebar)
───────────────────────────────────────────── */
const RELATED = [
  { title: "Strategies to Elevate Brand Stories and Capture Audience", image: "/assets/images/articles/hero-large.jpg", date: "Feb 1, 2024" },
  { title: "Navigating Platforms for Effective Audience Engagement", image: "/assets/images/articles/platforms.jpg", date: "Feb 1, 2024" },
  { title: "Inspiring Stories at the Intersection of Art and Innovation", image: "/assets/images/avatars/sara.jpg", date: "Jan 31, 2024" },
];

/* ─────────────────────────────────────────────
   PROGRESS BAR
───────────────────────────────────────────── */
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrollTop = window.scrollY;
      const docHeight = el.scrollHeight - el.clientHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[999] h-[3px] bg-zinc-200">
      <div
        className="h-full bg-lime-400 transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

/* ─────────────────────────────────────────────
   SHARE BAR
───────────────────────────────────────────── */
const ShareBar = ({ title }: { title: string }) => (
  <div className="flex items-center gap-2 flex-wrap">
    <span className="text-[11px] font-semibold font-jost tracking-[1px] uppercase text-zinc-500 mr-1">Share:</span>
    {[
      { label: "Twitter", bg: "bg-black", icon: "𝕏" },
      { label: "Facebook", bg: "bg-blue-600", icon: "f" },
      { label: "LinkedIn", bg: "bg-blue-700", icon: "in" },
      { label: "Copy link", bg: "bg-zinc-200 !text-black", icon: "🔗" },
    ].map((s) => (
      <button
        key={s.label}
        title={s.label}
        onClick={() => navigator.clipboard?.writeText(window.location.href)}
        className={`${s.bg} text-white text-[11px] font-bold font-jost px-3 py-1.5 hover:opacity-80 transition-opacity btn-press`}
      >
        {s.icon}
      </button>
    ))}
  </div>
);

/* ─────────────────────────────────────────────
   BODY RENDERER
───────────────────────────────────────────── */
const BodyRenderer = ({ blocks }: { blocks: BodyBlock[] }) => (
  <div className="article-body space-y-5">
    {blocks.map((block, i) => {
      if (block.type === "p")
        return (
          <p key={i} className="text-[17px] leading-[1.85] text-zinc-700 font-plus_jakarta_sans">
            {block.text}
          </p>
        );
      if (block.type === "h2")
        return (
          <h2 key={i} className="text-[26px] md:text-[30px] font-extrabold font-plus_jakarta_sans tracking-[-0.6px] leading-[1.2] text-black mt-10 mb-2 pt-6 border-t border-zinc-100">
            {block.text}
          </h2>
        );
      if (block.type === "h3")
        return (
          <h3 key={i} className="text-[20px] md:text-[22px] font-bold font-plus_jakarta_sans tracking-[-0.4px] leading-[1.25] text-black mt-8 mb-1">
            {block.text}
          </h3>
        );
      if (block.type === "quote")
        return (
          <blockquote key={i} className="relative border-l-4 border-lime-400 pl-6 pr-4 py-3 my-8 bg-zinc-50">
            <p className="text-[18px] md:text-[20px] font-semibold font-plus_jakarta_sans italic text-zinc-800 leading-[1.6]">
              "{block.text}"
            </p>
            {block.cite && (
              <cite className="block mt-3 text-[12px] font-jost text-zinc-400 not-italic tracking-[0.5px]">
                — {block.cite}
              </cite>
            )}
          </blockquote>
        );
      if (block.type === "image")
        return (
          <figure key={i} className="my-8">
            <div className="overflow-hidden img-zoom">
              <img src={block.src} alt={block.caption} className="w-full object-cover" />
            </div>
            <figcaption className="text-[12px] font-jost text-zinc-400 mt-2 text-center">
              {block.caption}
            </figcaption>
          </figure>
        );
      if (block.type === "list")
        return (
          <ul key={i} className="space-y-2 pl-5 list-disc marker:text-lime-400">
            {block.items.map((item, j) => (
              <li key={j} className="text-[17px] leading-[1.85] text-zinc-700 font-plus_jakarta_sans pl-1">
                {item}
              </li>
            ))}
          </ul>
        );
      return null;
    })}
  </div>
);

/* ─────────────────────────────────────────────
   STICKY SIDEBAR
───────────────────────────────────────────── */
const Sidebar = ({ article }: { article: Article }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <aside className="w-full space-y-8">
      {/* Author card */}
      <div className="border border-zinc-100 p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
            <img src={article.authorAvatar} alt={article.author} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-[11px] font-jost text-zinc-400 tracking-[0.5px] uppercase mb-0.5">Written by</div>
            <div className="font-extrabold font-plus_jakarta_sans text-[15px] leading-none">{article.author}</div>
          </div>
        </div>
        <p className="text-[13px] font-jost text-zinc-500 leading-[1.6]">{article.authorBio}</p>
      </div>

      {/* Newsletter mini */}
      <div className="bg-black text-white p-5">
        <div className="text-[10px] font-jost tracking-[2px] uppercase text-lime-400 mb-2">Newsletter</div>
        <h3 className="text-[18px] font-extrabold font-plus_jakarta_sans leading-[1.25] mb-3">
          The best of tech, weekly in your inbox.
        </h3>
        {subscribed ? (
          <p className="text-lime-400 text-[13px] font-jost">🎉 You're subscribed!</p>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
            className="space-y-2"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-800 text-white text-[13px] font-jost px-3 py-2.5 outline-none placeholder-zinc-500 border border-zinc-700 focus:border-lime-400 transition-colors"
              required
            />
            <button
              type="submit"
              className="w-full bg-lime-300 text-black text-[11px] font-bold font-jost tracking-[1px] uppercase py-2.5 hover:bg-lime-400 transition-colors btn-press"
            >
              Subscribe Free
            </button>
          </form>
        )}
      </div>

      {/* Related posts */}
      <div>
        <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-black">
          <h3 className="text-[14px] font-extrabold font-plus_jakarta_sans tracking-[1px] uppercase">Related Posts</h3>
        </div>
        <div className="space-y-4">
          {RELATED.map((r, i) => (
            <a key={i} href="#" className="flex gap-3 group">
              <div className="w-[72px] h-[52px] shrink-0 overflow-hidden img-zoom">
                <img src={r.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[13px] font-bold font-plus_jakarta_sans leading-[1.35] line-clamp-2 group-hover:text-lime-600 transition-colors">
                  {r.title}
                </h4>
                <time className="text-[11px] font-jost text-zinc-400 mt-0.5 block">{r.date}</time>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Ad slot */}
      <div className="text-center">
        <div className="text-[10px] font-jost text-zinc-400 mb-2 tracking-[0.5px]">— Advertisement —</div>
        <a href="#" className="block hover:opacity-80 transition-opacity">
          <img
            src="/assets/images/banners/ad-banner.jpg"
            alt="Ad"
            className="w-full object-cover"
          />
        </a>
      </div>
    </aside>
  );
};

/* ─────────────────────────────────────────────
   SINGLE ARTICLE BLOCK
───────────────────────────────────────────── */
interface ArticleBlockProps {
  article: Article;
  isFirst: boolean;
  onEnterViewport: (id: number) => void;
  sentinelRef?: (el: HTMLDivElement | null) => void;
}

const ArticleBlock = ({ article, isFirst, onEnterViewport, sentinelRef }: ArticleBlockProps) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onEnterViewport(article.id); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [article.id, onEnterViewport]);

  return (
    <article
      data-article-id={article.id}
      className={`${!isFirst ? "border-t-4 border-zinc-900 pt-12 mt-12" : ""}`}
    >
      {/* ── UP NEXT LABEL ── */}
      {!isFirst && (
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[10px] font-semibold font-jost tracking-[2px] uppercase text-zinc-400 bg-zinc-100 px-3 py-1.5">
            ↓ Continue Reading
          </span>
          <div className="flex-1 h-px bg-zinc-100" />
        </div>
      )}

      {/* ── CATEGORY ── */}
      <div ref={headerRef} className="mb-4">
        <span className={`text-[10px] font-semibold tracking-[1.5px] uppercase font-jost px-2.5 py-[4px] inline-flex items-center leading-none ${article.categoryColor}`}>
          {article.category}
        </span>
      </div>

      {/* ── TITLE ── */}
      <h1 className="text-[32px] md:text-[44px] lg:text-[52px] font-extrabold font-plus_jakarta_sans tracking-[-1.5px] leading-[1.1] mb-4 text-black">
        {article.title}
      </h1>

      {/* ── SUBTITLE ── */}
      <p className="text-[18px] md:text-[20px] font-plus_jakarta_sans text-zinc-500 leading-[1.6] mb-6 max-w-2xl">
        {article.subtitle}
      </p>

      {/* ── META ROW ── */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 pb-8 border-b border-zinc-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <img src={article.authorAvatar} alt={article.author} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-[12px] font-jost text-zinc-400 block leading-none mb-0.5">By</span>
            <a href="#" className="text-[13px] font-bold font-plus_jakarta_sans hover:text-lime-600 transition-colors leading-none">
              {article.author}
            </a>
          </div>
        </div>
        <span className="text-zinc-200">|</span>
        <time className="text-[13px] font-jost text-zinc-400">{article.date}</time>
        <span className="text-zinc-200">|</span>
        <span className="text-[13px] font-jost text-zinc-400">{article.readTime}</span>
        <div className="ml-auto">
          <ShareBar title={article.title} />
        </div>
      </div>

      {/* ── HERO IMAGE ── */}
      <figure className="mb-10 img-zoom">
        <img
          src={article.heroImage}
          alt={article.title}
          className="w-full object-cover max-h-[520px]"
        />
        <figcaption className="text-[12px] font-jost text-zinc-400 mt-2 text-center">
          {article.heroCaption}
        </figcaption>
      </figure>

      {/* ── BODY ── */}
      <BodyRenderer blocks={article.body} />

      {/* ── TAGS + SHARE ── */}
      <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-wrap gap-4 items-start justify-between">
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <a
              key={tag}
              href="#"
              className="text-[11px] font-semibold font-jost tracking-[0.5px] uppercase border border-zinc-200 px-3 py-1.5 hover:bg-black hover:text-white hover:border-black transition-all"
            >
              {tag}
            </a>
          ))}
        </div>
        <ShareBar title={article.title} />
      </div>

      {/* ── AUTHOR BIO BOX ── */}
      <div className="mt-10 bg-zinc-50 border border-zinc-100 p-6 flex gap-4 items-start">
        <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
          <img src={article.authorAvatar} alt={article.author} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="text-[10px] font-jost text-zinc-400 tracking-[1px] uppercase mb-1">About the author</div>
          <a href="#" className="text-[17px] font-extrabold font-plus_jakarta_sans hover:text-lime-600 transition-colors block mb-2">{article.author}</a>
          <p className="text-[14px] font-jost text-zinc-500 leading-[1.65]">{article.authorBio}</p>
        </div>
      </div>

      {/* ── SENTINEL: triggers load of next article ── */}
      {sentinelRef && (
        <div ref={sentinelRef} className="h-1 mt-4" aria-hidden />
      )}
    </article>
  );
};

/* ─────────────────────────────────────────────
   ARTICLE TITLE TRACKER (top sticky strip)
───────────────────────────────────────────── */
const ArticleTitleBar = ({ articles, activeId }: { articles: Article[]; activeId: number }) => {
  const active = articles.find((a) => a.id === activeId);
  const [pastHeader, setPastHeader] = useState(false);

  useEffect(() => {
    const update = () => {
      // The site header is roughly 80–100px tall; hide the title bar until
      // the user has scrolled past it so it doesn't overlap the logo.
      const header = document.querySelector("header");
      const threshold = header ? header.getBoundingClientRect().bottom + window.scrollY : 120;
      setPastHeader(window.scrollY > threshold);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!active) return null;
  return (
    <div
      className={`fixed top-[3px] left-0 right-0 z-[998] bg-white/95 backdrop-blur-sm border-b border-zinc-100 shadow-sm px-5 py-2.5 hidden lg:flex items-center gap-4 transition-all duration-200 ${
        pastHeader ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <span className={`text-[9px] font-semibold tracking-[1.5px] uppercase font-jost px-2 py-[3px] shrink-0 ${active.categoryColor}`}>
        {active.category}
      </span>
      <span className="text-[13px] font-bold font-plus_jakarta_sans truncate text-zinc-700">
        {active.title}
      </span>
      <div className="ml-auto flex items-center gap-2 shrink-0">
        <time className="text-[11px] font-jost text-zinc-400">{active.date}</time>
        <span className="text-zinc-300">·</span>
        <span className="text-[11px] font-jost text-zinc-400">{active.readTime}</span>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export const ArticlePage = () => {
  const [loadedArticles, setLoadedArticles] = useState<Article[]>([ARTICLES[0]]);
  const [activeArticleId, setActiveArticleId] = useState<number>(ARTICLES[0].id);
  const sentinelRefs = useRef<Map<number, IntersectionObserver>>(new Map());

  const handleEnterViewport = useCallback((id: number) => {
    setActiveArticleId(id);
  }, []);

  // Attach sentinel observer to last article's sentinel div
  const registerSentinel = useCallback((articleId: number, el: HTMLDivElement | null) => {
    // Clean up old observer for this id
    if (sentinelRefs.current.has(articleId)) {
      sentinelRefs.current.get(articleId)!.disconnect();
      sentinelRefs.current.delete(articleId);
    }
    if (!el) return;

    const currentIndex = ARTICLES.findIndex((a) => a.id === articleId);
    if (currentIndex === -1 || currentIndex >= ARTICLES.length - 1) return;

    const nextArticle = ARTICLES[currentIndex + 1];

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          sentinelRefs.current.delete(articleId);
          setLoadedArticles((prev) => {
            const alreadyLoaded = prev.some((a) => a.id === nextArticle.id);
            if (alreadyLoaded) return prev;
            return [...prev, nextArticle];
          });
        }
      },
      { threshold: 0, rootMargin: "0px 0px 200px 0px" }
    );
    obs.observe(el);
    sentinelRefs.current.set(articleId, obs);
  }, []);

  return (
    <>
      <ReadingProgress />
      <ArticleTitleBar articles={loadedArticles} activeId={activeArticleId} />

      <div className="max-w-[1300px] mx-auto px-5 pt-10 pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] font-jost text-zinc-400 mb-8">
          <a href="/" className="hover:text-black transition-colors">Home</a>
          <span>›</span>
          <a href="/category" className="hover:text-black transition-colors">Technology</a>
          <span>›</span>
          <span className="text-zinc-700 truncate max-w-[280px]">{loadedArticles[0]?.title}</span>
        </nav>

        {/* Layout: Article col + Sidebar */}
        <div className="flex gap-[60px] items-start">
          {/* ── MAIN ARTICLE COLUMN ── */}
          <div className="flex-1 min-w-0">
            {loadedArticles.map((article, index) => {
              const isLast = index === loadedArticles.length - 1;
              const hasMoreToLoad = loadedArticles.length < ARTICLES.length;
              return (
                <ArticleBlock
                  key={article.id}
                  article={article}
                  isFirst={index === 0}
                  onEnterViewport={handleEnterViewport}
                  sentinelRef={isLast && hasMoreToLoad ? (el) => registerSentinel(article.id, el) : undefined}
                />
              );
            })}

            {/* END-OF-FEED indicator */}
            {loadedArticles.length >= ARTICLES.length && (
              <div className="mt-16 text-center border-t border-zinc-100 pt-10">
                <div className="text-[11px] font-jost tracking-[2px] uppercase text-zinc-400 mb-4">You've reached the end</div>
                <a
                  href="#/category"
                  className="inline-block bg-lime-300 text-black text-[11px] font-bold font-jost tracking-[1px] uppercase px-8 py-3 hover:bg-black hover:text-white transition-all btn-press"
                >
                  Browse More Articles →
                </a>
              </div>
            )}
          </div>

          {/* ── STICKY SIDEBAR ── */}
          <div className="hidden lg:block w-[320px] shrink-0 sticky top-[80px]">
            <Sidebar article={loadedArticles[0]} />
          </div>
        </div>
      </div>
    </>
  );
};
