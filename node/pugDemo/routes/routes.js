const config = require('../config'); //bc inside directory, need to go up a level to reach config

exports.index = (req, res) => {
    res.render('index', {
        "title": "Home",
        "config": config
    });
};

exports.page1 = (req, res) => {
    res.render('page1', {
        "title": "Page 1",
        "config": config
    });
};

exports.page2 = (req, res) => {
    res.render('page2', {
        "title": "Page 2",
        "config": config
    });
};

exports.contact = (req, res) => {
    res.render('contact_me', {
        "title": "Contact Me",
        "config": config
    });
};