import Header from "@/components/Header";
import Nav from "@/components/Nav";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import ImageSection from "@/components/ImageSection";
import TargetAudience from "@/components/TargetAudience";
import Diagram from "@/components/Diagram";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <Header />
      <AboutSection />
      <Services />
      <ImageSection />
      <TargetAudience />
      <Diagram />
      <Contact />
    </div>
  );
}
