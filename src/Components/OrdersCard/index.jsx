import { ChevronRightIcon } from "@heroicons/react/24/solid"

const OrdersCard = ({ order: { date, totalProducts, totalPrice } }) => {
    return (
        <div className='w-80 flex justify-between items-center mb-3 border border-black p-4 rounded-lg'>
            <p className='flex flex-col'>
                <span>{date}</span>
                <span>{totalProducts} products</span>
            </p>
            <p className='flex items-center gap-2'>
                <span className='font-medium text-2xl'>${totalPrice}</span>
                <ChevronRightIcon className='h-6 w-6' />
            </p>
        </div>
    )
}

export default OrdersCard