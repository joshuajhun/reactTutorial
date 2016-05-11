const React = require('react');
const ReactDOM  = require('react-dom');

const App = React.createClass({
  render :function(){
  return(
     <div className="catch-of-the-day">
       <div class ="menu">
         <Header tagline="stuff fam"/>
       </div>
       <Order />
       <Inventory />
     </div>
    )
  }
});

const Header = React.createClass({
  render :function(){
    console.log(this.props)
    return(
      <header className="top">
        <h1>Catch
          <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
          </span>
          Day</h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      </header>
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
