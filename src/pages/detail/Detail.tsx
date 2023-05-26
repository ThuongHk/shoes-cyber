import React, {useEffect} from 'react'
import ProductCart from '../../components/productCart/ProductCart'
import { DispatchType, RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { RelatedProduct, callApiDetail } from '../../redux/reducer/detailSlice'
import { useParams } from 'react-router-dom'
import { addCart } from '../../redux/reducer/cartSlice'

type Props = {}

function Detail({}: Props) {
  const dispatch: DispatchType = useDispatch()
  const params = useParams()
  console.log(params.id)
  const id: string | undefined = params.id
  const { arrDetail } = useSelector((state: RootState)=> state.detailSlice)
  console.log(arrDetail)

  useEffect(()=>{
    const actionThunk = callApiDetail(id as string)
    dispatch(actionThunk)
  },[id])
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <img src={arrDetail?.image ? arrDetail?.image : 'https://picsum.photos/200/200'} alt={arrDetail?.name} className='w-100' />
        </div>
        <div className='col-8'>
          <h4>{arrDetail?.name}</h4>
          <p>{arrDetail?.shortDescription}</p>
          <button className='btn btn-outline-primary' onClick={()=> {
            let cartItem = {...arrDetail, quantity: 1} 
            dispatch(addCart(cartItem))
          }}>Thêm vào giỏ hàng</button>
        </div>
      </div>
      <div className='row'>
        {arrDetail?.relatedProducts.map((prod: RelatedProduct, index: number) =>{
                 return <div key={index} className='col-4'>
                 <ProductCart prod={prod}/>
               </div>
        })}
        
      </div>
    </div>
  )
}

export default Detail