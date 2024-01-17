import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
