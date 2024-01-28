class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.species = "human";
    }
    info() {
        this.theinfo = `
        ------------------------------
        name: ${this.name}
        age: ${this.age}
        species: ${this.species}
        ------------------------------
        `;
        console.log(this.theinfo);
    }
    says() {
        console.log(`${this.name} says, "Hi, how are ya? Nice weather we're having."`);
    }
}

let sally = new Person("Sally", 24);
sally.info();
sally.says();

class Monster extends Person {
    constructor(name, age, species){
        super(name,age);
        this.species = species;
    }
    says() {
        console.log(`${this.name} says, "Grrr!"`);
    }
}

let harry = new Monster("Harry", 42, "werewolf");
harry.info();
harry.says();

