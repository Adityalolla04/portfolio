import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Community Dreams Foundations",
      location: "Florida - Remote",
      duration: "Aug 2025 – Present",
      logo: "🏢",
      achievements: [
        "Developed full-stack applications using C#, ASP.NET Core, Web API and React, improving system scalability for hundreds of users",
        "Reduced development cycle time by 20% through improved Agile workflows and code quality practices",
        "Implemented secure REST API endpoints and integrated third-party services, increasing feature adoption by 15%",
        "Optimized backend performance, reducing API response times by 30%"
      ],
      tools: ["C#", "ASP.NET Core", "React", "REST API", "Agile"]
    },
    {
      title: "Student Assistant",
      company: "University at Buffalo",
      location: "Buffalo, NY",
      duration: "Mar 2024 – May 2025",
      logo: "🎓",
      achievements: [
        "Built campus dining application with clock-in/clock-out functionality, improving operational efficiency by 20%",
        "Implemented cost-management features resulting in 15% reduction in food-processing expenses",
        "Designed Python backend services and intuitive UIs, increasing user satisfaction by 25%",
        "Performed data analysis on metrics to reduce operational waste by 10%"
      ],
      tools: ["Python", "Data Analysis", "UI/UX", "Backend Services"]
    },
    {
      title: "Software Engineer",
      company: "Evoke Technologies – CSC Global",
      location: "Hyderabad, India",
      duration: "Apr 2022 – Dec 2023",
      logo: "💼",
      achievements: [
        "Built API workflows with Python FastAPI and C# Web API, reducing analyst triage time by 40%",
        "Designed search layer using pgvector/FAISS, improving relevance by 25%",
        "Resolved 40+ production defects, lowering repeat incidents by 30%",
        "Implemented JWT auth, CORS, TLS hardening cutting authentication errors by 30%",
        "Added AI summaries with Azure OpenAI and LangChain, speeding analyst reviews by 30%"
      ],
      tools: ["Python", "FastAPI", "C#", "ASP.NET Core", "Angular", "PostgreSQL", "Azure", "LangChain"]
    },
    {
      title: ".NET Developer",
      company: "Kannai Storage Solutions",
      location: "Hyderabad, India",
      duration: "Aug 2021 – Mar 2022",
      logo: "🏭",
      achievements: [
        "Designed quotation module with ASP.NET Core and Angular, cutting turnaround time by 50%",
        "Built order tracking APIs with pagination, reducing page load times by 45%",
        "Engineered responsive Angular UI increasing form completion rates by 35%",
        "Automated CI/CD with Jenkins, cutting deployment time from hours to 15 minutes"
      ],
      tools: ["ASP.NET Core", "Angular", "PostgreSQL", "EF Core", "Jenkins"]
    },
    {
      title: "Software Engineer",
      company: "Worksbot Applications",
      location: "Hyderabad, India",
      duration: "Jan 2021 – Jun 2021",
      logo: "⚙️",
      achievements: [
        "Designed SQL Server schemas improving query performance by 40%",
        "Authored T-SQL stored procedures cutting CPU utilization by 25%",
        "Built .NET WinForms modules reducing manual entry time by 45%",
        "Automated schema versioning in Git reducing promotion errors by 90%"
      ],
      tools: ["SQL Server", "T-SQL", "C#", ".NET WinForms", "Git"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            My professional journey in software development
          </p>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 rounded-full" style={{ background: 'var(--gradient-primary)' }} />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background z-10 animate-pulse-glow" />

                {/* Empty Space for alignment */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="glass-card hover-glow p-6">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl" style={{ background: 'var(--gradient-primary)' }}>
                        {exp.logo}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-primary">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">▹</span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool) => (
                        <Badge 
                          key={tool}
                          variant="outline"
                          className="bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Highlight */}
        <div className="mt-20">
          <Card className="glass-card p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">🏆 Key Achievement</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Launched Solr-backed search integrated with ASP.NET Core Web APIs and delivered the{' '}
              <span className="text-primary font-semibold">Termination Filings Filter</span> end-to-end from Database, 
              API to UI, taking UCC lookup latency from <span className="text-accent font-bold">hours to seconds</span> and 
              reducing investigator triage time by <span className="text-accent font-bold">40%</span> across millions of filings.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
