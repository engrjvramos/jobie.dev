import Link from 'next/link';

export default function Header() {
  return (
    <header className="grid place-items-center">
      <nav className="flex items-center justify-between gap-2 bg-white/10 p-5">
        <Link href={'/'}>Home</Link>
        <Link href={'/'}>About</Link>
        <Link href={'/'}>Experience</Link>
        <Link href={'/'}>Projects</Link>
      </nav>
    </header>
  );
}
