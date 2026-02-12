const heartsBg = document.getElementById('heartsBg');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const hintText = document.getElementById('hintText');
const questionCard = document.getElementById('questionCard');
const celebration = document.getElementById('celebration');
const arrowHeartStage = document.getElementById('arrowHeartStage');

let noCount = 0;

function spawnHeart() {
  const heart = document.createElement('span');
  heart.className = 'heart-fall';

  const size = 12 + Math.random() * 24;
  const left = Math.random() * 100;
  const duration = 7 + Math.random() * 7;
  const delay = Math.random() * 2;
  const drift = (Math.random() - 0.5) * 110;

  heart.style.left = `${left}%`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `${delay}s`;
  heart.style.setProperty('--size', `${size}px`);
  heart.style.setProperty('--drift', `${drift}px`);

  heartsBg.appendChild(heart);
  heart.addEventListener('animationend', () => heart.remove());
}

for (let i = 0; i < 28; i += 1) {
  setTimeout(spawnHeart, i * 280);
}

setInterval(spawnHeart, 380);

noBtn.addEventListener('click', () => {
  noCount += 1;

  const yesScale = 1 + Math.min(noCount * 0.28, 2.1);
  const noScale = Math.max(1 - noCount * 0.18, 0.45);

  yesBtn.style.transform = `scale(${yesScale})`;
  noBtn.style.transform = `scale(${noScale})`;

  hintText.textContent = 'Nope 😘 Try again. (Hint: press Yes!)';

  if (noCount >= 2) {
    noBtn.textContent = 'baby?😢';
  }
  
  if (noCount >= 3) {
    noBtn.textContent = 'You better say yes 😠';
  }

  if (noCount >= 4) {
    noBtn.disabled = true;
    noBtn.textContent = 'i see the tooth😞';
    hintText.textContent = 'Try again, my love... the Yes button is calling you 💞';
  }
});

yesBtn.addEventListener('click', () => {
  questionCard.classList.add('hidden');
  celebration.classList.remove('hidden');

  requestAnimationFrame(() => {
    arrowHeartStage.classList.add('show-stage');

    setTimeout(() => {
      arrowHeartStage.classList.add('open-heart');
    }, 1500);
  });
});
