import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Template from './containers/Template';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <Template/> 
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
