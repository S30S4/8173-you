
const messages = document.getElementById('messages');
const input = document.getElementById('messageInput');
const send = document.getElementById('sendBtn');
const profileLinks = document.querySelectorAll('[data-profile]');
const profileCue = document.getElementById('profileCue');
let interrupted = false;

function addMessage(text, mine=false){
  const row = document.createElement('div');
  row.className = 'msg-row' + (mine ? ' me' : '');
  const wrap = document.createElement('div');
  if(!mine){
    const sender = document.createElement('div');
    sender.className = 'sender';
    sender.textContent = 'Biteme';
    wrap.appendChild(sender);
  }
  const bubble = document.createElement('div');
  bubble.className = 'bubble' + (mine ? ' me' : '');
  bubble.textContent = text;
  wrap.appendChild(bubble);
  row.appendChild(wrap);
  messages.appendChild(row);
  window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
  if(!mine) ping();
}

function ping(){
  try{
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type='sine'; osc.frequency.value=880;
    gain.gain.setValueAtTime(.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime+.16);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime+.17);
  }catch(e){}
}

setTimeout(()=>addMessage('hey'), 700);
setTimeout(()=>addMessage('dont leave♡'), 1700);

input.addEventListener('input', () => {
  if(interrupted || input.value.trim()==='') return;
  interrupted = true;
  setTimeout(()=>addMessage("Don't type."), 220);
  setTimeout(()=>{
    addMessage('just look at me.');
    setTimeout(()=>{
      if(profileCue) profileCue.classList.remove('hidden');
    }, 450);
  }, 1450);
});

send.addEventListener('click', () => {
  const val = input.value.trim();
  if(!val) return;
  addMessage(val, true);
  input.value = '';
  setTimeout(()=>addMessage('cute.'), 650);
});

profileLinks.forEach(el => el.addEventListener('click', () => {
  window.location.href = 'profile.html';
}));
