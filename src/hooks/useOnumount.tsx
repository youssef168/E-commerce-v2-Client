import { useEffect } from 'react'

/**
 * a hook requires a function that will be excuted immediately on component unmount
 * @param fn 
 */
function useOnUnmount(fn: Function) {
    useEffect(() => {
        /**
         * execute a function on component unmount
         */
        return () => fn && fn()
    }, [])
}

export default useOnUnmount;