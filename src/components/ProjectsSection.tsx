import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import data from '@/data/data.json';
import { getIconComponent } from '@/lib/icons';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-20 bg-muted/30" aria-label="Selected enterprise projects and delivery outcomes">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-primary text-sm mb-3">// Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects I Built
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seven systems described by what they do and how they work. Client and
            employer names, code and screenshots are left out on purpose.
          </p>
        </motion.div>
      </div>

      {/* Project grid */}
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-6">
        {data.projects.map((project, index) => {
          const IconComponent = getIconComponent(project.icon);
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <Link
                to={`/project/${project.slug}`}
                className="block text-left card-elevated p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group h-full"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground leading-snug">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50 text-secondary-foreground font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground font-mono text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium group-hover:gap-2 transition-all">
                  View details <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
