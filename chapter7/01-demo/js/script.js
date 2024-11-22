const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');
window.addEventListener('load', () => {
//ローディングから画面遷移
const loadingAreaGrey = document.querySelector('#loading');

window.addEventListener('load', () => {
    //ローディング中（グレースクリーン）
    loadingAreaGrey.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        })
    });

    //ローディング中（薄緑スクリーン）
    loadingAreaGreen.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'forwards',
        }
    );

    //ローディング中テキスト
    loadingAreaGreen.animate(
        [
            {
                opacity: 1,
                offset: .8 //80%
            },
            {
                opacity: 0,
                offset: 1 //100%
            },
        ],
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
    //ローディングから画面遷移
    window.addEventListener('load', () => {
    //ローディングが終わった時の処理
    });


});