import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import data from '@/data/data.json';
import { Badge } from '@/components/ui/badge';

const coreStack = [
  'C#', '.NET 8', 'ASP.NET Core', 'SQL Server', 'T-SQL', 'Dapper', 'EF Core',
  'RabbitMQ', 'SignalR', 'Hangfire', 'Blazor', 'Azure DevOps',
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-16 md:py-20 relative" aria-label="About">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="font-mono text-primary text-xl mr-2">01.</span>
              About Me
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am a <strong className="text-foreground font-medium">Senior .NET Developer</strong> based in Dhaka,
                with 12+ years of experience building business-critical back ends: fintech platforms for credit assessment and brokerage billing,
                event-driven sports-data pipelines, and enterprise ERP systems.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My core focus is <span className="text-primary">C# and SQL Server</span>: ingestion pipelines that load
                data in bulk and stay safe to re-run, multi-tenant ASP.NET Core APIs, RabbitMQ-driven workers,
                and legacy-to-modern migrations.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I like owning a system end to end: gathering requirements from the people who use it,
                designing the schema and architecture, writing the code, and supporting it afterwards.
                I have led without a formal title: mentoring four senior engineers, sharing knowledge across the team, and running sprint planning, task assignment and code review.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I work remotely with a US product team today and am open to remote contract or full-time roles,
                and to relocation for the right team.
              </p>

              <div className="pt-4">
                <p className="font-mono text-primary text-sm mb-3">Core stack</p>
                <div className="flex flex-wrap gap-2">
                  {coreStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50 text-secondary-foreground font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <aside className="relative">
              <div className="card-elevated p-6">
                <h3 className="font-mono text-primary text-sm mb-4">At a Glance</h3>
                <ul className="space-y-3 text-sm">
                  {data.atAGlance.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-primary mt-1">▹</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
