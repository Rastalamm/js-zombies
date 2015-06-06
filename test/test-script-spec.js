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

    // Testing for private variable?
    it('should create a new Player with a property of pack', function(){
      player.should.have.property('_pack');
    });

    it('should be an array', function(){
      player._pack.should.be.an('array');
    });

    it('should create a new Player with a property of maxHealth', function(){
      player.should.have.property('_maxHealth');
    });

    it('should create a new Player with a property of isAlive', function(){
      player.should.have.property('isAlive');
    });

    it('isAlive should return a boolean', function () {
      player.isAlive.should.be.an('boolean');
    });

    it('should create a new Player with a property of equipped', function(){
      player.should.have.property('equipped');
    });
    it('equipped should return a boolean', function () {
      player.equipped.should.be.an('boolean');
    });

    it('getpack should be a function', function(){
      expect(player.getPack).to.be.a('function');
    });

    it('getpack should return an array', function () {
      player.getPack().should.be.an('array');
    });

    it('getMaxHealth should be a function', function(){
      expect(player.getMaxHealth).to.be.a('function');
    });

    it('getMaxHealth should return a number', function () {
      player.getMaxHealth().should.be.a('number');
    });

    it('checkPack should be a function', function(){
      expect(player.checkPack).to.be.a('function');
    });

    it('checkPack should equal true', function () {
      expect(player.checkPack()).to.be.true;
    });

// Figure out how to test for individual things inside of a function
// Pass in value to make it true, pass in values to make it false
    it('discard item', function (done) {
      player.takeItem('baton')


    });


  });
});