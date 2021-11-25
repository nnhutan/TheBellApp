import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContextProvider } from "./Context";
import {
  Home,
  Cart,
  Checkout,
  Contact,
  Intro,
  News,
  Price,
  Product,
  Login,
  Signup,
  Admin,
  User,
  ProductDetail,
} from "./pages/index";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path={[
                "/intro",
                "/product",
                "/price",
                "/contact",
                "/news",
                "/cart",
                "/checkout",
                "/product-detail/:id",
                "/",
              ]}
              component={TopHeader}
            />
          </Switch>
          <Switch>
            <Route
              exact
              path={[
                "/intro",
                "/product",
                "/price",
                "/contact",
                "/news",
                "/cart",
                "/checkout",
                "/product-detail/:id",
                "/",
              ]}
              component={Header}
            />
          </Switch>
          <Switch>
            <Route path="/intro" component={Intro} />
            <Route path="/product" component={Product} />
            <Route path="/price" component={Price} />
            <Route path="/contact" component={Contact} />
            <Route path="/news" component={News} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/user" component={User} />
            <Route path="/admin" component={Admin} />
            <Route path="/product-detail/:id" component={ProductDetail} />
            <Route path="/" component={Home} />
          </Switch>
          <Switch>
            <Route
              exact
              path={[
                "/intro",
                "/product",
                "/price",
                "/contact",
                "/news",
                "/cart",
                "/checkout",
                "/product-detail/:id",
                "/",
              ]}
              component={Footer}
            />
          </Switch>
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
