import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {

    const [count, setCount] = useState(0)
    const [isProductDetailOpened, setIsProductDetailOpened] = useState(false)
    const [productToShow, setProductToShow] = useState({images:[]})
    const [cartProducts, setCartProducts] = useState([])

    const openProductDetail = () => setIsProductDetailOpened(true)
    const closeProductDetail = () => setIsProductDetailOpened(false)
    
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
            setCartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }