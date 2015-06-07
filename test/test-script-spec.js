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



    it('takeItem should be a function', function(){
      expect(player.takeItem).to.be.a('function');
    });

    it('takeItem should only allow up to three items in the pack', function(){
      var waffle = new zombies.Item('waffle');
      var syrup = new zombies.Item('syrup');
      var coffee = new zombies.Item('coffee');
      var toast = new zombies.Item('toast');

      var result = player.takeItem(waffle);

      result.should.be.true;

      result = player.takeItem(syrup);
      result = player.takeItem(coffee);
      result = player.takeItem(toast);
      result.should.be.false;
    });


    it('discardItem should be a function', function(){
      expect(player.discardItem).to.be.a('function');
    });

    it('discardItem should remove an existing item from the pack ', function(){
      var waffle = new zombies.Item('waffle');
      var syrup = new zombies.Item('syrup');
      var coffee = new zombies.Item('coffee');
      var toast = new zombies.Item('toast');

      player.takeItem(waffle);
      player.takeItem(syrup);
      player.takeItem(coffee);

      var result = player.discardItem(waffle);
      result.should.be.true;
      result = player.discardItem(toast);
      result.should.be.false;
    });


    it('equip should be a function', function(){
      expect(player.equip).to.be.a('function');
    });
    it('equip function should be an Weapon and be in the pack', function(){
      var waffle = new zombies.Weapon('waffle', 5);
      var syrup = new zombies.Weapon('syrup', 10);
      var coffee = new zombies.Weapon('coffee', 15);
      var toast = new zombies.Weapon('toast', 20);
      var iceCream = new zombies.Weapon('Ice Cream', 20);

      player.takeItem(waffle);
      player.takeItem(syrup);
      player.takeItem(coffee);

      player.equip(waffle);

      player.equipped.should.be.equal(waffle);

      var result = player.equip(iceCream);
      result.should.be.false;


    });


    it('eat should be a function', function(){
      expect(player.eat).to.be.a('function');
    });
    it('item to eat should be some food', function(){
      var syrup = new zombies.Food('syrup', 10);
      var knife = new zombies.Weapon('Knife', 20);

      syrup.should.be.an.instanceof(zombies.Food);
      knife.should.not.be.an.instanceof(zombies.Food);
    });

    it('item to eat should be in the pack', function(){
      var waffle = new zombies.Weapon('waffle', 5);
      var syrup = new zombies.Weapon('syrup', 10);

      var result = player.takeItem(waffle);
      result.should.be.true;






    });

    it('eat function', function(){
      var waffle = new zombies.Food('waffle', 5);
      var syrup = new zombies.Food('syrup', 10);
      var knife = new zombies.Weapon('Knife', 20);









    });

    it('useItem should be a function', function(){
      expect(player.useItem).to.be.a('function');
    });

    it('equippedWith should be a function', function(){
      expect(player.equippedWith).to.be.a('function');
    });




















// Figure out how to test for individual things inside of a function
// Pass in value to make it true, pass in values to make it false


  });
});