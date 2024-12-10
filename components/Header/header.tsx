'use client';

import {useRouter} from "next/navigation";

export default function Header() {
    const router = useRouter();
    return (
        <header className="bg-blue-600 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Portfolio</h1>
                <ul className="flex space-x-4">
                    <li>
                        <a className="hover:underline cursor-pointer" onClick={() => router.push('/')}>
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline cursor-pointer" onClick={() => router.push('/about')}>
                            À propos
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline cursor-pointer" onClick={() => router.push('/contact')}>
                            Contact
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline cursor-pointer" onClick={() => router.push('/project')}>
                            Projets
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}