let frame = 0;

function animateCat(cat){
if(catState === "idle"){
cat.style.background = "#ff7aa2";
}

if(catState === "walk"){
frame++;
cat.style.background = (frame % 2 === 0) ? "#ff7aa2" : "#ff4f81";
cat.style.left = (cat.offsetLeft + 1) + "px";
}

if(catState === "sleep"){
cat.style.background = "#999";
}
}

setInterval(()=>{
if(window.catElement){
animateCat(window.catElement);
}
},200);
