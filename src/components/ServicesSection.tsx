import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mail, CheckCircle } from 'lucide-react';
import data from '@/data/data.json';
import { getIconComponent } from '@/lib/icons';
import { Button } from '@/components/ui/button';

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-16 md:py-20 relative" aria-label="Services">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="font-mono text-primary text-xl mr-2">04.</span>
              Services
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Fixed-scope or ongoing work, based on systems I have already built. Pricing is project-specific: contact me for a quote.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {data.services.map((service, index) => {
              const Icon = getIconComponent(service.icon);
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-elevated p-6 flex flex-col hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground leading-snug">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{service.problem}</p>
                  <ul className="space-y-2 mb-4">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground mb-5">
                    Proven in:{' '}
                    {service.proof.map((p, i) => (
                      <span key={p.slug}>
                        {i > 0 && ', '}
                        <Link to={`/project/${p.slug}`} className="text-primary hover:underline">{p.label}</Link>
                      </span>
                    ))}
                  </p>
                  <div className="mt-auto">
                    <Button variant="heroOutline" size="sm" asChild>
                      <a href={`mailto:md.sojibmiya@gmail.com?subject=${encodeURIComponent('Quote request: ' + service.title)}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Contact for a quote
                      </a>
                    </Button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
