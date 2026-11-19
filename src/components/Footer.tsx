import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} Md. Sojib Miya · Senior .NET Developer
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/lisansojib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sojibm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:md.sojibmiya@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Send email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
