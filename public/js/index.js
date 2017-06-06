var socket = io();
socket.on('connect', function() {
    console.log('Connected to server');
    
    socket.emit('createMessage', {
        from: 'a@gmail.com',
        text: 'Hi there'
    });
    
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('New mmesage', message);
});
