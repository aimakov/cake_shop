import StartNow from "./StartNow";
import "./Intro.css";

const IntroText = () => {
    return (
        <div className="IntroText">
            <p>#1 Cakes in Ulsan</p>
            <p className="slogan">
                YOU BUILD THE CAKE <br /> WE MAKE IT REAL{" "}
            </p>
            <p style={{ fontSize: "1rem", paddingBottom: "20px", width: "70%" }}>
                Hi, I'm Nurbolat, people call me Nurba. I'm currently practicing my graphic design skills and building landing pages for small businesses.{" "}
            </p>
            <StartNow />
        </div>
    );
};

export default IntroText;
