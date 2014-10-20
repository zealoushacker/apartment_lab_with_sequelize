var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require("method-override"),
    app = express(),
    models = require('./models/index');

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride("_method"));

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  models.Tenant.findAll();
  res.render('index');
});

app.get("/managers/:manager_id/tenants", function(req, res) {
  models.Tenant.where({ manager_id: req.body.manager_id });
  res.render('tenants');
});

app.listen(3000);