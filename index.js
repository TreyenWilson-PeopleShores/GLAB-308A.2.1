let adventurer ={
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
}

for (item of adventurer.inventory){
    console.log(item);
}
adventurer.companion = {};
adventurer.companion.name = "Leo";
adventurer.companion.type = "Cat";


adventurer.companion.companion = {};
adventurer.companion.companion.name = "Frank";
adventurer.companion.companion.type = "Flea";


adventurer.roll = function roll (mod = 0) {
    const result = Math.floor(Math.random()*20)+1+mod;
    console.log(`${this.name} rolled a ${result}.`)
}
console.log(adventurer);

adventurer.roll()


class Character{
    constructor (name, roll){
        this.name = name;
        this.roll = roll;
        this.health = 100;
        this.inventory = [];
    }
}

let robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory =["Small hat", "sunglasses"]

robin.companion.roll;


class Adventurer extends Character {
  constructor (name, role) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}


class Companion extends Character {
  constructor (name, role, type, health) {
   
    // Adventurers have specialized roles.
    super(name);
    this.role = role;
    this.type = type; 
    this.health = health;
    // Every adventurer starts with a bed and 50 gold coins.
   
  }
  // Adventurers have the ability to scout ahead of them.
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}
let Leo = new Companion(robin.companion.name, robin.companion.role, robin.companion.type, robin.companion.health);
let Frank = new Companion(robin.companion.companion.name, robin.companion.companion.role, robin.companion.companion.type, robin.companion.companion.health);
robin = new Adventurer(robin.name, robin.role);