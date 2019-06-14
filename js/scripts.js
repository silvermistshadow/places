//Back end logic
function Vacations() {
  this.places = []
}

Vacations.prototype.addDestination = function(place) {
  this.places.push(place);
}

function Place(location, landmarks, timeOfYear, notes) {
  this.location = location,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear,
  this.notes = notes
}








//UI
