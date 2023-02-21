import AboutMe from '@/views/about/me';

// Static (SSG)
// export async function getStaticPaths() {
//     const result = await fetch('https://us-central1-textagram-app.cloudfunctions.net/app/user');
//     const userList = await result.json();
//     const paths = userList.map((user: any) => ({
//         params: { usuario: user.name }
//     }))
//     return {
//         paths,
//         // paths: [
//         //     { params: { usuario: 'me' } },
//         //     { params: { usuario: 'Carlos' } },
//         //     { params: { usuario: 'Paco' } },
//         // ],
//         fallback: false,
//     };
// }
// export async function getStaticProps(context: any) {
//     // console.log(context);
//     return {
//         props: {
//             usuario: context.params.usuario,
//         },
//     };
// }

// Dynamic (SSR)
interface AboutMeContextProps {
    params: {
        usuario?: string,
    },
    query: {
        usuario?: string,
    }
}

export async function getServerSideProps(context: AboutMeContextProps) {
    console.log(context);

    return {
        props: {
            usuario: context.params.usuario,
        },
    };
}

export default function AboutMePage(props: any) {
    return <AboutMe {...props} />
};