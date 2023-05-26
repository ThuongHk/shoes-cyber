import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductModel } from '../../redux/reducer/productSlice'
import { RelatedProduct } from '../../redux/reducer/detailSlice'

type Props = {
  prod?: ProductModel | RelatedProduct
}

function ProductCart({prod}: Props) {
  return (
    <div className='cart w-75 border m-3'>
        <div className='head-cart position-relative d-flex flex-column'>
        <i className="fa fa-heartbeat position-absolute end-0 mt-2 text-danger mr-2 h5 mx-2" />
        <img src={prod?.image ? prod?.image : 'https://picsum.photos/200/200'} alt={prod?.name}/>
        </div>
        <div className='body bg-secondary text-light'>
            <h6>{prod?.name ? prod?.name : 'Lorem ipsum dolor sit amet'}</h6>
            <p>{prod?.shortDescription ? prod?.shortDescription : 'Lorem ipsum dolor sit am'}</p>
        </div>
        <div className='d-flex'>
            <NavLink to={`/detail/${prod?.id}`} className='w-50 bg-danger text-center text-decoration-none'>Buy now</NavLink>
            <span className='w-50 bg-success text-center'>{prod?.price}$</span>
        </div>
    </div>
  )
}

export default ProductCart