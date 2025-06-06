import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8 animate-float">
            <Star className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">
              Trusted by 10,000+ Elite Professionals
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Unlock{" "}
            <span className="electric-gradient animate-glow">
              Premium
            </span>
            <br />
            Software Solutions
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Access enterprise-grade tools, exclusive resources, and premium content 
            designed for industry leaders who demand excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-4 text-lg premium-glow group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent/30 text-accent hover:bg-accent/10 px-8 py-4 text-lg"
            >
              View Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center space-x-8 space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-accent" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-accent" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-accent" />
              <span>5-Star Support</span>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-20">
          <div className="relative max-w-4xl mx-auto">
            <div className="glass premium-glow rounded-2xl p-8 animate-float">
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="h-4 bg-accent/30 rounded"></div>
                  <div className="h-4 bg-accent/20 rounded"></div>
                  <div className="h-4 bg-accent/10 rounded"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-8 bg-accent/20 rounded w-3/4"></div>
                  <div className="h-6 bg-accent/10 rounded w-1/2"></div>
                  <div className="h-6 bg-accent/10 rounded w-2/3"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}