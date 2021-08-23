'use strict';

const io = require('socket.io-client');
const pickup = io.connect('http://localhost:3000');

pickup.on('order', payload => {
    console.log('Thank you for delivering', payload)
});

