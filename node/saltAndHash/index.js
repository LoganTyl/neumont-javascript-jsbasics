const bcrypt = require('bcrypt-nodejs');
var myHash;

const makeHash = the_str => {
    bcrypt.hash(the_str, null, null, (err, hash) => { //async/callback function; will be called when .hash is done
        myHash = hash;
        hashDone();
    });
}


const hashDone = () => {
    console.log(myHash);
    console.log(typeof(myHash));
    bcrypt.compare('bacon', myHash, (err, res) => {
        console.log(res); //true
    });

    bcrypt.compare('veggies', myHash, (err, res) => {
        console.log(res); //false
    });
}


makeHash('bacon');