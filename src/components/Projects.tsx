import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { badgeVariants } from '@/components/ui/badge';
import { ExternalLink, Github, BookOpen, Badge } from 'lucide-react';
import healthcareAi from '@/assets/healthcare-ai.jpg';
import smartstockAi from '@/assets/smartstock-ai.jpg';
import prophetForecast from '@/assets/prophet-forecast.jpg';
import britishAirwaysDashboard from '@/assets/british-airways-dashboard.jpg';
import projectBg from '@/assets/project-bg.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Hospital Length of Stay Prediction & Healthcare Assistant Chatbot",
      description: "End-to-end ML project using RNN techniques for predicting hospital length of stay with NLP processing of comorbidities and intelligent healthcare chatbot integration.",
      image: healthcareAi,
      technologies: ["Python", "TensorFlow", "RNN", "NLP", "Healthcare AI", "Deep Learning"],
      github: "https://github.com/Adityalolla04/End-to-End-Project-on-Medical-Health-Care-Assisstant-with-Chatbot-",
      demo: "",
      category: "Healthcare AI",
      featured: true
    },
    {
      title: "SmartStock: AI-Powered Inventory Optimization",
      description: "Comprehensive AI solution for supply chain optimization featuring demand forecasting, dynamic inventory management, and automated defect detection using CNN computer vision models.",
      image: smartstockAi,
      technologies: ["Python", "CNN", "Computer Vision", "Supply Chain", "Defect Detection", "Machine Learning"],
      github: "https://github.com/Adityalolla04/-SmartStock-AI-powered-inventory-optimization-and-demand-forecasting",
      demo: "",
      category: "Business Intelligence",
      featured: true
    },
    {
      title: "Prophet Inventory Forecasting on GCP VertexAI",
      description: "Scalable inventory forecasting solution deployed on Google Cloud Platform using Prophet library for accurate demand prediction in retail environments.",
      image: prophetForecast,
      technologies: ["Prophet", "Google Cloud", "VertexAI", "Time Series", "Retail Analytics"],
      github: "https://github.com/Adityalolla04/Online-Retail-sales-Prediction-using-gcp-Vertex-AI",
      demo: "",
      category: "Cloud Computing",
      featured: true
    },
    {
      title: "British Airways Review Dashboard",
      description: "A comprehensive Tableau dashboard exploring British Airways passenger reviews (Mar 2016 – Oct 2023) to reveal rating trends, geographic sentiment, and aircraft-specific performance with interactive filtering capabilities.",
      image: britishAirwaysDashboard,
      technologies: ["Tableau", "Data Visualization", "Business Intelligence", "Customer Analytics", "Dashboard Design"],
      github: "https://github.com/Adityalolla04/British-Airways-Review-Dashboard",
      demo: "",
      category: "Data Visualization",
      featured: true
    },
    {
      title: "HR Employee Churn Prediction",
      description: "Comprehensive analytics solution for predicting employee turnover and evaluating satisfaction levels using advanced machine learning techniques.",
      image: projectBg,
      technologies: ["Python", "Scikit-learn", "HR Analytics", "Predictive Modeling", "Data Visualization"],
      github: "https://github.com/Adityalolla04/End-to-End-Project-on-HR-Churn-Data",
      demo: "",
      medium: "https://medium.com/@ladityasrivatsav0405/employee-satisfaction-and-churn-prediction-2fb2d3741b61",
      category: "People Analytics"
    },
    {
      title: "Netflix Release Date Optimization",
      description: "Data analytics project optimizing content release timing for maximum viewership using historical data and engagement patterns analysis.",
      image: projectBg,
      technologies: ["Python", "Data Analytics", "Time Series", "Media Analytics", "Optimization"],
      github: "https://github.com/Adityalolla04/Netflix-Release-Date-Optimization-for-Maximum-Viewership",
      demo: "",
      medium: "https://medium.com/@ladityasrivatsav0405/optimizing-netflix-release-dates-with-machine-learning-e1f4962d56eb",
      category: "Media Analytics"
    },
    {
      title: "Breast Cancer Prediction using ML",
      description: "High-accuracy medical diagnosis system using logistic regression for breast cancer prediction with 96.5% accuracy on Wisconsin dataset.",
      image: projectBg,
      technologies: ["Python", "Logistic Regression", "Medical ML", "Scikit-learn", "Healthcare"],
      github: "https://github.com/Adityalolla04/Breast-Cancer-Prediction-Using-Machine-Learning",
      demo: "",
      medium: "https://medium.com/@ladityasrivatsav0405/predicting-breast-cancer-with-96-5-accuracy-using-logistic-regression-05357127d090",
      category: "Healthcare ML"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of end-to-end data science and engineering projects solving real-world problems
          </p>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="glass-card-deep hover-glow-deep overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-sm">{project.category}</Badge>
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
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="default">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                  {project.medium && (
                    <a href={project.medium} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Article
                      </Button>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold">More <span className="gradient-text">Projects</span></h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="glass-card hover-glow p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </a>
                    {project.medium && (
                      <a href={project.medium} target="_blank" rel="noopener noreferrer">
                        <BookOpen className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 h-20 overflow-hidden">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA to GitHub */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-4">Explore More Projects</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover my complete portfolio on GitHub with detailed documentation and implementation guides.
          </p>
          <a href="https://github.com/Adityalolla04" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="default">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
