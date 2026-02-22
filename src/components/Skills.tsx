import React from 'react';
import { Card } from '@/components/ui/card';
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      skills: [
        { name: "C#", emoji: "💜" },
        { name: "Python", emoji: "🐍" },
        { name: "TypeScript", emoji: "📘" },
        { name: "T-SQL", emoji: "🗃️" },
        { name: "HTML5/CSS3", emoji: "🎨" },
      ]
    },
    {
      title: "Runtimes & Frameworks",
      skills: [
        { name: "ASP.NET Core", emoji: "🔷" },
        { name: "FastAPI", emoji: "⚡" },
        { name: "React", emoji: "⚛️" },
        { name: "Angular", emoji: "🅰️" },
        { name: "Node.js", emoji: "💚" },
      ]
    },
    {
      title: "Databases & Data Access",
      skills: [
        { name: "SQL Server", emoji: "🗄️" },
        { name: "PostgreSQL", emoji: "🐘" },
        { name: "MongoDB", emoji: "🍃" },
        { name: "EF Core", emoji: "🧊" },
        { name: "SQLAlchemy", emoji: "🧪" },
      ]
    },
    {
      title: "LLM & Machine Learning",
      skills: [
        { name: "LangChain", emoji: "🔗" },
        { name: "Azure OpenAI", emoji: "🤖" },
        { name: "RAG", emoji: "📚" },
        { name: "Pandas/NumPy", emoji: "🐼" },
        { name: "Transformers", emoji: "🔄" },
      ]
    },
    {
      title: "CI/CD, Cloud & DevOps",
      skills: [
        { name: "Azure", emoji: "☁️" },
        { name: "AWS", emoji: "☁️" },
        { name: "Docker", emoji: "🐳" },
        { name: "Kubernetes", emoji: "☸️" },
        { name: "GitHub Actions", emoji: "🚀" },
        { name: "Jenkins", emoji: "🔧" },
      ]
    },
    {
      title: "Architecture & Tools",
      skills: [
        { name: "Clean Architecture", emoji: "🏛️" },
        { name: "Git", emoji: "🌿" },
        { name: "Swagger/OpenAPI", emoji: "📝" },
        { name: "Postman/Bruno", emoji: "📮" },
        { name: "Splunk", emoji: "📈" },
      ]
    }
  ];

  const techStack = [
    { name: "Python", emoji: "🐍" },
    { name: "C#", emoji: "💜" },
    { name: "FastAPI", emoji: "⚡" },
    { name: ".NET Core", emoji: "🔷" },
    { name: "React", emoji: "⚛️" },
    { name: "TypeScript", emoji: "📘" },
    { name: "PostgreSQL", emoji: "🐘" },
    { name: "SQL Server", emoji: "🗄️" },
    { name: "Azure", emoji: "☁️" },
    { name: "AWS", emoji: "☁️" },
    { name: "Docker", emoji: "🐳" },
    { name: "LangChain", emoji: "🔗" },
    { name: "Git", emoji: "🌿" },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my expertise in modern software engineering, from backend to frontend and AI.
          </p>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
        </div>

        {/* Tech Stack Icons Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 hover:bg-card hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <span className="text-4xl group-hover:scale-125 transition-transform duration-300">{tech.emoji}</span>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skill Categories with Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="glass-card hover-glow p-6">
              <h3 className="text-xl font-bold mb-6 gradient-text">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className={cn(badgeVariants({ variant: "secondary" }), "text-base py-1 px-3")}>
                    <span className="mr-2">{skill.emoji}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Core <span className="gradient-text">Competencies</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card hover-glow p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                <span className="text-4xl">🌐</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Full Stack Engineering</h4>
              <p className="text-muted-foreground">
                Building secure, high-performance applications with C#, Python, FastAPI, ASP.NET Core, and modern frontend frameworks like React and Angular.
              </p>
            </Card>

            <Card className="glass-card hover-glow p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                <span className="text-4xl">🤖</span>
              </div>
              <h4 className="text-xl font-bold mb-3">AI & LLM Integration</h4>
              <p className="text-muted-foreground">
                Designing and deploying intelligent agentic workflows and retrieval systems using LangChain, Azure OpenAI, RAG, and vector databases.
              </p>
            </Card>

            <Card className="glass-card hover-glow p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                <span className="text-4xl">🏗️</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Cloud & DevOps</h4>
              <p className="text-muted-foreground">
                Automating CI/CD pipelines, containerizing applications with Docker, and deploying scalable solutions on cloud platforms like Azure and AWS.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
