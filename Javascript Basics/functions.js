function hello(name){
    console.log("Hello " + name);
};

hello("Bob");

var hi = function(name){
    return "Hi there " + name + "!";
}

console.log(hi("Sally")); //anonymous function; function w/o name stored in variable

//ES2015 way of doing functions
const goodbye = (name) => { //parantheses not required if only one parameter
    my_string = `
    Goodbye ${name}.
    It was nice to see you.
    `;
    return my_string;
}
//arrow function

console.log(goodbye("Harry"));

// function Person(species) {
//     this.species = species;
//     this.status = "alive";
// }
// //constructor functions; function name should be uppercase

