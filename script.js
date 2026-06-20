let cat = document.getElementById("cat");
let menu = document.getElementById("menu");

let catState = "idle";
let frameX = 0;
let frameY = 0;
let frameCount = 0;

let drag = false;
let offsetX = 0;
let offsetY = 0;

// Ubah kondisi animasi
function setCatState(state) {
  catState = state;
  frameX = 0; // Kembali ke frame awal
  menu.classList.add("hidden");
}

// Animasi utama
function animate() {
  frameCount++;

  // Ganti gambar setiap 10 kali putaran
  if (frameCount % 10 === 0) {
    frameX++;
    if (frameX > 2) frameX = 0;
  }

  // Pilih baris sesuai kondisi
  if (catState === "idle") frameY = 0;
  if (catState === "sleep") frameY = 1;
  if (catState === "walk") frameY = 2;

  // Terapkan posisi sprite
  cat.style.backgroundPosition = `-${frameX * 64}px -${frameY * 64}px`;
}

// Jalankan animasi
setInterval(animate, 100);

// Logika seret kucing
cat.onmousedown = (e) => {
  drag = true;
  offsetX = e.clientX - cat.offsetLeft;
  offsetY = e.clientY - cat.offsetTop;
  cat.style.left = cat.offsetLeft + "px";
  cat.style.top = cat.offsetTop + "px";
  cat.classList.remove("hidden");
};

document.onmousemove = (e) => {
  if (!drag) return;
  cat.style.left = (e.clientX - offsetX) + "px";
  cat.style.top = (e.clientY - offsetY) + "px";
};

document.onmouseup = () => {
  drag = false;
  menu.style.left = cat.offsetLeft + "px";
  menu.style.top = (cat.offsetTop + 70) + "px";
  menu.classList.toggle("hidden");
};
