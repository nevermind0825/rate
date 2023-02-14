import React from 'react'

const H3Header = ({data}) => {
    return (
        <div style={{width:"100%",textAlign:"center"}}>
            <h3 style={h3font}>{data}</h3>
        </div>

    )
}

export default H3Header

const h3font = {
    fontWeight: "700",
    padding:"1rem 1rem"
}