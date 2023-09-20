import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 py-2 flex justify-center gap-4 text-white text-lg'> 
                <NavLink to={"/"} className={"hover:text-orange-400"}>HomePage</NavLink>
                <NavLink to={"/about"} className={"hover:text-orange-400"}>About</NavLink>
                <NavLink to={"/products"} className={"hover:text-orange-400"}>Products</NavLink>
                <NavLink to={"/shopping-cart"} className={"hover:text-orange-400"}>ShoppingCart</NavLink>
            </div>
            <div>
                <NavLink to={"/login"}>Login</NavLink>
                <NavLink to={"/sign-up"}>Signup</NavLink>
            </div>
        </nav>
    )
}

export default Navigation