import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = ({ data: { id, title, price, images }, handleDelete }) => {
    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img
                        className='w-full h-full rounded-lg object-cover'
                        src={images[0]}
                        alt={title}
                    />
                </figure>
                <p className='text-sm font-light'>
                    {title}
                </p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>
                    ${price}
                </p>
                <XMarkIcon
                    className='w-6 h-6 cursor-pointer'
                    onClick={() => handleDelete(id)}
                />
            </div>
        </div>
    )
}

export default OrderCard