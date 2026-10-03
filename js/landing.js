
const landing = document.getElementById('landing');
const matching = document.getElementById('matching');
const state = document.getElementById('matchState');
const details = document.getElementById('matchDetails');
const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', () => {
  landing.classList.add('hidden');
  matching.classList.remove('hidden');
  matching.classList.add('fade-in');
  state.textContent = 'SEARCHING...';

  setTimeout(() => {
    state.textContent = 'MATCH FOUND';
    details.classList.remove('hidden');
    details.classList.add('fade-in');
  }, 1400);
});

matching.addEventListener('click', () => {
  if (!details.classList.contains('hidden')) {
    window.location.href = 'pages/chat.html';
  }
});
