import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/653231.jpg?k=526fe3dd8fc78cbaccaee3be9e675b624e73b666ab757ecb0ebf31c7f7d96264&o=" 
        alt="Montreal"
        className="featuredImg" />
        <div className="featuredTitles">
          <h1>Montreal</h1>
          <h2>200 Properties</h2>
        </div>
      </div>
      

      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/971990.jpg?k=6d52fe4a57a984e2d540e3d7a1910f8a76fda3a57708faddd74e2109c3344b5e&o="
         alt="Toronto" 
         className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Toronto</h1>
          <h2>221 Properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/653256.jpg?k=db29effa75f45141e936338a82b0ca45d1a970acf280216cb28ae1a785ab447a&o="
         alt="Quebec City" 
         className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Quebec City</h1>
          <h2>185 Properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
