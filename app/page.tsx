import {
  Navbar,
  HeroSection,
  AboutSection,
  HotelSection,
  TravelInfoSection,
  GallerySection,
  ElementsSection,
  AgendaSection,
  RegistrationSection,
  Footer
} from "@/components/home"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <ElementsSection />
      <AboutSection />
      <HotelSection />
      <TravelInfoSection />
      {/* <AgendaSection /> */}
      <GallerySection />
      <RegistrationSection />
      <Footer />
    </div>
  )
}

