import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Zap, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for getting started with basic features",
    icon: Zap,
    features: [
      "Access to public content",
      "Basic code templates",
      "Community support",
      "Standard documentation",
      "Basic analytics"
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Premium",
    price: "$29",
    period: "/month",
    description: "Advanced features for professional developers",
    icon: Crown,
    features: [
      "All Starter features",
      "Premium content library",
      "Advanced code templates",
      "Priority support",
      "Advanced analytics",
      "Team collaboration (up to 5)",
      "Custom integrations",
      "Export capabilities"
    ],
    buttonText: "Start Premium Trial",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "Complete solution for large teams and organizations",
    icon: Star,
    features: [
      "All Premium features",
      "Unlimited team members",
      "Enterprise security",
      "Custom deployment",
      "Dedicated support",
      "SLA guarantee",
      "Advanced admin controls",
      "White-label options",
      "Custom training"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Choose Your{" "}
            <span className="electric-gradient">Premium</span> Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock the full potential of our platform with flexible pricing 
            designed to scale with your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`glass p-8 relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-accent/50 premium-glow' 
                  : 'border-white/10'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Icon */}
              <div className="flex items-center justify-center mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  plan.popular 
                    ? 'bg-accent/20' 
                    : 'bg-white/10'
                }`}>
                  <plan.icon className={`h-8 w-8 ${
                    plan.popular ? 'text-accent' : 'text-white'
                  }`} />
                </div>
              </div>

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Button 
                variant={plan.buttonVariant}
                size="lg"
                className={`w-full font-semibold ${
                  plan.popular 
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90 premium-glow' 
                    : ''
                }`}
              >
                {plan.buttonText}
              </Button>

              {/* Background Effect */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none"></div>
              )}
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-accent" />
              <span>Money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-accent" />
              <span>24/7 support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-accent" />
              <span>Secure payments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}