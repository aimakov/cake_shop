import "./App.css";
import Layout from "./pages/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, createContext } from "react";
import Cart from "./pages/Cart";

export const CartContext = createContext();

function App() {
    const [cart, setCart] = useState([]);

    return (
        <>
            <Router>
                <Switch>
                    <CartContext.Provider value={[cart, setCart]}>
                        <Route path="/" exact component={Layout} />
                        <Route path="/cart" component={Cart} />
                    </CartContext.Provider>
                </Switch>
            </Router>
        </>
    );
}

export default App;
