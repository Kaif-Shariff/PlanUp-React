import AddList from "./card/add-list-btn";

function CardPlaceholder({ addCard }) {
  return (
    <>
      <div
        className="relative flex items-center justify-center my-6 w-72 h-96 rounded-xl bg-transparent border-dashed border-4 border-basePurple cursor-pointer -top-10 hover:bg-lightPurple dark:hover:bg-deepPurple"
        onClick={addCard}
      >
        <div className="flex items-center justify-center mt-4">
          <AddList />
        </div>
      </div>
    </>
  );
}

export default CardPlaceholder;
