import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, BookOpen, ShieldCheck, Search } from 'lucide-react';
import healthcareAi from '@/assets/healthcare-ai.jpg';
import smartstockAi from '@/assets/smartstock-ai.jpg';
import prophetForecast from '@/assets/prophet-forecast.jpg';
import britishAirwaysDashboard from '@/assets/british-airways-dashboard.jpg';
import projectBg from '@/assets/project-bg.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Hospital Length of Stay Prediction",
      description: "End-to-end ML project using RNN techniques for predicting hospital stays with NLP processing of comorbidities and healthcare chatbot integration.",
      image: healthcareAi,
      technologies: ["Python", "TensorFlow", "RNN", "NLP", "Healthcare AI"],
      github: "https://github.com/Adityalolla04/End-to-End-Project-on-Medical-Health-Care-Assisstant-with-Chatbot-",
      demo: "",
      category: "Healthcare AI",
      featured: true
    },
    {
      title: "SmartStock: AI Inventory Optimization",
      description: "AI solution for supply chain optimization featuring demand forecasting and automated defect detection using CNN computer vision models.",
      image: smartstockAi,
      technologies: ["Python", "CNN", "Computer Vision", "Machine Learning"],
      github: "https://github.com/Adityalolla04/-SmartStock-AI-powered-inventory-optimization-and-demand-forecasting",
      demo: "",
      category: "Business Intelligence",
      featured: true
    },
    {
      title: "Prophet Inventory Forecasting",
      description: "Scalable inventory forecasting solution deployed on GCP VertexAI using Prophet for accurate demand prediction in retail.",
      image: prophetForecast,
      technologies: ["Prophet", "Google Cloud", "VertexAI", "Time Series"],
      github: "https://github.com/Adityalolla04/Online-Retail-sales-Prediction-using-gcp-Vertex-AI",
      demo: "",
      category: "Cloud Computing",
      featured: true
    },
    {
      title: "British Airways Review Dashboard",
      description: "Tableau dashboard exploring passenger reviews (2016–2023) to reveal rating trends and aircraft-specific performance.",
      image: britishAirwaysDashboard,
      technologies: ["Tableau", "Data Visualization", "Analytics"],
      github: "https://github.com/Adityalolla04/British-Airways-Review-Dashboard",
      demo: "",
      category: "Data Visualization",
      featured: true
    },
    {
      title: "HR Employee Churn Prediction",
      description: "Analytics solution for predicting employee turnover and evaluating satisfaction levels using Scikit-learn.",
      image: projectBg,
      technologies: ["Python", "Scikit-learn", "Predictive Modeling"],
      github: "https://github.com/Adityalolla04/End-to-End-Project-on-HR-Churn-Data",
      demo: "",
      medium: "https://medium.com/@ladityasrivatsav0405/employee-satisfaction-and-churn-prediction-2fb2d3741b61",
      category: "People Analytics"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of end-to-end data science and engineering projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="glass-card-deep hover-glow-deep overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4">
                  {/* FIXED: Changed project.tags to project.category */}
                  <Badge variant="default">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 h-24 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="default" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  {project.medium && (
                    <Button variant="outline" asChild>
                      <a href={project.medium} target="_blank" rel="noopener noreferrer">
                        <BookOpen className="mr-2 h-4 w-4" /> Article
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold">More <span className="gradient-text">Projects</span></h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="glass-card hover-glow p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="text-xs">
                    <Badge variant="default">{project.category}</Badge>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </a>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 h-20 overflow-hidden">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;