//Back end logic
function Vacations() {
  this.places = [],
  this.currentId = 0
}

Vacations.prototype.addDestination = function(place) {
  place.id = this.assignId();
  this.places.push(place);

}

Vacations.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Place(location, landmarks, timeOfYear, notes) {
  this.location = location,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear,
  this.notes = notes
}





//UI
