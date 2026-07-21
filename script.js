const photos=["1.JPG","2.JPG","3.JPG","4.JPG","5.JPG","6.JPG"];
const caps=["Our Little Star ✨","Sweet Smile ❤️","Beautiful Memories 🌸","Princess 👑","Forever Loved 💖","Happy Birthday 🎂"];
let i=0;
const img=document.getElementById("slide");
const cap=document.getElementById("caption");
const audio=document.getElementById("music");
document.getElementById("start").onclick=()=>{
document.querySelector(".hero").style.display="none";
document.getElementById("gallery").classList.remove("hidden");
audio.play().catch(()=>{});
show();
setInterval(show,5000);
}
function show(){
img.src=photos[i];
cap.innerText=caps[i];
i=(i+1)%photos.length;
}
document.getElementById("wish").onclick=()=>{
document.getElementById("final").classList.remove("hidden");
alert("🎉 Happy Birthday Yanu! ❤️");
}
