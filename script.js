const photos=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
const caps=[
'Our Little Star ✨',
'The Sweetest Smile 😊',
'Precious Memories ❤️',
'Growing Beautifully 🌸',
'Joy of Our Family 💕',
'Forever Our Princess 👑'
];
let i=0;
const img=document.getElementById('slide');
const cap=document.getElementById('caption');
const audio=document.getElementById('music');

document.getElementById('start').onclick=()=>{
 document.querySelector('.hero').style.display='none';
 document.getElementById('gallery').classList.remove('hidden');
 audio.play().catch(()=>{});
 show();
 setInterval(show,5000);
};
function show(){
 img.src='photos/'+photos[i];
 cap.innerText=caps[i];
 i=(i+1)%photos.length;
}
document.getElementById('wish').onclick=()=>{
 document.getElementById('final').classList.remove('hidden');
 for(let n=0;n<80;n++){
  const d=document.createElement('div');
  d.innerHTML='🎉';
  d.style.position='fixed';
  d.style.left=Math.random()*100+'vw';
  d.style.top='-20px';
  d.style.fontSize=(20+Math.random()*30)+'px';
  d.style.transition='transform 4s linear';
  document.body.appendChild(d);
  requestAnimationFrame(()=>{d.style.transform='translateY(110vh)'});
  setTimeout(()=>d.remove(),4200);
 }
};
