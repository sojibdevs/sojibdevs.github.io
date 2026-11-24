import { CV_URL, CV_FILE, trackCvDownload } from '@/lib/analytics';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" aria-label="Introduction">
      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-primary text-sm md:text-base mb-4"
          >
            Hello, I'm Md. Sojib Miya
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
          >
            Senior .NET Developer
            <br />
            <span className="text-gradient">Backend, Data & Enterprise Systems</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6 font-light"
          >
            Building reliable .NET back ends for fintech and enterprise teams
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground/80 mb-8 max-w-2xl leading-relaxed"
          >
            12+ years building C# back ends on SQL Server: a credit-eligibility
            platform in production, brokerage billing, event-driven data
            pipelines, admin back offices and enterprise ERP systems. Strong on bulk and idempotent processing,
            multi-tenant APIs, access control and clean architecture.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button variant="hero" size="lg" asChild>
              <a href={CV_URL} download={CV_FILE} onClick={() => trackCvDownload("hero")}>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Open to: contract and full-time roles · remote worldwide, US-overlap hours · open to relocation</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
