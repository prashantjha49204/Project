import { useState } from "react";

import "./App.css";

import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";

function App() {
  const [item, setItem] = useState(Data);

  const filterItem = (catgItem) => {
    const updateItems = Data.filter((currElem) => {
      return currElem.category === catgItem;
    });

    setItem(updateItems);
  };

  const resetStt = () => {
    setItem(Data);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center col-12 fw-light  mb-5 bg-info">
            Food Filter App
          </h1>
          <Buttons filterItem={filterItem} resetStt={resetStt} />
          <Card item={item} />
        </div>
      </div>
    </>
  );
}

export default App;
