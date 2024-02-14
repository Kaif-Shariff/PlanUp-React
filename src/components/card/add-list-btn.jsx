import React from "react";
import plus from "../../assets/plusIcon.svg";
const AddList = ({ onAdd }) => {
  const handleClick = () => {
    onAdd();
  };

  return (
    <div
      className="bg-darkPurple cursor-pointer hover:opacity-70 transition-ease-in 
      duration-500 flex items-center justify-center rounded-full w-16 h-16"
      onClick={handleClick}
    >
      <img src={plus} />
    </div>
  );
};

export default AddList;
