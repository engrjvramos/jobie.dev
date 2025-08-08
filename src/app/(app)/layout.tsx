import Footer from '@/components/footer';
import Header from '@/components/header';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="relative mx-auto flex max-w-7xl flex-col">
        <div className="flex-1 space-y-20 px-8 pb-40 sm:px-16">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
