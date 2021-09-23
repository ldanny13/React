import React from 'react';
import './App.css';
import User from './components/Users';
import Loader from "react-loader-spinner";

class App extends React.Component {

  constructor(){
    super();
    this.state ={
      loading: false,
      error: null,
      user: []
    } 
  }
  // componentDidMount(){
  //   this.setState({loading: true})
  //   fetch("https://randomuser.me/api/?results=10")
  //   .then(respone => respone.json())
  //   .then(data => {
  //     console.log(data)
  //     this.setState({
  //       loading: false,
  //       user: data.results
  //     })
  //   })
  //   .catch((err) => this.setState({
  //     loading: true,
  //     error: err
  //     // errorMessage: err.data
  //   }))
  // }

  fetchUsers(){
    this.setState({loading: true})
    fetch("https://randomuser.me/api/?results=20")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        loading: false,
        user: data.results
      })
    })
    .catch((err) =>
     this.setState({
      loading: true,
      error: err.message,
    }))
  }

  render() {
    var {loading, error} = this.state

    const userComponent = this.state.user.map(user =>
      <User
      key = {user.login.username}
      picture = {user.picture.large}
      name = {`${user.name.first} ${user.name.last}`}
      phone = {user.cell}
      location = {`${user.location.street.name} ${user.location.street.number}, ${user.location.city} ${user.location.postcode}, ${user.location.country}`}
      email = {user.email}
      />
    )
    if(error) 
    {
      return (
      <div className="error-div">
        <h2>Error in loading..</h2>
        <p>{this.state.error}</p>
      </div>
      )
    }
    else if(loading) {
      return (
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
  return(
  <div className="App-container">
    <div className="header-title">
      <h1>Get Random Users</h1>
    </div> 
    <div className="fetch">  
      <button className="fetch-button" onClick={() => this.fetchUsers()}> Get Users </button>
    </div>
        <div className="wrapper">   
          {userComponent}
        </div>
  </div>
      )
    }
  }

export default App
