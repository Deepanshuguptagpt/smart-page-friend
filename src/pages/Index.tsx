import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import CollegeHeader from "@/components/CollegeHeader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

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
        webhookUrl: 'https://nfifnienf.app.n8n.cloud/webhook/d2cb3372-6adb-4644-b0d5-b6c6e3c3d641/chat',
        webhookConfig: {
          method: 'POST',
          headers: {}
        },
        target: '#n8n-chat',
        mode: 'window',
        chatInputKey: 'chatInput',
        chatSessionKey: 'sessionId',
        loadPreviousSession: true,
        metadata: {},
        showWelcomeScreen: false,
        defaultLanguage: 'en',
        initialMessages: [
          'Hi there! 👋',
          'My name is Tarun. How can I assist you today?'
        ],
        i18n: {
          en: {
            title: 'Hi there! 👋',
            subtitle: "Start a chat. We're here to help you 24/7.",
            footer: '',
            getStarted: 'New Conversation',
            inputPlaceholder: 'Type your question..',
          },
        },
        enableStreaming: false,
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
      <ContactSection />

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
      <div id="n8n-chat"></div>
    </div>
  );
};

export default Index;
