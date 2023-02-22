import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import discord from '@public/img/discord.png';

import styles from './Home.module.scss';

export interface HomeProps {
  titulo: string;
}

export default function Home({ titulo }: HomeProps) {
  const [nombre, setNombre] = useState('Carlos');
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log(apiUrl)

  return (
    <>
      <main className={styles.contenido}>
        <h1 className="bg-primary">{titulo}</h1>
        <h2>Soy la home de {nombre}</h2>
        <button
          className={`${styles.grande} bg-primary`}
          onClick={() => setNombre('Paco')}
        >
          Cambiar nombre
        </button>
        <p>
          <Link href="/about">About</Link>
        </p>
      </main>

      <section>
        <h2>Api: {apiUrl}</h2>
        <button className={styles.grande} onClick={() => setNombre('Paco')}>
          Fuera de contenido
        </button>
        
        <p>
          <Image
            src="/img/github.png"
            alt="Github logo"
            width={120}
            height={120}
          />

          <Image
            src={discord}
            alt="Discord logo"
            width={120}
            height={120}
            placeholder="blur"
          />

          <Image
            src="/img/abeja.jpeg"
            alt="Abeja"
            width={1000}
            height={500}
            placeholder="blur"
            blurDataURL='/img/abeja.jpeg'
            quality={100}
          />
        </p>
      </section>
    </>
  );
}
