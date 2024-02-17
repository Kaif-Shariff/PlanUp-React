// selectors
const area = document.getElementById("cardArea"); //This is the area where cards are going to go when generated, it's a flexbox!
const CreateListBtn = document.getElementById("CreateListBtn"); //The add new card button

// making the dashed border div a button to add new to-do list
CreateListBtn.addEventListener("click", () => {
  const card = document.createElement("div");
  card.classList.add("card-style");

  // div for title
  const cardTitle = document.createElement("div"); //Creating a div for title of the card
  cardTitle.classList.add("title-style");

  // input tag for card title
  const titleInput = document.createElement("input"); //Creating an input type element
  titleInput.classList.add("title-input-style");
  titleInput.placeholder = "Add Title"; //Adding a placeholder to the input

  // creating img tag and setting it's source
  const imgTag = document.createElement("img");
  imgTag.classList.add("trashIcon-css");
  imgTag.src = "/assets/trash.svg";
  imgTag.title = "Delete Card";

  cardTitle.appendChild(titleInput); //appending the titleInput to cardTitle div
  cardTitle.appendChild(imgTag); //appending the titleInput to cardTitle div
  card.appendChild(cardTitle);

  // Creating checkbox's div
  const checkboxDiv = document.createElement("div");
  checkboxDiv.classList.add("checkbox-div-style");
  card.appendChild(checkboxDiv);

  //Creating the Checkbox itself

  // the latest created list are going to go in checkboxDiv

  // Writing code for adding new list inside the to-do list

  // Elements
  const newListDiv = document.createElement("div");
  newListDiv.classList.add("add-new-list-div");
  newListDiv.title = "Add new list";

  const addListIcon = document.createElement("img");
  addListIcon.src = "/assets/plusIcon.svg";
  addListIcon.title = "Add List";

  newListDiv.appendChild(addListIcon);
  card.appendChild(newListDiv);

  card.appendChild(newListDiv);

  newListDiv.addEventListener("click", () => {
    const checkbox = document.createElement("div");
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    const checkboxTxt = document.createElement("input");
    checkboxTxt.autofocus = true;
    checkboxTxt.placeholder = "Add your task here...";

    checkbox.classList.add("checkbox-style");
    checkboxInput.classList.add("checkbox-input-style");
    checkboxTxt.classList.add("checkbox-Txt-style");
    checkboxTxt.innerText = "Hello World";

    checkboxDiv.appendChild(checkbox);
    checkbox.appendChild(checkboxInput);
    checkbox.appendChild(checkboxTxt);
  });

  imgTag.addEventListener("click", () => {
    card.remove();
  });

  area.insertBefore(card, CreateListBtn); // this is used instead of appendChild() method because i want the newly created div to appear above the existing div
});
