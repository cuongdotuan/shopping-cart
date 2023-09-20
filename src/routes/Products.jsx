import React, { useContext } from 'react'

import { useAppContext } from '../hooks/useAppContext'
import { Link } from 'react-router-dom'



const Products = () => {
    const { products } = useAppContext()
    return (
        <main className='max-w-7xl my-0 mx-auto'>
            <h1 className='text-4xl text-center mb-8'>Products List</h1>
            <div className='product-list flex flex-wrap'>
                {products.map((product) =>
                    <Link key={product.id} to={`/products/${product.id}`}>
                        <div className="product-card max-w-xs px-4 mb-5 flex flex-col">
                            <div className='flex-1'>
                                <img src={product.thumbnail} alt={product.title} />
                            </div>
                            <div className='text-center'>
                                <p>{product.title}</p>
                                <p>$ {product.price}</p>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </main>
    )
}

export default Products