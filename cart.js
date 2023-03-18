var mobileCost;
var counter;
var totalValue;
var totalValue1;
var grossTotal;
function mobiles() {
    var select = document.getElementById("mobile");
    var phones = ["Apple", "Samsung", "Oneplus"];
    var cost = [10000, 80000, 60000];
    for (var i = 0; i < phones.length; i++) {
        var optn = cost[i];
        var name = phones[i]
        var el = document.createElement("option");
        el.textContent = name;
        el.value = optn;
        select.appendChild(el);
        
    }  
}

function clothes() {
    var select = document.getElementById("clothing");
    var clothwear = ["Balenciaga", "puma", "adidas"];
    var cost = [5000, 3000, 2000];
    for (var i = 0; i < clothwear.length; i++) {
        var optn = cost[i];
        var name = clothwear[i];
        var el = document.createElement("option");
        el.textContent = name;
        el.value = optn;
        select.appendChild(el);
    }
}

function showInfo() {
 var select = document.getElementById("mobile");
 var pS = document.getElementById('pS');
 pS.innerHTML = (select[select.selectedIndex].text + " " +"₹"+select[select.selectedIndex].value);
 mobileCost = select[select.selectedIndex].value;
 console.log(mobileCost)
 
}

function showInfo2() {
 var select = document.getElementById("clothing");
 var pD = document.getElementById('pD');
 pD.innerHTML = (select[select.selectedIndex].text +" " +"₹"+ select[select.selectedIndex].value);
 clothesCost = select[select.selectedIndex].value;
 console.log(clothesCost);
}

function stepper(btn){
    const myInput = document.getElementById("my-input");
    let id = btn.getAttribute("id");
    let min = myInput.getAttribute("min");
    let max = myInput.getAttribute("max");
    let step = myInput.getAttribute("step");
    let val = myInput.getAttribute("value");
    let calcStep = (id == "increment") ? (step*1) : (step * -1);
    newValue = parseInt(val) + calcStep;
    if(newValue >= min && newValue <= max){
        myInput.setAttribute("value", newValue);
    }
    console.log(newValue);
}

function stepper1(btn){
    const myInput = document.getElementById("my-input1");
    let id = btn.getAttribute("id");
    let min = myInput.getAttribute("min");
    let max = myInput.getAttribute("max");
    let step = myInput.getAttribute("step");
    let val = myInput.getAttribute("value");
    let calcStep = (id == "increment") ? (step*1) : (step * -1);
    newValue1 = parseInt(val) + calcStep;

    if(newValue1 >= min && newValue1 <= max){
        myInput.setAttribute("value", newValue1);
    }
    console.log(newValue1);
}

function calculate(){
    totalValue = mobileCost*newValue
    console.log(totalValue)
    document.getElementById("phone-total").innerHTML=totalValue;
}

function calculate1(){
    totalValue1 = clothesCost*newValue1
    console.log(totalValue)
    document.getElementById("clothes-total").innerHTML=totalValue1;
}

function totalCost(){
    grossTotal = totalValue + totalValue1;
    document.getElementById("sub-total").innerHTML = grossTotal;  
    document.getElementById("total-price").innerHTML = grossTotal;
}



