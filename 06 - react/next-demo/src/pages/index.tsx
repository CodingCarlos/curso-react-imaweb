import Home from '@/views/home';
import Head from 'next/head';

// export default Home;

export default function HomePage() {
    return (
        <>
            <Head>
                <title>La mejor app de Europa</title>
                <meta name="description" content="Una app para aprender los basics de next" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Home />
        </>
    );
}
