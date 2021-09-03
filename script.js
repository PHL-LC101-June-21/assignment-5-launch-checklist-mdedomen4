// Write your JavaScript code here!

//TODO: blah

//const { addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then((listedPlanets) => {
       //the array of planets is listedPlanets
        let planet = pickPlanet(listedPlanets);
        console.log("Adding destination info")
        console.log(planet);
        addDestinationInfo(
            document, 
            planet.name, 
            planet.diameter, 
            planet.star,
            planet.distance,
            planet.moons,
            planet.image)
   })
        //.then(function () {
        //console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      //  const planet = pickPlanet(listedPlanets)
      //  addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)



   // get the form
   let form = document.querySelector("form");
   //add a listener to when the form submit
   form.addEventListener('submit', function(event) {
      //if it's not, preventDefault
      event.preventDefault();
      //get the value for each of the input field
      let pilotInput = document.querySelector("input[name=pilotName]");
      const pilotValue = pilotInput.value;

      let copilotInput = document.querySelector("input[name=copilotName]");
      const copilotValue = copilotInput.value;

      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      const fuelLevelValue = fuelLevelInput.value;

      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      const cargoMassValue = cargoMassInput.value;

      let list = document.getElementById('faultyItems');
      formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoMassValue)
      addDestinationInfo(document, name, diameter, star, distance, moons, image);
      //image or imageUrl, try both
   });
});