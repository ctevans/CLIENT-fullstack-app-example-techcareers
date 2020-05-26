import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { thisCodeWasCopiedFromTheGitHubRepo } from '../../../instructor/github';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

export const storeCopied = configureStore;
export const history = createBrowserHistory();

//qdYEbHAE5xmOrr5U6TrQ2pQwO/hi1aRNZsd0UP6Mtyg=
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeCopied()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about copying code from github: https://bit.ly/CRA-PWA
serviceWorker.unregister();
