import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../Context'

const Checkout = () => {

    const {isCheckoutOpened, closeCheckout} = useContext(ShoppingCartContext)

    return (
        <aside className={isCheckoutOpened ? 'flex flex-col bg-white border border-black rounded-lg  w-[360px] fixed right-0 top-[68px] h-[calc(100vh-68px)]' : 'hidden'}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button onClick={closeCheckout}>
                    <XMarkIcon className='w-6 h-6 cursor-pointer' />
                </button>
            </div>
        </aside>
    )
}

export default Checkout