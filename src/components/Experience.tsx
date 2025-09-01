import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer",
      company: "Evoke Technologies",
      location: "Hyderabad, India",
      duration: "Apr 2022 – Dec 2023",
      achievements: [
        "Designed automated ingestion pipelines using Python and SQL Server, orchestrated via Airflow, reducing manual filing uploads and eliminating daily delays",
        "Built scalable ETL workflows with PySpark and AWS Glue to clean and unify legal filings, improving accuracy of parent-child case linkages by 60%",
        "Engineered real-time streaming pipelines using Apache Spark on AWS EMR, enabling customers to access law filings orders within minutes and reducing latency by 20%",
        "Integrated AWS S3 for raw document archiving with AWS Redshift for structured storage, ensuring seamless access to both unstructured filings and BI-ready datasets",
        "Automated serverless workflows with AWS Lambda and Terraform, streamlining deployments and ensuring environment consistency across dev, test, and production",
        "Deployed Spark jobs and ML models in Docker containers, scaled via Kubernetes, enabling seamless handling of month-end filing spikes without downtime",
        "Delivered fast, metadata-driven search APIs using Solr integrated with C# and ASP.Net Core API services, reducing search times from hours to seconds",
        "Developed predictive compliance models in Python and deployed them within Spark jobs, reducing compliance review errors by 12% before manual checks",
        "Built interactive dashboards with Tableau, Power BI, and Streamlit on AWS, empowering compliance officers to monitor daily filings and cutting reporting cycles by 40%",
        "Implemented monitoring and alerting through Splunk and AWS CloudWatch, proactively resolving infrastructure and ETL issues before impacting end users",
        "Coordinated Agile Scrum sprints with a 40-member team, performing 40+ peer code reviews via GitHub to ensure high-quality, production-ready code",
        "Tested and validated legal data APIs with Postman before integrating into ingestion pipelines, ensuring error-free ingestion from external partners",
        "Optimized compute workloads on AWS EC2 and EMR, balancing batch and streaming jobs for cost-efficiency while maintaining real-time responsiveness"
      ],
      tools: [
        "Python", "SQL Server", "Apache Airflow", "PySpark", "AWS Glue", "Apache Spark", 
        "AWS EMR", "AWS S3", "AWS Redshift", "AWS Lambda", "Terraform", "Docker", 
        "Kubernetes", "Solr", "C#", "ASP.Net Core", "Tableau", "Power BI", "Streamlit", 
        "Splunk", "AWS CloudWatch", "GitHub", "Postman", "AWS EC2"
      ],
      color: "border-l-primary"
    },
    {
      title: "Data and Automation Engineer", 
      company: "Kannai Storage Solutions",
      location: "Hyderabad, India",
      duration: "Aug 2021 – Mar 2022",
      achievements: [
        "Engineered real-time ingestion pipelines using Apache Kafka and Amazon S3 to capture IoT sensor data, CAD measurement files, and structured logs, enabling scalable storage and historical audit",
        "Designed dbt transformation layers on top of Snowflake and S3, automating validations for warehouse dimensions and material rules, reducing manual rework by 60%",
        "Built and orchestrated ETL workflows with Apache Airflow and AWS Lambda, coordinating simulation triggers and load tests to improve pipeline transparency and reduce failures",
        "Optimized Snowflake schemas with partitioning and clustering while integrating Apache Spark batch jobs, achieving faster analytics queries and efficient historical backfills",
        "Automated rack load simulations using AWS Lambda with Python and MATLAB outputs, integrated with Amazon SNS to send real-time anomaly alerts to operations teams",
        "Developed SQL workflows in PostgreSQL integrated with Airflow DAGs, streamlining order tracking, delivery scheduling, and installation status monitoring to prevent supply chain delays",
        "Implemented Apache Atlas with Great Expectations to enforce data lineage, governance, and validation checks, increasing trust and compliance across engineering and supply chain teams",
        "Built interactive Tableau dashboards powered by Snowflake and dbt models to track rack capacity, aisle utilization, and cost scenarios, driving a 70% boost in sales conversions",
        "Packaged and deployed Python automation scripts with Docker across Lambda and Airflow workers, ensuring reproducible deployments and reducing environment conflicts",
        "Automated large-scale transformations using Apache Spark and dbt before loading into Snowflake, improving efficiency for data backfills and recomputations across historical projects",
        "Applied Lean Six Sigma methodologies in combination with data pipelines (Airflow + Snowflake) to optimize procurement workflows, achieving a 15% reduction in material costs",
        "Documented architecture, workflows, and governance models in Confluence while integrating alerting via Amazon SNS, improving cross-team collaboration and operational reliability"
      ],
      tools: [
        "Apache Kafka", "Amazon S3", "dbt", "Snowflake", "Apache Airflow", "AWS Lambda", 
        "Apache Spark", "Python", "MATLAB", "Amazon SNS", "PostgreSQL", "Apache Atlas", 
        "Great Expectations", "Tableau", "Docker", "Lean Six Sigma", "Confluence"
      ],
      color: "border-l-accent"
    },
    {
      title: "SQL Developer",
      company: "Worksbot Applications",
      location: "Hyderabad, India", 
      duration: "Jan 2021 – Jun 2021",
      achievements: [
        "Designed and optimized SQL Server database schemas while implementing stored procedures and indexing strategies, improving reporting query performance by 40%",
        "Built SSIS-based ETL pipelines to automate ingestion of IoT sensor readings and Excel production logs, ensuring real-time updates to centralized SQL Server tables",
        "Integrated Tableau and Power BI dashboards with SQL Server views and window functions to deliver instant visibility into production throughput, downtime, and defect rates",
        "Developed SSRS reports and automated scheduling jobs to deliver weekly Defect Summary Reports to supervisors, ensuring compliance and timely decision-making",
        "Applied Lean Six Sigma principles with SQL performance tuning to reduce material waste by 15% and accelerate daily KPI report generation for engineers",
        "Streamlined defect tracking by combining SQL triggers, SSIS workflows, and stored procedures, eliminating manual data entry errors and ensuring high data accuracy",
        "Version-controlled database scripts, schema changes, and ETL jobs in Git, enabling rollback and collaboration during iterative improvements",
        "Enforced data governance by applying SQL validation rules and standardized naming conventions across SSIS pipelines and reporting layers, improving data consistency",
        "Partnered with production engineers to design Power BI dashboards powered by optimized SQL joins and indexing, providing real-time visibility into defect trends",
        "Automated daily performance reports through SSRS integrated with SQL stored procedures, reducing manual reporting effort and ensuring timely audit readiness"
      ],
      tools: [
        "SQL Server", "SSIS", "Tableau", "Power BI", "SSRS", "Git", "Lean Six Sigma",
        "Stored Procedures", "SQL Triggers", "Indexing", "Window Functions"
      ],
      color: "border-l-primary"
    }
  ];

  const achievements = [
    {
      metric: "40%",
      description: "Reduction in reporting cycle time for real-time legal filings platform"
    },
    {
      metric: "60%", 
      description: "Improvement in data accuracy through automated ETL workflows"
    },
    {
      metric: "50%",
      description: "Improvement in warehouse operational reliability with real-time monitoring"
    },
    {
      metric: "12%",
      description: "Reduction in compliance errors through predictive models"
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
            Hands-on experience designing and optimizing large-scale data pipelines, real-time streaming solutions, and cloud-native architectures
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