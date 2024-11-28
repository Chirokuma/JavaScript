const menu = document.querySelector('#menu');


// console.log(strawberry)
// //ブラケット記法
// console.log(strawberry['name'])
// //ドット記法　基本はこっち
// console.log(strawberry.img)

// console.log(strawberry.price)

// //変数に代入した値を使うときは、ブラケット記法
// const key = 'name'
// console.log(strawberry.key)
// console.log(strawberry[key])



const lists = [
    {
        name: 'イチゴ',
        img: 'strawberry.jpg',
        price: 450,
    },
    {
        name: 'ライム',
        img: 'lime.jpg',
        price: 450,
    },
    {
        name: 'マンゴー',
        img: 'mango.jpg',
        price: 450,
    },
    {
        name: 'レモン',
        img: 'lemon.jpg',
        price: 450,
    },
    {
        name: 'イチジク',
        img: 'fig.jpg',
        price: 450,
    },
    {
        name: 'リンゴ',
        img: 'apple.jpg',
        price: 450,
    },
];

    // console.log(lists[i].img)

    for (let i = 0; i < lists.length; i++) {

    const content = `
    <div>
        <img src="images/${lists[i].img}" alt="">
        <h2>${lists[i].name}<h2>
        <p>${price}円</P>
    </div>`
    menu.insertAdjacentHTML('beforeend', content);
}


const lists = [
    {
        shopname: ' ニクバルダカラ',
        city: '奈良市',
        category:['居酒屋、ステーキ'],
        img: 'strawberry.jpg',
        rate:3.12,
        reserve:
    },{
        
    }