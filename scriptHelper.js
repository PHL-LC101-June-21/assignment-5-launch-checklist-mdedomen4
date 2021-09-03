// Write your helper functions here!

//UNCOMMENT BEFORE SUBMITTING
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  // get the missionTarget div
  // set the inner HTML to this
  // fill in the information that is passed in
   // Here is the HTML formatting for our mission target div.
   

   //From studio 9/2/21
   const div = document.getElementById("missionTarget");
   div.innerHTML =

                `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty"
  } else if (isNaN(testInput)) {
    return "Not a Number"
  } else {
    return "Is a Number"
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

// check if any of the values are empty
    // if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty')
    // alert user that they need to fill out all the fields alert('message')
  // check if fuelLevelValue and cargoLevelValue are not numbers
    // alert the user that must enter valid input

  if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required.  Please fill in all boxes.");
  } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    alert("Please enter valid input.");
  }

  // set the list.style.visibility = 'visible'
  // get the pilot status, update the inner HTML to say `Pilot ${pilotValue} is ready for launch`
  // get the copilot status, update the inner HTML to say `CoPilot ${copilotValue} is ready for launch`
  // check if the fuel level is less 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the fuelStatus to "Fuel level too low for launch"

  // check if the cargo level is more than 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the cargoStatus to "Cargo level too high for launch"

    // if both fuel and cargo are good
      // change the launchStatus to "Shuttle is Ready for Launch" and color to green

  let launchStatus = document.getElementById("launchStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  list.style.visibility = "visible";

  pilot.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilot.innerHTML = `Co-Pilot ${copilot} is ready for launch`;

  if (fuelLevel < 10000) {
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
    fuelStatus.innerHTML = "Fuel level too low for launch";
  }

  if (cargoLevel > 10000) {
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
    cargoStatus.innerHTML = "Cargo level too high for launch";
  }

  if (fuelLevel > 10000 && cargoLevel < 10000) {
    launchStatus.innerHTML = "Shuttle is ready for launch";
    launchStatus.style.color = "green";
  }
}




async function myFetch() {
    let planetsReturned;

  planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
//get the json from the response
      return response.json();

      });

    return planetsReturned;
}

function pickPlanet(planets) {
  // randomly pick a planet from the array
  // Math random for index

  //From Studio 9/2/21
  planet = planets[Math.floor(Math.random() * planets.length)];
  return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

/*
let promise - fetch("https://google.com/json")
.then is a method that takes a function that it is going to run when it is done catching the thing, it will call that function and pass it a response
so now if we do:
console.log(response.data)

//this is a much faster way to do it
let promise = await fetch("https://google.com/json");
*/