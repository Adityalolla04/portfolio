import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, BookOpen } from 'lucide-react';
import projectBg from '@/assets/project-bg.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Hospital Length of Stay Prediction & Healthcare Assistant Chatbot",
      description: "End-to-end ML project using RNN techniques for predicting hospital length of stay with NLP processing of comorbidities and intelligent healthcare chatbot integration.",
      image: projectBg,
      technologies: ["Python", "TensorFlow", "RNN", "NLP", "Healthcare AI", "Deep Learning"],
      github: "https://github.com/Adityalolla04/End-to-End-Project-on-Medical-Health-Care-Assisstant-with-Chatbot-",
      demo: "",
      category: "Healthcare AI",
      featured: true
    },
    {
      title: "SmartStock: AI-Powered Inventory Optimization",
      description: "Comprehensive AI solution for supply chain optimization featuring demand forecasting, dynamic inventory management, and automated defect detection using computer vision.",
      image: projectBg,
      technologies: ["Python", "Machine Learning", "Computer Vision", "Supply Chain", "Forecasting"],
      github: "https://github.com/Adityalolla04/-SmartStock-AI-powered-inventory-optimization-and-demand-forecasting",
      demo: "",
      medium: "https://medium.com/@ladityasrivatsav0405/smartstock-ai-powered-inventory-optimization-and-demand-forecasting-c9f0b284bac6",
      category: "Business Intelligence",
      featured: true
    },
    {
      title: "Prophet Inventory Forecasting on GCP VertexAI",
      description: "Scalable inventory forecasting solution deployed on Google Cloud Platform using Prophet library for accurate demand prediction in retail environments.",
      image: projectBg,
      technologies: ["Prophet", "Google Cloud", "VertexAI", "Time Series", "Retail Analytics"],
      github: "https://github.com/Adityalolla04/Online-Retail-sales-Prediction-using-gcp-Vertex-AI",
      demo: "",
      medium: "https://medium.com/@ladityasrivatsav0405/prophet-inventory-forecasting-model-deployment-on-google-cloud-platform-f73b6ea830ee",
      category: "Cloud Computing",
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
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of end-to-end data science and engineering projects solving real-world problems
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card hover-glow group overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-primary/20 text-primary border-primary/30">
                  {project.category}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.medium && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.medium} target="_blank" rel="noopener noreferrer">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Article
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index}
                className="glass-card hover-glow p-6 group"
                style={{ animationDelay: `${(index + featuredProjects.length) * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    {project.medium && (
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.medium} target="_blank" rel="noopener noreferrer">
                          <BookOpen className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA to GitHub */}
        <Card className="glass-card p-8 text-center bg-gradient-to-r from-primary/10 to-accent/10">
          <h3 className="text-2xl font-bold mb-4">Explore More Projects</h3>
          <p className="text-muted-foreground mb-6">
            Discover my complete portfolio on GitHub with detailed documentation and implementation guides
          </p>
          <Button size="lg" asChild className="hover-glow">
            <a href="https://github.com/Adityalolla04" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
