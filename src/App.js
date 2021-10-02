import "./App.css";
import Home from "./Componets/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotMatch from "./Componets/NotMatch/NotMatch";
import Header from "./Componets/Header/Header";
import OrderReview from "./Componets/OrderReview/OrderReview";
import Inventory from "./Componets/Inventory/Inventory";
import PlaceOrder from "./Componets/PlaceOrder/PlaceOrder";
function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/shop">
          <Home></Home>
        </Route>
        <Route path="/review">
          <OrderReview></OrderReview>
        </Route>
        <Route path="/inventory">
          <Inventory></Inventory>
        </Route>
        <Route path="/placeOrder">
          <PlaceOrder></PlaceOrder>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="*">
          <NotMatch></NotMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
