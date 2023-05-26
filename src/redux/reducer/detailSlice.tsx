import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/settings/config';


export interface DetailModel {
    id: number;
    name: string;
    alias: string;
    price: number;
    feature: boolean;
    description: string;
    size: string[];
    shortDescription: string;
    quantity: number;
    image: string;
    categories: Category[];
    relatedProducts: RelatedProduct[];
}

export interface Category {
    id: string;
    category: string;
}

export interface RelatedProduct {
    id: number;
    name: string;
    alias: string;
    feature: boolean;
    price: number;
    description: string;
    shortDescription: string;
    image: string;
}




export interface StateDetail {
    arrDetail: DetailModel | null
}
const initialState: StateDetail = {
    arrDetail: null
}

const detailSlice = createSlice({
    name: 'detailSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder 
        .addCase(callApiDetail.fulfilled, (state: StateDetail, action: PayloadAction<DetailModel>)=>{
            state.arrDetail = action.payload
        })
    }
});

export const { } = detailSlice.actions

export default detailSlice.reducer

export const callApiDetail = createAsyncThunk('detailSlice/callApiDetail', async (id: string) =>{
    const result = await http.get(`/api/Product/getbyid?=${id}`)
    return result.data.content
})