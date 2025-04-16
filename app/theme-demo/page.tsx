import React from 'react';
import PalmarThemeDemo from '@/components/palmar-theme-demo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ThemeDemoPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="palmarOutline">Back to Home</Button>
          </Link>
        </div>
        <PalmarThemeDemo />
      </div>
    </div>
  );
} 