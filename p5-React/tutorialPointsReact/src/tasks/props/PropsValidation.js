import React from "react"

export default class PropsValidation extends React.Component {
  render() {
    return (
      <div>
        <a href="https://www.tutorialspoint.com/reactjs/reactjs_props_validation.htm"
          target="_blank">
          Add Code for the "Props Validation" step
           </a>
        <h3>Array: {this.props.propArray}</h3>
        <h3>Bool: {this.props.propBool}</h3>
        <h3>Function: {this.props.propFunc("Props function")}</h3>
        <h3>Number: {this.props.propNumber}</h3>
        <h3>String: {this.props.propString}</h3>
        <h3>Object: {this.props.propObject.objectName1}</h3>
        <h3>Object: {this.props.propObject.objectName2}</h3>
        <h3>Object: {this.props.propObject.objectName3}</h3>
      </div>
    )
  }
}

PropsValidation.propTypes = {
  propArray: React.PropTypes.array.isRequired,
  propBool: React.PropTypes.bool.isRequired,
  propFunc: React.PropTypes.func,
  propNumber: React.PropTypes.number,
  propString: React.PropTypes.string,
  propObject: React.PropTypes.object
}

PropsValidation.defaultProps = {
  propArray: [1, 2, 3, 4, 5],
  propBool: true,
  propFunc: function (e) { return e },
  propNumber: 1,
  propString: "String value...",

  propObject: {
    objectName1: "objectValue1",
    objectName2: "objectValue2",
    objectName3: "objectValue3"
  }
}