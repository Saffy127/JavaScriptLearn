document.addEventListener('DOMContentLoaded', () => {
    const game = {
        player: document.getElementById('player'),
        coin: document.getElementById('coin'),
        scoreDisplay: document.getElementById('score'),
        score: 0,
        x: 0, // Player's x position
        y: 0, // Player's y position
        recognition: null,
        initSpeechRecognition: function() {
            if ('webkitSpeechRecognition' in window) {
                this.recognition = new webkitSpeechRecognition();
                this.recognition.continuous = true;
                this.recognition.interimResults = true;
                this.recognition.onresult = this.handleResult.bind(this);
                document.getElementById('start-game-btn').onclick = () => {
                    this.recognition.start();
                };
            } else {
                document.getElementById('start-game-btn').innerText = 'Speech recognition not supported';
            }
        },
        handleResult: function(event) {
            const last = event.results.length - 1;
            const command = event.results[last][0].transcript.trim().toLowerCase();

            switch (command) {
                case 'up':
                    this.y = Math.max(0, this.y - 10);
                    break;
                case 'down':
                    this.y = Math.min(350, this.y + 10);
                    break;
                case 'left':
                    this.x = Math.max(0, this.x - 10);
                    break;
                case 'right':
                    this.x = Math.min(350, this.x + 10);
                    break;
            }
            this.updatePlayerPosition();
            this.checkForCollection();
        },
        updatePlayerPosition: function() {
            this.player.style.top = this.y + 'px';
            this.player.style.left = this.x + 'px';
        },
        moveCoin: function() {
            const x = Math.floor(Math.random() * 380);
            const y = Math.floor(Math.random() * 380);
            this.coin.style.left = x + 'px';
            this.coin.style.top = y + 'px';
        },
        checkForCollection: function() {
            const playerRect = this.player.getBoundingClientRect();
            const coinRect = this.coin.getBoundingClientRect();

            if (playerRect.left < coinRect.left + coinRect.width &&
                playerRect.left + playerRect.width > coinRect.left &&
                playerRect.top < coinRect.top + coinRect.height &&
                playerRect.top + playerRect.height > coinRect.top) {
                this.score++;
                this.scoreDisplay.innerText = this.score;
                this.moveCoin();
            }
        }
    };

    game.initSpeechRecognition();
    game.moveCoin(); // Initial placement of the coin
});
