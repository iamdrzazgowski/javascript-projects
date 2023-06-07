let data = require("./data.json");
let array = [];

data.map((e) => array.push(e.cardNumber));
array.forEach((e) => {
    console.log(e);
});
