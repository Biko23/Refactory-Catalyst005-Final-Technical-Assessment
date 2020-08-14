//Require Express
const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');
require('./models/testModel');

const testModel = mongoose.model('tests')
require('dotenv/config');





//Declare constant app and instantiate it to express() so it can utilise express methods.
const app = express();


//Set the view engine being used to pug
app.set('view engine', 'pug');


//enable the app to access static files from the public folder
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

});

mongoose.connection
    .on('open', () =>{
        console.log('Welcome mongoose connection open...');
    })
    .on('error', (err) =>{
        console.log(`connection error: ${err.message}`);
    })


//create a route to the home page.
app.get('/', (req, res) =>{
    res.render('home');
})

app.post('/', async(req, res) =>{
    console.log('Lets move');
    try{
        let items = new testModel({
            surname:req.body.surname,
            givenName:req.body.givenName,
            dob:req.body.dob,
            por:req.body.por,
            occupation:req.body.occupation,
            nationality:req.body.nationality,
            gender:req.body.gender,
            category:req.body.category
        });
        await items.save();
        res.redirect('/');

    }catch(error){
        res.send('Sorry registration failed');
    }

});




//open(listen to) a port(9000) that the app is running on
app.listen(9000, ()=>{
    console.log('Listening on port 9000');
})