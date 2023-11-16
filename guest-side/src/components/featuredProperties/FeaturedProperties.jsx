import "./featuredProperties.css"

import React from 'react'

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square200/433360699.webp?k=225056535c53ec78e8811e50f4933c73168fea40327835453b3800381fb19024&o=" 
      alt="" 
      className="fpImg" />
      <span className="fpName">Toronto Marriott Markham</span>
      <span className="fpCity">Markham</span>
      <span className="fpPrice">Starting from CAD 399</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>
      <div className="fpItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square200/234873037.webp?k=00194971631cb7c1f6b8055db28916812e5689e9a2e5e8a6da413c680cbd2136&o=" 
      alt="" 
      className="fpImg" />
      <span className="fpName">Pan Pacific Toronto</span>
      <span className="fpCity">North York</span>
      <span className="fpPrice">Starting from CAD 350</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>
      <div className="fpItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square200/69036559.webp?k=0c0b88fd0d63a4b168650641e6df0ee09d2ce00f26da4004021121557785a918&o=" 
      alt="" 
      className="fpImg" />
      <span className="fpName">Days Inn by Wyndham Toronto East Lakeview</span>
      <span className="fpCity">Scarborough</span>
      <span className="fpPrice">Starting from CAD 155</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>
    </div>
  )
}

export default FeaturedProperties
