import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer",
      company: "Evoke Technologies",
      location: "Hyderabad, India",
      duration: "Apr 2022 - Dec 2023",
      achievements: [
        "Developed ETL pipelines using Python and SQL, improving data processing efficiency by 40%",
        "Optimized machine learning models to enhance data analysis and forecasting capabilities", 
        "Led data migration projects to AWS and GCP, improving scalability and reliability by 30%",
        "Implemented automated data workflows, reducing manual processing efforts by 50%",
        "Collaborated with cross-functional teams to deploy cloud-based solutions, streamlining functionality by 70%",
        "Enhanced data pipeline reliability through governance best practices, reducing errors by 20%"
      ],
      tools: ["Python", "SQL", "AWS", "GCP", "Tableau", "Power BI", "Machine Learning", "ETL", "Scrum"],
      color: "border-primary/50 bg-primary/5"
    },
    {
      title: "Data Analyst",
      company: "Certiview IT & Management Solutions Pvt Ltd",
      location: "Hyderabad, India", 
      duration: "April 2021 - Mar 2022",
      achievements: [
        "Developed predictive models using TensorFlow and Scikit-learn, improving risk forecasts by 18%",
        "Built automated data pipelines for real-time ingestion into BigQuery and Snowflake, reducing manual effort by 70%",
        "Implemented indexing strategies optimizing SQL queries, reducing report generation time by 50%",
        "Created interactive dashboards using Power BI and Tableau for efficient KPI analysis",
        "Managed data quality assurance with root-cause analysis and alerting systems",
        "Enhanced data accuracy and forecast capabilities through ML models, improving outcomes by 20%"
      ],
      tools: ["SQL", "Python", "Power BI", "Tableau", "Google BigQuery", "Snowflake", "TensorFlow", "Scikit-learn"],
      color: "border-accent/50 bg-accent/5"
    },
    {
      title: "Data Analyst Intern",
      company: "Certiview IT & Management Solutions Pvt Ltd",
      location: "Hyderabad, India",
      duration: "Jul 2020 - March 2021", 
      achievements: [
        "Developed ETL scripts in SQL and Python, reducing data cleaning time by 40%",
        "Standardized and cleaned data, improving accuracy by 30% through imputation techniques",
        "Built interactive dashboards using Power BI and Tableau, improving decision-making speed by 35%",
        "Optimized data pipelines for enhanced transformation and loading efficiency",
        "Applied ML algorithms to analyze and predict trends from large datasets",
        "Documented processes and workflows for smooth team onboarding"
      ],
      tools: ["SQL", "Python", "Power BI", "Tableau", "Pandas", "Scikit-learn"],
      color: "border-primary/50 bg-primary/5"
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
            A journey of continuous growth in data engineering and analytics
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className={`glass-card hover-glow p-8 ${exp.color} animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <TrendingUp className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <Badge 
                        key={tool} 
                        variant="secondary"
                        className="hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card className="glass-card hover-glow p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Years of Experience</div>
          </Card>
          <Card className="glass-card hover-glow p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">70%</div>
            <div className="text-muted-foreground">Average Efficiency Improvement</div>
          </Card>
          <Card className="glass-card hover-glow p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-muted-foreground">Major Cloud Platforms</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;