import Header from '@/components/header';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-x-hidden">
      <div className="relative mx-auto flex max-w-7xl flex-col">
        <Header />
        <div className="flex-1 space-y-20 px-8 pb-20 sm:px-16">{children}</div>
      </div>
      <footer className="bg-base-950 py-8">
        <div className="text-muted-foreground mx-auto max-w-5xl text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Jobie Ramos. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
