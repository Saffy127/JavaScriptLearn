// Updated file to handle app incoming and outgoing messages

const chatLog = document.getElementById('chatLog');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const ws = new WebSocket('ws://localhost: 3000');

ws.onmessage = (event) => {
    chatLog.innerHTML += '<div>${event.data}</div>';
};

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    chatLog.innerHTML += '<div>${message}</div>';
    messageInput.value = '';
});

