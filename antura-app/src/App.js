import React from 'react';
import './App.css';
import User from './components/Users';
import Error from './components/Error'
import Loading from './components/Loading';
import Header from './components/Header';

class App extends React.Component {

  constructor(){
    super();
    this.state ={
      loading: false,
      error: null,
      user: []
    } 

    this.fetchUsers= this.fetchUsers.bind(this);
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
      error: err.message
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
      <Error/>
      )
    }
    else if(loading){
      return (
      <Loading/>
      )
    }
  return(
  <div className="App-container">
   <Header/>
    <div className="fetch">  
      <button className="fetch-button" onClick={this.fetchUsers}> Get Users</button>
    </div>
        <div className="wrapper">   
          {userComponent}
        </div>
  </div>
      )
    }
  }

export default App
