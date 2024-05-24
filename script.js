function randomNum1 () {
    let input1 = document.getElementById("input1");
    input1.value = Math.floor(Math.random()*1000) + 1;
}
function randomNum2 () {
    let input2 = document.getElementById("input2");
    input2.value = Math.floor(Math.random()*1000) + 1;
}

function zbrojiButton() {
    let inp1 = document.querySelector('#input1').value;
    let inp2 = document.querySelector('#input2').value;
  
    let result = inp1.value + inp2.value;
    let getResult = document.getElementById("rezultat");
    getResult.value = result;
    result.classList.add("zelena");
  }