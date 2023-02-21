import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react'

export default function Home() {
  const [nombre, setNombre] = useState('Carlos');

  return (
    <>
      <main>
        <h1>Soy la home de {nombre}</h1>
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
