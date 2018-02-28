// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
var reversed = planets.reverse();
var select = document.getElementById("planets");

planets.forEach(function(planet) {
  var opt = planet[0];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
});

function calculateWeight (weight, planetName) {
  console.log(arguments);
  var result;
  planets.forEach(function(planet) {
    console.log(planet);
    if (planet[0] === planetName) {
      result = weight * planet[1];
    }
  });
  return result;
}

function handleClickEvent(e) {
  var userWeight = document.getElementById("user-weight").value;
  var planetName = document.getElementById("planets").value;
  var result = document.getElementById("output").value;
  
  var weight = calculateWeight(userWeight, planetName);
  document.getElementById("output").innerHTML = 'If you were on ' + planetName +  ', you would weigh ' + weight + 'lbs!';
}