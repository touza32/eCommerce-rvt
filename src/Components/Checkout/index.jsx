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
        setCount
    } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
        setCount(count - 1)
    }

    return (
        <aside className={isCheckoutOpened ? 'flex flex-col bg-white border border-black rounded-lg  w-[360px] fixed right-0 top-[68px] h-[calc(100vh-68px)]' : 'hidden'}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button onClick={closeCheckout}>
                    <XMarkIcon className='w-6 h-6 cursor-pointer' />
                </button>
            </div>
            <div className='px-6 gap-3 overflow-y-scroll'>
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
            <div className='px-6 flex justify-between items-center'>
                <span className='font-light'>Total:</span>
                <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
            </div>
        </aside>
    )
}

export default Checkout