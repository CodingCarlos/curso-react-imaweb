import Link from 'next/link';
import { useState } from 'react'

import styles from './Home.module.scss';

export interface HomeProps {
  titulo: string;
};

export default function Home({ titulo }: HomeProps) {
  const [nombre, setNombre] = useState('Carlos');

  return (
    <>
      <main className={styles.contenido}>
        <h1 className='bg-primary'>
          {titulo}
        </h1>
        <h2>Soy la home de {nombre}</h2>
        <button className={`${styles.grande} bg-primary`} onClick={() => setNombre('Paco')}>
          Cambiar nombre
        </button>
        <p>
          <Link href="/about">About</Link>
        </p>
      </main>

      <button className={styles.grande} onClick={() => setNombre('Paco')}>
        Fuera de contenido
      </button>
    </>
  )
}
