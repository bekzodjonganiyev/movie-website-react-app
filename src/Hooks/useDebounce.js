import  { useEffect, useState } from 'react'

export default function useDebounce(value, delay) {
    const [debouncaValue, setDabaunceVaule] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDabaunceVaule(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value])

    return debouncaValue
}
