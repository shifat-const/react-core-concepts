import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  const products = [
    { name: 'Photoshop', price: '$99.99' },
    { name: 'Lightroom', price: '$59.99' },
    { name: 'Peimere Pro', price: '$129.99' }
  ]

  const heros = ['shuvo', 'sakib', 'dhoni', 'mahela', 'holder', 'shifat']

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Counter></Counter>
          <Users></Users>
          <ul>
            {
              heros.map(hero => <li>{hero}</li>)
            }
            {
              products.map(pd => <li>{pd.name}</li>)
            }
          </ul>
        </div>
        {
          products.map(pd => <Products product = {pd}></Products>)
        }
        
        <Person name='Shifat' job='Programmer'></Person>
        <Person name='Joydeep' job='lawyer'></Person>
        <Person name='Akif' job='Programmer'></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1> Count: {count} </h1>
      <button onClick = {() => setCount(count + 1)}>increase</button>
      <button onClick = {() => setCount(count - 1)}>decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic user: {users.length}</h3>
      {
        console.log(users)
      }
      <ul>
      {
        users.map(user => <li>{user.name} {user.email}</li>)
      }
      </ul>
    </div>
  )
}

function Products(props) {
  const productsStyle = {
    border: '1px solid red',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    margin: '10px',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const { name, price } = props.product;
  return (
    <div style={productsStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  return (
    <div style={{ border: '1px solid yellow', margin: '10px', width: '300px' }}>
      <h2>Name: {props.name}</h2>
      <p>Profession: {props.job}</p>
    </div>
  )
}

export default App;
