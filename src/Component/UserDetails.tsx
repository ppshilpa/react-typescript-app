import { Component, ReactNode, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import userList from '../data/user.json'
type propToPass = {id:string,username?:string};
interface userType {
    username: string;
    id:number;
    node_id: string;
    avatar_url: string;
    gravatar_id:string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url:string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean
  };
export const UserDetails = ()=>{
    const {id,username} =useParams();
 const [user, setUser] = useState<userType|{}>({});

 setUser(userList.length && userList.filter((user)=>user.id===parseInt(id||''))[0]);
    console.log(user);

return <Row><Col>sdffsdsfdsfdsfd</Col></Row>;


  //  return <UserDetailsClass id={params.id} user={params.user} />;
};



export class UserDetailsClass extends Component<propToPass,any>{
    constructor(props:propToPass){
        super(props);
    }
render(): ReactNode {
    console.log(this.props);
    return <h2>UserDetailsClass</h2>;
}
}