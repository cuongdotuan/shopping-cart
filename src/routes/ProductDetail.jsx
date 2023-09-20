import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../hooks/useAppContext'
import Carousel from '../components/Carousel'
import { useShoppingCartContext } from '../hooks/useShoppingCartContext'
const ProductDetail = () => {
    const { productId } = useParams()
    const { findProductById } = useAppContext()
    const { onAddItem } = useShoppingCartContext()

    const product = findProductById(productId)
    const images = product.images

    const handleAddItem = () => {
        onAddItem({ productId: product.id })
        alert(`đã thêm sản phẩm ${product.title} vào giỏ hàng`)
    }

    return (
        <main>
            <h1 className='text-center'>{product.title}</h1>

            <Carousel images={images} />
            <div className='text-center'>
                <p className='text-xl font-normal'>$ {product.price}</p>
                <p><i>Brand: {product.brand}</i></p>
                <p>Category: {product.category}</p>
                <p>{product.description}</p>
            </div>
            <div className='text-center'><button onClick={handleAddItem} className='bg-blue-500 px-2 py-2 rounded-md text-white'>Add to cart</button></div>
        </main>
    )
}

export default ProductDetail