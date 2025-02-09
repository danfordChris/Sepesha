<!DOCTYPE html>
<html>

<head>
    <title>Real-time Example</title>
</head>

<body>
    <h1>Real-time Communication</h1>
    <input type="text" id="message">
    <button onclick="sendMessage()">Send</button>
    <ul id="messages"></ul>

    <script src="https://cdn.jsdelivr.net/npm/socket.io-client@4/dist/socket.io.js"></script>
    </script>
    <script>
        const socket = io('http://localhost:3001'); // Your Node.js server URL

        socket.on('connect', () => {
            console.log('Connected to Socket.IO server');
        });

        socket.on('my-event', (data) => { // Listen for events
            const li = document.createElement('li');
            li.textContent = data.message;
            document.getElementById('messages').appendChild(li);
        });

        function sendMessage() {
            const message = document.getElementById('message').value;
            socket.emit('my-event', {
                message: message
            }); // Emit an event
            document.getElementById('message').value = ''; // Clear input
        }
    </script>
</body>

</html>