import { useState, useEffect } from 'react'
import { type MenuItem } from '@/data/menu'

const useMenu = () => {
    
    const [menu, setMenu] = useState<MenuItem[]>([])

    useEffect(() => {
        const fetchMenu = async () => {
        try {
            const response = await fetch('/api/menu')
            const data = await response.json()
            setMenu(data)
        } catch (err) {
            console.error(err)
        }
        }
        fetchMenu()
    }, [])

    return { menu }
}

export default useMenu