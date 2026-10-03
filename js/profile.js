
const report = document.getElementById('reportBtn');
const modal = document.getElementById('pmModal');
const openBtn = document.getElementById('openPrivate');
const finalScreen = document.getElementById('finalScreen');
const finalLink = document.getElementById('finalLink');
const CHAT_URL = 'https://share.crack.wrtn.ai/0tv3b2';
let reportClicks = 0;
let messageQueued = false;

function showToast(text){
  const old = document.querySelector('.toast');
  if(old) old.remove();
  const t = document.createElement('div');
  t.className='toast';
  t.textContent=text;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 1800);
}

function queuePrivateMessage(){
  if(messageQueued) return;
  messageQueued = true;
  setTimeout(()=>{
    showToast('1 NEW PRIVATE MESSAGE');
    setTimeout(()=>{
      modal.classList.remove('hidden');
    }, 900);
  }, 900);
}

report.addEventListener('click', ()=>{
  reportClicks += 1;
  if(reportClicks===1){
    showToast('ERROR — this action is unavailable');
  } else if(reportClicks===2){
    showToast('ERROR — permission denied');
  } else {
    report.style.visibility='hidden';
    queuePrivateMessage();
  }
});

function goToChat(){
  window.location.assign(CHAT_URL);
}

openBtn.addEventListener('click', ()=>{
  modal.classList.add('hidden');
  finalScreen.classList.remove('hidden');

  // Automatic redirect attempt.
  setTimeout(()=>{
    goToChat();
  }, 1400);

  // Fallback: if navigation is blocked, reveal a direct link.
  setTimeout(()=>{
    if(finalLink) finalLink.classList.remove('hidden');
  }, 2200);
});

finalScreen.addEventListener('click', (event)=>{
  if(event.target === finalLink) return;
  goToChat();
});

finalScreen.addEventListener('keydown', (event)=>{
  if(event.key === 'Enter' || event.key === ' '){
    event.preventDefault();
    goToChat();
  }
});
