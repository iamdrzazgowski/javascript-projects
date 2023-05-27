let resultField = document.querySelector(".result");
let btns = document.querySelectorAll(".btn");
let counter = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        // let name = e.currentTarget.classList;
        let name = e.target.classList;

        if (name.contains("decrease")) {
            counter--;
        } else if (name.contains("increase")) {
            counter++;
        } else {
            counter = 0;
        }

        resultField.textContent = counter;
    });
});
