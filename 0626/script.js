const answer = document.querySelector('#answer')

console.log(answer);


const clickAnswer = () => {
    console.log('clickAnswerした')
    alert('正解');
}
answer.addEventListener('click', clickAnswer)