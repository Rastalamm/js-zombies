var chai = require('chai');
var should = chai.should();
var expect  = chai.expect;
var zombies = require('../zombies.js');


describe('Item', function () {

  describe('constructor', function () {

    var item;
    beforeEach(function () {
      item = new zombies.Item('Water Bottle');
    });
    it('should be a function', function(){
      expect(zombies.Item).to.be.a('function');
    });

    it('should create a new Item with a name', function(){
      item.should.have.property('name');
    });

    it('the item name should be the value that is passed into the property', function(){
      item.name.should.be.equal('Water Bottle');
    });

  });

});

describe('Weapon', function () {

  describe('constructor', function () {

    var weapon;

    beforeEach(function () {
      weapon = new zombies.Weapon('Crowbar', 15);
    });

    it('should be a function', function(){
      expect(zombies.Weapon).to.be.a('function');
    });


    it('should extend Item', function () {
      weapon.should.be.an.instanceof(zombies.Item);
    });

    it('should create a new Item with a name', function(){
        weapon.should.have.property('name');
    });

    it('the weapon name should be the value that is passed into the property', function(){
      weapon.name.should.be.equal('Crowbar');
    });

    it('should create a new Item with a property of damage', function(){
      weapon.should.have.property('damage');
    });
    it('the weapon should be the value that is passed into the property', function(){
      weapon.damage.should.be.equal(15);
    });
  });
});


describe('Food', function () {

  describe('constructor', function () {

    var food;

    beforeEach(function () {
      food = new zombies.Food('Pizza', 100);
    });

    it('should be a function', function(){
      expect(zombies.Food).to.be.a('function');
    });

    it('should create a new Item with a name', function(){
      food.should.have.property('name');
    });

    it('the weapon name should be the value that is passed into the property', function(){
      food.name.should.be.equal('Pizza');
    });

    it('should create a new Item with a property of damage', function(){
      food.should.have.property('energy');
    });
    it('the weapon name should be the value that is passed into the property', function(){
      food.energy.should.be.equal(100);
    });
  });
});


describe('Player', function () {

  describe('constructor', function () {

    var player;

    beforeEach(function () {
      player = new zombies.Player('Judah', 100, 100, 100);
    });

    it('should be a function', function(){
      expect(zombies.Player).to.be.a('function');
    });

    it('should create a new Player with a name', function(){
      player.should.have.property('name');
    });

    it('the Player name should be the value that is passed into the property', function(){
      player.name.should.be.equal('Judah');
    });

    it('should create a new Player with a property of health', function(){
      player.should.have.property('health');
    });
    it('the player health should be the value that is passed into the property', function(){
      player.health.should.be.equal(100);
    });

    it('should create a new Player with a property of strength', function(){
      player.should.have.property('strength');
    });
    it('the player strength should be the value that is passed into the property', function(){
      player.strength.should.be.equal(100);
    });

    it('should create a new Player with a property of damage', function(){
      player.should.have.property('speed');
    });
    it('the player speed  should be the value that is passed into the property', function(){
      player.speed.should.be.equal(100);
    });

    it('should create a new Player with a property of pack', function(){
      player.should.have.property('pack');
    });

    it('should create a new Player with a property of maxHealth', function(){
      player.should.have.property('maxHealth');
    });

    it('should create a new Player with a property of isAlive', function(){
      player.should.have.property('');
    });

    it('should create a new Player with a property of equipped', function(){
      player.should.have.property('');
    });





    it('should create a new Player with a property of getPack', function(){
      player.should.have.property('');
    });
    it('should create a new Player with a property of getMaxHealth', function(){
      player.should.have.property('');
    });







  });
});