import { Animal, Animals } from "./core";
import "./App.css";

function App() {
  return (
    <>
      {Animals.map((animal, index) => (
        <Animal key={index} {...animal} />
      ))}
    </>
  );
}

export default App;
