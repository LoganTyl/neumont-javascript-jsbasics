const test_var = () => {
    var v = 5;
    for(var i = 0; i < 3; i++) {
        console.log(v, i);
    }
    console.log(`after loop ${v} ${i}`); //prints out 5 3
};
//var scopes to the nearest function

test_var();

const test_let = () => {
    let v = 5;
    for(let i = 0; i < 3; i++) {
        console.log(v, i);
    }
    console.log(`after loop ${v} ${i}`); //reference error: i is not defined
};
//let scopes to where it was defined; i won't be outside of its for loop

test_let();