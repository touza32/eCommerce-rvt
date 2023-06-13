import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../Context'
import { totalPrice } from '../utils'
import OrderCard from '../OrderCard'

const Checkout = () => {

    const {
        isCheckoutOpened,
        closeCheckout,
        cartProducts,
        setCartProducts,
        count,
        setCount,
        order,
        setOrder
    } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
        setCount(count - 1)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '12.06.23',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }
        setOrder([...order, orderToAdd])
        setCartProducts([])
        setCount(0)
    }

    return (
        <aside className={isCheckoutOpened ? 'flex flex-col bg-white border border-black rounded-lg  w-[360px] fixed right-0 top-[68px] h-[calc(100vh-68px)]' : 'hidden'}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button onClick={closeCheckout}>
                    <XMarkIcon className='w-6 h-6 cursor-pointer' />
                </button>
            </div>
            <div className='px-6 gap-3 overflow-y-scroll flex-1'>
                {
                    cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            data={product}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
                </p>
                <button
                    className='w-full py-3 bg-black text-white rounded-lg'
                    onClick={handleCheckout}>
                    Checkout
                </button>
            </div>
        </aside>
    )
}

export default Checkout