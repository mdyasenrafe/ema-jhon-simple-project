import "./App.css";
import Home from "./Componets/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotMatch from "./Componets/NotMatch/NotMatch";
import Header from "./Componets/Header/Header";
import OrderReview from "./Componets/OrderReview/OrderReview";
import Inventory from "./Componets/Inventory/Inventory";
import PlaceOrder from "./Componets/PlaceOrder/PlaceOrder";
import Login from "./Componets/Login/Login";
import Register from "./Componets/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Componets/PrivateRoute/PrivateRoute";
import Shipping from "./Componets/Shipping/Shipping";
import Orders from "./Componets/Orders/Orders";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/shop">
              <Home></Home>
            </Route>
            PrivateRoute
            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>
            <PrivateRoute path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/resigter">
              <Register></Register>
            </Route>
            <PrivateRoute path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="*">
              <NotMatch></NotMatch>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
