
const Park = function (name, ticket_price) {
  this.name = name;
  this.ticket_price = ticket_price;
  this.dinosaurs = [];
}

Park.prototype.countDinosaurs = function () {
  return this.dinosaurs.length;

};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur)
};


Park.prototype.removeDinosaur = function () {
  this.dinosaurs.pop()
};

Park.prototype.mostVisitors = function () {
  
};

// for visitors in this.dinosaurs return the dinosaur with the highest visitor numbers.



module.exports = Park;
