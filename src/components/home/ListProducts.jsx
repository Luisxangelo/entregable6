import Product from "./Product"

const ListProducts = ({products}) => {
  return (
    <section className="grid gap-10 px-2">
    {
        products.map((product)=> <Product key={product.id} product={product}/>)
    }
</section>
  )
}

export default ListProducts