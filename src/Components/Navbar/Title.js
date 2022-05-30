import "./Navbar.css";
import { useHistory } from "react-router-dom";

const Title = () => {
    const history = useHistory();
    return (
        <h4 id="cakesie" onClick={() => history.push("/")}>
            <span className="orange-text">Cake</span>
            sie
        </h4>
    );
};

export default Title;
