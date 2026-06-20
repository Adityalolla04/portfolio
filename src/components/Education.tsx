import { Card } from '@/components/ui/card';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Education = () => {
    const certifications = [
      {
              name: "GCP Professional ML Engineer",
              issuer: "Google Cloud",
              color: "bg-blue-50 text-blue-700 border-blue-200"
      },
      {
              name: "AWS Data Engineer Associate",
              issuer: "Amazon Web Services",
              color: "bg-orange-50 text-orange-700 border-orange-200"
      },
      {
              name: "Claude Code in Action",
              issuer: "Anthropic",
              color: "bg-purple-50 text-purple-700 border-purple-200"
      },
      {
              name: "Claude Web API",
              issuer: "Anthropic",
              color: "bg-purple-50 text-purple-700 border-purple-200"
      },
      {
              name: "Model Context Protocol (MCP)",
              issuer: "Anthropic",
              color: "bg-purple-50 text-purple-700 border-purple-200"
      },
      {
              name: "Advanced Topics in MCP",
              issuer: "Anthropic",
              color: "bg-purple-50 text-purple-700 border-purple-200"
      },
      {
              name: "AI-Powered Applications in .NET",
              issuer: "Microsoft",
              color: "bg-sky-50 text-sky-700 border-sky-200"
      },
      {
              name: "Oracle Cloud Certified LLM Professional",
              issuer: "Oracle",
              color: "bg-red-50 text-red-700 border-red-200"
      },
      {
              name: "Machine Learning Specialization",
              issuer: "Stanford Online",
              color: "bg-green-50 text-green-700 border-green-200"
      }
        ];

    return (
          <section id="education" className="section-padding bg-slate-50">
                <div className="max-w-5xl mx-auto">
                  {/* Section Header */}
                        <div className="text-center mb-16">
                                  <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                                              Education &amp; <span className="gradient-text">Certifications</span>span>
                                  </h2>h2>
                                  <p className="text-xl text-muted-foreground">Academic qualifications and industry-recognized professional certifications.</p>p>
                                  <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
                        </div>div>
                
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                          {/* Education Card */}
                                  <Card className="glass-card hover-glow p-6">
                                              <div className="flex items-center gap-4 mb-6">
                                                            <div className="skill-icon-container">
                                                                            <GraduationCap className="w-8 h-8 text-white" />
                                                            </div>div>
                                                            <div>
                                                                            <h3 className="text-xl font-bold">Academic Qualifications</h3>h3>
                                                                            <p className="text-muted-foreground text-sm">Formal Education</p>p>
                                                            </div>div>
                                              </div>div>
                                              <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                                                            <div>
                                                                            <p className="font-semibold text-foreground">Master of Science in Data Science</p>p>
                                                                            <p className="text-sm text-muted-foreground">SUNY University at Buffalo</p>p>
                                                                            <p className="text-xs text-muted-foreground mt-1">January 2024 – May 2025 | Buffalo, NY</p>p>
                                                            </div>div>
                                                            <div>
                                                                            <p className="font-semibold text-foreground">Bachelor of Technology, Mechanical Engineering</p>p>
                                                                            <p className="text-sm text-muted-foreground">SRM Institute of Science and Technology</p>p>
                                                                            <p className="text-xs text-muted-foreground mt-1">June 2017 – June 2021 | India</p>p>
                                                            </div>div>
                                              </div>div>
                                  </Card>Card>
                        
                          {/* Certifications Card */}
                                  <Card className="glass-card hover-glow p-6">
                                              <div className="flex items-center gap-4 mb-6">
                                                            <div className="skill-icon-container">
                                                                            <Award className="w-8 h-8 text-white" />
                                                            </div>div>
                                                            <div>
                                                                            <h3 className="text-xl font-bold">Industry Certifications</h3>h3>
                                                                            <p className="text-muted-foreground text-sm">Professional Credentials</p>p>
                                                            </div>div>
                                              </div>div>
                                              <div className="flex flex-wrap gap-2">
                                                {certifications.map((cert) => (
                            <span
                                                key={cert.name}
                                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${cert.color} transition-all duration-200 hover:shadow-sm`}
                                              >
                                              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 flex-shrink-0" />
                              {cert.name}
                            </span>span>
                          ))}
                                              </div>div>
                                  </Card>Card>
                        </div>div>
                </div>div>
          </section>section>
        );
};

export default Education;</section>
