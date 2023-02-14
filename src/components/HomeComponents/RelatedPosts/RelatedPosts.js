import React from 'react'
import thumb1 from '../../../images/Home_img/thumb1.png'
import thumb2 from '../../../images/Home_img/thumb2.png'
import thumb3 from '../../../images/Home_img/thumb3.png'
import thumb4 from '../../../images/Home_img/thumb4.png'
import { navigate } from 'gatsby'

const pictures = [
    {
        pic:thumb1,
        url:"http://localhost:8000/buyHome/sub/afford"
    }, 
    {
        pic:thumb2,
        url:"http://localhost:8000/mortgageBasics/course/mor101/"
    }, 
    {
        pic:thumb3,
        url:"http://localhost:8000/mortgageBasics/creditmeans/"
    }, 
    {
        pic:thumb4,
        url:"http://localhost:8000/refinanceHome/refinance/"
    }
];

const RelatedPosts = () => {
    return (
        <>
            <div style={head}>Related Posts</div>
            <div style={thumb_div}>
                {pictures.map(
                    item => <img style={thumbnail} onClick={()=>navigate(item.url)} src={item.pic}></img>
                )}
            </div>
        </>
    )
}

export default RelatedPosts

const head =
{
    padding: "2rem 0",
    backgroundColor: "#5F5E5A",
    textAlign: "center",
    fontSize: "2.3rem",
    fontWeight: "bold",
    color: "#fff"
}

const thumb_div = {
    padding:"2rem 0",
    display: "flex",
    justifyContent: "center",
    columnGap: "1rem",
    rowGap: "1rem",
    flexWrap:"wrap"
}

const thumbnail = {
    width: "18%",
    minWidth:"10rem"
}
