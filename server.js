// import/load the express module
const express = require('express')

// created an instance of the express app
const app = express();

// //========= Define our Routes

// // root/main route
// app.get('/', function(req, res) {
// // use the response object to send back some data
// res.send('<h1>Heisenburs</h1>')
// })

// // listens for request
// app.listen(4000, function() {
//     console.log('Server is running...');
// })
app.get('/cars', function(req,res) {
    res.send("List of cars")
})
app.get('/home', function(req, res) {
    res.send('<h1>Home Page</h1>')
})

app.listen(3000, function() {
    console.log('Running. Standby.');
})

const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the hypatia view engine

app.get('/', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am the Boss Ricky Ross' })
  })
  
  app.get('/about-me', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Rick Ross!', content: 'The most underated Rapper in the game' })
  })
  
  app.get('/another-one', (req, res) => {
    res.render('template', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
  })