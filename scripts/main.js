const React = require('react');
const ReactDOM  = require('react-dom');

const App = React.createClass({
  render :function(){
  return(
     <div className="catch-of-the-day">
       <div class ="menu">
         <Header />
       </div>
       <Order />
       <Inventory />
     </div>
    )
  }
});

const Header = React.createClass({
  render :function(){
    return(
      <p>Header</p>
    )
  }
})

const Order = React.createClass({
  render :function(){
    return(
      <p>Order</p>
    )
  }
})

const Inventory = React.createClass({
  render :function(){
    return(
      <p>Inventory</p>
    )
  }
})



const StorePicker = React.createClass({
  render : function(){
    return (
      <form className="store-selector">
        <h2> Please enter a store </h2>
        <input type="text" ref="storeId" />
        <input type="Submit" />
      </form>
    )
  }
});


ReactDOM.render(<App/>, document.querySelector('#main'));
