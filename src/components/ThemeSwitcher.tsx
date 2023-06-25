'use client'

import {useContext} from "react";
import ThemeContext from "@/store/ThemeContext";

function ThemeSwitcher() {

    const {isDarkTheme, setThemeHandler} = useContext(ThemeContext);

    return (
        <>
            {isDarkTheme ? (
                <button
                    type="button"
                    className="py-2 px-4 mx-2 bg-blue-500 hover:bg-blue-600 text-white dark:bg-gray-200 dark:text-black rounded"
                    onClick={() => setThemeHandler(false)}
                >
                    Light
                </button>
            ) : (
                <button
                    type="button"
                    className="py-2 px-4 mx-2 bg-blue-500 hover:bg-blue-600 text-white dark:bg-gray-200 dark:text-black rounded"
                    onClick={() => setThemeHandler(true)}
                >
                    Dark
                </button>
            )}
            <button
                type="button"
                className="py-2 px-4 mx-2 bg-blue-500 hover:bg-blue-600 text-white dark:bg-gray-200 dark:text-black rounded"
                onClick={() => setThemeHandler(true)}
            >
                Dark
            </button>
            <button
                type="button"
                className="py-2 px-4 mx-2 bg-blue-500 hover:bg-blue-600 text-white dark:bg-gray-200 dark:text-black rounded"
                onClick={() => setThemeHandler('system')}
            >
                System
            </button>
        </>
    );
}

export default ThemeSwitcher;