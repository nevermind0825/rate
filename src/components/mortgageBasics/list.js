import React from 'react'

const ListULI = ({ data }) => {
    return (
        <div style={listCont}>
            <ul style={list}>
                {data.map(list => <li style={item}>{list}</li>)}
            </ul>
        </div>
    )
}

export default ListULI

const listCont = {
    fontSize: '1.2rem',
    display: 'flex',
    fontWeight: '600',
    justifyContent: 'center',
    // padding: "1rem 3rem",
}
const list = {}
const item = {
    listStyle: 'square'
}