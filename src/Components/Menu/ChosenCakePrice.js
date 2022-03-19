const ChosenCakePrice = (props) => {
    return (
        <div className="ChosenCakePrice">
            <h6>
                <b>Price: </b>
                <del>{props.price}</del>
            </h6>
            <h6 style={{ marginLeft: "10px" }}>${String(Number(props.price.slice(-5)) - 5).slice(0, 5)}</h6>
        </div>
    );
};

export default ChosenCakePrice;
