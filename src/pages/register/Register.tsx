import React, { useState } from 'react';
import { Button, Cascader, DatePicker, Form, Input, InputNumber, Radio, Select, Switch, TreeSelect} from 'antd';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { http } from '../../util/settings/config';

type SizeType = Parameters<typeof Form>[0]['size'];
export interface RegisterModel { 
  email: string,
  password: string,
  name: string,
  gender: boolean,
  phone: string
}

const App: React.FC = () => {

  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  const formik = useFormik<RegisterModel>({
    initialValues: { 
       email: '',
       password: '',
       name: '',
       gender: true,
       phone: ''
    },
    onSubmit: async (values: RegisterModel) =>{
      try {
        await http.post('/api/Users/signup', values)
      } catch (error) {
        console.log(error);
      }
    }
  })

  const handlChangeGender = (name: string)=>{
    return (value: string) =>{
      formik.setFieldValue(name, value)
    }
  }
  return (

    <Form className=' m-auto mt-5'
    onSubmitCapture={formik.handleSubmit}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      style={{ maxWidth: 600 }}
    >
       <h2 className='text-center mt-4 mb-4'>Đăng ký một tài khoản</h2>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
       
      </Form.Item>
      <Form.Item label="Email">
        <Input name='email' onChange={formik.handleChange} />
      </Form.Item>  
      <Form.Item label="Mật khẩu"  >
        <Input name='password' onChange={formik.handleChange} />
      </Form.Item>  
      <Form.Item label="Họ tên">
        <Input name='name' onChange={formik.handleChange}/>
      </Form.Item>        
      <Form.Item label="Giới tính" valuePropName="checked">
        <Switch onChange={handlChangeGender('gender') as any} />
      </Form.Item>
      <Form.Item label="Số điện thoại">
        <Input name='phone' onChange={formik.handleChange}/>
      </Form.Item>  
      <Form.Item label="Register">
        <Button className='btn btn-outline-primary' htmlType='submit'>Rigister</Button>
      </Form.Item>      
    </Form>
  );
};

export default App;