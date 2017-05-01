import React from "react"

export default class JSX_App extends React.Component {
  render() {
    var i = 2;
    var myStyle = {
      fontSize: 80,
      color: '#FF0000'
    }

    return (
      <div>
        <h1>Hello World!</h1>
        <h2>Header 2</h2>
        <p>Here comes the actual content in the paragraph element.</p>
        <p>The sum of 1 and 2 = {1 + 2}</p>

        <p>{i === 1 ? 'i is 1' : 'i is not 1'}</p>

        <h1 style={myStyle}>Styled header</h1>
      </div>
    )
  }
}