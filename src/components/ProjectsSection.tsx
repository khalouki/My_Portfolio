'use client'
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  features: string[];
}

export function ProjectsSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects: Project[] = [
    {
      name: "React_Flask_E-commerce_website",
      description: "A full-stack e-commerce website built with React and Flask, featuring user authentication, product management, shopping cart functionality, and secure payment processing.",
      technologies: ["React", "Flask", "Python", "SQLAlchemy", "JWT", "Stripe API"],
      githubUrl: "https://github.com/abdelkhalakessaid/React_Flask_E-commerce_website",
      features: ["User Authentication", "Product Catalog", "Shopping Cart", "Payment Integration", "Admin Dashboard"]
    },
    {
      name: "Python-Faculty-Schedule-App",
      description: "Python application designed to manage faculty schedules efficiently, allowing administrators to create, update, and track academic timetables with conflict detection.",
      technologies: ["Python", "Tkinter", "SQLite", "Pandas", "DateTime"],
      githubUrl: "https://github.com/abdelkhalakessaid/Python-Faculty-Schedule-App",
      features: ["Schedule Management", "Conflict Detection", "Faculty Assignment", "Time Tracking", "Export Functionality"]
    },
    {
      name: "OCP_STAGE",
      description: "Application developed during internship for managing equipment visits and maintenance schedules. Streamlines the process of tracking equipment status and scheduling inspections.",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
      githubUrl: "https://github.com/abdelkhalakessaid/OCP_STAGE",
      features: ["Equipment Tracking", "Visit Scheduling", "Maintenance Records", "Reporting System", "User Management"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-card-index') || '0');
            setVisibleCards(prev => new Set(prev).add(cardIndex));
          }
        });
      },
      { threshold: 0.2 }
    );

    // Ensure all refs are available before observing
    const currentRefs = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    currentRefs.forEach(ref => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
      // Clear refs on unmount to prevent stale references
      cardRefs.current = [];
    };
  }, []); // Run once on mount, as projects is constant

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development work and technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const isVisible = visibleCards.has(index);
            return (
              <Card
                key={index}
                ref={el => { cardRefs.current[index] = el; }}
                data-card-index={index}
                className={`hover-elevate transition-all duration-300 h-full flex flex-col border-card-border ${
                  isVisible ? 'animate__animated animate__zoomIn' : 'opacity-0'
                }`}
                style={{ animationDelay: isVisible ? `${index * 200}ms` : '0ms' }}
                data-testid={`card-project-${index}`}
              >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-3 font-mono">
                  {project.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      data-testid={`button-github-${index}`}
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => console.log(`View project: ${project.name}`)}
                      data-testid={`button-demo-${index}`}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
