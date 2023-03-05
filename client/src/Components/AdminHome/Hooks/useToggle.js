import { useCallback, useState } from "react"

export const useToggle = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState)

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    const toggle = useCallback((prev) => {
        setIsOpen(!prev)
    }, []);

    return [isOpen, {open, close, toggle}]
}
