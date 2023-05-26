import React from 'react'
import { NavLink } from 'react-router-dom';
import { ACCESS_TOKEN, USER_LOGIN, history, settings } from '../../util/settings/config';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
type Props = {}

function Header({ }: Props) {
    const  {userLogin} = useSelector((state: RootState)=> state.loginSlice)
    const { listCart} = useSelector((state: RootState)=> state.cartSlice)
    
    console.log(userLogin)
    const renderLogin = () =>{
        if(userLogin){
            return <> <div className='carts flex-item'>
            <NavLink className='carts-link' to="/profile">
                {userLogin.email}
            </NavLink>
        </div>
        <div className='carts flex-item'>
            <a  style={{cursor: 'pointer'}}
            className='carts-link' onClick={()=>{
                settings.clearStorage(USER_LOGIN)
                settings.clearStorage(ACCESS_TOKEN)
                settings.eraseCookie(USER_LOGIN)
                settings.eraseCookie(ACCESS_TOKEN)
                history.push('/login')
                window.location.reload()
                }}>
                Logout
            </a>
        </div>
        </>
        }
        return <div className='carts flex-item'>
        <NavLink className='carts-link' to="/login">
            Login
        </NavLink>
        </div>
    }
    return (
        <div className='header'>
            <section className='logo-header'>
                <div className='logo'>
                    <NavLink className='logo-link' to="">
                        <img src={require('../../assets/img/logo.png')} alt="logo" />
                    </NavLink>
                </div>
                <div className='nav-bar-search'>
                    <div className='search flex-item'>
                        <NavLink className='search-link' to={"/"}>
                             Home
                        </NavLink>
                    </div>
                    <div className='carts flex-item'>
                        <NavLink className='carts-link' to="/cart">
                            <i className="fa fa-cart-plus"></i> {'(' + listCart.reduce((total,item)=> {return total += item.quantity},0)+ ')'}
                        </NavLink>
                    </div>
                    {renderLogin()}
                    {/* {renderLoginUI()} */}
                    <div className='register flex-item'>
                        <NavLink className={"carts-link"} to="/register">
                            Register
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className="menu d-flex align-items-center">
                <nav className="nav-menu">
                    <NavLink className="mx-2" to="/"><i className="fa fa-search"></i> Search</NavLink>
                    <NavLink className="mx-2" to="">Men</NavLink>
                    <NavLink className="mx-2" to="">Woman</NavLink>
                    <NavLink className="mx-2" to="">Kid</NavLink>
                    <NavLink className="mx-2" to="">Sport</NavLink>
                </nav>
            </section>
        </div>
    )
}

export default Header