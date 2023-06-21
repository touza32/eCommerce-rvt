import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Components/Context'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'


function MyOrders() {

  const { order } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <h1 className='font-medium text-xl mb-4'>
        MyOrders
      </h1>
      <div>
        {
          order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                order={order}
              />
            </Link>
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrders