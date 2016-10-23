/**
 * Created by hoang on 10/8/2016.
 */
var mongoose = require('mongoose');

var flightSchema = new mongoose.Schema({
    code: String,
    depart: String,
    arrive: String,
    datetime: {
        type: Number,
        default: new Date().getTime()
    },
    class: String,
    priceLevel: String,
    numberOfSeat: Number,
    price: Number
});

mongoose.model('Flight', flightSchema);