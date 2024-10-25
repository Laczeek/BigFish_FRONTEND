"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
      const [isMounted, setIsMounted] = useState(false);
      const {setTheme, resolvedTheme} = useTheme();

        useEffect(() => {
                setIsMounted(true)
        }, [])

    if(!isMounted) return null;

    if(resolvedTheme === 'dark') return <button onClick={() => setTheme('light')}>Light</button>

    return <button onClick = {() => setTheme('dark')}>Black</button>
} 