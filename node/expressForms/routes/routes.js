exports.index = (req,res) => {
    res.render('index', {
        title: 'Home'
    })
};

exports.dealWithData = (req, res) => {
    let person = {
        name: req.body.name,
        age: req.body.age,
        species: req.body.species
    };
    res.render('submitted', {
        person // = person; if name of key is name of value being passed in, only need one
    })
};