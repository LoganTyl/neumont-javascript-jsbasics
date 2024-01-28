exports.PrintThis = message => {
    console.log(message);
};

function printHellow(name) {
    console.log("Hello" + name + "!");
}

exports.printHellow = printHellow;