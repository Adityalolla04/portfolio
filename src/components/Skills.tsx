import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Database, 
  Cloud, 
  BarChart3, 
  Cpu, 
  Code2, 
  Wrench,
  Brain,
  Server,
  Shield,
  Settings
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      icon: Code2,
      skills: ["C#", "Python", "NumPy", "Pandas", "OOPS", "T-SQL", "TypeScript", "HTML5", "CSS3", "Bash/PowerShell"],
      color: "text-primary"
    },
    {
      title: "Runtime & Frameworks", 
      icon: Server,
      skills: [
        "REST API", "ASP.NET Core Web API", "FastAPI", "SQLAlchemy", "EF Core", 
        "Migrations", "Indexing", "Node.js", "React", "Angular"
      ],
      color: "text-accent"
    },
    {
      title: "LLM & AI/ML",
      icon: Brain, 
      skills: [
        "LangChain", "Azure OpenAI", "OpenAI API", "pgvector", "FAISS", "RAG",
        "Machine Learning", "Predictive Modeling", "CNN", "LSTM", "RNN", "Data Science"
      ],
      color: "text-primary"
    },
    {
      title: "Data Analysis & Analytics",
      icon: BarChart3,
      skills: [
        "Data Analysis", "Data Analytics", "Statistical Analysis", "NumPy", "Pandas", 
        "Data Visualization", "Tableau", "Power BI", "Streamlit", "SSRS", "Business Intelligence"
      ],
      color: "text-accent"
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        "SQL Server", "PostgreSQL", "MongoDB", "Transactions", "Views", "XML Format", 
        "Joins", "Indexers", "Stored Procedures", "NoSQL"
      ],
      color: "text-primary"
    },
    {
      title: "Security & Identity",
      icon: Shield,
      skills: [
        "JWT Auth", "Role-based Authorization", "OAuth2/OIDC", "Azure AD", 
        "CORS", "CSRF", "HTTPS/TLS Hardening", "OWASP Practices"
      ],
      color: "text-accent"
    },
    {
      title: "APIs & Contracts",
      icon: Wrench,
      skills: [
        "REST API", "JSON", "Swagger", "API Versioning", "OpenAPI", 
        "Apache Solr Indexer", "Schema and Field Types"
      ],
      color: "text-primary"
    },
    {
      title: "Architecture & Patterns",
      icon: Settings,
      skills: [
        "SOLID", "Clean Architecture", "Repository Pattern", "Unit of Work", 
        "DTOs vs Entities", "CQRS/MediatR", "Design Patterns", "Event-driven"
      ],
      color: "text-accent"
    },
    {
      title: "CI/CD & DevOps",
      icon: Cloud,
      skills: [
        "Git", "GitHub", "Jenkins", "GitHub Actions", "Docker", "Kubernetes", 
        "Azure", "Azure Service Bus", "MSBuild", "Artifacts"
      ],
      color: "text-primary"
    },
    {
      title: "Testing & Quality",
      icon: Cpu,
      skills: [
        "xUnit", "NUnit", "pytest", "Test Server", "Postman/Newman", 
        "CI-gated Test Pipelines", "Unit Testing", "Integration Testing"
      ],
      color: "text-accent"
    },
    {
      title: "Observability & Diagnostics",
      icon: BarChart3,
      skills: [
        "Splunk", "Health Checks", "ILogger", "Request/Response Logging",
        "SLO Dashboards", "Structured Logging"
      ],
      color: "text-primary"
    },
    {
      title: "Tools & Process",
      icon: Wrench,
      skills: [
        "Visual Studio", "VS Code", "SSMS", "pgAdmin", "Postman", "Swagger UI",
        "Agile/Scrum", "User Stories", "Sprint Planning", "Code Reviews"
      ],
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across full-stack development, AI/ML integration, and data analytics in production environments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="glass-card hover-glow p-6 group cursor-pointer h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-secondary/50 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover:scale-105 transition-transform duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Key Strengths */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card hover-glow p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Full-Stack Development</h4>
              <p className="text-sm text-muted-foreground">
                End-to-end Web APIs, FastAPI, ASP.NET Core with Angular/React UIs, reducing triage time by 40%
              </p>
            </Card>

            <Card className="glass-card hover-glow p-6 text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">AI/ML & Data Analysis</h4>
              <p className="text-sm text-muted-foreground">
                LangChain, Azure OpenAI, RAG systems with vector databases improving search relevance by 25%
              </p>
            </Card>

            <Card className="glass-card hover-glow p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Cloud & DevOps</h4>
              <p className="text-sm text-muted-foreground">
                Azure, Docker, Kubernetes with CI/CD pipelines reducing deployment downtime by 30%
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
