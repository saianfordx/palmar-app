"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MayanBorder, DecorativePattern } from "@/components/ui/decorative-patterns"
import { Sparkles, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface RegistrationText {
  title: string;
  description: string;
  benefit1: string;
  benefit2: string;
  button: string;
}

export const RegistrationSection = () => {
  const [registrationText, setRegistrationText] = useState<RegistrationText | null>(null);
  
  useEffect(() => {
    // In a real app, this would be based on user language preference
    // For now we'll default to Spanish
    fetch('/locales/es/registration.json')
      .then(response => response.json())
      .then(data => setRegistrationText(data))
      .catch(error => console.error('Error loading localization:', error));
  }, []);

  if (!registrationText) {
    return <div className="py-20 bg-primary text-primary-foreground">Loading...</div>;
  }

  // Parse markdown-style bold text with regex 
  const parseText = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <section id="registro" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <DecorativePattern variant="palmar-gold" className="opacity-15" color="white" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-palmar-red text-palmar-white mb-4 px-4 py-1 text-sm font-medium">
            Participa
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black drop-shadow-md">Regístrate</h2>
          <div className="w-28 h-1 bg-palmar-red mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto bg-red">
          <MayanBorder className="bg-palmar-red backdrop-blur-sm text-white p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 flex items-center text-white">
              <Sparkles className="h-6 w-6 text-palmar-orange mr-3" />
              {registrationText.title}
            </h3>
            <p className="mb-6 text-lg" dangerouslySetInnerHTML={{ __html: parseText(registrationText.description) }}></p>
            <div className="space-y-5">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-palmar-orange mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg">{registrationText.benefit1}</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-palmar-orange mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg">{registrationText.benefit2}</p>
              </div>
            </div>
          </MayanBorder>

          <div className="relative flex justify-center items-center p-8">
            <Link href="https://arkade.quest" passHref>
              <Button 
                className="bg-black hover:bg-black/80 text-white text-2xl font-bold px-12 py-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-md"
              >
                {registrationText.button}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 