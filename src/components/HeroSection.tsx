import { GraduationCap, Users, Award, BookOpen } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "B.Tech Programs", value: "10+" },
  { icon: Users, label: "Students Placed", value: "5000+" },
  { icon: Award, label: "NAAC Accredited", value: "A+" },
  { icon: BookOpen, label: "Years of Excellence", value: "20+" },
];

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-college-blue to-primary overflow-hidden">
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="font-display text-sm md:text-base tracking-widest text-primary-foreground/80 mb-4 uppercase">
            Welcome to
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
            Indore Institute of Science
            <span className="block">& Technology</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Amongst the Top Engineering Colleges of Indore — Approved by AICTE New Delhi, Affiliated to RGPV Bhopal
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-8 py-3 bg-accent text-accent-foreground font-display font-semibold rounded-md hover:opacity-90 transition-opacity shadow-lg">
              Apply Now
            </button>
            <button className="px-8 py-3 bg-primary-foreground/10 border-2 border-primary-foreground text-primary-foreground font-display font-semibold rounded-md hover:bg-primary-foreground/20 transition-colors">
              Explore Programs
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 text-center border border-primary-foreground/20">
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="font-display text-2xl font-bold text-primary-foreground">{stat.value}</p>
              <p className="font-body text-xs text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
