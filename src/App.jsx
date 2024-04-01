import Card_item from "./Components/Card_item";
import Card_items_data from "./API/Card_items_data";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState(Card_items_data);
  return (
    <>
      <div id="container" className="flex justify-center">
        <div
          id="card_container"
          className="border-2 border-black rounded-xl w-[85%] h-fit mt-5 p-2"
        >
          <Card_item Card_data={state} />
        </div>
      </div>
    </>
  );
};

export default App;
