import { useEffect } from 'react';
import { ThemeProvider } from '@/lib/themes';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Services } from '@/components/Services';
import { Pricing } from '@/components/Pricing';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';

function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}

function Hero() {
  return (
    <div className="container py-24 sm:py-32">
      <div className="flex flex-col items-center text-center space-y-4 reveal">
        <img
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&q=80"
          alt="Profile"
          className="rounded-full w-32 h-32 object-cover border-4 border-primary"
        />
        <h1 className="text-4xl font-bold">Hajji Riadh</h1>
        <p className="text-xl text-muted-foreground">
          Full Stack JavaScript Developer
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <a href="#contact">Hire Me</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View Work</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <section className="container py-12 reveal" id="skills">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <Skills />
        </section>
        <section className="container py-12 bg-muted reveal" id="services">
          <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
          <Services />
        </section>
        <section className="container py-12 reveal" id="projects">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <Projects />
        </section>
        <section className="container py-12 bg-muted reveal" id="pricing">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <Pricing />
        </section>
        <section className="container py-12 reveal" id="contact">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
          <Contact />
        </section>
      </Layout>
    </ThemeProvider>
  );
}

export default App;