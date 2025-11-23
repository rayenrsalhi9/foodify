import { useState, useEffect } from 'react'
import { type MenuItem } from '@/types/types'

const useMenu = () => {
    
    const [menu, setMenu] = useState<MenuItem[]>([])
    const [menuPreview, setMenuPreview] = useState<MenuItem[]>([])
    const [offers, setOffers] = useState<MenuItem[]>([])
    const [specialOffer, setSpecialOffer] = useState<MenuItem>()

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
        fetchMenu()
        fetchPreview()
    }, [])

    return { menu, menuPreview, offers, specialOffer }
}

export default useMenu