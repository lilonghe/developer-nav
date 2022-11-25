import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import './globals.css'
import { COLORFUL_TEXT } from '../utils/constant'

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    return <div className='font-light'>
        <header className='h-[50px] shadow-md flex items-center px-[20px]'>
            <span className={"text-2xl " + COLORFUL_TEXT}>Developer Nav</span>
            <ul className='ml-12 text-xl flex gap-8'>
                <Link className={`transition-all duration-200 hover:text-violet-400 ${(router.pathname === '/' || router.pathname === '') && COLORFUL_TEXT}`} href={'/'}>Tools</Link>
                <Link className={`transition-all duration-200 hover:text-violet-400 ${router.pathname === '/solutions' && COLORFUL_TEXT}`} href={'/solutions'}>Solutions</Link>
            </ul>
        </header>
        <Component {...pageProps} />
    </div>;
}