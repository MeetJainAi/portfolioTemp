import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/home/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}