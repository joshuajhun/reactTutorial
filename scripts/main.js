const React = require('react');
const ReactDOM  = require('react-dom');
// line StorePicker is a class
// it will let us make a store picker <StorePicker/>
var StorePicker = React.createClass({
  render : function(){
    return (
      <h1>hello</h1>
    )
  }
});


ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
