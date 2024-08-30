document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.insertBefore(starsContainer, document.body.firstChild);

    // 星を生成
    for (let i = 0; i < 200; i++) {
        createStar();
    }

    // 定期的に流れ星を生成
    setInterval(createShootingStar, 2000);

    // メインコンテンツのスクロールイベントを監視
    const mainContent = document.querySelector('main');
    mainContent.addEventListener('scroll', function() {
        let scrollPosition = mainContent.scrollTop;
        document.querySelectorAll('.star').forEach((star, index) => {
            let speed = 0.1 * (index % 5 + 1);
            star.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    });
});

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = `${Math.random() * 2 + 1}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    document.querySelector('.stars').appendChild(star);
}

function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.left = `${Math.random() * 100}%`;
    shootingStar.style.top = `${Math.random() * 50}%`;
    shootingStar.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.querySelector('.stars').appendChild(shootingStar);

    setTimeout(() => {
        shootingStar.remove();
    }, 5000);
}