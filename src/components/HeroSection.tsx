"use client";

import { Button } from "@/components/ui/button";
import { Github, ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export function HeroSection() {
  const scrollToNextSection = () => {
    const element = document.getElementById("formation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background text-foreground transition-colors"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="relative animate__animated animate__zoomIn">
            <Player
              autoplay
              loop
              src="/user.json"
              style={{ height: "256px", width: "256px" }}
              className="rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              data-testid="lottie-profile"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent animate__animated animate__pulse animate__infinite animate__slower"></div>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-xl animate__animated animate__fadeIn animate__delay-1s"></div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate__animated animate__fadeInRight">
              Abdelkhalk Essaid
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed animate__animated animate__fadeInRight animate__delay-1s">
              Full Stack Developer | Backend (Spring Boot, Flask, PHP) | Frontend
              React | Machine Learning
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 animate__animated animate__fadeInUp animate__delay-2s">
              <Button
                size="lg"
                className="group animate__animated animate__bounceIn animate__delay-3s transition-colors"
                onClick={() =>
                  window.open("https://github.com/abdelkhalakessaid", "_blank")
                }
                data-testid="button-github"
              >
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span>View GitHub Profile</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToNextSection}
                data-testid="button-scroll-down"
                className="animate__animated animate__bounceIn animate__delay-4s transition-colors"
              >
                <span>Explore My Work</span>
                <ArrowDown className="ml-2 h-5 w-5 animate__animated animate__bounce animate__infinite animate__slower" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
}
