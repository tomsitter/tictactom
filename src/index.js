import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {Router} from 'react-router-dom'

import App from './containers/App';
import history from './utils/history'

ReactDOM.render(
    <Router history={history}>
        <App/> 
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
