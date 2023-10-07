let rateButtons = document.querySelectorAll(".buttons-rate");
let submitButton = document.querySelector("#submit-button input");
let cardThank = document.querySelector(".card-thank");
let cardMain = document.querySelector(".card");
let selectId = document.getElementById("select-id");

let selectedRate = 0;

rateButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    rateButtons.forEach((button) => {
      button.classList.remove("active");
    });

    btn.classList.add("active");

    selectedRate = btn.innerText;
    selectId.innerHTML = selectedRate;
  });
});

submitButton.addEventListener("click", (btnClick) => {
  btnClick.preventDefault();

  if (selectedRate === 0) {
    let errorMessage = document.getElementById("errorMessage");
    errorMessage.style.color = "red";

    applyShakeEffect(errorMessage);

    setTimeout(() => {
      errorMessage.style.color = "hsl(217, 12%, 63%)";
    }, 3000);

    return;

    function applyShakeEffect(element) {
      element.classList.add("shake");
      setTimeout(() => {
        element.classList.remove("shake");
      }, 300);
    }
  }

  cardThank.style.display = "flex";
  cardMain.style.display = "none";
});
