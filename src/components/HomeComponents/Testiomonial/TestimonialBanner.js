import React from 'react'

import logo from '../../../images/dmv.jpg'

export const Testimon = () => {
  return (
    <div style={container}>
      <h2 style={h2}>Client Testimonial</h2>
      <div style={testimonial}>
        <div style={rectangle}>
          <p style={desc}>
            Hello there we had a wonderful time in here. Business went so smooth and we were happy with the services.
          </p>
            <p style={desc2}>- by somebody</p>
        </div>
      </div>
      <img style={image} src={logo}></img>
    </div>
  )
}

const TestimonialBanner = () => {
  return (
    <div style={container}>
      <Testimon></Testimon>
      <button style={button}>See more of our Client's Testimonials...</button>
    </div>


  )
}

export default TestimonialBanner


const container = {
  backgroundColor: "var(--color-prime)",
  width: "100%",
  color: "#fff",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow:"hidden"
}

const h2 = {
  fontSize: "4rem",
  fontFamily: "pacific",
}

const testimonial = {
  display: "flex",
  columnGap: "0.5rem",
  justifyContent: "center",
  width: "100%",
  padding: "1rem",
}

const rectangle = {
  width: "100%",
  backgroundColor: "#fff",
  minHeight: "15rem",
  borderRadius: ".3rem",
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "justify",
  position:"relative",
}

const image = {
  width: "24%",
}

const button = {
  width: "70%",
  backgroundColor: "#fff",
  border: "none",
  fontSize: "1.2rem",
  borderRadius: ".3rem",
  padding: "0.5rem",
  fontWeight: "400"
}

const desc = {
  color: "#000",
  padding:"0 2rem"
}

const desc2 = {
  color: "#000",
  alignSelf: "end",
  justifySelf: "end",
  position:"absolute"
}