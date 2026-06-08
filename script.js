const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');
const heartsContainer = document.getElementById('hearts-container');

const noMessages = [
  "Enggak",
  "Yakin nih?",
  "Beneran yakin?",
  "Pikirin lagi dong!",
  "Kesempatan terakhir!",
  "Masa sih?",
  "Nanti nyesel lho!",
  "Pikir-pikir lagi yuk!",
  "Yakin banget nih?",
  "Ini kesalahan besar lho!",
  "Kasihan akuu :(",
  "Jangan gitu dong!",
  "Berubah pikiran yuk!",
  "Dipertimbangkan lagi ya?",
  "Itu jawaban terakhirmu?",
  "Hatiku hancur nih ;(",
  "Pleasee? :((",
  "Oke aku minta baik-baik...",
  "Please banget nih!",
  "Aku mau nangis...",
  "Jangan gitu ke aku :(",
  "Oke deh, aku ulang!"
];

let messageIndex = 0;

noBtn.addEventListener('click', handleNoClick);
yesBtn.addEventListener('click', handleYesClick);

function handleNoClick() {
  messageIndex = (messageIndex + 1) % noMessages.length;
  noBtn.innerText = noMessages[messageIndex];

  // Grow the Yes button
  const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = `${currentSize * 1.2}px`;

  const currentPaddingTop = parseFloat(window.getComputedStyle(yesBtn).paddingTop);
  const currentPaddingLeft = parseFloat(window.getComputedStyle(yesBtn).paddingLeft);
  yesBtn.style.padding = `${currentPaddingTop * 1.5}px ${currentPaddingLeft * 1.5}px`;

  // Shrink the No button
  const noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
  if (noSize > 5) {
    noBtn.style.fontSize = `${noSize * 0.9}px`;
  }
}

function handleYesClick() {
  questionScreen.classList.add('hidden');
  successScreen.classList.remove('hidden');
  createHearts();
}

function createHearts() {
  const heartCount = 50;
  const emojis = ['❤️', '🩷', '💖', '💕', '🌸', '✨'];

  for (let i = 0; i < heartCount; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 2 + 3 + 's';
      heart.style.fontSize = Math.random() * 20 + 20 + 'px';
      heartsContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, i * 100);
  }

  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heartsContainer.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}
