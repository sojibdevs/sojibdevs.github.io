import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';
import data from '@/data/data.json';

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="reviews" className="py-16 md:py-20 relative" aria-label="Client reviews">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="font-mono text-primary text-xl mr-2">05.</span>
              Client Reviews
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Reviews from Upwork clients (Top Rated, 100% Job Success Score, 39 jobs, 1,764 hours). Quotes are verbatim, shortened where marked.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {data.testimonials.map((t, index) => (
              <motion.figure
                key={t.project}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-6 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-3 text-primary" aria-label={`${t.rating} out of 5 stars`}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-2 text-xs text-muted-foreground">{t.rating}</span>
                </div>
                <blockquote className="text-sm text-muted-foreground leading-relaxed italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto text-xs text-muted-foreground">
                  <span className="text-foreground font-medium">Upwork client</span> · {t.project} · {t.period}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
