import React from "react";
import "./Menu.css";

import Cake_1 from "../../images/CakeGallery/Cake_1.jpeg";
import Cake_2 from "../../images/CakeGallery/Cake_2.jpeg";
import Cake_3 from "../../images/CakeGallery/Cake_3.jpeg";
import Cake_4 from "../../images/CakeGallery/Cake_4.jpeg";
import Cake_5 from "../../images/CakeGallery/Cake_5.jpeg";
import Cake_6 from "../../images/CakeGallery/Cake_6.jpeg";
import Cake_7 from "../../images/CakeGallery/Cake_7.jpeg";
import Cake_8 from "../../images/CakeGallery/Cake_8.jpeg";
import Cake_9 from "../../images/CakeGallery/Cake_9.jpeg";
import Cake_10 from "../../images/CakeGallery/Cake_10.jpeg";
import Cake_11 from "../../images/CakeGallery/Cake_11.jpeg";
import Cake_12 from "../../images/CakeGallery/Cake_12.jpeg";
import Cake_13 from "../../images/CakeGallery/Cake_13.jpeg";
import Cake_14 from "../../images/CakeGallery/Cake_14.jpeg";
import Cake_15 from "../../images/CakeGallery/Cake_15.jpeg";

const Menu = () => {
    // https://sendacake.com/fresh-baked-cakes?__cf_chl_captcha_tk__=pmd_gYJr2iLHCtkiK3jo3FX5C3geeMwMFevotYt4Vr_Gc0g-1633787267-0-gqNtZGzNAyWjcnBszQ1R

    const Cakes = [
        {
            id: 1,
            title: 'Coconut Cloud Layer Cake - 10"',
            price: "$64.95",
            image: Cake_1,
        },
        {
            id: 2,
            title: 'Vanilla Raspberry Birthday Cake - 7"',
            price: "$56.95",
            image: Cake_2,
        },
        {
            id: 3,
            title: 'Chocolate Fudge Birthday Cake - 7"',
            price: "$56.95",
            image: Cake_3,
        },
        {
            id: 4,
            title: 'Mile High Peanut Butter Explosion - 10"',
            price: "$64.95",
            image: Cake_4,
        },
        {
            id: 5,
            title: 'Carrot Layer Cake - 10"',
            price: "$62.95",
            image: Cake_5,
        },
        {
            id: 6,
            title: 'Classic Chocolate Truffle Cake - 10"',
            price: "$62.95",
            image: Cake_6,
        },
        {
            id: 7,
            title: 'Chocolate Chip Deep Dish Cookie Cake - 10"',
            price: "$56.95",
            image: Cake_7,
        },
        {
            id: 8,
            title: 'Original New York Style Cheesecake - 10"',
            price: "$59.95",
            image: Cake_8,
        },
        {
            id: 9,
            title: 'Strawberry Cheesecake - 10"',
            price: "$59.95",
            image: Cake_9,
        },
        {
            id: 10,
            title: 'Triple Chocolate Cheesecake - 10"',
            price: "$59.95",
            image: Cake_10,
        },
        {
            id: 11,
            title: 'Mango Cheesecake - 10"',
            price: "$59.95",
            image: Cake_11,
        },
        {
            id: 12,
            title: 'Pineapple Cheesecake - 10"',
            price: "$59.95",
            image: Cake_12,
        },
        {
            id: 13,
            title: 'Chocolate Caramel Pecan Cheesecake - 10"',
            price: "$59.95",
            image: Cake_13,
        },
        {
            id: 14,
            title: 'Raspberry Almond Tart - 9.5"',
            price: "$56.95",
            image: Cake_14,
        },
        {
            id: 15,
            title: 'Mountain Berry Tart - 9.5"',
            price: "$56.95",
            image: Cake_15,
        },
    ];

    return (
        <>
            <div className="Menu container s12">
                {Cakes.map((cake) => (
                    <img src={cake.image} />
                ))}
            </div>
        </>
    );
};

export default Menu;
