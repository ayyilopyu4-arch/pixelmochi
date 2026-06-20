window.catElement = document.getElementById("cat");

let drag = false;
let ox = 0;
let oy = 0;

catElement.onmousedown = (e)=>{
drag = true;
ox = e.clientX - catElement.offsetLeft;
oy = e.clientY - catElement.offsetTop;
};

document.onmouseup = ()=> drag = false;

document.onmousemove = (e)=>{
if(!drag) return;
catElement.style.left = (e.clientX - ox) + "px";
catElement.style.top = (e.clientY - oy) + "px";
};
