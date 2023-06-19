import { useContext } from 'react'
import { ShoppingCartContext } from '../../Components/Context'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

function Home() {

  const { items, setSearchByProduct } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <h1 className='font-medium text-xl mb-4'>Principal products</h1>
      <input
        type='text'
        placeholder='Search a product'
        className='w-80 p-4 mb-4 border border-black rounded-lg'
        onChange={(event) => setSearchByProduct(event.target.value)} />
      <div className='grid grid-cols-4 gap-4 w-full max-w-screen-lg'>
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
