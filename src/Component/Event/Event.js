import React from 'react'
import EventImg from '../../assets/Birthdaycake.png';
function Event() {
  return (
    <>
    <div className="event-page">
    <h1> Birthday Bash </h1>
    <div className="event-img">
    <img src={EventImg} alt ="" />
    </div>
    </div>
    {/* <div>
      Birthday Bash
    </div> */}
    </>
  )
}

export default Event;