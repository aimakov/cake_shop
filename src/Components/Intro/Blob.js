import Cake_1 from "../../images/Intro_cake.png";
import "./Blob.css";

const blob = () => {
    return (
        <div className="blobContainer">
            <svg width="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill="#F7CE68"
                    d="M62,-44.9C77.6,-29.9,85.7,-4.2,79.1,15.5C72.6,35.3,51.5,49.1,30,57.7C8.6,66.2,-13.2,69.4,-30.7,61.7C-48.1,54,-61.4,35.5,-67.7,13.8C-74,-8,-73.4,-33,-61,-47.3C-48.5,-61.5,-24.3,-65,-0.5,-64.6C23.2,-64.2,46.4,-59.9,62,-44.9Z"
                    transform="translate(100 100)"
                />
            </svg>
            <img src={Cake_1} />
        </div>
    );
};

export default blob;
