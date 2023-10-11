import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitchOption = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="inline-flex items-center border border-neutral-400 hover:border-neutral-700 dark:border-neutral-700 dark:hover:border-neutral-400 rounded-md px-2 py-1">
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-neutral-300 dark:text-amber-400">

                {theme === "dark" ? (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />

                ) : (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />

                )}
            </svg>
            <select className="bg-neutral-900 dark:bg-neutral-900 cursor-pointer text-lg rounded-md outline-none" value={theme} onChange={e => setTheme(e.target.value)}>
                <option value="system">System</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>
        </div>
    )
}

export default ThemeSwitchOption