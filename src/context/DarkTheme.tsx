import React, { FC, Fragment, createContext, useState, useEffect } from 'react';
import useOnMount from '../hooks/useOnMount';
import useLocalStorage from '../hooks/useStorage';

type themeType = "dark" | "light"

interface ThemeProviderProps {
    initialTheme?: themeType
    onToggle: () => void
    /**
     * the component will appear at the head of the page to display a theme switcher, typically toggle component
     */
    toggleComponent?: React.ReactElement
    children?: React.ReactNode

    // Life cycle props
    /**
     * accepts a function that will be called on component mount
     */
    onMount?: Function
}

interface ThemeProviderCtx {
    isDark: boolean
    themeMode: themeType
    setThemeMode: (theme: themeType) => void
}

export const ThemeProviderContext = createContext<ThemeProviderCtx>(
    {} as ThemeProviderCtx
)

const detectDefaultTheme = () => window.matchMedia('(prefers-color-schema: dark)');

const getDefaultTheme = (): themeType => {
    const localStorageTheme = localStorage.getItem('theme')
    const browserTheme = detectDefaultTheme() ? 'dark' : 'light'
    return browserTheme || localStorageTheme
}

/**
 * function will inject a `data-theme` property into body element
 */

/**
 * A Component Will Give The Nested Components Inside Of ThemeProvider The Access To Theme
 */
export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { initialTheme, onToggle, children, onMount, toggleComponent } = props
    const [isDark, setIsDark] = useState<boolean>(false)
    const [themeMode, setThemeMode] = useLocalStorage('theme', initialTheme)
    // set a theme key in the localStorage
    

    useOnMount(() => {
        if (onMount) {
            onMount()
        }
        return;
    })

    useEffect(() => {
        if (themeMode === 'dark') {
            console.log('asd')
            setIsDark(true)
        } else setIsDark(false)
    }, [themeMode])

    return (
        <ThemeProviderContext.Provider value={{
            isDark: isDark,
            themeMode: themeMode,
            setThemeMode: setThemeMode
        }}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

