import React from 'react';
import PalmarLogo from './ui/palmar-logo';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const PalmarThemeDemo: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Palmar Design System</h1>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Logo Variants</h2>
        <div className="flex flex-wrap gap-8 items-center p-4 bg-palmar-cream rounded-lg">
          <PalmarLogo variant="orange" />
          <PalmarLogo variant="red" />
          <PalmarLogo variant="cream" className="bg-palmar-brown p-2 rounded" />
          <PalmarLogo variant="white" className="bg-palmar-teal p-2 rounded" />
        </div>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-palmar-orange"></div>
            <span className="mt-2">Orange</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-palmar-red"></div>
            <span className="mt-2">Red</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-palmar-gold"></div>
            <span className="mt-2">Gold</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-palmar-teal"></div>
            <span className="mt-2">Teal</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-palmar-brown"></div>
            <span className="mt-2">Brown</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-palmar-light-green"></div>
            <span className="mt-2">Light Green</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-palmar-cream"></div>
            <span className="mt-2">Cream</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-palmar-white border"></div>
            <span className="mt-2">White</span>
          </div>
        </div>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="palmarOrange">Orange Button</Button>
          <Button variant="palmarRed">Red Button</Button>
          <Button variant="palmarTeal">Teal Button</Button>
          <Button variant="palmarGold">Gold Button</Button>
          <Button variant="palmarOutline">Outline Button</Button>
        </div>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="default">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>This is the default card style</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here</p>
            </CardContent>
            <CardFooter>
              <Button variant="default">Action</Button>
            </CardFooter>
          </Card>
          
          <Card variant="palmarGold">
            <CardHeader>
              <CardTitle>Gold Card</CardTitle>
              <CardDescription>This is the gold themed card</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here</p>
            </CardContent>
            <CardFooter>
              <Button variant="palmarGold">Action</Button>
            </CardFooter>
          </Card>
          
          <Card variant="palmarRed">
            <CardHeader>
              <CardTitle>Red Card</CardTitle>
              <CardDescription>This is the red themed card</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here</p>
            </CardContent>
            <CardFooter>
              <Button variant="palmarRed">Action</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-32 bg-palmar-pattern-gold rounded-lg"></div>
          <div className="h-32 bg-palmar-pattern-red rounded-lg"></div>
        </div>
      </section>
    </div>
  );
};

export default PalmarThemeDemo; 