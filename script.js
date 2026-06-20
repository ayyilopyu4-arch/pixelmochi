let cat = document.getElementById("cat");
let menu = document.getElementById("menu");

let catState = "idle";

/* STATE SYSTEM */
function setState(state){
catState = state;
menu.classList.add("hidden");
updateCat();
}

/* UPDATE LOOK */
function updateCat(){
if(catState === "idle"){
cat.style.background = "pink";
}

if(catState === "sit"){
cat.style.background = "orange";
}

if(catState === "sleep"){
cat.style.background = "gray";
}

if(catState === "walk"){
cat.style.background = "hotpink";
}
}

/* DRAG SYSTEM */
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

/* CLICK CAT = SHOW MENU */
cat.onclick = ()=>{
menu.classList.toggle("hidden");
menu.style.left = cat.offsetLeft + "px";
menu.style.top = cat.offsetTop + 70 + "px";
};

updateCat();
