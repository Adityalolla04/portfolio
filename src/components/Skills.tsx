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
  Server
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      icon: Code2,
      skills: ["Python", "C#", "MATLAB"],
      color: "text-primary"
    },
    {
      title: "Data Engineering & ETL", 
      icon: Server,
      skills: [
        "Apache Airflow", "Prefect", "dbt", "PySpark", "Databricks (Delta Lake, Unity Catalog, Delta Live Tables)", 
        "AWS Glue", "SSIS", "Informatica", "CI/CD pipelines", "Spark Structured Streaming", "Kafka Connect"
      ],
      color: "text-accent"
    },
    {
      title: "API & Testing",
      icon: Wrench, 
      skills: [
        "ASP.NET Core", "Web API (REST/GraphQL)", "Swagger/OpenAPI", "Dependency Injection", 
        "Postman", "Unit/Integration Testing (xUnit/pytest)", "Data Contracts", "Solr"
      ],
      color: "text-primary"
    },
    {
      title: "Databases & Warehousing",
      icon: Database,
      skills: [
        "SQL Server", "PostgreSQL", "Snowflake (Snowpipe, Streams & Tasks, Time Travel)", 
        "Amazon Redshift (Spectrum, RA3)", "MongoDB", "Cassandra", "NoSQL"
      ],
      color: "text-accent"
    },
    {
      title: "Big Data & Streaming",
      icon: Cpu,
      skills: [
        "Apache Spark", "Apache Kafka (Schema Registry)", "AWS EMR", "Hadoop", 
        "Amazon Kinesis (Streams/Firehose)", "File/Message Formats"
      ],
      color: "text-primary"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        "AWS (S3, Lambda, Glue, Redshift, EMR, EC2, CloudWatch, SNS, Lake Formation, KMS, IAM/RBAC)", 
        "Docker", "Kubernetes", "Terraform", "Git", "GitHub Actions"
      ],
      color: "text-accent"
    },
    {
      title: "Data Visualization & BI",
      icon: BarChart3,
      skills: ["Tableau", "Power BI", "Streamlit", "SSRS"],
      color: "text-primary"
    },
    {
      title: "Data Governance & Monitoring",
      icon: Server,
      skills: [
        "Apache Atlas", "Great Expectations", "OpenLineage/Marquez", 
        "Prometheus", "Grafana", "Datadog", "Splunk"
      ],
      color: "text-accent"
    },
    {
      title: "ML & Analytics",
      icon: Brain,
      skills: ["Predictive Modeling", "CNN", "LSTM", "RNN", "Compliance Models"],
      color: "text-primary"
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
            Comprehensive expertise across the modern data engineering stack with hands-on experience in production environments
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
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">ETL Pipeline Development</h4>
              <p className="text-sm text-muted-foreground">
                Designed automated ingestion pipelines reducing manual processes and improving data accuracy by 60%
              </p>
            </Card>

            <Card className="glass-card hover-glow p-6 text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Machine Learning & Analytics</h4>
              <p className="text-sm text-muted-foreground">
                Built predictive compliance models and CNN-based defect detection systems with measurable impact
              </p>
            </Card>

            <Card className="glass-card hover-glow p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Cloud Architecture</h4>
              <p className="text-sm text-muted-foreground">
                Deployed scalable solutions on AWS with real-time streaming, achieving 40% reduction in reporting cycles
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;