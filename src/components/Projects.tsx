import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80',
    tags: ['TypeScript', 'React', 'Socket.io', 'PostgreSQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Content Generator',
    description:
      'An AI-powered content generation tool using OpenAI API.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: ['Next.js', 'OpenAI', 'TailwindCSS'],
    github: '#',
    demo: '#',
  },
];

export function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Card key={index} className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}