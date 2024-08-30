document.addEventListener("DOMContentLoaded", function() {
    console.log('自己紹介サイトへようこそ！');

    // フェードインアニメーション
    function handleScrollAnimation() {
        const elements = document.querySelectorAll('.fade-in-up');
        const windowHeight = window.innerHeight;

        elements.forEach((el) => {
            const positionFromTop = el.getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                el.classList.add('is-visible');
            }
        });
    }

    // 初期ロード時とスクロール時にアニメーションをチェック
    window.addEventListener('load', handleScrollAnimation);
    window.addEventListener('scroll', handleScrollAnimation);

    // その他の既存のJavaScriptコードをここに追加
});

document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in, .fade-in-item');
    
    function handleScrollAnimation() {
      fadeInElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
          el.classList.add('is-visible');
        }
      });
    }
  
    // 初期表示時とスクロール時にアニメーションをチェック
    window.addEventListener('load', handleScrollAnimation);
    window.addEventListener('scroll', handleScrollAnimation);
  });