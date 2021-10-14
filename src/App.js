import "./App.css";
import Layout from "./pages/Layout";
import MenuPage from "./pages/MenuPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Layout} />
                    <Route path="/menu" exact component={MenuPage} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
