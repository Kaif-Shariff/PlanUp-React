const toggleBtn = document.getElementById("toggle");
const themeToggler = document.getElementById("themeToggleBtn");
const logo = document.getElementById("logoImg");
const bgImg = document.getElementById("bg-img");

// theme setter function

// using this function to set out preffered theme at localStorage.That way we can get the previous theme of the user when we reload or relaunch our website
function themeSetter(mode) {
  localStorage.setItem("theme", mode);
  if (mode == "dark") {
    toggleBtn.checked = true;
  } else {
    toggleBtn.checked = false;
  }
}

// this is changing the theme on the webpage
themeToggler.addEventListener("click", () => {
  if (toggleBtn.checked) {
    // if the checkbox is checked then this code gets executed and applies the dark theme to the webpage
    document.documentElement.classList.add("dark");
    themeSetter("dark");
    logo.src = "/assets/logoDark.svg";
  } else {
    // otherwise it sets light theme to the webpage
    document.documentElement.classList.remove("dark");
    themeSetter("light");
    logo.src = "/assets/logoLight.svg";
  }
});

// method to check the current theme of the website

function themeCheck() {
  let theme = localStorage.getItem("theme");
  if (theme == "dark") {
    document.documentElement.classList.add("dark");
    toggleBtn.checked = true;
    logo.src = "/assets/logoDark.svg";
  } else {
    document.documentElement.classList.remove("dark");
    toggleBtn.checked = false;
    logo.src = "/assets/logoLight.svg";
  }
}

window.addEventListener("load", themeCheck); // calling the themecheck function at the time of loading to determine the theme of the page

// change background color of the background on the basis of screen size

function changeBackgroundImg() {
  // This function is used to determine the screen size and if it is bigger than the value the code will get executed
  if (window.innerWidth > 640) {
    bgImg.src = "/assets/largeBg.svg";
  }
}

changeBackgroundImg(); // calling function

// changing text at the home page

const changingTxt = document.getElementById("changingTxt"); // this is the gradient text at the homepage which is actually in a <span> and have an ID.
const ogTxt = changingTxt.innerText;
const txt1 = "Extreme Efficiency";
const txt2 = "Simplicity";
const txt3 = "Optimize Work";
let count = 0;
// creating an array to simplify the traversal of texts
const txtarray = [ogTxt, txt1, txt2, txt3];

// function for changing the text
function changeTxt() {
  changingTxt.innerText = txtarray[count];
  count = (count + 1) % txtarray.length;
}

setInterval(changeTxt, 1500);

// landing section sliding

const landing = document.getElementById("LandingSection"); //selector for the <section>
const launchBtn = document.getElementById("getStartedBtn"); // selector for the get startd button which is used for going to the next section

//function for going to the next section by sliding to the left of the screen
launchBtn.addEventListener("click", () => {
  landing.style.transform = "translateX(-100%)";
  setTimeout(() => {
    landing.remove(); //removing the previous screen after the animation is completed for performance
  }, 900);
  setTimeout(() => {
    nextSection.classList.remove("hidden");
  }, 850);
});

// setting reload function on logo at the moment

logo.addEventListener("click", () => {
  window.location.reload(); //It is used to reload the page when it is slided to the next-section
});

//To-Do Section

const nextSection = document.getElementById("todoSection");
