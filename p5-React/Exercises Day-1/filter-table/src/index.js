import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Grades from './Grades'
import './index.css';

let students = [
    { id: 1, name: "studentA", grade: 7 },
    { id: 2, name: "studentB", grade: 10 },
    { id: 3, name: "studentC", grade: 4 },
    { id: 4, name: "studentD", grade: 12 },
]


ReactDOM.render(
 
  <Grades data={students}/>,
  document.getElementById('root')
);
