const OrdersCard = ({ order: { date, totalProducts, totalPrice } }) => {
    return (
        <div className='flex justify-between items-center mb-3 border border-black p-2'>
            <p className='flex flex-col'>
                <span>Order #</span>
                <span>Date: {date}</span>
                <span>Num. of products: {totalProducts}</span>
                <span>Total price: ${totalPrice}</span>
            </p>
        </div>
    )
}

export default OrdersCard