import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic',
    price: '$99',
    description: 'Perfect for small projects',
    features: [
      'Single page website',
      'Basic SEO optimization',
      '1 revision round',
      'Delivery within 5 days',
      'Basic support',
    ],
  },
  {
    name: 'Professional',
    price: '$199',
    description: 'Ideal for growing businesses',
    features: [
      'Multi-page website',
      'Advanced SEO optimization',
      '3 revision rounds',
      'Delivery within 7 days',
      'Priority support',
      'Mobile responsive design',
      'Social media integration',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$499',
    description: 'For large scale applications',
    features: [
      'Custom web application',
      'Premium SEO optimization',
      'Unlimited revisions',
      'Delivery within 14 days',
      '24/7 priority support',
      'Advanced analytics',
      'Custom integrations',
      'Performance optimization',
    ],
  },
];

export function Pricing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={`relative ${
            plan.popular
              ? 'border-primary shadow-lg scale-105'
              : 'hover:border-primary/50'
          } transition-all`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
            <CardDescription className="text-center">
              {plan.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <span className="text-4xl font-bold">{plan.price}</span>
            <span className="text-muted-foreground">/project</span>
            <ul className="mt-4 space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
              Get Started
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}