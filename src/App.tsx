import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/sections/Header";
import { Main } from "@/sections/Main";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { PopupNewsletter } from "@/components/PopupNewsletter";
import { CookieBanner } from "@/components/CookieBanner";
import { UIProvider } from "@/context/UIContext";
import { CategoryPage } from "@/pages/Category";
import { ArticlePage } from "@/pages/ArticlePage";

export const App = () => {
  return (
    <UIProvider>
      <BrowserRouter>
        <div className="text-black text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[27.2px] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-arial md:text-[17px] md:leading-[28.9px]">
          <div className="relative text-base box-border caret-transparent leading-[27.2px] max-w-full overflow-clip md:text-[17px] md:leading-[28.9px]">
            <Header />
            <main className="relative text-base box-border caret-transparent leading-[27.2px] min-h-[450px] z-[1] md:text-[17px] md:leading-[28.9px]">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/index.html" element={<Main />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/category.html" element={<CategoryPage />} />
                <Route path="/article" element={<ArticlePage />} />
                <Route path="*" element={<div className="p-10 text-center text-2xl font-bold">404 — path: {window.location.pathname}</div>} />
              </Routes>
            </main>
            <Footer />
          </div>
          <FloatingButtons />
          <PopupNewsletter />
          <CookieBanner />
        </div>
      </BrowserRouter>
    </UIProvider>
  );
};
