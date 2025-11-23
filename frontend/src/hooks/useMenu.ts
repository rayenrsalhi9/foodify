import { useState, useEffect } from 'react'
import { type MenuItem } from '@/types/types'

type MenuParams = {
    category: string | null
    search: string | null
}

const useMenu = (params?: MenuParams) => {

    const { category, search } = params || {}
    
    const [menu, setMenu] = useState<MenuItem[]>([])
    const [menuPreview, setMenuPreview] = useState<MenuItem[]>([])
    const [offers, setOffers] = useState<MenuItem[]>([])
    const [specialOffer, setSpecialOffer] = useState<MenuItem>()

    useEffect(() => {
        const fetchPreview = async () => {
            try {
                const response = await fetch('/api/menu/preview')
                const data = await response.json()
                setMenuPreview(data)
            } catch (err) {
                console.error(err)
            }
        }

        const fetchOffers = async () => {
            try {
                const response = await fetch('/api/menu/offers')
                const data = await response.json()
                setOffers(data)
            } catch (err) {
                console.error(err)
            }
        }
        const fetchSpecialOffer = async () => {
            try {
                const response = await fetch('/api/menu/special-offer')
                const data = await response.json()
                setSpecialOffer(data[0])
            } catch (err) {
                console.error(err)
            }
        }
        fetchSpecialOffer()
        fetchOffers()
        fetchPreview()
    }, [])

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const url = 
                    category && search ? `/api/menu?category=${category}&search=${search}`
                    : category ? `/api/menu?category=${category}`
                    : search ? `/api/menu?search=${search}`
                    : '/api/menu'
                const response = await fetch(url)
                const data = await response.json()
                setMenu(data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchMenu()
    }, [category, search])

    return { menu, menuPreview, offers, specialOffer }
}

export default useMenu