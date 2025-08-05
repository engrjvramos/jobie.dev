import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Host_Grotesk, Onest } from 'next/font/google';
import './globals.css';

const host_grotesk = Host_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--display-family',
});

const onest = Onest({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--text-family',
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
      <body className={`${host_grotesk.variable} ${onest.variable} font-text antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
