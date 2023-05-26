import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ACCESS_TOKEN, USER_LOGIN, history, http, settings } from '../../util/settings/config';
import { LoginModel } from '../../pages/login/Login';




export interface LoginModelSlice {
  email: string,
  accessToken: string
}
export interface LoginState {
  userLogin: LoginModelSlice | null
}
const initialState: LoginState = {
  userLogin: settings.getStorageJson(USER_LOGIN) ? settings.getStorageJson(USER_LOGIN) : null
}

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {},
  extraReducers: builder =>{
    builder
    .addCase(callApiLogin.fulfilled, (state: LoginState , action: PayloadAction<LoginModelSlice>)=>{
         state.userLogin = action.payload
         settings.setCookie(ACCESS_TOKEN, action.payload.accessToken,30)
         settings.setCookieJson(USER_LOGIN, action.payload, 30)
         settings.setStorage(ACCESS_TOKEN, action.payload.accessToken)
         settings.setStorageJson(USER_LOGIN, action.payload)
         history.push('/profile')
    })
  }
});

export const {} = loginSlice.actions

export default loginSlice.reducer

export const callApiLogin = createAsyncThunk('loginSlice/callApiLogin', async (userLogin: LoginModel)=>{
  const result = await http.post('/api/Users/signin', userLogin)
  return result.data.content
})