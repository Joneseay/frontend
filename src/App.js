import React, {Component} from 'react';
import './App.css';

let products = [
  {category: 'Appetizer', price: '$5.99', name: 'Mozzarella Sticks', description: 'Mozzarella breaded and fried to a crispy crust'},
  {category: 'Appetizer', price: '$4.99', name: 'Potatoe Skins', description: 'Potatoe skins filled with cheese and bacon and melted to perfection'},
  {category: 'Appetizer', price: '$3.99', name: 'Blooming Onion', description: 'Onion cut with our special styles batter and fried delivering crispy little petals'},
  {category: 'Main Dish', price: '$8.99', name: 'Bacon Cheeseburger', description: 'Traditional American cheeseburger done right then topped with bacon'},
  {category: 'Main Dish', price: '$7.99', name: 'Club Sandwich', description: 'Ham, turkey, roast beef, and american cheese piled high on text toast'},
  {category: 'Main Dish', price: '$6.99', name: 'Chicken Sandwich', description: 'Hand breaded fried chicken breast put together in a custom bun'},
  {category: 'Sides', price: '$1.99', name: 'French Fries', description: 'Crispy delicious french fries'},
  {category: 'Sides', price: '$.99', name: 'Chips', description: 'Homemade potatoe chips'},
  {category: 'Dessert', price: '$2.99', name: 'Daily Cake', description: 'Ask your waitress about our daily cakes'},
]



class MenuRow extends Component{
  constructor(props){
    super(props);

    this.addOrder = this.addOrder.bind(this)
  }

  addOrder(){
    this.props.addOrder(this.props.product)
  }
  render(){
    // console.log('product item', this.props.product);
    let product = this.props.product;
    return (
              <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><button onClick={this.addOrder}>Order</button></td>
              </tr>
          );
  }
}

class Menu extends Component {
  render(){

    let addOrder = this.props.addOrder;

    let rows = this.props.products.map((product, index)=> {
      console.log('product', product);
      return <MenuRow key={index} product={product}  addOrder = {addOrder}/>

    }) ;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

}

class OrderRow extends Component{

  render(){
    let order = this.props.order;
    console.log(order);
    return (
              <tr>
                <td>{order.name}</td>
                <td>{order.price}</td>
              </tr>
          );
  }
}

class Order extends Component {
  constructor(props){
    super(props);
    this.state = {
      orders : []
    }

  }



  render(){
    let rows = this.props.orders.map((order, index)=> {
      console.log('order', order);
      return <OrderRow key={index} order={order} />
      });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
}


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      products : [],
      orders: []
    }
    this.addOrder = this.addOrder.bind(this);
  }

  componentDidMount(){
    this.setState({products: products});
  }

  addOrder(product){
    let orders = [...this.state.orders];
    console.log(product);

    orders.push(product);

    this.setState({orders: orders})

  }

  render(){
      return (
        <div className="App">
          <Menu products={this.state.products} addOrder = {this.addOrder}/>
          <Order orders = {this.state.orders}/>
        </div>
      );
    }
}

export default App;
