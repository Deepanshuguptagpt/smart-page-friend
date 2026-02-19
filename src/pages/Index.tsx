import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import CollegeHeader from "@/components/CollegeHeader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://deepanshugupta.app.n8n.cloud/webhook/6a64c734-b4ad-49a4-a1b4-1f00aaac58ff/chat',
        initialMessages: ['Hey there! I\\'m Jarvis, Deepanshu\\'s AI assistant. How can I help you?'],
        i18n: {
          en: {
            title: 'J.A.R.V.I.S.',
            subtitle: 'Personal AI Assistant',
            inputPlaceholder: 'Ask me anything...',
            getStarted: 'Start Conversation',
            footer: '',
          },
        },
      });
    `;
    document.body.appendChild(script);

    return () => {
      link.remove();
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <CollegeHeader />
      <Navbar />
      <HeroSection />
      <AboutSection />

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-display text-lg font-bold mb-2">
            Indore Institute of Science & Technology
          </p>
          <p className="font-body text-sm opacity-80">
            © 2025 IIST. All Rights Reserved. | Approved by AICTE | Affiliated to RGPV Bhopal
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
