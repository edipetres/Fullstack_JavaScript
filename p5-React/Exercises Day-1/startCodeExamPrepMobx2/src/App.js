/*jshint -W065 */
import React, { Component } from 'react';
import './App.css';
import info from "./dataModel"

class App extends Component {

  render() {
    var studentInfo = info.studentsInfo;
    // var headerCount = studentInfo.headers.length;
    // var studentCount = studentInfo.students.length;

    return (
      <div className="App">
        <div className="App-header">
          <h2>React - Exam Preparation Exercise</h2>
        </div>
        <div className="App-intro">
          <h4>The studentsInfo structure contains two lists:</h4>
          <p>One with all the required headers, whis is a total of ({studentInfo.headers.length})</p>
          <p>One with all the Students, whis is a total of ({studentInfo.students.length})</p>
          <p>Use the empty table below, or move it (you must eventually) into a separate component</p>

          <StudentTable data={studentInfo}/>
        </div>
      </div>
    );
  }
}

class StudentTable extends React.Component {

  render() {
    var getAverage = function (grades) {
      var sum = 0;
      var len = 0;
      grades.forEach(function (element) {
        if (typeof element.grade !== 'undefined') {
          sum += parseInt(element.grade, 10)
          len++
        }
      }, this);
      if (len !== 0) {
        return sum / len;
      }
      return 0;
    }
    var studentInfo = this.props.data;
    return (
      <table className="table">
        <thead>
          <tr>
            <th></th>
            {studentInfo.headers.map(function (obj, i) {
              return <th key={i}>{obj.courseName}</th>
            })}
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {studentInfo.students.map(function (student) {
            return <tr>
              <td>{student.name}</td>
              <td>{student.grades[0].grade}</td>
              <td>{student.grades[1].grade}</td>
              <td>{student.grades[2].grade}</td>
              <td>{getAverage(student.grades)}</td>
            </tr>
          })}
        </tbody>
      </table>
    )
  }
}

export default App;
