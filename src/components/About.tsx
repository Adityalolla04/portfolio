import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    { emoji: "⚡", text: "Delivering secure, high-performance C#, Python, and TypeScript applications" },
    { emoji: "🤖", text: "Building clean, versioned APIs with FastAPI and ASP.NET Core" },
    { emoji: "🚀", text: "Integrating LLMs and AI workflows with LangChain and Azure OpenAI" },
    { emoji: "⏱️", text: "Reducing metadata search times from hours to seconds" },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Know Who <span className="gradient-text">I Am</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
        </div>

        <div className="space-y-6 text-center">
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              As a <span className="text-primary font-semibold">results-driven Full-Stack Engineer</span> with 
              5+ years of experience, I specialize in designing and delivering secure, high-performance applications for the legal tech and financial services industries.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I build clean, versioned APIs and intuitive UI flows that integrate seamlessly with enterprise systems, emphasizing performance, maintainability (Clean Architecture, SOLID), and delivering stable, scalable software in Agile environments.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
              {highlights.map((item, index) => (
                <Card key={index} className="glass-card-deep p-4 flex items-center gap-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <span className="text-muted-foreground font-medium">{item.text}</span>
                </Card>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
