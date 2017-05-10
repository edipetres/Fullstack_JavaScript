import React from "react"

export default class Info extends React.Component {
  render() {
    return (
      <div>
        <p>
          Use this project to get a quick start with the <a href="http://www.tutorialspoint.com/reactjs/" target="_blank">Tutorial</a>
        </p>
        <p>
          In the <em>src/task-folder</em> you will find a matching folder with
          subfolders for (almost) each task in the tutorial, and in those folders a matching file xxxApp.js for each task
        </p>
        <p>Use the <em>xxxApp.js</em> files for each of the <code>App-components</code> in the tutorial</p>
        <p><b>Note: </b>For all these exercise you don't need the main.js file given for a task.
         This part is taken care of by, this project</p>

      </div>
    )
  }
}