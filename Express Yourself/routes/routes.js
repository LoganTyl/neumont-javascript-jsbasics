const config = require('../config');
const featuresList = require('../featuresList');
const fs = require('fs');

exports.index = (req,res) => {
    res.render('index', {
        "title": 'Home',
        "config": config
    })
};

exports.features = (req, res) => {
    res.render('features', {
        "title": "Features",
        "config": config,featuresList
    });
};

exports.order = (req, res) => {
    res.render('order', {
        "title": "Order",
        "config": config,featuresList
    });
};

exports.dealWithData = (req, res) => {
    let order = {
        name: req.body.name,
        address: req.body.address,
        phoneNum: req.body.phoneNum,
        email: req.body.email,
        potionAmt: req.body.potionAmt,
        fullHealAmt: req.body.fullHealAmt,
        ultraBallAmt: req.body.ultraBallAmt,
        reviveAmt: req.body.reviveAmt,
        porygonAmt: req.body.porygonAmt
    };
    if(order.potionAmt == ""){
        order.potionAmt = "0";
    }
    if(order.fullHealAmt == ""){
        order.fullHealAmt = "0";
    }
    if(order.ultraBallAmt == ""){
        order.ultraBallAmt = "0";
    }
    if(order.reviveAmt == ""){
        order.reviveAmt = "0";
    }
    if(order.porygonAmt == ""){
        order.porygonAmt = "0";
    }
    let fileContent = 
    `Name: ${order.name}
Address: ${order.address}
Phone Number: ${order.phoneNum}
Email: ${order.email}
Potion Amount: ${order.potionAmt}
Full Heal Amount: ${order.fullHealAmt}
Ultra Ball Amount: ${order.ultraBallAmt}
Revive Amount: ${order.reviveAmt}
Porygon Amount: ${order.porygonAmt}
-------------------------------------------------------
`;
    fs.appendFile('./submittedOrders/orders.txt', fileContent, function (err) {
        if (err) throw err;
        console.log('Order saved');
      });
    res.render('submitted', {
        order,
        "title": "Order Submitted",
        "config": config
    })
};