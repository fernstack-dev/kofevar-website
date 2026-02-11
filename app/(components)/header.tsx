'use client'

import '../globals.css'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Coffee } from 'lucide-react'

const navItems = [
    { name: 'Главная', href:'/'},
    { name: 'О нас', href:'/about'},
    { name: 'Блюда', href:'/menu'},
    { name: 'Адрес', href:'/contact'},
]

export default function Header() {
    const pathname = usePathname()
    return (
        <header className="sticky top-0 bg-white text-black">
            <div className="container mx-auto px-6">
                <div className="flex h-16 items-center justify-between">
                    <Link
                        href='/'
                        className="flex items-center gap-3 text-amber-950 transition-all hover:text-amber-900"
                    >
                        <Coffee className="h-12 w-12"/>
                        <span className="text-xl font-bold">Кофевар</span>
                    </Link>
                    <nav className="flex items-center">
                        {navItems.map((item) => {
                            const isActive = pathname == item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`
                                        px-4.5 hover:px-6 py-4.5 text-sm font-bold transition-all
                                        ${isActive ? 'bg-amber-950 text-white' : 'text-amber-950 hover:text-white hover:bg-amber-900'}
                                        `}
                                        >
                                            {item.name}
                                        </Link>
                            )})}
                    </nav>
                </div>
            </div>
        </header>
    )
}

// export default function Header() {
//     const pathname = usePathname()
//     return (
//         <header className="sticky min-h-20 top-0 z-99 w-full border-b border-gray-200 bg-white shadow-sm">
//             <div className="container mx-auto px-4">
//                 <div className="flex h-16 items-center justify-between">
//                     <Link
//                         href="/"
//                         className="flex items-center gap-2 hover:opacity-80 transition-opacity"
//                     >
//                         <div className="p-2 bg-amber-50 border border-gray-300 shadow-sm">
//                             <Coffee className="h-12 w-12 text-amber-800"/>
//                         </div>
//                     </Link>

//                     <nav className="flex items-center gap-1">
//                         {navItems.map((item) => {
//                             const isActive = pathname == item.href
//                             return (
//                                 <Link
//                                     key={item.name}
//                                     href={item.href}
//                                     className={`
//                                         px-4 py-2.5 text-sm font-medium transition-all
//                                         border border-transparent
//                                         ${isActive ? 'text-amber-800 bg-amber-50 border-gray-300 shadow-sm' : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'}
//                                         `}
//                                         >
//                                             {item.name}
//                                         </Link>
//                             )})}
//                     </nav>
//                 </div>
//             </div>
//         </header>
//     )
// }