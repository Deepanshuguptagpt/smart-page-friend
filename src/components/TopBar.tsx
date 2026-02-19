const announcements = [
  "Civil Engineering with Computer Application",
  "Electronics and Computer Science",
  "Robotics & Artificial Intelligence",
  "Important Documents For Admission (2025 - 2026)",
];

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-1.5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...announcements, ...announcements].map((text, i) => (
          <span key={i} className="mx-6 text-sm font-body">
            <span className="text-accent font-semibold">New!</span>{" "}
            <span className="underline cursor-pointer hover:text-accent transition-colors">{text}</span>
            {" | "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
