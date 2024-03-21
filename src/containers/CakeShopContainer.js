import { useState } from "react";
import CakeCard from "../components/CakeCard";


const CakeShopContainer = () => {

    const [cakes, setCakes] = useState(
        [
            // Victora Sponge
            {
                cakeName: "Victoria Sponge",
                   ingredients: [
                       "eggs",
                      "butter",
                      "sugar",
                          "self-raising flour",
                      "baking powder",
                      "milk"
                  ],
                  price: 5,
                   rating: 5
            },
        
            // Tea Loaf
            {
                 cakeName: "Tea Loaf",
                   ingredients: [
                       "eggs",
                      "oil",
                      "dried fruit",
                          "sugar",
                      "self-raising flour",
                      "strong tea",
                  ],
                  price: 2,
                  rating: 3
            },
        
            // Carrot Cake
            {
                 cakeName: "Carrot Cake",
                   ingredients: [
                        "carrots",
                          "walnuts",
                      "oil",
                          "cream cheese",
                          "flour",
                      "sugar",
                   ],
                   price: 8,
                   rating: 5
            }
        ] 
    );

    const [victoriaSponge, teaLoaf, carrotCake] = cakes;
    
    return(
        <>
        <h2>Cakes</h2>
        <CakeCard nameOfCake={cakes[0]}/>
        <CakeCard nameOfCake={cakes[1]}/>
        <CakeCard nameOfCake={cakes[2]}/>
        <h4>Average Rating of Cakes: {(cakes[0].rating + cakes[1].rating + cakes[2].rating) / 3}</h4>
        </>
    );
}

export default CakeShopContainer;