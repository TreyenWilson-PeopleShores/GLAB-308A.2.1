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