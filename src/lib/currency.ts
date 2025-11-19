const formatPrice = (price: number): string => {
    return `TND ${(price / 1000).toFixed(2)}`
}

export { formatPrice }