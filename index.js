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

adventurer.roll()


class Character{
    constructor (name, roll){
        this.name = name;
        this.roll = roll;
        this.health = 100;
        this.inventory = [];
        this.MAX_HEALTH = 100;
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
  constructor (name, role, MAX_HEALTH, ROLES) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    this.MAX_HEALTH = MAX_HEALTH;
    ROLES = ["Wizard", "Fighter", "Healer"];
    ROLES = ROLES;
    if(role!== ROLES[0] && role!== ROLES[1] && role!== ROLES[2]){
        // Put a random number picker here, between 0 to 2, to determine give robin a random class, if they don't have one... maybe use "grater than .5"
        // or less then to decided?
        let num = Math.random();
        if (num > 2/3){
            this.role = ROLES[0];
        }
        else if(num>1/3){
            this.role = ROLES[1];
        } else{
            this.role = ROLES[2];
        }
    }
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
   
    super(name);
    this.role = role;
    this.type = type; 
    this.health = health;
   
  }
  
  smell () { // Companions can small for secrets
    console.log(`${this.name} is smelling for secrets...`);
    super.roll();
  }
}
let leo = new Companion(robin.companion.name, robin.companion.role, robin.companion.type, robin.companion.health, robin.MAX_HEALTH);
let frank = new Companion(robin.MAX_HEALTH, robin.companion.companion.name, robin.companion.companion.role, robin.companion.companion.type, robin.companion.companion.health);
robin = new Adventurer(robin.name, robin.role, robin.MAX_HEALTH,);


console.log(leo.name, leo.health);
leo.smell;


//console.log(Adventurer);

// Character.MAX_HEALTH = 100;
//Adventurer.ROLES = ["Fighter", "Healer", "Wizard"]; Had to do this in CLASS

console.log(robin.role);

class AdventurerFactory {  
  constructor (role) {
    this.role = role;
    this.adventurers = [];
  }
  generate (name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex (index) {
    return this.adventurers[index];
  }
  findByName (name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
robin = healers.generate("Robin");



console.log(robin.role);


class AdventurerFactory2{ // This is working for the class change
    constructor(role, oldRole){
        this.role = role;
        this.oldRole = oldRole;
        this.oldRole = this.role;
    }
    
}
console.log(robin.role);

robin = new AdventurerFactory2("Healer", robin.role);