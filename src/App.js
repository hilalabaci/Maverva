import React from "react";
import CardList from "./components/card-list/CardList";
/* import Card from "./components/card/Card"; */
import "./App.css";
/* import AddCard from "./components/card/add-a-card/AddCard"; */

function App() {
  return (
    <div className="App">
      <CardList />
      {/* <Card note={"this is note"} /> */}
      {/*     <AddCard/> */}
    </div>
  );
}

export default App;
