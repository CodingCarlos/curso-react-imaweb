import Head from 'next/head';
import Topbar from '@/components/Topbar';

interface DefaultLayoutProps {
  children: JSX.Element;
  titulo?: string;
  descripcion?: string;
}

export default function DefaultLayout({
  children,
  titulo,
  descripcion,
}: DefaultLayoutProps) {
  return (
    <>
      <Head>
        <title>{titulo || 'La mejor app de Europa'}</title>
        <meta
          name="description"
          content={descripcion || 'Una app para aprender los basics de next'}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Topbar />
      {children}
    </>
  );
}
