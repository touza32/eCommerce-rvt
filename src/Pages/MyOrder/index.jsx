import { useContext } from 'react'
import { ShoppingCartContext } from '../../Components/Context'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'

function MyOrder() {

  const { order } = useContext(ShoppingCartContext)

  return (
    <Layout>
      MyOrder
      <div className='flex flex-col w-80'>
        {
          order?.slice(-1)[0].products.map(product => (
            <OrderCard
              key={product.id}
              data={product}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder