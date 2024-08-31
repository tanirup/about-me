

document.addEventListener("DOMContentLoaded", function() {


    // Function to create a card element
    function createCard(item, type) {
        const card = document.createElement("div");
        card.classList.add(type);
        card.innerHTML = `
            <h3>${item.title}</h3>
            <img src="${item.image}" alt="${item.title}">
            <p>${item.description}</p>
        `;
        return card;
    }

    // Populate recipe section
    recipes.forEach(recipe => {
        recipeContainer.appendChild(createCard(recipe, "recipe"));
    });

    // Populate game section
    games.forEach(game => {
        gameContainer.appendChild(createCard(game, "game"));
    });

    // Add floating animation effect
    const cards = document.querySelectorAll(".recipe, .game");
    cards.forEach(card => {
        let direction = 1;
        let position = 0;

        setInterval(() => {
            if (position >= 10) direction = -1;
            if (position <= -10) direction = 1;

            position += direction;
            card.style.transform = `translateY(${position}px)`;
        }, 100);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const games = [
        {
            title: "Honkai: Star Rail",
            image: "images/game4.png",
            description: "壮大なSF世界を旅するターン制RPG。多彩なキャラクターとストーリーが魅力。",
        },
        {
            title: "Mei-Cho",
            image: "images/game8.png",
            description: "戦略と冒険が融合したゲーム。プレイヤーは独自のスキルを駆使してクエストをクリアする。",
        },
        {
            title: "Apex Legends",
            image: "images/game1.png",
            description: "アクション満載のバトルロイヤルゲーム。",
        },
        {
            title: "Genshin Impact",
            image: "images/game3.png",
            description: "オープンワールドのアクションRPG。",
        }
    ];

    const gameContainer = document.querySelector('.game-container');

    games.forEach(game => {
        const gameArticle = document.createElement('article');
        gameArticle.classList.add('game');

        gameArticle.innerHTML = `
            <h3>${game.title}</h3>
            <img src="${game.image}" alt="${game.title}の画像" class="game-image">
            <p class="game-description">${game.description}</p>
        `;

        gameContainer.appendChild(gameArticle);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        {
            title: "シチュー",
            image: "images/stew.png",
            description: "クリーミーで美味しいシチュー。",
            link: "https://youtube.com/shorts/4VX-YspB5g0?si=JcG8goV2Yi26jw55"
        },
        {
            title: "ハンバーグ",
            image: "images/khanba-gu.png",
            description: "ジューシーなハンバーグ。ソースと一緒にどうぞ。よく作ります。",
            link: "https://youtube.com/shorts/c-YWVdvj0fA?si=1wEK0hoVtEKhvKZ4"
        },
        {
            title: "カレーライス",
            image: "images/kare-rice.png",
            description: "豊かなスパイスと具材が特徴のカレーライスです。",
            link:"https://youtu.be/PqQgQs8VVhM?si=pp0cdDKeKN9Xq5d3"
        },
        {
            title: "生姜焼き",
            image: "images/shougayaki.png",
            description: "誰でも作れる簡単生姜焼き",
            link:"https://youtube.com/shorts/jQuvk6aAB2o?si=O3qAzYjHIscSBOVL"
        }
    ];

    const recipeContainer = document.querySelector('.recipe-container');

    recipes.forEach(recipe => {
        const recipeArticle = document.createElement('article');
        recipeArticle.classList.add('recipe');

        recipeArticle.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}の画像" class="recipe-image">
            <p class="recipe-description">${recipe.description}</p>
            <a href="${recipe.link}" class="recipe-link">詳細を見る</a>
        `;

        recipeContainer.appendChild(recipeArticle);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});

