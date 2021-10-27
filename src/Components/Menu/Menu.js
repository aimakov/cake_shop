import React from "react";
import "./Menu.css";
import MenuElement from "./MenuElement";

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
import Cake_16 from "../../images/CakeGallery/Cake_16.jpeg";
import Cake_17 from "../../images/CakeGallery/Cake_17.jpeg";
import Cake_18 from "../../images/CakeGallery/Cake_18.jpeg";

import CakeDetails from "./CakeDetails/";

const Menu = () => {
    // https://sendacake.com/fresh-baked-cakes?__cf_chl_captcha_tk__=pmd_gYJr2iLHCtkiK3jo3FX5C3geeMwMFevotYt4Vr_Gc0g-1633787267-0-gqNtZGzNAyWjcnBszQ1R

    const Cakes = [
        {
            id: 1,
            title: "Rainbow Layer Cake",
            size: '10"',
            price: "$64.95",
            image: Cake_1,
            description:
                "Coming in at 7lbs (plenty to share!) this beautiful fluffy cake has five fun, bright and colorful layers. Perfect for any happy and festive occasion especially a unicorn themed birthday party. We’ve decorated this dessert with a lightly flavored vanilla icing to keep this colorful surprise a secret until you cut the first slice.",
        },
        {
            id: 2,
            title: "Premier Milky Caramel Galaxy Cake",
            size: '10"',
            price: "$64.95",
            image: Cake_2,
            description:
                "Freshly whipped malted mousse and caramel marshmallow crème are swirled together between three layers of decadent chocolate cake. This out-of-this-world dessert is beautifully decorated with dark chocolate curls and caramel and chocolate sauces on top.",
        },
        {
            id: 3,
            title: "Premier Chocolate Overload Layer",
            size: '10"',
            price: "$64.95",
            image: Cake_3,
            description:
                "To the ultimate chocolate lover - We've baked your dream cake! Our pick for Cake Of The Year is four split layers of rich chocolate cake, filled with a smooth milk chocolate mousse, finished in chocolate ganache & covered in dark chocolate bark pieces. This cake is the thoughtful gift idea that’s perfect for family, friends, coworkers, or to anyone you care about in your life. Generously sized precut slices. 10 inch round",
        },
        {
            id: 4,
            title: "Coconut Cloud Layer Cake",
            size: '10"',
            price: "$64.95",
            image: Cake_4,
            description:
                "Three towering layers of ultra moist coconut cake are filled with clouds of creamy coconut mousse made with real coconut milk. Snowy flaked coconut surrounds and tops this heavenly experience. A cake lover’s dreams come true! 10 inch round.",
        },
        {
            id: 5,
            title: "Vanilla Raspberry Birthday Cake",
            size: '10"',
            price: "$56.95",
            image: Cake_5,
            description:
                "This birthday cake says, 'Happy Birthday' in swirls of pastel colors and candy confetti decorations. This luscious vanilla cake is filled with raspberry jam and vanilla buttercream filling for a very festive look. A party favorite that's sure to brighten up the room and tingle your taste buds with a rich, moist taste. 7 inch round",
        },
        {
            id: 6,
            title: "Chocolate Fudge Birthday Cake",
            size: '7"',
            price: "$56.95",
            image: Cake_6,
            description:
                "Show that special someone that you're thinking of them on their special day, with our delicious Chocolate Fudge Birthday Cake. A moist dark chocolate cake, with a fudgy filling, is covered with chocolate ganache frosting; then we hand decorate each cake with a light chocolate border and Happy Birthday greeting, 7 inch round",
        },
        {
            id: 7,
            title: "Mile High Peanut Butter Explosion",
            size: '10"',
            price: "$64.95",
            image: Cake_7,
            description:
                "A cake the dessert epicure will die for! Fudge brownie base, layered in velvety smooth peanut butter mousse, rich chocolate cake, topped with brownie chunks, handful of peanut butter chips, drizzled in fudge. A cake lover’s dreams come true! 10 inch round",
        },
        {
            id: 8,
            title: "Carrot Layer Cake",
            size: '10"',
            price: "$62.95",
            image: Cake_8,
            description:
                "Carrot cake with delicious cream cheese frosting. Hand decorated with icing carrots for an amazing finish. Made with grated carrots, coconut, raisins, walnuts, and spicy cinnamon. 10 inch round",
        },
        {
            id: 9,
            title: "Classic Chocolate Truffle Cake",
            size: '10"',
            price: "$62.95",
            image: Cake_9,
            description:
                "This flourless cake is decorated with an elegant ganache border of rosettes. Its classic design and rich taste are sure to please the food critic in all of us. A chocolate lovers dream! Share a slice of chocolaty goodness with your friends and family. 10 inch round",
        },
        {
            id: 10,
            title: "Chocolate Chip Deep Dish Cookie",
            size: '10"',
            price: "$56.95",
            image: Cake_10,
            description:
                "This giant Deep Dish Cookie is filled with chocolate chips and topped with huge chunks of chocolate, Hershey's Mini Kisses, and drizzled with chocolate ganache. At 10 inches in diameter, it weighs in at four pounds and can serve up to 14 people! It's the perfect cookie cake for your next gathering! 10 inch round.",
        },
        {
            id: 11,
            title: "Original New York Style Cheesecake",
            size: '10"',
            price: "$59.95",
            image: Cake_11,
            description:
                "This traditional cheesecake recipe comes straight out of Brooklyn. It's a delicious and versatile New York Style cheesecake with a graham cracker crust. Eat it plain or top it off with fruit or whipped cream for an exquisite gourmet dessert you're bound to love.",
        },
        {
            id: 12,
            title: "Strawberry Cheesecake",
            size: '10"',
            price: "$59.95",
            image: Cake_12,
            description:
                "There's only one way to make our cheesecakes taste even better - add fruit! We've topped off New York cheesecake with a generous helping of strawberry preserves for a taste that's to die for. Each slice is packed with loads of creamy filling, graham crust and sweet strawberries. 10 inch round",
        },
        {
            id: 13,
            title: "Triple Chocolate Cheesecake",
            size: '10"',
            price: "$59.95",
            image: Cake_13,
            description:
                "We've melted milk chocolate on top of a creamy chocolate cheesecake center and set the whole confection on top of a layer of Devil's food cake. This exquisite dessert is the perfect choice for any gourmet chocolate lover. 10 inch round",
        },
        {
            id: 14,
            title: "Mango Cheesecake",
            size: '10"',
            price: "$59.95",
            image: Cake_14,
            description:
                "We've done it again with our Mango Cheesecake. It's a 10' cake with swirls of mango on top of a creamy cheesecake and delicious crust. This mix of cream cheese, and mango will take you on a tropical journey of satisfaction!",
        },
        {
            id: 15,
            title: "Pineapple Cheesecake",
            size: '10"',
            price: "$59.95",
            image: Cake_15,
            description:
                "This gourmet cheesecake is one dessert you have to try. The cheesecake is creamy and rich, atop a graham cracker crust. It's made from milk, cream cheese and other splendid ingredients. We then top it off with a layer of sweet, crushed pineapples and the result is amazing. One slice is not enough!",
        },
        {
            id: 16,
            title: "Chocolate Caramel Pecan Cheesecake",
            size: '10"',
            price: "$59.95",
            image: Cake_16,
            description:
                "This decadent 10 inch cake has clumps of chewy pecans drenched in a coating of caramel on top of a creamy cheesecake. This mix of cream cheese, nuts and caramel is a true taste excursion. 10 inch round",
        },
        {
            id: 17,
            title: "Raspberry Almond Tart",
            size: '9.5"',
            price: "$56.95",
            image: Cake_17,
            description:
                "Selected as the Outstanding New Product Winner at the International Fancy Food Show. This gorgeous and delicious tart is a butter cookie tart shell filled with a crunchy, chewy, almond filling topped with seedless raspberry jam and a decorative swirled glaze. A very special dessert! Pre-cut into 12 slices for easy serving.",
        },
        {
            id: 18,
            title: "Mountain Berry Tart",
            size: '9.5"',
            price: "$56.95",
            image: Cake_18,
            description:
                "Winner of the Outstanding Dessert Product at the International Fancy Food Show. A butter cookie tart shell is filled with a light almond flavored pastry cream, topped with a mountain of wild blueberries and raspberries. It's a berry berry delicious dessert! Pre-cut into 12 slices for easy serving.",
        },
    ];

    return (
        <>
            <div className="Menu container s12">
                <div className="row">
                    <CakeDetails />
                    {Cakes.map((cake) => (
                        // <div className="col s8 offset-s2 m6 l4 CardElement ">
                        //     <img src={cake.image} className="responsive-img activator" style={{ borderRadius: "30px 30px 0 0 ", width: "100%" }} />
                        //     <div className="CardTitle">
                        //         <p>{cake.title}</p>
                        //     </div>
                        //     <div className="CakePrice">{cake.price}</div>
                        //     <div class="card-reveal">
                        //         <span class="card-title grey-text text-darken-4">
                        //             Card Title<i class="material-icons right">close</i>
                        //         </span>
                        //         <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        //     </div>
                        // </div>
                        <MenuElement cake={cake} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Menu;
