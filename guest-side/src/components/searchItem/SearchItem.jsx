import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://cf2.bstatic.com/xdata/images/hotel/square200/491466078.webp?k=a2e4d4b256314edf860122f228a0bc32a395091c9bda22c6943e977ab246f650&o=" 
        alt="" 
        className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxi0p">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire studio . 1 bathroom . 21m 1 full bed
            </span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
                
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$1235</span>
                <span className="siTaxOp">Includes taxes and fees&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                 </span>
                <button className="siCheckButton">See availablity</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem
