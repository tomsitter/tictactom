import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
// import { Link } from 'react-router-dom';

import Template from '../containers/Template'
import Home from '../containers/Home'
import Profile from '../containers/Profile'

const Routes = () => {
    return (
        <Router>
            <div>
                <Route path="/" component={Template} />
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
            </div>
        </Router>
    )
}

// const Title = () => {
//     return (
//         <div className="title">
//             <h1>React Router demo</h1>
//             <Link to="/list">
//                 <button>Show the list</button>
//             </Link>
//         </div>
//     )
// }

// const List = () => {
//     return (
//         <div className="nav">
//             <ul>
//                 <li>item 1</li>
//                 <li>item 2</li>
//             </ul>
//             <Link to="/">
//                 <button>Home</button>
//             </Link>
//         </div>
//     )
// }



export default Routes