import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Community Dreams Foundations",
      location: "Florida - Remote",
      duration: "Aug 2025 – Present",
      achievements: [
        "Developed and maintained full-stack applications using C#, ASP.NET Core, Web API and React, improving system scalability and reliability for hundreds of active users",
        "Collaborated with cross-functional teams to design and ship new features, reducing development cycle time by 20% through improved Agile workflows and code quality practices",
        "Implemented secure REST API endpoints and integrated multiple third-party services, increasing platform functionality and enhancing user experience, resulting in a 15% increase in feature adoption",
        "Optimized backend performance and database interactions, reducing API response times by 30%"
      ],
      tools: [
        "C#", "ASP.NET Core", "Web API", "React", "REST API", "Agile", "Third-party Integrations"
      ],
      color: "border-l-primary"
    },
    {
      title: "Student Assistant",
      company: "University at Buffalo",
      location: "Buffalo, NY",
      duration: "Mar 2024 – May 2025",
      achievements: [
        "Developed a campus dining application with clock-in/clock-out functionality for food processing units, increasing time-tracking accuracy and improving operational efficiency by 20%",
        "Implemented cost-management features that optimized resource usage and resulted in a 15% reduction in overall food-processing expenses",
        "Designed intuitive user interfaces and built Python backend services to support core application workflows, ensuring a seamless experience for both staff and administrators",
        "Collaborated closely with campus dining teams to gather requirements and iterate on feedback, increasing user satisfaction by 25%",
        "Performed data analysis on food-processing metrics to identify inefficiencies and deployed solutions that reduced operational waste by 10%"
      ],
      tools: [
        "Python", "Data Analysis", "UI/UX Design", "Backend Services", "Cost Management"
      ],
      color: "border-l-accent"
    },
    {
      title: "Software Engineer",
      company: "Evoke Technologies – CSC Global",
      location: "Hyderabad, India",
      duration: "Apr 2022 – Dec 2023",
      achievements: [
        "Spearheaded API and automation workflows for investment operations using Python FastAPI and Web API with C#, REST, SQL Server and PostgreSQL, Angular, and TypeScript, delivering 25% on-time sprints with Agile and clean code practices",
        "Built end-to-end filters and review flows from PostgreSQL or SQL Server schemas with SQLAlchemy or EF Core through FastAPI or Web API to Angular UI, reducing analyst triage time by 40% and keeping p95 API latency under 500ms",
        "Designed and shipped a search and retrieval layer using vector databases (pgvector/FAISS) with batch and near real-time updates, improving relevance by 25%",
        "Resolved over 40 production and pre-production defects across API logic, data handling, and UI performance, lowering repeat incidents by 30% and improving user satisfaction by 20%",
        "Contributed migration to modular cloud services on Azure containers with zero-downtime cutover, increasing service throughput by 35% and reducing cold-start latency by 22%",
        "Implemented secure-by-default patterns including JWT bearer authentication, role-based authorization, CORS, TLS hardening, and Swagger with API versioning",
        "Delivered Angular and TypeScript user interfaces with reactive forms, interceptors, and pagination, improving stability by 70% and reducing multi-record edit time by 50%",
        "Automated CI/CD with GitHub Actions and Jenkins using blue-green releases, reducing deployment downtime by 30% and shortening lead time by 45%",
        "Instrumented health checks, structured logging, and SLO dashboards with ILogger and Splunk, and added AI summaries with Azure OpenAI and LangChain to speed analyst reviews by 30%"
      ],
      tools: [
        "Python", "FastAPI", "C#", "ASP.NET Core", "SQL Server", "PostgreSQL", "Angular", "TypeScript",
        "SQLAlchemy", "EF Core", "pgvector", "FAISS", "Azure", "Docker", "JWT", "LangChain", "Azure OpenAI",
        "GitHub Actions", "Jenkins", "Splunk", "Swagger"
      ],
      color: "border-l-primary"
    },
    {
      title: ".NET Developer",
      company: "Kannai Storage Solutions – Godrej and Boyce Mfg.",
      location: "Hyderabad, India",
      duration: "Aug 2021 – Mar 2022",
      achievements: [
        "Designed a quotation and rack-configuration module using ASP.NET Core Web API, Angular, and PostgreSQL that replaced spreadsheet workflows and cut quote turnaround time by 50%",
        "Built order tracking and delivery scheduling APIs with server-side pagination, filtering, and sorting, reducing page load times by 45% and eliminating month-end timeouts",
        "Engineered responsive Angular UI screens with Reactive Forms and route guards, increasing form completion rates by 35% and dropping validation errors by 40%",
        "Modeled normalized schemas and wrote stored procedures and views in PostgreSQL, improving complex query execution times by 30%",
        "Implemented JWT-based authentication and role-based authorization in ASP.NET Core and Angular route guards, passing internal security checks with 0 critical findings",
        "Delivered event and milestone notifications for installation workflows via webhooks and email, reducing missed handoffs between sales and operations by 40%",
        "Optimized API performance with EF Core no-tracking projections, sargable predicates, and targeted indexing, lowering P95 endpoint latency by 32%",
        "Automated CI/CD with Jenkins and GitHub, cutting deployment time from hours to 15 minutes and reducing manual errors by 90%"
      ],
      tools: [
        "ASP.NET Core", "Angular", "PostgreSQL", "EF Core", "JWT", "REST API", "Jenkins", "GitHub",
        "Stored Procedures", "Reactive Forms", "Webhooks"
      ],
      color: "border-l-accent"
    },
    {
      title: "Software Engineer",
      company: "Worksbot Applications",
      location: "Hyderabad, India",
      duration: "Jan 2021 – Jun 2021",
      achievements: [
        "Collaborated with sales, operations, and installation teams in Scrum ceremonies to refine acceptance criteria and ship bi-weekly increments with 95% on-time delivery",
        "Designed and normalized SQL Server schemas with primary/foreign keys, check constraints, and indexing strategy, improving complex query performance by 40%",
        "Authored parameterized T-SQL stored procedures, functions, and views to replace ad-hoc queries, cutting CPU utilization by 25%",
        "Tuned high-cost queries using sargable predicates, covering indexes, and OFFSET/FETCH pagination, reducing P95 response times by 35%",
        "Built .NET Forms (WinForms) data-entry and approval modules in C# with ADO.NET, reducing manual entry time by 45%",
        "Implemented robust on-form validation and server-side checks aligned with database constraints, lowering data-quality defects by 30%",
        "Added transactional integrity with BEGIN TRANSACTION and TRY…CATCH blocks, reducing partial-write incidents by 100%",
        "Automated schema and script versioning in Git with peer review and SSMS deployment checklists, reducing promotion errors by 90%"
      ],
      tools: [
        "SQL Server", "T-SQL", "C#", ".NET WinForms", "ADO.NET", "Git", "SSMS",
        "Stored Procedures", "Indexing", "Scrum"
      ],
      color: "border-l-primary"
    }
  ];

  const achievements = [
    {
      metric: "40%",
      description: "Reduction in analyst triage time through advanced filtering and UX improvements"
    },
    {
      metric: "25%",
      description: "Improvement in search relevance using vector databases and RAG"
    },
    {
      metric: "50%",
      description: "Reduction in quote turnaround time with automated workflows"
    },
    {
      metric: "30%",
      description: "Faster analyst reviews with AI summaries using Azure OpenAI and LangChain"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building high-performance APIs, full-stack applications, and AI-powered solutions across enterprise environments
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className={`glass-card hover-glow p-8 border-l-4 ${exp.color}`}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="space-y-2 mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground bg-secondary/50 px-3 py-1 rounded-lg">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">{exp.duration}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3 text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold mb-3">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool, toolIndex) => (
                    <Badge 
                      key={toolIndex} 
                      variant="outline" 
                      className="text-xs hover:scale-105 transition-transform duration-200"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Achievements Summary */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">
            Measurable <span className="gradient-text">Impact</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass-card hover-glow p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {achievement.metric}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
