let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;

  let remainingChar = maxAllowedChars - enteredTextLength;
  //   console.log(remainingChar);
  remainingCharsElement.textContent = remainingChar;

  if (remainingChar <= 10) {
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
  } else {
    remainingCharsElement.classList.remove("warning");
    productNameInputElement.classList.remove("warning");
  }
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
