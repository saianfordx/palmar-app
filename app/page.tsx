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
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="fixed bottom-4 right-4 z-50">
        <Link href="/theme-demo">
          <Button variant="palmarGold" className="shadow-md">View Palmar Theme</Button>
        </Link>
      </div>
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

