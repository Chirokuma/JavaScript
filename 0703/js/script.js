const quizData = [
  {
      question: "コアラは一日に約何時間寝るでしょうか🐨？",
      options: ["5時間", "10時間", "15時間", "20時間"],
      answer: "20時間"
  },
  {
      question: "コアラの食べ物は🐨？",
      options: ["ユーカリ", "肉", "魚", "野菜"],
      answer: "ユーカリ"
  },
  {
      question: "コアラを抱っこできる州は🐨？",
      options: ["メルボルン", "パース", "シドニー", "ダーウィン"],
      answer: "パース"
  }
];

let currentQuiz = 0; // 現在のクイズのインデックス
let score = 0; // 正解数

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');

// クイズを表示する関数
function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionElement.textContent = currentQuizData.question;

  // 選択肢を生成して表示する
  let optionsHTML = '';
  for (let i = 0; i < currentQuizData.options.length; i++) {
      optionsHTML += `<button class="option-btn">${currentQuizData.options[i]}</button>`;
  }
  optionsElement.innerHTML = optionsHTML;

  // 各ボタンにクリックイベントを設定
  const optionButtons = optionsElement.querySelectorAll('.option-btn');
  optionButtons.forEach(button => {
      button.addEventListener('click', () => {
          checkAnswer(button.textContent);
      });
  });
}

// 答えをチェックする関数
function checkAnswer(answer) {
  const currentQuizData = quizData[currentQuiz];
  if (answer === currentQuizData.answer) {
      score++;
  }

  // 選択肢のボタンを全て無効化する
  const optionButtons = document.querySelectorAll('.option-btn');
  optionButtons.forEach(button => {
      button.disabled = true;
  });

  // 次へボタンを表示する
  nextButton.style.display = 'block';
}

// 次のクイズを読み込む関数
function nextQuiz() {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
      loadQuiz();
      resetState();
  } else {
      // ゲーム終了時の処理（ここでは単純にスコアを表示する）
      questionElement.textContent = `クイズが終了しました。あなたの正解数は ${score} / ${quizData.length} です。`;
      optionsElement.innerHTML = '';
      nextButton.style.display = 'none';
  }
}

// 状態をリセットする関数（次の問題に進む準備）
function resetState() {
  const optionButtons = document.querySelectorAll('.option-btn');
  optionButtons.forEach(button => {
      button.disabled = false;
  });
  nextButton.style.display = 'none';
}

// 「次へ」ボタンにクリックイベントを設定
nextButton.addEventListener('click', nextQuiz);

// 最初のクイズを読み込む
loadQuiz();
