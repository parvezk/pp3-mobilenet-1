let express = require("express");
let app = express();
var path = require('path');
const bodyParser = require('body-parser');

//app.use(bodyParser.json());  
//app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    //console.log(`${new Date()} - ${req.method} request for ${req.url}`);
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.use(express.static("../static"));

//app.use(express.static(path.join(__dirname, '../static')));

app.listen(81, () => {
    console.log("Server static on 81");
})