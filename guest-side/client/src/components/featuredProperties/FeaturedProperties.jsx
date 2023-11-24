import useFetch from "../../../../../client/src/hooks/useFetch";
import "./featuredProperties.css"

import React from 'react'

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels?featured=true");  //如果在后面加上&limit=4 就是空的array，不显示数据，后端也看不到。 问题应该是在/controllers/hotels -getHotels 的limit问题。
 console.log(data)                                                                              //这个url在后端也调不出来，mongodb里面确定已经有4个featured=true的hotel，不加&limit= 可以正常显示数据。
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
