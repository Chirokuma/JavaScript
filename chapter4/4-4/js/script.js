const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    //もしボタンのテキストが「ダークモードにする」になっているなら
    if (btn.textContent === ' ダークモードにする') {
     //ボタンのテキストを「ライトモードにする」に変更
        btn.textContent = 'ライトモードにする';
        //そうでなければ
    } else {
        //ボタンのテキストを「ダークモードにする」に変更
        btn.textContent = 'ダークモードにする';
    }
});