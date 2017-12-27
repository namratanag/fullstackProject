"use strict"
var words = require('./words.js').word;

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

var wordapi = {
	getAllwords: function(callback) {
		console.log(_clone(words));
		callback(null, _clone(words));
	}
}
module.exports = wordapi;