'use client'
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Server, 
  Brain, 
  Globe, 
  Wrench,
  Coffee,
  FileCode,
  Layers,
  Zap
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  category: string;
}

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: Skill[];
}

export function SkillsSection() {
  const [visibleSkills, setVisibleSkills] = useState<Set<number>>(new Set());

  const skillCategories: SkillCategory[] = [
    {
      name: "Backend Development",
      icon: Server,
      skills: [
        { name: "Spring Boot", level: 90, icon: Coffee, category: "backend" },
        { name: "Flask", level: 85, icon: FileCode, category: "backend" },
        { name: "PHP", level: 80, icon: Code2, category: "backend" },
        { name: "Node.js", level: 75, icon: Zap, category: "backend" }
      ]
    },
    {
      name: "Frontend Development", 
      icon: Globe,
      skills: [
        { name: "React", level: 90, icon: Layers, category: "frontend" },
        { name: "JavaScript", level: 88, icon: Code2, category: "frontend" },
        { name: "TypeScript", level: 80, icon: FileCode, category: "frontend" },
        { name: "HTML/CSS", level: 85, icon: Globe, category: "frontend" }
      ]
    },
    {
      name: "Database & Data",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85, icon: Database, category: "database" },
        { name: "PostgreSQL", level: 80, icon: Database, category: "database" },
        { name: "MongoDB", level: 75, icon: Database, category: "database" },
        { name: "SQLite", level: 85, icon: Database, category: "database" }
      ]
    },
    {
      name: "Machine Learning",
      icon: Brain,
      skills: [
        { name: "Python", level: 90, icon: Brain, category: "ml" },
        { name: "Scikit-learn", level: 85, icon: Brain, category: "ml" },
        { name: "Pandas", level: 88, icon: Brain, category: "ml" },
        { name: "TensorFlow", level: 70, icon: Brain, category: "ml" }
      ]
    },
    {
      name: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git", level: 90, icon: Wrench, category: "tools" },
        { name: "Docker", level: 75, icon: Wrench, category: "tools" },
        { name: "Linux", level: 80, icon: Wrench, category: "tools" },
        { name: "REST APIs", level: 88, icon: Wrench, category: "tools" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = parseInt(entry.target.getAttribute('data-skill-index') || '0');
            setTimeout(() => {
              setVisibleSkills(prev => new Set(prev).add(skillIndex));
            }, skillIndex * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = document.querySelectorAll('[data-skill-index]');
    skillElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My expertise across different technologies and frameworks
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={categoryIndex} 
                className="hover-elevate transition-all duration-300 animate__animated animate__slideInUp border-card-border"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
                data-testid={`card-skills-${categoryIndex}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const globalSkillIndex = categoryIndex * 10 + skillIndex;
                    const isVisible = visibleSkills.has(globalSkillIndex);
                    const SkillIcon = skill.icon;
                    
                    return (
                      <div 
                        key={skillIndex} 
                        className="space-y-2"
                        data-skill-index={globalSkillIndex}
                        data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <SkillIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </div>
                        <Progress 
                          value={isVisible ? skill.level : 0} 
                          className="h-2 transition-all duration-1000 ease-out"
                        />
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}