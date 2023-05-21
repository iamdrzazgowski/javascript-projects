let resultField = document.querySelector(".result");
let reset = document.querySelector(".reset");
let decrease = document.querySelector(".decrease");
let increase = document.querySelector(".increase");

let value = 0;

increase.addEventListener("click", () => {
    value += 1;
    resultField.textContent = value;
});

decrease.addEventListener("click", () => {
    value -= 1;
    resultField.textContent = value;
});

reset.addEventListener("click", () => {
    value = 0;
    resultField.textContent = value;
});
