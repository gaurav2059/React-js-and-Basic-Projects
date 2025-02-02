
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";


function App() {

  // let foodItems = ["dal", "bhaat", "salad", "sabji", "fruits", "water"];
  // let [textToShow, setTextState] = useState();

  let [foodItems, setFoodItems] = useState([

  ]);



  // let foodItems = []; // Use this line to test the "I'm Still Hungry" message.
  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItems = event.target.value;
      let newItems = [...foodItems, newFoodItems];
      setFoodItems(newItems);

    }


  }
  return (
    <>
      <Container>

        <h1 className="food-heading">Healthy Foods</h1>

        <FoodInput handleKeyDown={onKeyDown}></FoodInput>

        <FoodItems items={foodItems} />

        <ErrorMessage items={foodItems} />
      </Container>
      {/* <Container>
        <p>Healthy Foods are Above</p>
      </Container> */}
    </>
  );
}

export default App;
