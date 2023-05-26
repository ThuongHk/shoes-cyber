import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

type Props = {}

function TemplateDeafault() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default TemplateDeafault