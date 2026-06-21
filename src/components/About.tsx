import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    { emoji: "⚡", text: "Delivered a production LLM automation pipeline on a live federal DHS platform using LangChain, LangGraph, and Google Gemini" },
    { emoji: "🤖", text: "Architected clean, versioned REST APIs with FastAPI and ASP.NET Core for enterprise-scale systems" },
    { emoji: "🚀", text: "Built agentic AI workflows integrating RAG, Knowledge Graphs, and Azure OpenAI for federal and financial services clients" },
    { emoji: "⏱️", text: "Reduced metadata search times from hours to seconds through intelligent indexing and optimized query design" },
  ];

  const stats = [
    { value: "5+", label: "Years of Experience" },
    { value: "6", label: "Companies" },
    { value: "9", label: "Certifications" },
    { value: "20+", label: "Applications Delivered" },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
        </div>

        <div className="space-y-8 text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I am a <span className="text-primary font-semibold">Senior Software AI Engineer</span> with over 5 years of experience architecting secure, production-grade .NET systems and LLM-powered applications for federal government, energy, legal, and financial services clients.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I architect clean, versioned APIs and intuitive UI flows that integrate seamlessly with enterprise systems. My work emphasizes performance, long-term maintainability through Clean Architecture and SOLID principles, and the consistent delivery of stable, scalable software within Agile environments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card hover-glow p-4 text-center">
              <p className="text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <Card key={index} className="glass-card-deep hover-glow p-4 flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">{item.emoji}</span>
              <span className="text-muted-foreground font-medium text-sm leading-relaxed">{item.text}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
