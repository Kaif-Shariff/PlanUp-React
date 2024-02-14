import Trash from "../../assets/trash.svg";

import React from "react";
import ListItem from "./list-item";

const Delete = ({ wid }) => {
  // const [items, setItems] = useState([]);

  // const handleSetLists = () => {
  //   setItems([...items, <ListItem />]);
  // };

  const handleClick = () => {
    {
      // const updatedItems = items.filter((_, i) => i !== index);
      // setItems(updatedItems);
    }
  };

  return (
    <button className="cursor-pointer" onClick={handleClick}>
      <img src={Trash} width={wid} alt="Delete Button" title="Delete" />
    </button>
  );
};

export default Delete;
