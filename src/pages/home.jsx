import ChatSupport from "@components/ui/ChatSupport";
import { ChatHandler } from "@hooks/chatHandler";

import Tes from "@components/test";
import HeroSection from "@components/sections/HeroSection";

import "@styles/bot.css";
import "@styles/home.css";

export default function Home() {
  const chat = ChatHandler();

  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-content">
          <HeroSection />
          <Tes />
          <ChatSupport {...chat} />
        </div>
      </div>
    </section>
  );
}
