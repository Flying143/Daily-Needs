import './App.css';
import Navbar from "./Components/Navbar"
import Customer from "./Components/Customer"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Dashboard from './Components/Dashboard';
import ProductMaster from "./Components/ProductMaster"
import Order from "./Components/Order"
import ProductCard from './UserSite/ProductCard';

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Navbar />
        <div className="a_right">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/customer">
              <Customer />
            </Route>
            <Route exact path="/product">
              <ProductMaster />
            </Route>
            <Route exact path="/order">
              <Order />
            </Route>
          </Switch>
        </div>
        {/* <ProductCard /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;