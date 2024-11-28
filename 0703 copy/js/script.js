const contents = [
  '<p>コアラは一日に約何時間寝るでしょうか🐨？</p>',
  '<div>5時間</div>',
  '<div>10時間</div>',
  '<div>15時間</div>',
  '<div>20時間</div>',
  'B'
];

// `<div>${contents[0]}</div>`

const quiz = document.querySelector('#quiz')

for (let i = 0; i < contents.length; i++) {
  //forの中でif文を使って、答えは画面に表示しないようにする。
  if (i === 5) {
    console.log('答えは' + contents[i])
  } else {
    //forの中でif文を使って、選択欄はクリックできるようにする。
    if (1<=i || i <5 ){

    }
quiz.insertAdjacentHTML('beforeend', contents[i])
}
}