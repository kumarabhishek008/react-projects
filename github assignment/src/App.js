import React from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import Result from './component/Result';
import {createStore} from 'redux'
import {Layout} from './component/layout/Layout'; 
import store from './reduxContext/Store'

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,s
} from 'semantic-ui-react';

function App() {


  return (
    <div>
      <Provider store={store}>
          <Layout>
            <Result/>
          </Layout>
      </Provider>

      
   
    </div>
  )
}

export default App



