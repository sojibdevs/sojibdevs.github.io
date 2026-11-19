import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import data from '@/data/data.json';
import { getIconComponent } from '@/lib/icons';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = data.projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <Button asChild variant="outline">
            <Link to="/#projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = getIconComponent(project.icon);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <IconComponent size={28} />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h1>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg mb-8">{project.description}</p>

            <div className="space-y-8">
              {/* Role */}
              <div className="card-elevated p-5">
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">My Role</p>
                <p className="text-sm text-foreground/90">{project.role}</p>
              </div>

              {/* Technologies */}
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50 text-secondary-foreground font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Challenges Solved</p>
                <ul className="space-y-2">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1 text-xs">▹</span>
                      <span className="text-muted-foreground">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">What I Delivered</p>
                <ul className="space-y-2">
                  {project.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1 text-xs">✓</span>
                      <span className="text-foreground/90 font-medium">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
