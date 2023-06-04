import { useContext } from 'react'
import { ShoppingCartContext } from '../Context'
import { PlusIcon } from '@heroicons/react/24/outline'

const Card = ({ data: {category, title, price, images}, data }) => {
    
    const {
        count,
        setCount,
        openProductDetail,
        setProductToShow,
        cartProducts,
        setCartProducts
    } = useContext(ShoppingCartContext)
        
    const showProduct = () => {
        openProductDetail()
        setProductToShow(data)
    }

    const addProductToCart = () => {
        setCount(count+1)
        setCartProducts([...cartProducts, data])
    }

    return (
        <div className='bg-white cursor-pointer w-56 h-60'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-xs m-2 px-3 py-0.5'>
                    {category.name}
                </span>
                <img
                    className='w-full h-full object-cover rounded-lg' src={images[0]} alt={title}
                    onClick={showProduct}/>
                <button
                    className='absolute top-0 right-0 bg-white rounded-full w-6 h-6 m-2 p-1'
                    onClick={addProductToCart}>
                    <PlusIcon/>
                </button>
            </figure>
            <p className='flex justify-between items-center'>
                <span className='text-sm font-light'> 
                    {title}
                </span>
                <span className='text-lg font-medium'>
                    ${price}
                </span>
            </p>
        </div>
    )
}

export default Card