import "./Navbar.css";
// import { useHistory } from "react-router-dom";
import { animateScroll } from "react-scroll/modules";

const Title = () => {
    // const history = useHistory();
    const scroll = animateScroll;

    return (
        <h4 id="cakesie" onClick={scroll.scrollToTop}>
            <span className="orange-text">Cake</span>
            sie
        </h4>
    );
};

export default Title;
