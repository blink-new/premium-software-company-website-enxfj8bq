import { Card } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  BarChart3,
  Lock,
  Crown,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Premium Access",
    description: "Unlock exclusive content, advanced tutorials, and insider resources available only to members.",
    tier: "premium"
  },
  {
    icon: Code,
    title: "Advanced Codebase",
    description: "Access to production-ready code templates, enterprise patterns, and best practices.",
    tier: "all"
  },
  {
    icon: Database,
    title: "Enterprise Data Tools",
    description: "Sophisticated analytics, reporting, and data visualization tools for enterprise needs.",
    tier: "enterprise"
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Bank-grade security, compliance frameworks, and advanced threat protection.",
    tier: "all"
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Optimized for speed with CDN delivery, caching, and global edge network.",
    tier: "premium"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Advanced team features, role management, and collaborative workspaces.",
    tier: "enterprise"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights, custom dashboards, and predictive analytics for data-driven decisions.",
    tier: "premium"
  },
  {
    icon: Lock,
    title: "Gated Content",
    description: "Tiered access system ensuring the right content reaches the right audience.",
    tier: "all"
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Intelligent automation, smart recommendations, and AI-driven optimization.",
    tier: "enterprise"
  }
];

const getTierColor = (tier: string) => {
  switch (tier) {
    case 'premium': return 'border-accent/30 bg-accent/5';
    case 'enterprise': return 'border-indigo-500/30 bg-indigo-500/5';
    default: return 'border-white/10 bg-white/5';
  }
};

const getTierBadge = (tier: string) => {
  switch (tier) {
    case 'premium': return 'Premium';
    case 'enterprise': return 'Enterprise';
    default: return null;
  }
};

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powerful Features for{" "}
            <span className="electric-gradient">Elite</span> Users
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover advanced capabilities designed to accelerate your development 
            workflow and unlock new levels of productivity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`glass ${getTierColor(feature.tier)} p-6 hover:scale-105 transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Tier Badge */}
              {getTierBadge(feature.tier) && (
                <div className="absolute top-3 right-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    feature.tier === 'premium' 
                      ? 'bg-accent/20 text-accent' 
                      : 'bg-indigo-500/20 text-indigo-400'
                  }`}>
                    {getTierBadge(feature.tier)}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                feature.tier === 'premium' 
                  ? 'bg-accent/20' 
                  : feature.tier === 'enterprise'
                  ? 'bg-indigo-500/20'
                  : 'bg-white/10'
              }`}>
                <feature.icon className={`h-6 w-6 ${
                  feature.tier === 'premium' 
                    ? 'text-accent' 
                    : feature.tier === 'enterprise'
                    ? 'text-indigo-400'
                    : 'text-white'
                }`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass premium-glow rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to unlock these features?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of professionals who have elevated their workflow with our premium tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border border-accent/30 text-accent hover:bg-accent/10 px-6 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}