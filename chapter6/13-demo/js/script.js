//1.監視ロボットにしてほしい内容
//監視対象が範囲内に現れたら実行する内容

const showKirin = () => {
const keyframes = {
  opacoty: [0,1],
  translate:['200px' 0' , 0];
};
    console.log('キリンです')
}

//設定ﾃﾞｰﾀの配列
//console/log(entries)

//2.新しい名前を付けてかんっしロボットを導入する
//監視ロボットを設定
const kirinObserver = new IntersectionObserver(showKirin);

//3.監視ロボットに1で決めた動作内容を指示する
//空の監視ロボットに実行内容showKirinを与えた
IntersectionObserver(showKirin);

//4.監視ロボットに監視対象を教えて実行する
const kirinObserver = new 
kirinObserver.observe(document.querySelector('showkirin'))

