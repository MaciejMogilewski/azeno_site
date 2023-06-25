'use client'

import Image from "next/image";
import {useTranslations} from "use-intl";
import LocaleSwitcher from "@/components/LanguageSwitcher";
import ThemeSwitcher from "@/components/ThemeSwitcher";

function NavBar() {
    const t = useTranslations('Menu')

    return (
        <nav
            className="sticky top-0 z-50 bg-gray-800 bg-opacity-70 group flex justify-around rounded-lg border border-transparent px-5 py-4
           mb-3">
            <a href="/"
                  className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
                <Image src="/logo.png" alt="Azeno company logo" width="50" height="63"/>
            </a>
            <a href="#home"
                  className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
                {t('home')}
            </a>
            <a href="#about"
                  className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
                {t('about')}
            </a>
            <a href="#employees"
                  className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
                {t('employees')}
            </a>
            <a href="#carrier"
               className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
                {t('carrier')}
            </a>
            <a href="#portfolio"
               className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
                {t('portfolio')}
            </a>
            <a href="#formContact"
                  className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
                {t('contact')}
            </a>
            <div>
                <LocaleSwitcher />
                <ThemeSwitcher />
            </div>
        </nav>
    );
}

export default NavBar;