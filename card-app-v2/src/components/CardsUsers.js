import React, { useEffect, useState} from 'react';
import { MdLocalPhone, MdEmail, MdLocationOn } from "react-icons/md";
import Error from './Error';
import Loading from './Loading';

function CardsUsers(){

    const [data, setData] = useState([]);
    const [amount, setAmount] = useState(3);
    const [page, setPages] = useState(1);
    const [totPages, setTotPages] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [url, setUrl] = useState(`https://randomuser.me/api/?nat=us&results=${amount}&page=${page}`);

    

const fetchRandUser = (() => {
      setIsLoading(true);
      fetch(`https://randomuser.me/api/?nat=us&results=${amount}&page=${page}`)
      //  fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
        //setData(result.results);
        setIsLoading(false);
        const dataSet = [...data,...result.results]
        setData(dataSet);
        setTotPages(result.info.results);
        // console.log("totpage",result.info.results);
        // console.log("pages:", totPages);
        },
        (error) => {
          setIsLoading(true);
          setError(error);
        }
      )
})
 
const LoadMoreUsers = (() => {
        setPages(page + 1 );
        fetchRandUser();
        }
    )


    // useEffect(() => {
    //     fetchRandUser();
    // }, [])


// console.log(data.length);

const fetchButton = data.length === 0 ?

<button className="btn btn-block w-25 p-2 mx-auto" onClick={e => { fetchRandUser();}} > Get users </button> 
: 
<button className="btn btn-block w-25 p-2 mx-auto" onClick={e => { LoadMoreUsers();}} > Load more users </button>

// const fetchButton = <button className="btn btn-block w-25 p-2 mx-auto" onClick={e => { LoadMoreUsers();}} > Load more users </button>


if(error) { return <Error/>; }

else if(isLoading) {return <Loading/>}

return(
    <div className="clearfix">
    <div className="row">
      {data.map(user => (
        <div className="col-md-4 animated fadeIn" key={user.login.username}>
          <div className="card w-100 h-100 mx-auto">
            <div className="card-body">
              <div className="user-image">
                <img
                  src={user.picture.large}
                  className="card-img"
                  alt={(user.name.first) + " " + (user.name.last)}
                />
              </div>
              <p className="card-title">
                {(user.name.first) +
                  " " +
                  (user.name.last)}
              </p>
              <h6>
              <MdEmail/> {user.email}
              </h6>
              <p className="card-text"> <MdLocationOn/>
                {user.location.city +
                  ", " +
                  (user.location.state)}
                <br />
                <span className="phone"><MdLocalPhone/> ~ {user.phone}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div>
    {fetchButton}
    </div>
  </div>
    );
}

export default CardsUsers

