import React from "react";
import Delete from "./delete";

const CardHeader = ({ items, setItems }) => {
  return (
    <div>
      <div className="flex items-center justify-between p-2 px-6 border-b-[3px] border-b-basePurple">
        <input
          type="text"
          placeholder="Set Title"
          className="text-black text-[30px] w-36 font-semibold outline-none bg-transparent dark:text-white"
        />

        <Delete wid="25" CardItems={{ items, setItems }} />
      </div>
    </div>
  );
};

export default CardHeader;
