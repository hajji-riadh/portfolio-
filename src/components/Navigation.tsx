import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Moon, Sun, Code2, Briefcase, Phone, CreditCard, Lightbulb } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '@/lib/themes';

const navItems = [
  { href: '#skills', label: 'Skills', icon: <Code2 className="h-4 w-4" /> },
  { href: '#services', label: 'Services', icon: <Lightbulb className="h-4 w-4" /> },
  { href: '#projects', label: 'Projects', icon: <Briefcase className="h-4 w-4" /> },
  { href: '#pricing', label: 'Pricing', icon: <CreditCard className="h-4 w-4" /> },
  { href: '#contact', label: 'Contact', icon: <Phone className="h-4 w-4" /> },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="h-6 w-6" />
          <span className="font-bold hidden sm:inline-block">HajjiPortfolio</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary relative
                ${activeSection === item.href.substring(1) ? 'text-primary' : ''}
              `}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <span className="absolute -bottom-[1.5rem] left-0 w-full h-[2px] bg-primary" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <div className="container py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary
                    ${activeSection === item.href.substring(1) ? 'text-primary' : ''}
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}