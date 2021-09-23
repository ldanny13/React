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
    <a href="/#" className="phone">
    {props.phone} ~ <Icon name='phone' />  
    </a>
  </Card.Content>
</Card>
</div>


  )
}

export default User


