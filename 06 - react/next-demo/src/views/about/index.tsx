import Link from 'next/link';

export default function About() {
  return (
    <>
      <h1>Soy el about me</h1>
      <p>
        <Link href="/">Home</Link>
        <Link href="/about/me">About Me</Link>
      </p>
    </>
  );
}
