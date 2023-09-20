import React, { useState } from 'react'

const Carousel = ({images}) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onNext = () => {
        
        if (selectedIndex === images.length - 1) {
            setSelectedIndex(0)
            return
        }

        setSelectedIndex(selectedIndex + 1)

    }

    const onPrev = () => {
        
        if (selectedIndex === 0) {
            setSelectedIndex(images.length - 1)
            return
        }
        setSelectedIndex(selectedIndex - 1)
    }
    return (

        <div className="relative h-80 w-80 my-0 mx-auto object-cover">
            <img className='max-w-xs aspect-square' src={images[selectedIndex]} alt="..." />
            <div className="absolute top-0 left-0 h-full w-full flex justify-between items-center object-cover">
                <button className='text-white bg-zinc-800 px-2 rounded' onClick={onPrev}>{"Prev"}</button>
                <button className='text-white bg-zinc-800 px-2 rounded' onClick={onNext}>{"Next"}</button>
            </div>


        </div>


    )
}

export default Carousel