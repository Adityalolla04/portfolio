import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", emoji: "🐍", level: 90 },
        { name: "C#", emoji: "💜", level: 85 },
        { name: "TypeScript", emoji: "📘", level: 85 },
        { name: "T-SQL", emoji: "🗃️", level: 88 },
        { name: "JavaScript", emoji: "💛", level: 82 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "FastAPI", emoji: "⚡", level: 88 },
        { name: "ASP.NET Core", emoji: "🔷", level: 90 },
        { name: "React", emoji: "⚛️", level: 85 },
        { name: "Angular", emoji: "🅰️", level: 80 },
        { name: "Node.js", emoji: "💚", level: 75 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "SQL Server", emoji: "🗄️", level: 92 },
        { name: "PostgreSQL", emoji: "🐘", level: 88 },
        { name: "MongoDB", emoji: "🍃", level: 75 },
        { name: "Redis", emoji: "🔴", level: 70 },
      ]
    },
    {
      title: "AI/ML & Data",
      skills: [
        { name: "LangChain", emoji: "🔗", level: 80 },
        { name: "Azure OpenAI", emoji: "🤖", level: 78 },
        { name: "Pandas", emoji: "🐼", level: 85 },
        { name: "NumPy", emoji: "🔢", level: 82 },
        { name: "Data Analysis", emoji: "📊", level: 88 },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Azure", emoji: "☁️", level: 85 },
        { name: "Docker", emoji: "🐳", level: 82 },
        { name: "Kubernetes", emoji: "☸️", level: 70 },
        { name: "GitHub Actions", emoji: "🔄", level: 80 },
        { name: "Jenkins", emoji: "🔧", level: 78 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", emoji: "📚", level: 90 },
        { name: "Swagger/OpenAPI", emoji: "📝", level: 88 },
        { name: "Postman", emoji: "📮", level: 85 },
        { name: "Splunk", emoji: "📈", level: 75 },
        { name: "Tableau", emoji: "📉", level: 72 },
      ]
    }
  ];

  const techStack = [
    { name: "Python", emoji: "🐍" },
    { name: "FastAPI", emoji: "⚡" },
    { name: "C#", emoji: "💜" },
    { name: ".NET Core", emoji: "🔷" },
    { name: "React", emoji: "⚛️" },
    { name: "TypeScript", emoji: "📘" },
    { name: "PostgreSQL", emoji: "🐘" },
    { name: "SQL Server", emoji: "🗄️" },
    { name: "Azure", emoji: "☁️" },
    { name: "Docker", emoji: "🐳" },
    { name: "LangChain", emoji: "🔗" },
    { name: "Git", emoji: "📚" },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What <span className="gradient-text">I Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            FULL STACK DEVELOPMENT WITH AI/ML INTEGRATION
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

        {/* Skill Categories with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="glass-card hover-glow p-6">
              <h3 className="text-xl font-bold mb-6 gradient-text">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.emoji}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-bar"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* What I Can Do */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Core <span className="gradient-text">Competencies</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card hover-glow p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                <span className="text-4xl">🌐</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Full Stack Development</h4>
              <p className="text-muted-foreground">
                Building responsive web applications with Python, FastAPI, ASP.NET Core, React, and Angular with modern UI/UX practices.
              </p>
            </Card>

            <Card className="glass-card hover-glow p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                <span className="text-4xl">🤖</span>
              </div>
              <h4 className="text-xl font-bold mb-3">AI/ML Integration</h4>
              <p className="text-muted-foreground">
                Integrating LangChain, Azure OpenAI, RAG systems, and vector databases to build intelligent, data-driven applications.
              </p>
            </Card>

            <Card className="glass-card hover-glow p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                <span className="text-4xl">📊</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Data Analytics</h4>
              <p className="text-muted-foreground">
                Creating data pipelines, dashboards with Tableau/Power BI, and performing analytics to drive business decisions.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
