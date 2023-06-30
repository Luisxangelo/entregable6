import axios from "axios"
import { useEffect, useState } from "react"
import { axiosEcommerce } from "../utils/configAxios"
import Product from "../components/home/Product"
import ListProducts from "../components/home/ListProducts"

const Home = () => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [productName, setProductName] = useState("")
    const [currentCategory, setCurrentCategory] = useState("")

    const productsByname = products.filter((product) => product.title.toLowerCase().includes(productName))

    const handleSubmit = (e) => {
        e.preventDefault()
        const currentProuctName = e.target.productName.value
        setProductName(currentProuctName.toLowerCase())
    }

    const handleClickCategory = (e) =>{
        setCurrentCategory(e.target.dataset.category)
    }


    useEffect(() => {

        axiosEcommerce
            .get("/categories")
            .then(({data})=> setCategories(data))
            .catch((err)=>console.log(err))

    }, [])

    useEffect(() => {
        axiosEcommerce
            .get(`/products?categoryId=${currentCategory}`)
            .then(({data})=> setProducts(data))
            .catch((err)=>console.log(err))
        
    }, [currentCategory])

  return (
    <section>
        <form onSubmit={handleSubmit}>
            <div>
                <input id="productName" type="text" />
                <button><i className='bx bx-search'></i></button>
            </div>

            <section>
                <h4>Category</h4>
                <ul>
                    <li data-category = "" onClick={handleClickCategory}>All Category</li>
                    {
                        categories.map((categorie)=><li onClick={handleClickCategory} data-category = {categorie.id} key={categorie.id}>{categorie.name}</li>)
                    }
                </ul>
            </section>

            <ListProducts products={productsByname}/>
        </form>
    </section>
  )
}

export default Home