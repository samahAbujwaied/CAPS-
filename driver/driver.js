
'use strict';

const port = process.env.PORT || 4000;
const io = require('socket.io')(port);

io.on('connection', (socket) => {
    socket.on('pickup', (payload) => {
        console.log('pickup', payload.orderId)
        io.emit('pickupConnection', payload);
    });
        
    socket.on('in-trainst', payload => {
    
        io.emit('in-trainstConnection', payload);
    });

    socket.on('deliverd', payload => {
        console.log('deliverd', payload.orderId)
        io.emit('deliverdConnection', payload);
    });

    socket.on('orderd', payload => {
        
        io.emit('order', payload);
    });
})
module.exports = io 
