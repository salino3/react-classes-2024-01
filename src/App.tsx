import React from "react";
import { Animal } from "@/core";
import "./App.css";

const animal1 = React.createElement(Animal, {
  name: "Cat",
  sound: "Miau",
  alive: true,
});

const animal2 = React.createElement(Animal, {
  name: "Elephant",
  sound: "Trumpet",
  alive: true,
});

const animal3 = React.createElement(Animal, {
  name: "Giraffe",
  sound: "Grunt",
  alive: true,
});

export const Animals = [animal1, animal2, animal3];

function App() {
  return (
    <>
      {Animals.map((animal, index) => (
        <React.Fragment key={index}>{animal}</React.Fragment>
      ))}
      {animal1}
    </>
  );
}

export default App;
