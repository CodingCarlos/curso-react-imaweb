import DefaultLayout from '@/layouts/DefaultLayout';
import Home, { HomeProps } from '@/views/home';
import Head from 'next/head';

// export default Home;
export async function getStaticProps() {
    const timestamp = Date.now();

    return {
        props: { 
            titulo: `Generado en: ${timestamp}`,
        },
        revalidate: 10,
    }
}

export default function HomePage(props: HomeProps) {
    return (
        <>
            <DefaultLayout titulo={props.titulo}>
                <Home {...props} />
            </DefaultLayout>
        </>
    );
}
