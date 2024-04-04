import Card_item from "./Components/Card_item";
import Card_items_data from "./API/Card_items_data";
import { useState } from "react";

const App = () => {
  const [data, setdata] = useState(Card_items_data);
  return (
    <>
      <div id="container" className="flex justify-center">
        <div
          id="card_container"
          className="w-[85%] h-fit mt-5 p-2 mb-5 max-w-[1400px] m-auto"
        >
          <Card_item Card_data={data} />
        </div>
      </div>
    </>
  );
};

export default App;
