import {Routes,Route, Navigate} from 'react-router-dom';
import { MainContainer } from './Component/MainContainer';
import { PageNotFound } from './Component/PageNotFound';
import { UserDetails, UserDetailsClass } from './Component/UserDetails';
import { UserList } from './Component/UserList';
export const WebRoutes =()=>( 
<Routes>
<Route path="/home" element={<MainContainer/>}/>
<Route path="/users" element={<UserList/>}/>
<Route path="/user-details/:id/:username" element={<UserDetails/>}/>

<Route path="/user-details/:id" element={<UserDetails/>}/>

<Route path="/" element={<Navigate to="/home" />} /> 
<Route path="/page-not-found" element={<PageNotFound/>} />
<Route path="*" element={<PageNotFound/>} /> 
{/* <Route path="*" element={<Navigate to="/page-not-found" />} />  */}



    </Routes>
)