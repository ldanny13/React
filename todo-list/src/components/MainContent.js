import React from "react"
import morning from "../images/morning_sun.jpeg"
import afternoon from "../images/afternoon.jpeg"
import nightmoon from "../images/moon.jpeg"


function MainContent()
{
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  let imgofday

  if(hours < 12)
  {
    timeOfDay = "morning"
    imgofday = morning
  }
  else if (hours >= 12 && hours <= 18){
    timeOfDay = "afternoon"
    imgofday = afternoon
  }
  else{
    timeOfDay = "night"
    imgofday = nightmoon
  }

  return (
  <div>
    <main className="main-content"> 

      <h2> It is currently {date.getHours()} o'clock </h2>
      <img src={imgofday} alt="img-of-the-day"/>
      <h3> Have a good {timeOfDay}! </h3>

    </main>
  </div>
  )
}

// /* <h2>Main section</h2>
//       <p>Top three vacation countries!</p>
//       <ul>
//         <li>Vietnam</li>
//         <li>South Korea</li>
//         <li>Maldives</li>
//       </ul>
//       <p> Bottom main section </p> */}


//       {/* <input type="checkbox"/>
//       <p> placeholder 1 </p>

//       <input type="checkbox"/>
//       <p> placeholder 2 </p>

//       <input type="checkbox"/>
//       <p> placeholder 3 </p>

//       <input type="checkbox"/>
//       <p> placeholder 4</p> */

export default MainContent