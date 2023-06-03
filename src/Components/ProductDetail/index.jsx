import { XMarkIcon } from '@heroicons/react/24/solid'

const ProductDetail = () => {
    return (
        <aside className='flex flex-col bg-white border border-black rounded-lg  w-[360px] fixed right-0 top-[68px] h-[calc(100vh-68px)]'>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Title</h2>
                <div>
                    <XMarkIcon className='w-6 h-6' />
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail