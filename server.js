// BUDGET API
const express = require('express');

const app = express();
const port = 3010;
const Budget_Schema = require('./models/BudgetSchema');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use('/',express.static('public'))

// app.use('/', express.static('public'));


// app.get('/hello', (req, res) => {
//     res.send('Hello World!');
// });

// C:\NBAD\dev\personal-budget1\server.js C:\\NBAD\\dev\\personal-budget1\\

app.get('/mybudget', (req, res) => {
    mongoose.connect('mongodb://localhost:27017/personalbudget',{useNewUrlParser:true,useUnifiedTopology:true}).then(() => {

        Budget_Schema.find({}).then((data) => {
            res.json(data)
            mongoose.connection.close()

        }).catch((connectionError) => {
            console.error(connectionError);
        })
    }).catch((connectionError) => {
        console.error(connectionError)
    })
});

app.post('/insertintomybudget', (req, res) => {
    mongoose.connect('mongodb://localhost:27017/personalbudget',{useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
        const n=req.body
        console.log(n)
        Budget_Schema.insertMany(n).then((data) => {
            res.status(200).json({message: 'inserted', data: data});
            mongoose.connection.close()

        }).catch((connectionError) => {
            console.log(connectionError)
        })
    }).catch((connectionError) => {
        console.log(connectionError)
    })
});


app.listen(port, () => {
    console.log(`API is served at http://localhost:${port}`);
});