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
        "Developed robust ETL pipelines using Python and SQL, improving data processing efficiency by 40% and enabling real-time analytics for business critical operations",
        "Designed and optimized machine learning models using TensorFlow and Scikit-learn to enhance data analysis capabilities, resulting in 18% improvement in forecasting accuracy", 
        "Led comprehensive data migration projects from on-premises to AWS and GCP cloud platforms, improving system scalability by 30% and reliability by 25%",
        "Implemented automated data workflows and monitoring systems using Apache Airflow, reducing manual processing efforts by 50% and eliminating human errors in critical data operations",
        "Collaborated with cross-functional teams including product managers, analysts, and engineers to deploy cloud-based solutions, streamlining data accessibility and functionality by 70%",
        "Enhanced data pipeline reliability through implementation of comprehensive data governance best practices, data quality checks, and automated alerting systems, reducing data errors by 20%",
        "Utilized advanced tools including Tableau, Power BI, and custom Python dashboards to create interactive visualizations that enabled stakeholders to make data-driven decisions with 60% faster insights delivery"
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
        "Developed advanced predictive models using TensorFlow and Scikit-learn for risk assessment and business forecasting, achieving 18% improvement in prediction accuracy and enabling proactive business strategy decisions",
        "Built sophisticated automated data pipelines for real-time data ingestion from multiple sources into BigQuery and Snowflake data warehouses, reducing manual data processing effort by 70% and ensuring data freshness within 15 minutes",
        "Implemented strategic database indexing and query optimization techniques for complex SQL operations, reducing report generation time by 50% and improving overall system performance for end-users",
        "Created comprehensive interactive dashboards and data visualizations using Power BI and Tableau, enabling efficient KPI monitoring and providing actionable insights to senior management for strategic decision-making",
        "Managed end-to-end data quality assurance processes including automated validation rules, root-cause analysis protocols, and real-time alerting systems to maintain data integrity across all business operations",
        "Enhanced predictive analytics capabilities through implementation of ensemble machine learning models and feature engineering techniques, improving business outcome predictions by 20% and reducing false positive rates"
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
        "Developed comprehensive ETL scripts using SQL and Python for automated data extraction, transformation, and loading processes, reducing data cleaning and preparation time by 40% across multiple business units",
        "Implemented advanced data standardization and cleaning methodologies using statistical imputation techniques and outlier detection algorithms, improving overall data accuracy by 30% and establishing data quality benchmarks",
        "Built user-friendly interactive dashboards and reports using Power BI and Tableau, enabling stakeholders to visualize complex data patterns and improving decision-making speed by 35% through real-time insights",
        "Optimized existing data pipelines through performance tuning and architectural improvements, enhancing data transformation and loading efficiency while reducing processing time for large-scale operations",
        "Applied various machine learning algorithms including regression, classification, and clustering techniques to analyze historical data trends and generate predictive insights from large, complex datasets",
        "Created detailed technical documentation and standard operating procedures for data workflows, ensuring smooth knowledge transfer and reducing onboarding time for new team members by 50%"
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