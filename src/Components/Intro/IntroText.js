import StartNow from "./StartNow";
import "./Intro.css";

const IntroText = () => {
    return (
        <div className="IntroText">
            {/* <h2>#1 Cakes in Ulsan</h2> */}
            <div className="slogan">
                <p className="CreateSelect">CREATE</p>
                <p>or</p>
                <p className="CreateSelect">SELECT</p>
                <p>Which side are you on?</p>
            </div>

            <StartNow />
        </div>
    );
};

export default IntroText;
