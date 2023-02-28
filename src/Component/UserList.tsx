import { Card, Button, Col, Row } from 'react-bootstrap';
import userList from '../data/user.json'
import {Link } from 'react-router-dom';


export const UserList = ()=>{

return  <Row>
    { userList.length && userList.map(user=>(
    <Col lg={3} md={4} sm={12} className="py-3">
        <Card >
<Card.Img variant="top" src={user.avatar_url} />
<Card.Body>
  <Card.Title>{user.username}</Card.Title>
  <Card.Text>
   {user.followers_url}
  </Card.Text>
  <Button variant="primary" ><Link to={`/user-details/${user.id}/${user.username}`}>Go to Profile</Link></Button>
</Card.Body>
</Card>
</Col>))}
</Row>

    };