import React, { useCallback, useEffect, useState } from 'react';

const err = console.error;


/**
 * A Hook use to store some data inside the local storage
 * * WARNING: This Hook is experimental and still beta, but it's stable enough to use it in your application, just dosen't have a lot of customization
 * @param {any} any key 
 * @param {T} T defaultValue 
 */
function useLocalStorage<T>(key: string, defaultValue: T) {
    const [value, setValue] = useState(() => {
         if (!window || typeof window === 'undefined') err("useLocalStorage requires a window to be able to add a value into the local storage, you maybe trying to use it on the server"
          + " but currentlly we not support server hydration"
         )

        try {
            const alreadySet = localStorage.getItem(key)
            if (alreadySet) return JSON.parse(alreadySet)
            if (typeof defaultValue === 'function') return defaultValue()
            else return defaultValue
        } catch (error) {
            err(`[useLocalStorage-Hook-Error]: ${error}`)
        }
    })

    // Invoke shouldUpdateLocalStorage function immediately after component has been mounted and rendered
    useEffect(() => {
        if (typeof window === 'undefined' || !window) err("useLocalStorage requires a window to be able to add a value into the local storage, you maybe trying to use it on the server" 
            + " but currentlly we not support server hydration"
        )
        /**
         * This Function Will Check If There's A Value Or Not, If It Is, Will Set This Value In the local storage.
         * Otherwise, will remove this value from the local storage by it's key
         * * we'll wrap the function with a try statement to keep track of any errors
         */
        const shouldSetLocalStorage = () => {
            if (value !== undefined) {
                window.localStorage.setItem(key, JSON.stringify(value))
                console.log('asd')
            } else {
                window.localStorage.removeItem(key)
            }
        }

        try {
            shouldSetLocalStorage()
        } catch (error) {
            err(`[useLocalStorage-Hook-Error]: ${error}`)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    /**
     * * Let's Fix a issue with localStorage that local storage requires a reload to update, which is something makes UI problems
     */
    useEffect(() => {
        const shouldUpdateLocalStorage = (e: StorageEvent) => {
            console.log('START CHANGE')
            // detect if the changes happens on our key and local storage or not
            if (e.key !== key || e.storageArea !== window.localStorage) return;
              
            try {
                setValue(e.newValue ? JSON.parse(e.newValue) : undefined)
            } catch (error) {
                err(`[useLocalStorage-Hook-Error]: ${error}`)
            }
            
        }

        if (typeof window === 'undefined' || !window) err("useLocalStorage requires a window to be able to add a value into the local storage, you maybe trying to use it on the server" 
        + " but currentlly we not support server hydration"
    )
        window.addEventListener('storage', shouldUpdateLocalStorage)
        // remove event listeners on unmount to prevent memory leaks
        return () => window.removeEventListener('storage', shouldUpdateLocalStorage)
    }, [key, value])

    /**
     * will clear the local storage
     */
    function clear() {
        setValue(undefined)
    }

    return [value, setValue, clear]
}

export default useLocalStorage;