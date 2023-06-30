import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { axiosEcommerce, getConfig } from "../utils/configAxios"
import Purchase from "../components/purchases/Purchase"

const Purchases = () => {
  const [purchasesHistory, setPurchasesHistory] = useState([])

   useEffect(() => {

      axiosEcommerce
          .get("/purchases", getConfig())
          .then(({data})=>{
            const orderPurchases = data.sort((a, b)=>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            )
            setPurchasesHistory(orderPurchases)
          })
          .catch((err)=>console.log(err))
    }, [])
    




  return (
    <section className="max-w-[700px] mx-auto">
          <section className="flex text-xs gap-2 items-center">
          <Link to="/">Home</Link>
          <div className="h-[6px] aspect-square rounded-full bg-red-500"></div>
          <span className="font-bold truncate w-[200px]">Purchases</span>
        </section>
        <section>
          <h3>My Purchases</h3>

          <section className="grid gap-8 px-2">
            {
              purchasesHistory.map(purchase =><Purchase key={purchase.id} purchase={purchase}/> )
            }
          </section>
        </section>



    </section>
  )
}

export default Purchases