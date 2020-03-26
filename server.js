var http = require('http')
var fs = require('fs')
var path = require('path')
var express = require('express')

var app = express()

var port = 3000
var hostname = '127.0.0.1'

//created local web server

app.use(express.static(path.join(__dirname,'css')))
app.use(express.static(path.join(__dirname,'assets')))
app.use(express.static(path.join(__dirname,'fonts')))
app.use(express.static(path.join(__dirname,'images')))
app.use(express.static(path.join(__dirname,'js')))
app.use(express.static(path.join(__dirname,'vendor')))

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/home.html'))
})
app.get('/validation.js', function(req,res){
	res.sendFile(path.join(__dirname + '/validation.js'))
})
app.get('/News', function(req,res){
	res.sendFile(path.join(__dirname + '/News.html'))
})

app.get('/log', function(req,res){
	res.sendFile(path.join(__dirname + '/LOG.html'))
})

app.get('/sign', function(req,res){
	res.sendFile(path.join(__dirname + '/Sign.html'))
})

app.get('/team', function(req,res){
	res.sendFile(path.join(__dirname + '/team.html'))
})


app.get('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,700i', function(req,res){
	res.sendFile(path.join(__dirname + 'https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,700i"'))
})

//server.listen(port)
app.listen(port,hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`)
})