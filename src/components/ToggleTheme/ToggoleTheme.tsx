"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const ToggleLightAndDark = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <div className="flex items-center justify-center rounded-full group  duration-300 hover:bg-[#bdbdbd] dark:hover:bg-[#404040] transition-all">
            <button className="cursor-pointer " onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>

                {theme === "dark" ? (<CiLight className="w-6 h-6 group-hover:text-[#8CFF45]" />)
                    :
                    (<CiDark className="w-6 h-6 text-black group-hover:text-[#58893a]" />)
                }
            </button>
        </div>
    )
}

export default ToggleLightAndDark