
function updateColor() {

    if (count > 0) {
        countDisplay.style.color = "green";
    }

    else if (count < 0) {
        countDisplay.style.color = "red";
    }

    else {
        countDisplay.style.color = "black";
    }}

let count = 0;

let countDisplay = document.querySelector("#count");

let increaseBtn = document.querySelector("#increase");

increaseBtn.addEventListener("click", function () {

    count++;

    countDisplay.innerText = count;
    updateColor();

});
let decreaseBtn= document.querySelector("#decrease");
decreaseBtn.addEventListener("click",function(){
    count--;
      countDisplay.innerText = count;
      updateColor();
})
let resetBtn=document.querySelector("#reset");
resetBtn.addEventListener("click", function () {

    count=0;

    countDisplay.innerText = count;
    updateColor();
});