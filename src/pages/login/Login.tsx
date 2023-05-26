import React from 'react'
import { DispatchType } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup'
import styles from './Login.module.scss'
import { callApiLogin } from '../../redux/reducer/loginSlice'

type Props = {}
export type LoginModel = {
  email: string,
  password: string
}
function Login({ }: Props) {
  const dispatch: DispatchType = useDispatch()
  const formik = useFormik<LoginModel>({
    initialValues: {
      email: '',
      password: ''

    },
    validationSchema: yup.object({
      email: yup.string().required('Email không được bỏ trống'),
      password: yup.string().required('Mật khẩu không được bỏ trống ')
    }),
    onSubmit: (values: LoginModel) => {
    
      const actionThunk = callApiLogin(values)
      dispatch(actionThunk)
    }
  })
   return (
    <div className='w-25 m-auto mb-4'>
      <h2 className='h2'>Đăng nhập</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <p>Email:</p>
          <input type="email" className="form-control" name='email' onChange={formik.handleChange} />
          { formik.errors.email && formik.touched.email && (<p className={styles.err}>{formik.errors.email}</p>)}
        </div>
        <div className="form-group">
          <p>Mật khẩu:</p>
          <input type="password" className="form-control" name='password' onChange={formik.handleChange} />
        </div>
       <button type="submit" className='btn btn-outline-primary mt-3'>Submit</button>
      </form>
    </div>
  )
}

export default Login