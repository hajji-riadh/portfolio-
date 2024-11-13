import { Terminal, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Terminal className="h-6 w-6" />
              <span className="font-bold">HajjiPortfolio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building amazing web experiences with modern technologies.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#skills" className="text-sm text-muted-foreground hover:text-primary">Skills</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary">Services</a></li>
              <li><a href="#projects" className="text-sm text-muted-foreground hover:text-primary">Projects</a></li>
              <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">hajjiriadh378@gmail.com</li>
              <li className="text-sm text-muted-foreground">+216 95 020 447</li>
              <li className="text-sm text-muted-foreground">Tunisia, Kasserine</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}