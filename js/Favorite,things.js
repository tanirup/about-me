// Space background animation as previously discussed
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

function initStars() {
    for (let i = 0; i < 200; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            alpha: Math.random(),
            dx: Math.random() * 0.5 - 0.25,
            dy: Math.random() * 0.5 - 0.25
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
    });
}

function updateStars() {
    stars.forEach(star => {
        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
            star.x = Math.random() * canvas.width;
            star.y = Math.random() * canvas.height;
        }

        star.alpha += Math.random() * 0.02 - 0.01;
        if (star.alpha < 0) star.alpha = 0;
        if (star.alpha > 1) star.alpha = 1;
    });
}

function animate() {
    drawStars();
    updateStars();
    requestAnimationFrame(animate);
}

initStars();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars.length = 0;
    initStars();
});

document.addEventListener('DOMContentLoaded', function() {
    // アニメデータと検索機能の既存のコードはそのまま

    // スライダーの設定
    const slider = document.querySelector('.slider');
    const images = slider.querySelectorAll('img');
    let currentIndex = 0;

    function setupSlider() {
        // 最初の画像のクローンを最後に追加
        const firstImageClone = images[0].cloneNode(true);
        slider.appendChild(firstImageClone);

        // スライダーの幅を設定
        const imageWidth = images[0].offsetWidth;
        const marginRight = parseInt(window.getComputedStyle(images[0]).marginRight);
        const totalWidth = (imageWidth + marginRight) * (images.length + 1);
        slider.style.width = `${totalWidth}px`;

        // アニメーションを開始
        moveSlider();
    }

    function moveSlider() {
        const imageWidth = images[0].offsetWidth;
        const marginRight = parseInt(window.getComputedStyle(images[0]).marginRight);
        const moveAmount = imageWidth + marginRight;

        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
        slider.style.transition = 'transform 0.5s ease';

        if (currentIndex === images.length) {
            setTimeout(() => {
                slider.style.transition = 'none';
                currentIndex = 0;
                slider.style.transform = 'translateX(0)';
                setTimeout(() => {
                    slider.style.transition = 'transform 0.5s ease';
                }, 50);
            }, 500);
        }

        setTimeout(moveSlider, 3000); // 3秒ごとに次の画像に移動
    }

    // 画像が読み込まれた後にスライダーをセットアップ
    if (images.length > 0) {
        if (images[0].complete) {
            setupSlider();
        } else {
            images[0].onload = setupSlider;
        }
    }

    // ウィンドウリサイズ時にスライダーを再設定
    window.addEventListener('resize', setupSlider);
});


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slider img');
    
    function fadeInImage(image) {
        image.classList.add('loaded');
    }

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fadeInImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    images.forEach(image => {
        if (image.complete) {
            fadeInImage(image);
        } else {
            image.addEventListener('load', () => fadeInImage(image));
        }
        observer.observe(image);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // 既存のコード

    // 画像フェードイン機能
    const images = document.querySelectorAll('.fade-in-image');

    function fadeInImage(image) {
        image.classList.add('loaded');
    }

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fadeInImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    images.forEach(image => {
        if (image.complete) {
            fadeInImage(image);
        } else {
            image.addEventListener('load', () => fadeInImage(image));
        }
        observer.observe(image);
    });
});