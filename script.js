const shuffle = document.getElementById("shuffle");
let disp = document.getElementById("dice_display");
let pint = document.querySelector(".printer");

let dice_numbers = [];
let i = 0;

shuffle.addEventListener("click",()=>{
        let random_number = Math.ceil(Math.random() * 6)
        disp.textContent = "Your Dice : " + random_number;
})

