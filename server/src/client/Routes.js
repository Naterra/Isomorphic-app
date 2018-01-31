//http://react-ssr-api.herokuapp.com/

import React from 'react';
import Home from './components/Home';
import UsersList from './components/UsersList';

export default [
    {
        path:'/',
        component: Home,
        exact:true
    },
    {
        path:'/users',
        component: UsersList
    }
];

// export default ()=>{
//     return (
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route       path="/users" component={UsersList} />
//         </div>
//     );
// };