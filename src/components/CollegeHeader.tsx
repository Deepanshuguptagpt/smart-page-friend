import { GraduationCap } from "lucide-react";

const colleges = [
  { name: "IIST", full: "Indore Institute of Science & Technology", grade: "A+", color: "text-college-red" },
  { name: "IIP", full: "Indore Institute of Pharmacy", grade: "A", color: "text-college-green" },
  { name: "IIMR", full: "Indore Institute of Management & Research", grade: "A", color: "text-college-blue" },
];

const CollegeHeader = () => {
  return (
    <header className="bg-background py-4 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo area */}
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-accent" />
          </div>
          <div>
            <p className="font-display text-xs text-muted-foreground uppercase tracking-wider">IIST • IIP • IIMR</p>
          </div>
        </div>

        {/* College badges */}
        <div className="flex flex-wrap items-center gap-6">
          {colleges.map((c) => (
            <div key={c.name} className="flex items-center gap-2">
              <div className="bg-college-yellow/20 border border-college-yellow rounded-md px-2 py-1">
                <span className="font-display text-xs font-bold text-accent">NAAC {c.grade}</span>
              </div>
              <div>
                <span className={`font-display text-xl font-bold ${c.color}`}>{c.name}</span>
                <p className="font-body text-[10px] text-muted-foreground leading-tight max-w-[140px]">{c.full}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default CollegeHeader;
