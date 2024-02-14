import React, { useState } from "react";
// import Trash from "../../assets/trash.svg";

const ListItem = ({ val}) => {
  const [line, setLine] = useState("");

  const handleClick = (e) => {
    e.target.checked ? setLine("line-through text-slate-300") : setLine("");
  };

  return (
    <>
      <div className="flex items-center justify-evenly w-full my-1 py-3 ">
        <input
          type="checkbox"
          onClick={handleClick}
          className="w-4 h-4 mr-3 sm:mr-0"
        />

        <input
          type="text"
          defaultValue={val}
          placeholder="Add your task here"
          className={`outline-none bg-transparent ${line}`}
        />
      </div>
    </>
  );
};

export default ListItem;
