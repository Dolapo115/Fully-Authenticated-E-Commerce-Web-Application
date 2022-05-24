import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css'
import App from './App'
import {DataWrapper} from './StateProvider';
import reducer, {initialState} from './reducer';




function Index(){
  return (
    <DataWrapper initialState = {initialState} reducer = {reducer}>
      <div className="index">
        <App />
      </div>
    </DataWrapper>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

