import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../Context'

const ProductDetail = () => {

    const {isProductDetailOpened, closeProductDetail, productToShow} = useContext(ShoppingCartContext)

    return (
        <aside className={isProductDetailOpened ? 'flex flex-col bg-white border border-black rounded-lg  w-[360px] fixed right-0 top-[68px] h-[calc(100vh-68px)]' : 'hidden'}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Title</h2>
                <button onClick={closeProductDetail}>
                    <XMarkIcon className='w-6 h-6 cursor-pointer' />
                </button>
            </div>
            <figure className='px-6'>
                <img
                    className='h-full w-full rounded-lg'
                    src={productToShow.images[0]}
                    alt={productToShow.title}/>
            </figure>
            <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
                    <span className='font-medium text-md'>{productToShow.title}</span>
                    <span className='font-light text-sm'>{productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail