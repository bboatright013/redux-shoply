import './App.css';
import StoreFront from './components/StoreFront';
import Cart from './components/Cart';
import Header from './components/Header';
import PDP from './components/PDP';
import CartDetails from './components/CartDetails';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <Header />

    <Switch>

        <Route exact path="/products/:name">
          <Cart />
          <PDP />
        </Route>
        <Route exact path="/cart">
          <CartDetails />
        </Route>
        <Route exact path="/">
          <Cart />
          <StoreFront />
        </Route>
    </Switch>


    </div>
  );
}

export default App;
