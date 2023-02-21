import Link from "next/link";
import { useRouter } from 'next/router';

export default function AboutMe(props: any) {
    console.log('props', props);

    const router = useRouter();
    const usuario = router.query?.usuario

    return (
        <>
            <h1>HOLA QUE TAL SOY { usuario }</h1>
            <p>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </p>
        </>
    );
}