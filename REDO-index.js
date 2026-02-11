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
        this.MAX_HEALTH = 100;
        
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
  constructor (name, role, style, stats, MAX_HEALTH, ROLES) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    this.style = style;
    this.stats = stats;
    this.MAX_HEALTH = MAX_HEALTH;
    ROLES = ["Wizard", "Fighter", "Healer"];
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
duel(Adventurer, self){
    let opponent = Adventurer;
    self = self;
    let roleSelf = this.role;
    let roleOpponent = Adventurer.role;
    console.log(roleSelf, roleOpponent)
  }
}


class Companion extends Character {
  constructor (name, bite, love, stats, MAX_HEALTH) {
    super(name);
    this.bite = bite;
    this.love = love;
    this.stats = stats;
    this.MAX_HEALTH = MAX_HEALTH;
    this.inventory.push("");
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

console.log(robin.role);

robin.scout()
robin.duel(robin, robin)



class AdventurerFactory {  
    constructor(role, oldRole, subject){ // Had to modify it since it wasn't working
        this.role = role;
        this.oldRole = oldRole;
        this.oldRole = this.role;
        this.adventurers = [];
        this.subject=subject;
        this.subject.role = role;
        
    }
    create(role){
        return new Adventurer(role);
    }
  //generate (name) {
  //  const newAdventurer = new Adventurer(name, this.role); 
  //  This code from the assignment errors out for some reason, I'm able to set the class properly with my code that I modified for it.
  //  this.adventurers.push(newAdventurer);
  //}
  findByIndex (index) {
    return this.adventurers[index];
  }
  findByName (name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

//const healers = new AdventurerFactory("Healer");
//robin = healers.generate("Robin");



    

new AdventurerFactory("Healer", robin.role, robin).create;
//robin = healers.generate("Robin");

robin.duel(robin, robin);
console.log(robin.role);