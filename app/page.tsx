import {
  Navbar,
  HeroSection,
 
  HotelSection,
  TravelInfoSection,
  GallerySection,

  Elements2Section,

  RegistrationSection,
  CodigoConductaSection,
  TipsSection,
  Footer,
  AgendaSection,

} from "@/components/home"
import RoomRegistration from "@/components/room-registration/RoomRegistration"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection  /> 
      <Elements2Section />
      <AgendaSection />
      <HotelSection />
      <TravelInfoSection />
      <TipsSection />
      <GallerySection />
      <CodigoConductaSection />
      {/* <RoomRegistration /> */}
      {/* <RegistrationSection /> */}
      <Footer />
    </div>
  )
}

