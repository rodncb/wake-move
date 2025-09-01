import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SpringEditionSection from "./components/SpringEditionSection";
import ScheduleSection from "./components/ScheduleSection";
import RegistrationSection from "./components/RegistrationSection";
import LocationSection from "./components/LocationSection";
import OrganizersSection from "./components/OrganizersSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <SpringEditionSection />
      <ScheduleSection />
      <RegistrationSection />
      <LocationSection />
      <OrganizersSection />
      <Footer />
    </div>
  );
}

export default App;
