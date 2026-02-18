import { useEffect } from "react";
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
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Scan line effect */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-[0.03]">
        <div className="h-[2px] w-full bg-primary animate-[scan-line_8s_linear_infinite]" />
      </div>

      {/* Grid background */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(190 100% 50% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(190 100% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default Index;
