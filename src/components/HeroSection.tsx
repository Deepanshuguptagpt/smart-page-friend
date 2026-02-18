import { CircuitBoard, Cpu, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Arc reactor icon */}
        <div className="mx-auto mb-8 w-24 h-24 rounded-full border-2 border-primary/50 flex items-center justify-center animate-pulse-glow">
          <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center">
            <Cpu className="w-8 h-8 text-primary" />
          </div>
        </div>

        <p className="font-display text-sm tracking-[0.4em] text-primary mb-4 uppercase">
          System Online
        </p>

        <h1 className="font-display text-5xl md:text-7xl font-bold glow-text text-foreground mb-4">
          DEEPANSHU
          <span className="block text-primary">GUPTA</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Welcome to my digital command center. I'm a builder, thinker, and creator
          — and J.A.R.V.I.S. is here to assist you.
        </p>

        <div className="flex items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2 text-sm font-body">
            <CircuitBoard className="w-4 h-4 text-primary" />
            <span>AI Powered</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-body">
            <Zap className="w-4 h-4 text-primary" />
            <span>Always Online</span>
          </div>
        </div>
      </div>

      {/* Decorative corner brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/20" />
    </section>
  );
};

export default HeroSection;
