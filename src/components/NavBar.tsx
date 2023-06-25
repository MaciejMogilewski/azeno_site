'use client'

import Image from "next/image";
import {useTranslations} from "use-intl";
import LocaleSwitcher from "@/components/LanguageSwitcher";
import ThemeSwitcher from "@/components/ThemeSwitcher";

function NavBar() {
    const t = useTranslations('Menu')

    return (
        <nav className="sticky top-0 z-50 bg-gray-800 bg-opacity-70 group flex justify-around rounded-lg border border-transparent px-5 py-4 mb-3">
            <a href="/" className="pointer-events-none flex items-center gap-2 p-8 lg:p-0">
                <Image src="/logo.png" alt="Azeno company logo" width="50" height="63" />
            </a>
            <a href="#home" className="flex items-center gap-2 p-8 lg:p-0 text-white hover:text-gray-300">
                {t('home')}
            </a>
            <a href="#about" className="flex items-center gap-2 p-8 lg:p-0 text-white hover:text-gray-300">
                {t('about')}
            </a>
            <a href="#employees" className="flex items-center gap-2 p-8 lg:p-0 text-white hover:text-gray-300">
                {t('employees')}
            </a>
            <a href="#carrier" className="flex items-center gap-2 p-8 lg:p-0 text-white hover:text-gray-300">
                {t('carrier')}
            </a>
            <a href="#portfolio" className="flex items-center gap-2 p-8 lg:p-0 text-white hover:text-gray-300">
                {t('portfolio')}
            </a>
            <a href="#formContact" className="flex items-center gap-2 p-8 lg:p-0 text-white hover:text-gray-300">
                {t('contact')}
            </a>
            <div className="flex items-center gap-2 ml-4">
                <LocaleSwitcher />
                <ThemeSwitcher />
            </div>
        </nav>


    );
}

export default NavBar;