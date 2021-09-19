import "./App.css";
import HomepageMaterialize from "./pages/HomepageMaterialize";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomepageMaterialize} />
                    <Route path="/homepage" exact component={Homepage} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
