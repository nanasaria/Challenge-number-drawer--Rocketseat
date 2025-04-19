const btnDrawerAgain = document.getElementById("drawer-again");
const btnDontRepeat = document.getElementById("dont-repeat-number");
const divRepeat = document.getElementById("repeat-number");
const numberLabel = document.getElementById("numberLabel");
const endRangeLabel = document.getElementById("endRangeLabel");
const initialRangeLabel = document.getElementById("initialRangeLabel");

const number = document.getElementById("number");
const endRange = document.getElementById("end-range");
const initialRange = document.getElementById("initial-range");

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
  const cards = document.querySelectorAll("#number-results .card-number");

  const animateCard = (index) => {
    if (index >= cards.length) return;

    const card = cards[index];
    const cardShow = card.querySelector(".card-show");
    const number = card.querySelector(".number");

    if (cardShow && number) {
      cardShow.classList.add("animate");

      setTimeout(() => {
        if (index === 0) {
          number.classList.add("animate-primary");
        } else {
          number.classList.add("animate");
        }
      }, 1900);

      setTimeout(() => {
        animateCard(index + 1);
      }, 4400);
    }
  };

  animateCard(0);

  setTimeout(() => {
    btnDrawerAgain.classList.add("animate-rise");
  }, 4400 * cards.length);
});
