import { useState } from "react";
import Item from "./Items";

const FoodItems = ({ items }) => {
    //   let foodItems = ["dal", "bhaat", "salad", "fruits", "water"];

    let [activeItems, setActiveItems] = useState([]);
    let onBuyButton = (item, event) => {
        let newItems = [...activeItems, item];
        setActiveItems(newItems);
    }

    return (
        <>
            <ul className="list-group ">
                {items.map((item) => (
                    <Item key={item}
                        foodItems={item}
                        bought={activeItems.includes(item)}
                        handleByButton={(event) =>
                            onBuyButton(item, event)
                        } />
                ))}
            </ul>
        </>
    );
};

export default FoodItems;
