import { StarBackground } from "../Components/StarBackground";
import { ThemeToggle } from "../Components/ThemeToggle";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { SkillSection } from "../Components/SkillSection";
import { ProjectSection } from "../Components/ProjectSection";
import { ContactSection } from "../Components/ContactSection";
import { Footer } from "../Components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
       {/* 5Theme Toggle */}
       <ThemeToggle/>

       {/*1 Background Effect */}
       <StarBackground/>

       {/* Navbar */}
       <Navbar/>

       {/* Main content */}

       <main>
        <HeroSection/>
        <AboutSection/>
        <SkillSection/>
        <ProjectSection/>
        <ContactSection/>
       </main>

       {/* Footer */}

       <Footer/>
       
    </div>
  )
}
