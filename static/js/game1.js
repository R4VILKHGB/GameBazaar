document.addEventListener('DOMContentLoaded', () => {
    const dino = document.getElementById('dino');
    const cactus = document.getElementById('cactus');
    let isJumping = false;
    let gravity = 0.9;
    let isGameOver = false;

    function jump() {
        if (isJumping) return;
        let position = 0;
        let timerId = setInterval(() => {
            if (position >= 150) {
                clearInterval(timerId);
                let downTimerId = setInterval(() => {
                    if (position <= 0) {
                        clearInterval(downTimerId);
                        isJumping = false;
                    }
                    position -= 5;
                    position = position * gravity;
                    dino.style.bottom = position + 'px';
                }, 20);
            }
            isJumping = true;
            position += 30;
            position = position * gravity;
            dino.style.bottom = position + 'px';
        }, 20);
    }

    function generateCactus() {
        let cactusPosition = 1000;
        let randomTime = Math.random() * 4000;
        if (isGameOver) return;

        cactus.style.left = cactusPosition + 'px';

        let timerId = setInterval(() => {
            if (cactusPosition > 0 && cactusPosition < 60 && parseInt(dino.style.bottom) < 60) {
                clearInterval(timerId);
                isGameOver = true;
                document.body.innerHTML = '<h1 class="game-over">Game Over</h1>';
            }
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }, 20);

        setTimeout(generateCactus, randomTime);
    }

    generateCactus();
    document.addEventListener('keyup', (e) => {
        if (e.code === 'Space') {
            jump();
        }
    });
});
