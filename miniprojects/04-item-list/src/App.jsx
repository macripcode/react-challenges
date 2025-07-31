/*
Practicing array handling
*/
import "./App.css";

function App() {


  const fruits = [
    { id: 1, name: "watermelon 🍉" },
    { id: 2, name: "strawberry 🍓" },
    { id: 3, name: "cherry 🍒" },
    { id: 4, name: "Coconut 🥥" },
    { id: 5, name: "kiwi 🥝" },
    { id: 6, name: "pineapple 🍍" },
  ];

  function handleRemove(e){
    console.log(e)

  }
  return (
    <div>
      <h1>List of Fruits</h1>
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              {fruit.name} <button onClick={() => handleRemove(fruit.id)}>remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
