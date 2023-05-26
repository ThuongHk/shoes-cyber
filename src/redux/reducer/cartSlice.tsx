import { createSlice } from '@reduxjs/toolkit'
import { ProductModel } from './productSlice';



export interface StateCart {
    listCart: ProductModel[]
}

const initialState: StateCart = {
   listCart: []
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addCart: (state, action) =>{
        let cartItem = state.listCart.find(item => item.id === action.payload.id)
        if(cartItem){
            cartItem.quantity += 1
        }else{
            state.listCart.push(action.payload);
            
        }
       
    },
    deleteCart: (state, action) =>{
        state.listCart = state.listCart.filter(item => item.id !== action.payload)
    },
    quantityCart: (state, action) => {
        let {id, quantity} = action.payload
        let itemCart = state.listCart.find(item => item.id === id)
        if(itemCart){
            itemCart.quantity += quantity

            if(itemCart.quantity < 1){
               if(window.confirm('Do you want to delete ?')){
                     state.listCart = state.listCart.filter(item => item.id !== id)
               }else{
                itemCart.quantity -= quantity
               }
         }
        }
        
        
    }
  }
});

export const {addCart, deleteCart, quantityCart} = cartSlice.actions

export default cartSlice.reducer