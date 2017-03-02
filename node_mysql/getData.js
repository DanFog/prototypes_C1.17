//require your modules: express, and mysql
var express = require('express');
var sql = require('mysql');
var fs = require('fs');
var app = express();
//define your connection info for mysql
//define your handler for your mysql connection callback
//perform your mysql query call
function handleRequest(request, response) {
    var connection = sql.createConnection({
        host: 'localhost',
        port: '	8889',
        user: 'root',
        password: 'root',
        database: 'c1.17_db'
    });
    function connected_callback() {
        connection.query('SELECT * FROM students', query_callback);
    }
    //define your handler for your mysql query call response
	//handle your data from your response
	//return the data in json format to the front end request
    function query_callback(error, rows_of_data, fields_in_data) {
        console.log(rows_of_data);
        response.send(rows_of_data);
    }
    //define your handler for the express web request
    connection.connect(connected_callback);
}

app.get('/api', handleRequest);

app.get('/', function(req, res) {
    fs.readFile('index.html', function(error, data) {
        if(error) {
            console.log('error');
        } else {
            res.end(data);
        }
    })
});

//set up your express server and start listening

app.listen(3306, function() {
	console.log('Listeing on port 3306')
});