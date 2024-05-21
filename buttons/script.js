const buttonContainer = document.querySelector("#button-container");
const enterButton = document.querySelector("#button-button");

enterButton.addEventListener("click", () => {
  let numberOfButtons = document.querySelector("#number-of-buttons").value;

  buttonContainer.innerHTML = "";

  for (let i = 0; i < numberOfButtons; i++) {
    let button = document.createElement("button");
    button.classList.add("button");
    button.textContent = " ";
    buttonContainer.appendChild(button);
    }

  let buttons = document.querySelectorAll(".button");

  buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "purple";
      button.style.color = "white"
      button.textContent = "pop!"
    });
  });
});