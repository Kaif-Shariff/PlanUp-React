import AddList from "./add-list-btn";
import CardHeader from "./card-header";
import ListItem from "./list-item";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Card(props) {
  const [items, setItems] = useState([]);

  const handleSetLists = () => {
    const uid = uuidv4();
    setItems([...items, <ListItem key={uid} />]);
    console.log(uid);
  };

  // const deleteItem = (id) => {
  //   setItems(items.filter((item) => item.id !== id));
  // };

  return (
    <>
      <div
        className={`relative mx-auto my-6 bg-white w-72 h-96 rounded-xl -top-10 ${props.marginL} ${props.marginT} dark:bg-[#1f1f1f] dark:text-white`}
      >
        <CardHeader cardItem={{ items, setItems }} />

        <div className="flex flex-col md:mt-5 md:h-96 md:w-full h-48 max-h-[200px] w-72 overflow-y-auto mx-auto mt-4 px-3">
          {items.map((item) => (
            <ListItem key={item.id} val={item.text} />
          ))}
        </div>
        <div className="flex justify-center mt-4 md:mt-4">
          <AddList onAdd={handleSetLists} />
        </div>
      </div>
    </>
  );
}

export default Card;
