/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", convert)

function convert (e){
    e.preventDefault();
    const kiloValue = document.getElementById("search").value;
    const outputElement = document.getElementById('output');
    outputElement.classList.add("output-style");

    // elementai gautiems atsakymams stilizuoti
    const outputElementPounds = document.createElement("div");
    const outputElementGrams = document.createElement("div");
    const outputElementOunces = document.createElement("div");

    outputElement.append(outputElementPounds, outputElementGrams, outputElementOunces);
    if(kiloValue){
        const kilo = Number(kiloValue);
        const pounds = (kilo * 2.2046).toFixed(2);
        const grams = (kilo / 0.0010000).toFixed(2);
        const ounces = (kilo *35.274).toFixed(2);
        outputElementPounds.textContent = "Pounds: " + pounds + " lb";
        outputElementGrams.textContent = "Grams: " + grams +" g";
        outputElementOunces.textContent = "Ounces: " + ounces + " oz";
    } else if(kiloValue != Number){
        outputElement.textContent = "Klaidingai įvesti duomenys";
    }
}