import React from "react";
// import ReactDOM from "react-dom";
import Header from "./components/Header";
import UserCard from "./components/UserCards";
import Footer from "./components/Footer";

function App2(){


    return(
        <div className="App">
            <div className="wrapper">
                <Header/>
                <UserCard/>
                <Footer/>
            </div>
        </div>
    )
}

export default App2