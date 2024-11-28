 const button = document.getElementById('clickButton');
    const clickCountDisplay = document.getElementById('clickCount');
    const resultParagraph = document.getElementById('result');
  
    let clickCount = 0; // クリック回数を保持する変数を定義
  
    button.addEventListener('click', function() {
      clickCount++; // クリック回数を1増やす
      clickCountDisplay.textContent = clickCount; // テキストコンテンツを更新
  
      if (clickCount % 2 !== 0) {
        resultParagraph.textContent = '〇'; // 奇数の場合は〇を表示
      } else {
        resultParagraph.textContent = '×'; // 偶数の場合は×を表示
      }
    });