import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/abdelkhalakessaid"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/abdelkhalk-essaid"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:abdelkhalk.essaid@email.com"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Name and description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Abdelkhalk Essaid
            </h3>
            <p className="text-muted-foreground max-w-md">
              Full Stack Developer passionate about creating innovative solutions 
              with modern technologies and machine learning.
            </p>
          </div>

          {/* Right side - Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(link.href, "_blank")}
                  className="hover-elevate"
                  data-testid={`footer-social-${link.label.toLowerCase()}`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Abdelkhalk Essaid. Made with{" "}
            <Heart className="h-4 w-4 text-red-500 fill-current" />{" "}
            in Morocco
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-foreground"
            data-testid="button-back-to-top"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
}