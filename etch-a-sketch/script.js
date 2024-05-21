const etchASketchContainer = document.querySelector('#container');
const numberOfSquaresInput = document.querySelector("#number-of-squares");
const sizeButton = document.querySelector('#size-button');

function updateGridSize(numberOfSquares, rawNumberOfSquares) {
  let existingGridSquares = etchASketchContainer.querySelectorAll('.grid-square');
  existingGridSquares.forEach(square => {
    etchASketchContainer.removeChild(square);
  });

  for (i = 0; i < numberOfSquares; ++i) {
    let etchASketchGridSquare = document.createElement("div");
    etchASketchGridSquare.classList.add("grid-square");
    etchASketchContainer.appendChild(etchASketchGridSquare);
    let squareWidth = (400 / rawNumberOfSquares) + "px";
    etchASketchGridSquare.style.width = squareWidth;
    etchASketchGridSquare.style.height = squareWidth;
  };
  let etchASketchGridSquares = document.querySelectorAll(".grid-square");

  etchASketchGridSquares.forEach(square => {
    square.addEventListener("mouseover", () => {
      let squareColor = '';
      switch(colorShifter.value) {
  
        case 'normal':
          square.style.backgroundColor = "black";
          square.style.opacity = 1.0;
          break;

        case 'rainbow':
          squareColor = Math.floor(Math.random()*16777215).toString(16);
          squareColor = "#" + squareColor.padStart(6, '0');
          square.style.backgroundColor = squareColor;
          square.style.opacity = 1.0;
          break;

          case 'opacity-shifter':
            let currentOpacity = parseFloat(square.style.opacity);
            if (!isNaN(currentOpacity)) {
              square.style.opacity = (currentOpacity - 0.1 < 0) ? 1 : currentOpacity - 0.1;
            } else {
              square.style.opacity = 1;
            }
            break;

        default:
          colorOption = 'normal';
          break;
      };
    }); 
  });
};

sizeButton.addEventListener('click', function(e) {
  let rawNumberOfSquares = numberOfSquaresInput.value;
  let numberOfSquares = rawNumberOfSquares ** 2;
  updateGridSize(numberOfSquares, rawNumberOfSquares);
})

for (i = 0; i < 144; ++i) {
  let etchASketchGridSquare = document.createElement("div");
  etchASketchGridSquare.classList.add("grid-square");
  etchASketchContainer.appendChild(etchASketchGridSquare);
  let squareWidth = (400 / 12) + "px";
  etchASketchGridSquare.style.width = squareWidth;
  etchASketchGridSquare.style.height = squareWidth;
};

let etchASketchGridSquares = document.querySelectorAll(".grid-square");

etchASketchGridSquares.forEach(square => {
  square.addEventListener("mouseover", () => {
    let squareColor = '';
    switch(colorShifter.value) {

      case 'normal':
        square.style.backgroundColor = "black";
        square.style.opacity = 1.0;
        break;

      case 'rainbow':
        squareColor = Math.floor(Math.random()*16777215).toString(16);
        squareColor = "#" + squareColor.padStart(6, '0');
        square.style.backgroundColor = squareColor;
        square.style.opacity = 1.0;
        break;

      case 'opacity-shifter':
        let currentOpacity = parseFloat(square.style.opacity);
        if (!isNaN(currentOpacity)) {
          square.style.opacity = (currentOpacity - 0.1 < 0) ? 1 : currentOpacity - 0.1;
        } else {
          square.style.opacity = 1;
        }
        break;

      default:
        colorOption = 'normal';
        break;
    };
  }); 
});

const colorShifter = document.querySelector("#color-option");
let colorOption = '';

colorShifter.addEventListener("change", () => {
  colorOption = colorShifter.value;
});
