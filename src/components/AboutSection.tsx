import { CheckCircle } from "lucide-react";

const programs = [
  "Computer Science (CS)",
  "Information Technology (IT)",
  "AI & ML",
  "Robotics & AI",
  "Data Science (DS)",
  "Electronics & Computer Science (ECS)",
  "Electronics & Communication (EC)",
  "Mechanical Engineering",
  "Civil Engineering",
];

const AboutSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
          WELCOME TO INDORE INSTITUTE OF SCIENCE AND TECHNOLOGY
        </h2>
        <div className="w-24 h-1 bg-college-red mx-auto mb-8 rounded-full" />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Indore Institute of Science & Technology (IIST) was established in the year 2003, 
              and is amongst the Top 5 Engineering Colleges of Indore. The Engineering Institute 
              is approved by AICTE New Delhi and affiliated to RGPV Bhopal.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              The Institute offers Bachelor's degree (B.Tech) and Master's Degrees (ME/M.Tech) 
              across multiple disciplines with cutting-edge curriculum and industry partnerships.
            </p>
            <button className="mt-2 px-6 py-2.5 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-md hover:opacity-90 transition-opacity">
              Read More
            </button>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Programs Offered
            </h3>
            <ul className="space-y-2">
              {programs.map((prog) => (
                <li key={prog} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-college-green flex-shrink-0" />
                  {prog}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
