import { Server, Database, Cloud, Layout, Bot, Settings, Layers, Zap, Shield, Brain, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Server,
  Database,
  Cloud,
  Layout,
  Bot,
  Settings,
  Layers,
  Zap,
  Shield,
  Brain,
};

export function getIconComponent(name: string): LucideIcon {
  return iconMap[name] || Server;
}
