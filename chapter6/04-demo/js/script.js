const heading = document.querySelector('#heading');

//今回は、アニメーションの内容はオブジェクトで書く
const keyframes = {
  opacity: [0, 1],   //opacityは透明にするかしないか
translate: ['100px 250px', 0],
rotate: ['x 360deg', 0],
color: ['#f66','#fc2','#0c6','#0bd']

};

const option = {
  duration: 2000,
  direction: 'alternate',
  iterations: Infinity,
// easing: 'ease'
}


heading.animate(keyframes, 2000);