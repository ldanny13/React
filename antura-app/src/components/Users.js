import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon, Image } from 'semantic-ui-react'



function User (props){

return (

  <div className="container-card">
  <Card>
  <Image src={props.picture}/>
  <Card.Content>
    <Card.Header>{props.name}</Card.Header>
    <Card.Meta className="email-description"> {props.email}</Card.Meta>
    <Card.Description> <strong>Adress: <br/></strong> {props.location}
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
    <a className="phone">
    {props.phone} ~ <Icon name='phone' />  
    </a>
  </Card.Content>
</Card>
</div>

//   <Card className="card"
//   image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
//   header='Elliot Baker'
//   meta='Friend'
//   description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
//   extra={<Icon name='phone' />}
// />

//   <CardColumns>
//   <Card className="card">
//     <Card.Img className="card-image" variant="top" src={props.picture} />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         Card Text This card has supporting text below as a natural lead-in
//         to additional content.{" "}
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 10 mins ago</small>
//     </Card.Footer>
//   </Card>
// </CardColumns>




    // <div className="card">
    //   <div className="card-img">
    //   <img src={props.picture} className="card__img" alt={props.name} />
    //   </div>
    //   <div className="card__body">
    //     <div className="title-card">
    //       <h5 className="card__title">{props.name}</h5>
    //     </div>
    //     <div className="card-adress">
    //     <p className="card__description">{props.location}</p>
    //     </div>
    //     <div className="email-card">
    //     <h6 className="card__email">{props.email}</h6>
    //     </div>
    //     <div className="card-btn">
    //     <button className="card__btn">Contact: {props.phone}</button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default User


