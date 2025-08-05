export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-x-hidden">
      <div className="mx-auto flex h-full max-w-7xl flex-col">
        {/* <Header /> */}
        <div className="flex-1 p-5">{children}</div>
        {/* <footer>Footer</footer> */}
      </div>
    </div>
  );
}
