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
      <AboutSection />
      <HotelSection />
      <TravelInfoSection />
      {/* <AgendaSection /> */}
      <ElementsSection />
      <GallerySection />
      <RegistrationSection />
      <Footer />
    </div>
  )
}

