// THIS IS A RETRY FILE

const adventurer = {
name: "Robin",
health: 10,
inventory: ["sword", "potion", "artifact"],
companion: {
    name: "Leo",
    type: "Cat",
    companion: {
        name: "Frank",
        type: "Flea"
}
},
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
}


console.log(adventurer.inventory[0]);

for (item of adventurer.inventory){
    console.log(item);
}

adventurer.roll();


class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
        
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
  
}

let robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll();


class Adventurer extends Character {
  constructor (name, role, style, stats) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    this.style = style;
    this.stats = stats;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}


class Companion extends Adventurer {
  constructor (name, bite, love, stats) {
    super(name);
    this.bite = bite;
    this.love = love;
    this.stats = stats;
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to smell for secrets.
  smell () {
    console.log(`${this.name} is smelling for secrets...`);
    super.roll();
  }
}

robin = new Adventurer("Robin"); //REDECLARATION TO NEW CLASSES
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Companion("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.scout()