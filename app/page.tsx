import {
  Navbar,
  HeroSection,
  AboutSection,
  HotelSection,
  TravelInfoSection,
  GallerySection,
  ElementsSection,
  Elements2Section,
  AgendaSection,
  RegistrationSection,
  Footer,
  Air
} from "@/components/home"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
     
      <HeroSection  />
     
    
      {/* <ElementsSection /> */}
      {/* <Air /> */}
      <Elements2Section />
      {/* <AboutSection /> */}
      <HotelSection />
      <TravelInfoSection />
      {/* <AgendaSection /> */}
      <GallerySection />
      <RegistrationSection />
      <Footer />
    </div>
  )
}

