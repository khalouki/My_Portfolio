'use client'
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

interface FormationItem {
  degree: string;
  field: string;
  institution: string;
  year: string;
  description: string;
}

export function FormationSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const formations: FormationItem[] = [
    {
      degree: "Master's Degree",
      field: "Data Science",
      institution: "University of Technology",
      year: "2023",
      description: "Advanced studies in machine learning, statistical analysis, and big data processing technologies."
    },
    {
      degree: "Bachelor's Degree (License)",
      field: "Computer Science",
      institution: "University of Technology",
      year: "2021",
      description: "Comprehensive studies in software engineering, algorithms, and computer systems fundamentals."
    },
    {
      degree: "University Technology Diploma (DUT)",
      field: "Computer Engineering",
      institution: "Institute of Technology",
      year: "2019",
      description: "Technical foundation in programming, database management, and system administration."
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
  }, []); // Run once on mount, as formations is constant

  return (
    <section id="formation" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Academic Formation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My educational journey in computer science and data science
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {formations.map((formation, index) => {
            const isVisible = visibleCards.has(index);
            return (
              <Card
                key={index}
                ref={el => { cardRefs.current[index] = el; }}
                data-card-index={index}
                className={`hover-elevate transition-all duration-300 border-card-border ${
                  isVisible ? 'animate__animated animate__flipInY' : 'opacity-0'
                }`}
                style={{ animationDelay: isVisible ? `${index * 200}ms` : '0ms' }}
                data-testid={`card-formation-${index}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{formation.year}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{formation.degree}</CardTitle>
                  <p className="text-primary font-medium">{formation.field}</p>
                  <p className="text-sm text-muted-foreground">{formation.institution}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {formation.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
