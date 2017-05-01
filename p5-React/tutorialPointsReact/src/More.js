import React from "react";


export default class More extends React.Component {

render(){
  return(
    <div>
    <p>
    When you have completed all the steps above, you should repeat some of the steps, 
    but this time in a <a href="https://github.com/facebookincubator/create-react-app" target="_blank">create-react-app</a> &nbsp;
    to se how you write React from "scratch".
    </p>
    <p>
    Try to complete the <a href="https://www.tutorialspoint.com/reactjs/reactjs_router.htm" target="_blank">Router</a> task (can't be done here, because everything is already "in a Router")<br/>
    <b>Note:</b> There is a mistake in the exercise. So replace the three "menu items" in the ul-tag as sketcheded below:
    </p>
    <p>
    <code>
    &lt;li&gt;&lt;Link to=&quot;/home&quot;&gt;Home&lt;/Link&gt;&lt;/li&gt;<br/>
&lt;li&gt;&lt;Link to=&quot;/about&quot;&gt;About&lt;/Link&gt;&lt;/li&gt;<br/>
&lt;li&gt;&lt;Link to=&quot;/home&quot;&gt;Contact&lt;/Link&gt;&lt;/li&gt;
     </code>
    </p>
    <p>You need to install the router first. Get version three via npm as sketched below:
    </p>
    <code>
    npm install react-router@3 --save
    </code>
</div>

  )
}

}


