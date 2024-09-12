import Experiences from "@/components/ui/Experiences";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import Projects from "@/components/ui/Projects";
import Stacks from "@/components/ui/Stacks";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
        <div className="inset-x-0 top-1/2 h-px bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 m-auto"></div>
      </header>
      <main>
        <Experiences />
        <Projects />
        <Stacks />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
