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
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "SQL", "R", "JavaScript", "Scala"],
      color: "text-primary"
    },
    {
      title: "Big Data & Databases",
      icon: Database,
      skills: ["Apache Spark", "Hadoop", "MongoDB", "PostgreSQL", "MySQL", "Redis", "Cassandra"],
      color: "text-accent"
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS", "Google Cloud Platform", "Microsoft Azure", "Snowflake", "BigQuery"],
      color: "text-primary"
    },
    {
      title: "Data Science & ML",
      icon: Brain,
      skills: ["TensorFlow", "Scikit-learn", "XGBoost", "Random Forest", "Pandas", "NumPy"],
      color: "text-accent"
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "D3.js"],
      color: "text-primary"
    },
    {
      title: "ETL & Data Engineering",
      icon: Server,
      skills: ["Apache Airflow", "Kafka", "ETL Pipelines", "Data Warehousing", "Data Governance"],
      color: "text-accent"
    },
    {
      title: "Development Tools",
      icon: Wrench,
      skills: ["Docker", "Kubernetes", "Git", "Jenkins", "Terraform", "Linux"],
      color: "text-primary"
    },
    {
      title: "Analytics & BI",
      icon: Cpu,
      skills: ["Predictive Analytics", "Statistical Analysis", "A/B Testing", "Business Intelligence"],
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
            A comprehensive toolkit for modern data engineering and data science challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="glass-card hover-glow p-6 group cursor-pointer"
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
                      className="hover:bg-primary/20 hover:text-primary transition-colors duration-200 cursor-pointer"
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
                Expertise in building robust, scalable data pipelines with 40% efficiency improvements
              </p>
            </Card>

            <Card className="glass-card hover-glow p-6 text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Machine Learning</h4>
              <p className="text-sm text-muted-foreground">
                Advanced ML model development with proven track record of 18-20% performance improvements
              </p>
            </Card>

            <Card className="glass-card hover-glow p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Cloud Architecture</h4>
              <p className="text-sm text-muted-foreground">
                Multi-cloud expertise with 30% improvement in scalability and reliability
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;