import { Bot, BrainCircuit, Rocket } from "lucide-react";

const cards = [
  {
    icon: BrainCircuit,
    title: "Thinker",
    description: "Exploring ideas at the intersection of technology and creativity.",
  },
  {
    icon: Rocket,
    title: "Builder",
    description: "Turning visions into reality with code, AI, and automation.",
  },
  {
    icon: Bot,
    title: "J.A.R.V.I.S.",
    description: "Chat with my AI assistant using the button in the bottom-right corner.",
  },
];

const AboutSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-center text-primary mb-12 tracking-widest uppercase">
          Systems Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="glass-panel rounded-lg p-6 hover:border-primary/50 transition-colors duration-300"
            >
              <card.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-lg text-foreground mb-2">{card.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
