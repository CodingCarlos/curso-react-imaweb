import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [nombre, setNombre] = useState('Carlos');

  return (
    <>
      <Head>
        <title>La mejor app de Europa</title>
        <meta name="description" content="Una app para aprender los basics de next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <h1>Soy la home de {nombre}</h1>
        <button onClick={() => setNombre('Paco')}>
          Cambiar nombre
        </button>
      </main>
    </>
  )
}
