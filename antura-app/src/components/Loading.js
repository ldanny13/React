import React from 'react'
import Loader from "react-loader-spinner";


function Loading(){

 return(
    <div className="loading-div">
        <Loader
        type="TailSpin"
        color="#00ff00"
        height={100}
        width={100}
        timeout={3000} //3 secs
        />
    </div>  
)   
 }

export default Loading