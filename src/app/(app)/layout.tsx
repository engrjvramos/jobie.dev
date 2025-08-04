import Header from '@/components/header';
import React from 'react';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto min-h-dvh max-w-[1440px]">
      <Header />
      {children}
    </div>
  );
}
