import React, { Fragment }from 'react';
import ReactDOM from 'react-dom';
import  ResetStyle from './style.js';
import Iconfont from  "./statics/iconfont/iconfont.js"
import App from './App';

ReactDOM.render(
    <Fragment>
        <App />
        <ResetStyle/>
        <Iconfont />
    </Fragment>,
document.getElementById('root'));
