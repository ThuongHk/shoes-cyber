import { useEffect } from 'react'
import ProductCart from '../../components/productCart/ProductCart'
import { ProductModel, callApiProduct } from '../../redux/reducer/productSlice'
import { DispatchType, RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'

type Props = {}

function Home({}: Props) {
  const {arrProduct} = useSelector((state: RootState) => state.productSlice)

  
  const dispatch: DispatchType = useDispatch()
  useEffect(()=>{
   const actionThunk = callApiProduct()
   dispatch(actionThunk)
  },[])
  return (
    <div className="container">
      <h1 className="text-center h2">Shoes shop</h1>
       <div className="row">
        {arrProduct.map((prod: ProductModel, index: number) => {
          return <div className="col-3">
          <ProductCart key={index} prod={prod}/>
        </div>
        })}
        
       </div>
    </div>
  )
}

export default Home