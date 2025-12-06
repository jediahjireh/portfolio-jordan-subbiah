import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";

const Home = () => {
  return (
    <>
      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        <HeroSection />
        <TechStack />
        <WorkExperience />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
