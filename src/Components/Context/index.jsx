import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {

    const [count, setCount] = useState(0)
    const [isProductDetailOpened, setIsProductDetailOpened] = useState(false)
    const [productToShow, setProductToShow] = useState({images:[]})
    const [cartProducts, setCartProducts] = useState([])
    const [isCheckoutOpened, setIsCheckoutOpened] = useState(false)

    const openProductDetail = () => setIsProductDetailOpened(true)
    const closeProductDetail = () => setIsProductDetailOpened(false)
    const openCheckout = () => setIsCheckoutOpened(true)
    const closeCheckout = () => setIsCheckoutOpened(false)
    
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
            closeCheckout
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }