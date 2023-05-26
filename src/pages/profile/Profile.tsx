import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../redux/store'
import { callApiProfile } from '../../redux/reducer/profileSlice'
import { useFormik } from 'formik'

type Props = {}

function Profile({}: Props) {

  const dispatch: DispatchType = useDispatch()
  const { arrProfile} = useSelector((state: RootState)=> state.profileSlice)
  console.log(arrProfile)
  const formik = useFormik({   
    initialValues: {  },
    onSubmit: (values: any) => {
      console.log(values)
    }
  })
  useEffect(()=>{
    const actionThunk = callApiProfile()
    dispatch(actionThunk)
  },[])
  return (
    <div className='container'>
        <div className='row mt-4'>
          <div className='col-4'>
            <img src={'https://picsum.photos/200/200'} alt='123' className='rounded-circle' />
          </div>
          <div className='col-8'>
            <form>
              <div className='row'>
                <div className='col-6'>
                  <div className='form-group'>
                    <p>Email</p>
                    <input type='email' value={arrProfile?.email} onChange={formik.handleChange} className='form-control'/>
                  </div>
                  <div className='form-group'>
                    <p>Họ tên</p>
                    <input type='email' value={arrProfile?.name} onChange={formik.handleChange} className='form-control'/>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='form-group'>
                    <p>Số điện thoại</p>
                    <input type='email' value={arrProfile?.phone} onChange={formik.handleChange} className='form-control'/>
                  </div>
                  <div className='form-group'>
                    <p>Mật khẩu</p>
                    <input type='email' value={arrProfile?.password ? arrProfile?.password : '123' } className='form-control'/>
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <button type='submit' className='btn btn-outline-primary mt-3'>Update</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Profile