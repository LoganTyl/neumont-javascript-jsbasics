let a = 5;
console.log(a);
a = "Bob";
console.log(a);
a = false;
console.log(a);

a = ["Scott", "dog", 3.14, ["red", "toy", "ball", 24], true];
console.log(a[3][2]);

b = ["blue", "toy", "car", 53];

a.push(b); //appends b to end of a; unshift to add element to beginning of array
console.log(a); 
b.pop(); //deletes last element of array
console.log(a);
a[3].pop();
console.log(a);

console.log(a.length);

let c = {
    name: "Bob",
    age: 21,
    species: "zombie"
};

c.hobbies = ['wandering aimlessly', 'moaning', 'eating brains'];

console.log(c);