import {
  Code2,
  Database,
  Globe,
  Laptop,
  LayoutDashboard,
  Smartphone,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const services = [
  {
    icon: <Code2 className="h-12 w-12 text-primary" />,
    title: 'Web Development',
    description:
      'Custom web applications built with modern frameworks and best practices.',
  },
  {
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: 'Mobile Development',
    description:
      'Cross-platform mobile apps using React Native and native technologies.,
  },
  {
    icon: <Database className="h-12 w-12 text-primary" />,
    title: 'Backend Development',
    description:
      'Scalable server solutions with Node.js, Express, and various databases.',
  },
  {
    icon: <LayoutDashboard className="h-12 w-12 text-primary" />,
    title: 'UI/UX Design',
    description:
      'Beautiful and intuitive interfaces designed with user experience in mind.',
  },
  {
    icon: <Globe className="h-12 w-12 text-primary" />,
    title: 'API Development',
    description:
      'RESTful and GraphQL APIs designed for performance and scalability.',
  },
  {
    icon: <Laptop className="h-12 w-12 text-primary" />,
    title: 'Consulting',
    description:
      'Technical consulting and architecture design for your projects.',
  },
];

export function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex justify-center mb-4">{service.icon}</div>
            <CardTitle className="text-center">{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center">
              {service.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}