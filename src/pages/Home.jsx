import axios from "axios"
import { useEffect, useState } from "react"
import { axiosEcommerce } from "../utils/configAxios"
import Product from "../components/home/Product"

const Home = () => {

    const [products, setProducts] = useState([])

    const [categories, setCategories] = useState([])


    useEffect(() => {
        const URL = "https://e-commerce-api-v2.academlo.tech/api/v1/categories"

        axiosEcommerce
            .get("/categories")
            .then(({data})=> setCategories(data))
            .catch((err)=>console.log(err))

    }, [])

    useEffect(() => {

        const URL="https://e-commerce-api-v2.academlo.tech/api/v1/products"
        
        axiosEcommerce
            .get("/products")
            .then(({data})=> setProducts(data))
            .catch((err)=>console.log(err))
      
    }, [])
    
    

    

  return (
    <section>
        <form>
            <div>
                <input type="text" />
                <button><i className='bx bx-search'></i></button>
            </div>

            <section>
                <h4>Category</h4>
                <ul>
                    <li>All Category</li>
                    {
                        categories.map((categorie)=><li key={categorie.id}>{categorie.name}</li>)
                    }
                </ul>
            </section>

            <section className="grid gap-10">
                {
                    products.map((product)=> <Product key={product.id} product={product}/>)
                }
            </section>
        </form>
    </section>
  )
}

export default Home