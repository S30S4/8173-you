
const report = document.getElementById('reportBtn');
const modal = document.getElementById('pmModal');
const openBtn = document.getElementById('openPrivate');
const finalScreen = document.getElementById('finalScreen');
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

openBtn.addEventListener('click', ()=>{
  modal.classList.add('hidden');
  finalScreen.classList.remove('hidden');
  setTimeout(()=>{
    // 실제 캐릭터챗 URL을 받으면 아래 주소를 교체하면 됩니다.
    window.location.href = '#character-chat-link';
  }, 1400);
});
