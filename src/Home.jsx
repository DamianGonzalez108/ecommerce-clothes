import Index from "./components/index/Index"
import Category from "./components/category/Category"
import ItemListContainer from "./components/items/ItemListContainer"

const Home = () => {
  return (
    <div>
        <Index/>
        <Category/>
        <ItemListContainer/>
    </div>
  )
}

export default Home