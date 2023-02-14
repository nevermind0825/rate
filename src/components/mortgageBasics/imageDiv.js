import React from 'react'

const ImageDiv = ({src}) => {
    return (
        <div style={imageCont}>
            <img style={image} src={src} />
        </div>
    )
}

export default ImageDiv

const imageCont = {
    display:"flex",
    justifyContent:"center",
    backgroundColor:"var(--color-prime)",
    padding:"2rem 0rem"
}
const image = {
    width:"80%"
}