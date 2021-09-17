window.addEventListener("load", function() {

    let listedPlanets;

    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then((listedPlanets) => {

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



   let form = document.querySelector("form");

   form.addEventListener('submit', function(event) {

      event.preventDefault();

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

   });
});
