import Link from 'next/link';
import { useState } from 'react'

export interface HomeProps {
  titulo: string;
};

export default function Home({ titulo }: HomeProps) {
  const [nombre, setNombre] = useState('Carlos');

  return (
    <>
      <main>
        <h1>{titulo}</h1>
        <h2>Soy la home de {nombre}</h2>
        <button onClick={() => setNombre('Paco')}>
          Cambiar nombre
        </button>
        <p>
          <Link href="/about">About</Link>
        </p>
      </main>
    </>
  )
}
