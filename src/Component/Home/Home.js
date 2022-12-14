import React from "react";
import Image1 from "../../assets/movie.night.png";
import "./home.css";
// import Event from "../Event/Event";
import {useHistory} from "react-router-dom"

function Home() {
  let history = useHistory();

 return (
    <div className="landing-img">
      <img src={Image1} className="img1" alt="" />
      <div>
        <h1>
          {" "}
          Imagine if
 <br  />
         <span> Snapchat</span>
          <br />
       
          had events </h1>
       
        <button onClick={() => {
          history.push("/Event");
        
        }} 
        >
          {" "}
        🎉Create my event
        {" "}

    </button>

        <br />
<p>Easily host and share events with your friends across any social media</p>
        <div>
    {/* <button>
     🎉 Create my event
    </button> */}
   
        </div>
      </div>

  
    
      {/* <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button> */}

    </div>
  );
}

export default Home;
