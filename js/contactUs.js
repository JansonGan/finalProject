let charNum = document.querySelector("#charNum");
let textArea = document.querySelector("#textarea");

textArea.onkeyup = function () {
    charNum.innerHTML = 200 - textArea.value.length;
};