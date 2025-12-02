import Navigation from '@/components/Navigation';
import { type ReactNode } from 'react';

interface GuestLayoutProps {
  children: ReactNode;
}

export default function Guest({ children }: GuestLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header fixo no topo */}
      <header className="w-full bg-black shadow">
        <div className="container mx-auto px-6 py-4 flex justify-end">
          <Navigation />
        </div>
      </header>

      {/* Conteúdo abaixo do menu */}
      <main className="flex-1 container mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  );
}