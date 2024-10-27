import React from 'react'

const ImagePlate = ({src, onClick}) => {
    return (
        <img className={`hover:backdrop-opacity-50 ${onClick ? 'cursor-pointer' : 'cursor-move'} rounded-lg`} src={src} onClick={onClick} />
    )
}

export default ImagePlate