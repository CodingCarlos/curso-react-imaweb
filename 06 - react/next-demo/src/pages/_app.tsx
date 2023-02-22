import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
// import { Roboto } from '@next/font/google';

// const roboto = Roboto({
//   weight: ['300', '500'],
//   subsets: ['latin']
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <div className={roboto.className}>
      <Component {...pageProps} />
    // </div>
  );
}
