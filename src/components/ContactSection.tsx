import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Globe, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'md.sojibmiya@gmail.com',
    href: 'mailto:md.sojibmiya@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/sojibm',
    href: 'https://www.linkedin.com/in/sojibm',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '/lisansojib',
    href: 'https://github.com/lisansojib',
  },
];

const engagementTypes = [
  'Remote contracts with flexible time-zone overlap',
  'Full-time roles, remote or with relocation',
  'Long-term or project-based engagements',
  'Fixed-scope services (admin portals, ETL, architecture reviews, SQL audits): contact for a quote',
];

const workStyle = [
  'End-to-end ownership of what I deliver',
  'Requirements gathered from the people who use the system',
  'Written, async-friendly communication',
  'Code reviews, tests and documentation',
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-16 md:py-20 relative" aria-label="Contact for .NET contract opportunities">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-mono text-primary text-sm mb-4">07. Let's Work Together</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Open to Senior .NET Roles
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Looking for a senior .NET developer for back-end, data or integration work?
            Send me a note about the project or role.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
            <div className="card-elevated p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Engagement Types
              </h3>
              <ul className="space-y-2">
                {engagementTypes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-elevated p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                How I Work
              </h3>
              <ul className="space-y-2">
                {workStyle.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -2 }}
                className="card-elevated px-6 py-4 flex items-center gap-3 hover:border-primary/50 transition-colors"
              >
                <link.icon className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">{link.label}</p>
                  <p className="text-sm text-foreground font-medium">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <Button variant="hero" size="lg" asChild>
            <a href="mailto:md.sojibmiya@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Start a Conversation
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
