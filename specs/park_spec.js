const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
park = new Park("glasgow green", 10, ["t-rex", "carnivore", 50 ])
});

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "glasgow green")
  });

  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.countDinosaurs();
    assert.strictEqual(actual, 1)
  });


  it('should be able to add a dinosaur to its collection', function(dinosaur){
park.addDinosaur("Stegasaurus", "Herbivore", 30)
    const actual = park.countDinosaurs();
    assert.strictEqual(actual, 2)
  });



  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur("Stegasaurus", "Herbivore", 30)
    park.removeDinosaur()
    const actual = park.countDinosaurs();
    assert.strictEqual(actual, 1)

  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur("Stegasaurus", "Herbivore", 30);
    park.addDinosaur("Stegasaurus", "Herbivore", 30);
    park.addDinosaur("T-Rex", "Carnivore", 50);
    park.addDinosaur("Velociraptor", "Carnivore", 40);
    park.mostVisitors();
    const expected = ("T-Rex", "Carnivore", 50)
    const actual = park.mostVisitors();
    assert.deepStrictEqual(actual, expected)
  });



  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});


// beforeEach(function () {
//   dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
// });
//
// it('should have a species', function () {
//   const actual = dinosaur.species;
//   assert.strictEqual(actual, 't-rex');
// });
//
// it('should have a diet', function () {
//   const actual = dinosaur.diet;
//   assert.strictEqual(actual, 'carnivore');
// });
//
// it('should have an average number of visitors it attracts per day', function () {
//   const actual = dinosaur.guestsAttractedPerDay;
//   assert.strictEqual(actual, 50);
// });
//
// });
