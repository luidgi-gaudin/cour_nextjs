'use client';
import {useRouter} from "next/navigation";

export default function SideBar(){
    const router = useRouter();

    return (
        <aside className="w-64 bg-blue-600 text-white p-6 flex flex-col">
            <h2 className="text-2xl font-bold mb-6">Navigation</h2>
            <ul className="space-y-4">
                <li>
                    <a onClick={()=>router.push('/')} className="block py-2 px-4 rounded hover:bg-blue-700 cursor-pointer">
                        Accueil
                    </a>
                </li>
                <li>
                    <a onClick={()=>router.push('/about')} className="block py-2 px-4 rounded hover:bg-blue-700 cursor-pointer">
                        À propos
                    </a>
                </li>
                <li>
                    <a onClick={()=>router.push('/contact')} className="block py-2 px-4 rounded hover:bg-blue-700 cursor-pointer">
                        Contact
                    </a>
                </li>
                <li>
                    <a onClick={()=>router.push('/project')} className="block py-2 px-4 rounded hover:bg-blue-700 cursor-pointer">
                        Projets
                    </a>
                </li>
            </ul>
        </aside>
    )
}