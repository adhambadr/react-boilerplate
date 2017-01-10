import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';

console.log('bundles loaded');
const msg = "Hello World React : (React, hot loaded webpack babel es2015)";

ReactDOM.render
(
    <Main msg={msg} />,
    document.getElementById('app')
);


