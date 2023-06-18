import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Components/Context'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'

function MyOrder() {

  const { order } = useContext(ShoppingCartContext)
  const { id } = useParams()
  const index = id === 'last' ? order?.length - 1 : id

  return (
    <Layout>
      <div className='w-80 relative flex items-center justify-center mb-6'>
        <Link
          className='absolute left-0'
          to='/my-orders'>
          <ChevronLeftIcon className='w-6 h-6 cursor-pointer' />
        </Link>
        <h1>My orders</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          order?.[index].products.map(product => (
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