import "./room.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Room = () => {
  const [slideNumber,setSlideNumber]=useState(0);
  const [open,setOpen]=useState(false);

  const photos = [
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/309849186.jpg?k=a0aaa7e548bc26ea3d97b3eb9c5c28bdf8c81c9c2af36dfd15098c19acd88a89&o=&hp=1"
    },
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/309816033.jpg?k=a1918297fd3f0cd8cfc89f6b78c16def206d7ee97a1340bd833cd7f2ac05166b&o=&hp=1"
    },
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/318395647.jpg?k=17fe080e57962687cedc7753930fa46fb98695837f526854cc59bf9b2e2e5bd7&o=&hp=1"
    },
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/309849186.jpg?k=a0aaa7e548bc26ea3d97b3eb9c5c28bdf8c81c9c2af36dfd15098c19acd88a89&o=&hp=1"
    },
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/309816033.jpg?k=a1918297fd3f0cd8cfc89f6b78c16def206d7ee97a1340bd833cd7f2ac05166b&o=&hp=1"
    },
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/318395647.jpg?k=17fe080e57962687cedc7753930fa46fb98695837f526854cc59bf9b2e2e5bd7&o=&hp=1"
    }
  ];


  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove =(direction)=>{
    let newSlidesNumber;

    if(direction ==="l"){
      newSlidesNumber= slideNumber === 0 ? 5 : slideNumber-1;
    }
    else{
      newSlidesNumber= slideNumber === 5 ? 0 : slideNumber+1;
    }
    setSlideNumber(newSlidesNumber)
  };
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="roomContainer">
        {open && <div className="slider">
      <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
      <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
      <div className="sliderWrapper">
        <img src={photos[slideNumber].src} alt="" className="slideImg" />
      </div>
      <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="roomWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="roomTitle">Grand Hotel</h1>
          <div className="roomAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>941 Progress Ave</span>
          </div>
          <span className="roomDistance">
            Excellent location - 500m from center
          </span>
          <span className="roomPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="roomImages">
    {photos.map((photo,i)=>(
      <div className="roomImgWrapper">
        <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="roomImg" />
      </div>
    ))}
          </div>
          <div className="roomDetails">
            <div className="roomDetailsTexts">
            <h1 className="roomTitle">Stay in the heart of Toronto</h1>
            <p className="roomDesc">
            This motel is located in Niagara Falls, Ontario and is within an 11-minute walk of Niagara Casino. The motel features a seasonal outdoor pool and rooms with free Wi-Fi.

Olympia Motel rooms include a work desk and seating area. The rooms are equipped with cable TV.

The motel also offers fax and copy services.

            </p>
            </div>
            <div className="roomDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
              The Motel Olympia is one mile from the famous Horseshoe Falls. The hotel is within a 14-minute walk of Skylon Towers, which features dining, shopping and views of the Niagara Falls.
              </span>
              <h2>
                <b>$945 (9 nights)</b>
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Room
