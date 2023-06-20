import { useContext } from 'react'
import { ShoppingCartContext } from '../../Components/Context'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

function Home() {

  const { items, setSearchByTitle, searchByTitle, filteredItems } = useContext(ShoppingCartContext)

  const renderProducts = () => {
    if (searchByTitle != '') {
      if (filteredItems?.length > 0) {
        return filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      } else {
        return <span className='font-light w-80'>Sorry, we don't have that product =(</span>
      }
    } else {
      return items?.map(item => (
        <Card key={item.id} data={item} />
      ))
    }
  }

  return (
    <Layout>
      <h1 className='font-medium text-xl mb-4'>Principal products</h1>
      <input
        type='text'
        placeholder='Search a product'
        className='w-80 p-4 mb-4 border border-black rounded-lg'
        onChange={(event) => setSearchByTitle(event.target.value)} />
      <div className='grid grid-cols-4 gap-4 w-full max-w-screen-lg'>
        {renderProducts()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
