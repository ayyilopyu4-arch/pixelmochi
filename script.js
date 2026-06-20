let cat = document.getElementById("cat");
let menu = document.getElementById("menu");

let catState = "idle";
let frame = 0;

/* STATE */
function setState(s){
catState = s;
menu.classList.add("hidden");
}

/* UPDATE SPRITE */
function updateCat(){

if(catState === "idle"){
cat.style.background = "url('assets/idle.png')";
}

if(catState === "sit"){
cat.style.background = "url('assets/sit.png')";
}

if(catState === "sleep"){
cat.style.background = "url('assets/sleep.png')";
}

if(catState === "walk"){
frame++;
cat.style.background = (frame % 2 === 0)
? "url('assets/walk1.png')"
: "url('assets/walk2.png')";
cat.style.left = (cat.offsetLeft + 1) + "px";
}
}

/* LOOP (BIAR HIDUP) */
setInterval(updateCat, 200);

/* DRAG */
let drag = false;
let ox = 0;
let oy = 0;

cat.onmousedown = (e)=>{
drag = true;
ox = e.clientX - cat.offsetLeft;
oy = e.clientY - cat.offsetTop;

menu.style.left = cat.offsetLeft + "px";
menu.style.top = cat.offsetTop + 70 + "px";
menu.classList.remove("hidden");
};

document.onmouseup = ()=> drag = false;

document.onmousemove = (e)=>{
if(!drag) return;
cat.style.left = (e.clientX - ox) + "px";
cat.style.top = (e.clientY - oy) + "px";
};

/* CLICK MENU */
cat.onclick = ()=>{
menu.classList.toggle("hidden");
menu.style.left = cat.offsetLeft + "px";
menu.style.top = cat.offsetTop + 70 + "px";
};

let dir = 1;

function moveCat(){
let x = cat.offsetLeft;

if(x > window.innerWidth - 80) dir = -1;
if(x < 0) dir = 1;

cat.style.left = (x + dir * 2) + "px";
}

setInterval(()=>{
moveCat();

if(catState === "walk"){
cat.style.background = (frame++ % 2 === 0)
? "url('assets/walk1.png')"
: "url('assets/walk2.png')";
}
}, 100);
