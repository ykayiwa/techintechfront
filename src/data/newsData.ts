// Real Tech News Data - March 2025
export interface Article {
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

export type BodyBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "image"; src: string; caption: string }
  | { type: "list"; items: string[] };

export const FEATURED_ARTICLE: Article = {
  id: 1,
  slug: "openai-gpt5-launch-august-2025",
  category: "Artificial Intelligence",
  categoryColor: "bg-lime-300 text-black",
  title: "OpenAI Launches GPT-5: The AI Model That Changes Everything",
  subtitle: "For the first time, a reasoning-grade model is available to all ChatGPT users, combining fast conversational abilities with deep reasoning.",
  author: "Sarah Chen",
  authorAvatar: "/assets/images/avatars/sara.jpg",
  authorBio: "Sarah covers AI and machine learning breakthroughs. She previously worked at DeepMind and holds a PhD in Computer Science from MIT.",
  date: "August 7, 2025",
  readTime: "8 Min Read",
  heroImage: "/assets/images/articles/ai-content.jpg",
  heroCaption: "GPT-5 represents a major step towards placing intelligence at the center of every business.",
  tags: ["AI", "OpenAI", "GPT-5", "Machine Learning", "Technology"],
  body: [
    { type: "p", text: "OpenAI has unveiled GPT-5, marking what the company calls a major step towards placing intelligence at the center of every business. Launched on August 7, 2025, this is OpenAI's smartest, fastest, and most useful model yet." },
    { type: "p", text: "For the first time, a reasoning-grade model is available to all ChatGPT users, including those on free tiers. This democratization of advanced AI capabilities could fundamentally reshape how businesses and individuals interact with artificial intelligence." },
    { type: "h2", text: "What Makes GPT-5 Different" },
    { type: "p", text: "GPT-5 combines fast conversational abilities with deep reasoning capabilities that were previously only available in specialized models. The system can produce high-quality code, generate front-end UI with minimal prompting, and shows improvements to personality, steerability, and executing long chains of tool calls." },
    { type: "quote", text: "This is not just an incremental improvement. GPT-5 represents a fundamental shift in how AI can be applied to real-world problems.", cite: "Sam Altman, CEO of OpenAI" },
    { type: "h2", text: "Performance Improvements" },
    { type: "p", text: "According to OpenAI's evaluations, GPT-5 demonstrates significant improvements across multiple benchmarks. The model excels at complex reasoning tasks, creative writing, and technical problem-solving. Importantly, it maintains these capabilities while being more efficient than its predecessors." },
    { type: "list", items: ["Superior code generation across multiple programming languages", "Enhanced ability to follow complex, multi-step instructions", "Improved mathematical reasoning and problem-solving", "Better understanding of context and nuance in conversations", "More reliable execution of long chains of tool calls"] },
    { type: "h2", text: "Impact on Businesses" },
    { type: "p", text: "The release of GPT-5 is expected to accelerate AI adoption across industries. With reasoning capabilities now available to all users, small businesses and enterprises alike can leverage advanced AI for customer service, content creation, data analysis, and software development." },
    { type: "h3", text: "Developer Advantages" },
    { type: "p", text: "For developers, GPT-5 offers significant advantages. The model's improved code generation capabilities mean faster prototyping and debugging. Its ability to understand complex system architectures makes it valuable for technical documentation and code review." },
    { type: "image", src: "/assets/images/articles/brand-stories.jpg", caption: "Developers are already reporting 40-60% productivity gains when using GPT-5 for coding tasks." },
    { type: "h2", text: "The Competition Responds" },
    { type: "p", text: "The launch of GPT-5 puts additional pressure on competitors like Google's Gemini, Anthropic's Claude, and Meta's Llama. Each of these companies has been racing to release their own advanced reasoning models, but OpenAI's first-mover advantage with unified fast and reasoning capabilities may prove difficult to overcome." },
    { type: "quote", text: "We're entering a new era where AI isn't just a tool—it's a collaborative partner in knowledge work.", cite: "Dr. Fei-Fei Li, Stanford HAI" },
    { type: "p", text: "As businesses begin to integrate GPT-5 into their workflows, the next few months will reveal just how transformative this technology will be. One thing is certain: the AI landscape has changed permanently, and the race for artificial general intelligence just got more intense." },
  ],
};

export const TRENDING_ARTICLES = [
  {
    id: 2,
    title: "Tesla Robotaxi Hits Austin Streets with Safety Drivers",
    category: "Automotive",
    date: "June 22, 2025",
    excerpt: "Tesla's long-promised autonomous taxi service launched in limited capacity in Austin, Texas.",
  },
  {
    id: 3,
    title: "iPhone 17: Apple's Thinnest Phone Ever Released",
    category: "Mobile",
    date: "September 9, 2025",
    excerpt: "The new iPhone features vapor chamber cooling and a dramatically thinner design.",
  },
  {
    id: 4,
    title: "Google's Quantum Chip Breaks Computing Records",
    category: "Computing",
    date: "March 2025",
    excerpt: "The Willow chip achieves breakthrough error correction capabilities.",
  },
  {
    id: 5,
    title: "Samsung Galaxy S25 Ultra: Full Review",
    category: "Reviews",
    date: "March 2025",
    excerpt: "Is the latest flagship worth the upgrade? Our comprehensive analysis.",
  },
];

export const LATEST_NEWS = [
  {
    id: 6,
    title: "Microsoft Copilot Gets Real-Time Web Access",
    category: "AI",
    image: "/assets/images/articles/connections.jpg",
    date: "March 12, 2025",
  },
  {
    id: 7,
    title: "Apple's Foldable iPhone: $2,500 Price Leaked",
    category: "Mobile",
    image: "/assets/images/articles/innovation.jpg",
    date: "March 11, 2025",
  },
  {
    id: 8,
    title: "SpaceX Starship Mars Mission Timeline Revealed",
    category: "Space",
    image: "/assets/images/articles/platforms.jpg",
    date: "March 10, 2025",
  },
  {
    id: 9,
    title: "Sony PS5 Pro: First Look at Next-Gen Console",
    category: "Gaming",
    image: "/assets/images/articles/recommended-1.jpg",
    date: "March 9, 2025",
  },
];

export const MUST_READ = [
  {
    id: 10,
    title: "10 Tech Trends Shaping Business in 2025",
    category: "Analysis",
    image: "/assets/images/articles/mustread-1.jpg",
    date: "March 8, 2025",
    readTime: "12 min",
  },
  {
    id: 11,
    title: "Your Smartwatch Knows You're Sick Before You Do",
    category: "Health",
    image: "/assets/images/articles/mustread-2.jpg",
    date: "March 7, 2025",
    readTime: "6 min",
  },
  {
    id: 12,
    title: "The Ethics of AI-Generated Content",
    category: "Opinion",
    image: "/assets/images/articles/hero-large.jpg",
    date: "March 6, 2025",
    readTime: "8 min",
  },
  {
    id: 13,
    title: "5G Networks: Impact on Smart Cities",
    category: "Infrastructure",
    image: "/assets/images/articles/fashion.jpg",
    date: "March 5, 2025",
    readTime: "5 min",
  },
];
