// import { quoteList } from 'quotes';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const quoteList = require('./quotes').quotesList;
// import quotesList from 'quotes';

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const quoteInt = Math.floor(Math.random() * quoteList.length);
    // console.log(quoteInt);
    res.send(quoteList[quoteInt]);
    res.end();
})

app.listen(3000, () => {
    console.log("App Running");
    // console.log(quoteList);
})
