exports.index = (req,res) => {
    res.send('Hello World'); // localhost:3000
};

exports.hello = (req, res) => {
    let stuff = req.query; // localhost:3000/hello?name=Bob&species=Zombie
    console.log(stuff);
    res.send(`<h1>Hello ${stuff.name} the ${stuff.species}!</h1>`)
};

exports.goodbye = (req, res) => {
    let things = req.params; // localhost:3000/goodbye/Sally/info
    console.log(things);
    res.send(`<h2>Goodbye ${things.name}, I have no ${things.info} about you.</h2>`);
};

exports.whatever = (req, res) => {
    res.send(`<h1>Welcome to ${req.params.whatever}'s Webpage</h1>`)
};