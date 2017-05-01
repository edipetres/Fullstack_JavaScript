import React from "react"

export default class ComponentAPI_App extends React.Component {
   constructor() {
     super();

     this.state = {
       data: ['1st element']
     }

     this.setStateHandler = this.setStateHandler.bind(this);
   }
   
   setStateHandler() {
     var item = "setState..."
     var myArray = this.state.data;
     myArray.push(item);
     this.setStateHandler({data: myArray})
     console.log("Button pressed")
   }
   
   
   
   render() {
      return (
         <div>
           <button onClick={this.setStateHandler}>Set State</button>
           <h4>State Array: {this.state.data}</h4>
         </div>
      )
   }
}