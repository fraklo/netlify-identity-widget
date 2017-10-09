import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import netlifyIdentity from 'netlify-identity-widget';

// You must run this once before trying to interact with the widget 
netlifyIdentity.init({
  logo: false
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
