var five = require('johnny-five');
var raspi = require('raspi-io');

var board = five.Board({
    io: new raspi()
});

board.on('ready', function () {

    var led = five.Led('GPIO16');

    led.blink(100);

});