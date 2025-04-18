import {
  Navbar,
  HeroSection,
 
  HotelSection,
  TravelInfoSection,
  GallerySection,

  Elements2Section,

  RegistrationSection,
  Footer,

} from "@/components/home"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection  /> 
      <Elements2Section />
      <HotelSection />
      <TravelInfoSection />
      <GallerySection />
      <RegistrationSection />
      <Footer />
    </div>
  )
}

