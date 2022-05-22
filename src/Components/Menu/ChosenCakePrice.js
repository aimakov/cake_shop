const ChosenCakePrice = (props) => {
    return (
        <div className="ChosenCakePrice">
            <p>
                <b>Price: </b>
                <del>{props.price}</del>
            </p>
            <p style={{ marginLeft: "10px" }}>${String(Number(props.price.slice(-5)) - 5).slice(0, 5)}</p>
        </div>
    );
};

export default ChosenCakePrice;
