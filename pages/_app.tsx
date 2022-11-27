import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import './globals.css'
import { COLORFUL_TEXT } from '../utils/constant'

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    return <div className='font-light'>
        <header className='h-[50px] shadow-md flex items-center px-[20px]'>
            <span className={"text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"}>Developer Nav</span>
            <ul className='ml-12 text-xl flex gap-8'>
                <Link className={`transition-all duration-100 ${COLORFUL_TEXT} ${(router.pathname === '/' || router.pathname === '') ? 'text-transparent' : 'text-gray-900'}`} href={'/'}>Tools</Link>
                <Link className={`transition-all duration-100 ${COLORFUL_TEXT} ${router.pathname === '/solutions' ? 'text-transparent' : 'text-gray-900'}`} href={'/solutions'}>Solutions</Link>
                <Link className={`transition-all duration-100 ${COLORFUL_TEXT} ${router.pathname === '/packages' ? 'text-transparent' : 'text-gray-900'}`} href={'/packages'}>Packages</Link>
            </ul>
        </header>
        <Component {...pageProps} />
    </div>;
}