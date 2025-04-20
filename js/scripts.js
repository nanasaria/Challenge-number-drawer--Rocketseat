const btnDrawerAgain = document.getElementById("drawer-again");
const formResultDrawer = document.getElementById("result-form");
const btnDrawer = document.getElementById("btn-drawer");
const formDrawer = document.getElementById("drawer-form");

const btnDontRepeat = document.getElementById("dont-repeat-number");
const divRepeat = document.getElementById("repeat-number");

const numberLabel = document.getElementById("numberLabel");
const endRangeLabel = document.getElementById("endRangeLabel");
const initialRangeLabel = document.getElementById("initialRangeLabel");

const number = document.getElementById("number");
const endRange = document.getElementById("end-range");
const initialRange = document.getElementById("initial-range");

const divDrawer = document.getElementById("drawer");
const divResultDrawer = document.getElementById("result-drawer");

const divResults = document.getElementById("number-results");
const quant = document.getElementById("quant-result");

let numbersGenerated = [];
let quantResult = 0;

formDrawer.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    !validateField(number.value, "a quantidade de números a serem sorteados") ||
    !validateField(endRange.value, "o valor máximo") ||
    !validateField(initialRange.value, "o valor mínimo")
  ) {
    return;
  }

  clearNumbers();
  drawNumbers();
  hideDrawer();
  updateQuantityResult();
  showResult();
});

formResultDrawer.addEventListener("submit", (event) => {
  event.preventDefault();
  hideResult();
  clearAll();
  showDrawer();
});

number.addEventListener("click", (event) => {
  numberLabel.classList.toggle("active");
});

endRange.addEventListener("click", (event) => {
  endRangeLabel.classList.toggle("active");
});

initialRange.addEventListener("click", (event) => {
  initialRangeLabel.classList.toggle("active");
});

btnDontRepeat.addEventListener("click", (event) => {
  event.preventDefault();
  divRepeat.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  if (!divResultDrawer.classList.contains("hide")) {
    startAnimation();
  } else {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.attributeName === "class") {
          const isVisible = !divResultDrawer.classList.contains("hide");

          if (isVisible) {
            observer.disconnect();
            startAnimation();
          }
        }
      }
    });

    observer.observe(divResultDrawer, { attributes: true });
  }
});

function validateField(value, fieldName) {
  const parsedValue = parseInt(value);
  if (value === "" || isNaN(parsedValue) || parsedValue <= 0) {
    alert(`Por favor, insira um valor válido e positivo para ${fieldName}.`);
    return false;
  }
  return true;
}

function drawNumbers() {
  const initial = parseInt(initialRange.value);
  const end = parseInt(endRange.value);
  const quantity = parseInt(number.value);

  for (let i = 0; i < quantity; i++) {
    let number = generateNumber(initial, end);

    if (divRepeat.classList.contains("active")) {
      while (numbersGenerated.includes(number)) {
        number = generateNumber(initial, end);
      }

      if (i === end - 1) {
        alert(
          `Não foi possível gerar ${quantity} números porque não podemos repeti-los. Foram sorteados apenas números de ${initial} a ${end}.`
        );
        break;
      }
    }

    numbersGenerated.push(number);
  }
}

function generateNumber(initial, end) {
  return Math.floor(Math.random() * (end - initial + 1)) + initial;
}

function showResult() {
  divResultDrawer.classList.remove("hide");

  for (let i = 0; i < numbersGenerated.length; i++) {
    const number =
      numbersGenerated[i] < 10
        ? `0${numbersGenerated[i]}`
        : numbersGenerated[i];
    createStyleResult(number);
  }

  startAnimation();
}

function showDrawer() {
  divDrawer.classList.remove("hide");
}

function hideResult() {
  divResultDrawer.classList.add("hide");
}

function hideDrawer() {
  divDrawer.classList.add("hide");
}

function createStyleResult(number) {
  const divCardNumber = document.createElement("div");
  divCardNumber.setAttribute("class", "card-number flex row");

  const divCardShow = document.createElement("div");
  divCardShow.setAttribute("class", "card-show");

  const h2 = document.createElement("h2");
  h2.setAttribute("class", "number");
  h2.innerHTML = `${number}`;

  divCardNumber.append(divCardShow);
  divCardNumber.append(h2);
  divResults.append(divCardNumber);
}

function clearAll() {
  clearNumbers();
  clearInput();
  clearClass();

  divResults.innerHTML = ``;
}

function clearClass() {
  numberLabel.classList.remove("active");
  endRangeLabel.classList.remove("active");
  initialRangeLabel.classList.remove("active");
  divRepeat.classList.remove("active");
}

function clearInput() {
  number.value = "";
  endRange.value = "";
  initialRange.value = "";
}

function clearNumbers() {
  numbersGenerated = [];
}

function updateQuantityResult() {
  quantResult++;
  quant.innerHTML = `${quantResult}° resultado`;
}

function startAnimation() {
  const cards = document.querySelectorAll("#number-results .card-number");

  const animateCard = (index) => {
    if (index >= cards.length) return;

    const card = cards[index];
    const cardShow = card.querySelector(".card-show");
    const number = card.querySelector(".number");

    if (cardShow && number) {
      cardShow.classList.add("animate");

      if (index === 0) {
        number.classList.add("animate-primary");
      } else {
        number.classList.add("animate");
      }

      setTimeout(() => {
        animateCard(index + 1);
      }, 3500);
    }
  };

  animateCard(0);

  setTimeout(() => {
    btnDrawerAgain.classList.add("animate-rise");
  }, 3500 * cards.length);
}
