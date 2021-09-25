import "./App.css";
import Layout from "./pages/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Layout} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
