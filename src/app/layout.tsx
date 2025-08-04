import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jobie Ramos | Frontend Web Developer',
  description:
    'I’m Jobie, a frontend developer crafting modern, responsive, and accessible web experiences using React, Next.js, and Tailwind CSS. Check out my portfolio and latest projects.',
  keywords: [
    'Jobie Ramos',
    'Frontend Developer',
    'React Developer',
    'Next.js Portfolio',
    'Web Developer Philippines',
    'Tailwind CSS',
    'TypeScript Developer',
  ],
  authors: [{ name: 'Jobie Ramos', url: 'https://jobie.dev' }],
  metadataBase: new URL('https://jobie.dev'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Jobie Ramos | Frontend Web Developer',
    description: 'Visit my personal portfolio to see the projects I’ve built with React, Next.js, and Tailwind CSS.',
    url: 'https://jobie.dev',
    siteName: 'jobie.dev',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jobie.dev – Frontend Portfolio',
      },
    ],
    locale: 'en_PH',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
