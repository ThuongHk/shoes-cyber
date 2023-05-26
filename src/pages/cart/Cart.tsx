import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../redux/store'
import { ProductModel } from '../../redux/reducer/productSlice'
import { deleteCart, quantityCart } from '../../redux/reducer/cartSlice'


type Props = {}

function Cart({}: Props) {
  const dispatch: DispatchType = useDispatch()
  const { listCart} = useSelector((state: RootState)=> state.cartSlice)
  console.log(listCart)

  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th>TT</th>
            <th>Name</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { listCart.map((item: ProductModel) =>{
            return <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td><img style={{width:'70px', height:'70px'}} src={item.image} alt={item.name}/></td>
            <td>{item.price}</td>
            <td><button className='btn btn-outline-primary btn-sm' 
            onClick={()=> {
              let itemCart = {id: item.id, quantity: 1}
             dispatch(quantityCart(itemCart))
          }}
            >+</button> &ensp;{item.quantity}&ensp;<button className='btn btn-outline-primary btn-sm'
            onClick={()=> {
              let itemCart = {id: item.id, quantity: -1}
             dispatch(quantityCart(itemCart))
          }}
            >-</button></td>
            <td>{item.quantity * item.price}</td>
            <td><button className='btn btn-danger' onClick={()=>{dispatch(deleteCart(item.id))}}>Del</button></td>
          </tr>
          })}
        </tbody>

      </table>
    </div>
  )
}

export default Cart