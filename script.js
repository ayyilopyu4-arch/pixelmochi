let cat = document.getElementById("cat");
let menu = document.getElementById("menu");

let catState = "idle";
let frameX = 0;
let frameY = 0;
let frameCount = 0;
let frame = 0; // Tambah variabel untuk ganti gambar jalan

let drag = false;
let offsetX = 0;
let offsetY = 0;

function setCatState(state) {
  catState = state;
  frameX = 0;
  frame = 0; // Reset frame saat ganti kondisi
  menu.classList.add("hidden");
}

// Fungsi gerak posisi kucing
function moveCat() {
  if (catState === "walk") {
    // Contoh gerak ke kanan, bisa sesuaikan arahnya
    cat.style.left = (cat.offsetLeft + 2) + "px";
  }
}

function animate() {
  frameCount++;
  frame++;

  // Jalankan gerakan
  moveCat();

  // Logika untuk kondisi jalan (pakai 2 gambar terpisah)
  if (catState === "walk") {
    cat.style.backgroundImage = (frame % 2 === 0)
      ? "url('assets/walk1.png')"
      : "url('assets/walk2.png')";
    cat.style.backgroundPosition = "center";
    return; // Keluar agar tidak bentrok dengan sprite lain
  }

  // Logika untuk kondisi diam & tidur (pakai sprite sheet)
  if (frameCount % 10 === 0) {
    frameX++;
    if (frameX > 2) frameX = 0;
  }

  if (catState === "idle") frameY = 0;
  if (catState === "sleep") frameY = 1;

  cat.style.backgroundImage = "url('assets/sprite.png')"; // Ganti sesuai nama filemu
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
