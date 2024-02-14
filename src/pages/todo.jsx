import React, { useState } from "react";

import CardPlaceholder from "../components/card-placeholder";
import Card from "../components/card/todo-card";

const TodoPage = () => {
  const [cardList, setCardList] = useState([]);

  const addCard = () => {
    setCardList([...cardList, <Card key={cardList.length} />]);
  };

  return (
    <div className="flex flex-wrap justify-center items-center mx-auto px-14 py-12 h-screen">
      {cardList}

      <CardPlaceholder addCard={addCard} />
    </div>
  );
};

export default TodoPage;
