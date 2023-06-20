import { createContext, useState, useEffect } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {

    const [count, setCount] = useState(0)
    const [isProductDetailOpened, setIsProductDetailOpened] = useState(false)
    const [productToShow, setProductToShow] = useState({ images: [] })
    const [cartProducts, setCartProducts] = useState([])
    const [isCheckoutOpened, setIsCheckoutOpened] = useState(false)
    const [order, setOrder] = useState([])
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)
    const [searchByTitle, setSearchByTitle] = useState('')

    const openProductDetail = () => setIsProductDetailOpened(true)
    const closeProductDetail = () => setIsProductDetailOpened(false)
    const openCheckout = () => setIsCheckoutOpened(true)
    const closeCheckout = () => setIsCheckoutOpened(false)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    useEffect(() => {
        if (searchByTitle != '') setFilteredItems(items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase())))
    }, [searchByTitle])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpened,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutOpened,
            openCheckout,
            closeCheckout,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }