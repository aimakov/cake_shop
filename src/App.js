import "./App.css";
import Layout from "./pages/Layout";
import SelectCake from "./pages/SelectCake";
import CreateCake from "./pages/CreateCake";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Layout} />
                    <Route path="/select" exact component={SelectCake} />
                    <Route path="/create" exact component={CreateCake} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
