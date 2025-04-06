const correctPassword = "01022025"; 
const loginContainer = document.getElementById("login-container");
const mainContainer = document.getElementById("main-container");
const errorText = document.getElementById("login-error");

function login() {
    const password = document.getElementById("password").value;
    if (password === correctPassword) {
      loginContainer.classList.add("hidden");
      mainContainer.classList.remove("hidden");
    } else {
      errorText.textContent = "Senha incorreta gatinha! 😉";
    }
  }


// Carrossel de fotos
const photos = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg", "img/img6.jpg", "img/img7.jpg", "img/img8.jpg", "img/img9.jpg", "img/img10.jpg" ];
let currentPhoto = 0;
let showingFirst = true;

function changePhoto() {
  const img1 = document.getElementById("carousel1");
  const img2 = document.getElementById("carousel2");

  const nextPhoto = (currentPhoto + 1) % photos.length;

  const currentImg = showingFirst ? img1 : img2;
  const nextImg = showingFirst ? img2 : img1;

  // Atualiza a imagem de fundo antes da transição
  nextImg.src = photos[nextPhoto];
  nextImg.classList.add("active");
  currentImg.classList.remove("active");

  currentPhoto = nextPhoto;
  showingFirst = !showingFirst;
}

setInterval(changePhoto, 3000);

// Corações flutuantes 💙
function createHeart() {
  const container = document.querySelector(".hearts-container");
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";

  const size = Math.random() * 20 + 10;
  heart.style.width = size + "px";
  heart.style.height = size + "px";
  heart.style.animationDuration = (Math.random() * 5 + 5) + "s";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 400);

document.getElementById("reveal-button").addEventListener("click", () => {
    const poemDiv = document.getElementById("poem");
    poemDiv.classList.toggle("visible");
  });
  
  
