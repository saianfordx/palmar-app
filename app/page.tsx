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
import RoomRegistration from "@/components/room-registration/RoomRegistration"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection  /> 
      <Elements2Section />
      <HotelSection />
      <TravelInfoSection />
      <GallerySection />
      {/* <RoomRegistration /> */}
      {/* <RegistrationSection /> */}
      <Footer />
    </div>
  )
}

