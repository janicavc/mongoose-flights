const Flight = require('../models/flight')

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights', flights});
}
async function show(req, res) {
    res.render('flights/new', {
        flight: flight,
        title: 'Flight Detail'
    });
}

function newFlight(req, res) {
    res.render('flights/new', {errorMsg: ''});
}

async function create(req, res) {
    console.log(req.body)
    try {
        const flight = await Flight.create(req.body)
        res.redirect('/flights')
    } catch (err) {
        res.render('flights/new', {errorMsg: err.message});
    }
}


