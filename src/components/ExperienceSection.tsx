import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';
import data from '@/data/data.json';

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-16 md:py-20 relative" aria-label="Professional experience as a Senior .NET Developer">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="font-mono text-primary text-xl mr-2">04.</span>
              Professional Experience
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {data.experience.map((exp, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-12 md:pl-16"
                >
                  <div className="absolute left-0 md:left-2 top-1 w-8 h-8 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>

                  <div className="card-elevated p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-mono text-sm">{exp.company}</p>
                      </div>
                      <span className="text-muted-foreground text-sm font-mono mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3 text-sm">
                          <span className="text-primary mt-1.5 text-xs">▹</span>
                          <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-muted-foreground text-sm mt-8 italic pl-12 md:pl-16"
          >
            Full career history available in CV or upon request.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
