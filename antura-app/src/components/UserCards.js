import React, { useEffect, useState } from 'react';
import axios from 'axios';


function UserCards (){

    const[data, setData] = useState({users: []});
    const [amount, setAmount] = useState(10);
    const [page, setPages] = useState(1);
    const[totPages, setTotPages] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState("https://randomuser.me/api/?results=10");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const dataRes = await(url);

            setData(dataRes.data);
            setIsLoading(false);
        }

        fetchData();
    }, [url]);



    //  uppercase = word => {
    //     return word.charAt(0).toUpperCase() + word.slice(1);
    //   };
// useEffect(() => {

//     const url = "https://randomuser.me/api/?results=10"

//     const fetchData = async () => {
//         try{
//             const respone = await fetch(url);
//             const json = await respone.json();
//             console.log(json);
//             setData(json.slip.data);

//         }catch(error){
//             console.log("error", error);
//         }
//     }

//     fetchData();

// }, [])

// const loadMore = () => {
//     this.setState(
//       prevState => ({
//         page: prevState.page + 1,
//         scrolling: true
//       }),
//       this.loadData
//     );
//   };

return(

    <div className="clearfix">
    <div className="row">
      {this.state.data.map(data => (
        <div className="col-md-4 animated fadeIn" key={data.id.value}>
          <div className="card">
            <div className="card-body">
              <div className="avatar">
                <img
                  src={data.picture.large}
                  className="card-img-top"
                  alt=""
                />
              </div>
              <h5 className="card-title">
                {(data.name.first) +
                  " " +
                  (data.name.last)}
              </h5>
              <p className="card-text">
                {data.location.city +
                  ", " +
                  (data.location.state)}
                <br />
                <span className="phone">{data.phone}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <button
      className="btn btn-light btn-block w-50 mx-auto"
      onClick={e => {
        this.loadMore();
      }}
    >
      Load More Users
    </button>
  </div>

 )
}

export default UserCards

