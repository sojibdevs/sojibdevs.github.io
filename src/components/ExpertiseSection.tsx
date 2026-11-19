import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import data from '@/data/data.json';
import { getIconComponent } from '@/lib/icons';

export function ExpertiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="expertise" className="py-24 relative" aria-label="Core expertise and technical skills">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="font-mono text-primary text-xl mr-2">02.</span>
              Core Expertise
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.expertise.map((category, index) => {
              const IconComponent = getIconComponent(category.icon);
              return (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-elevated p-6 hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1 text-xs">▹</span>
                        <span className="text-muted-foreground">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
