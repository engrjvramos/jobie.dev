import Footer from '@/components/footer';
import Header from '@/components/header';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="relative flex flex-col">
        <div className="relative flex-1 space-y-20 overflow-x-hidden px-8 pb-40 sm:px-16">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
