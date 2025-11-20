const fly = document.querySelector("#fly");
const vante = document.querySelector("#vante");
const sne = document.querySelector("#sne");

//////* hotspot fly */////

fly.addEventListener("mouseover", mouseOverHead);
fly.addEventListener("mouseout", mouseOutHead);

function mouseOverHead() {
  console.log("mouseOverHead");
  fly.style.fill = "#736de3";
}

function mouseOutHead() {
  console.log("mouseOutHead");
  fly.style.fill = "red";
}

//////* tekst fly *//////
fly.addEventListener("click", clickHead);
function clickHead() {
  console.log("clickHead");
  document.querySelector(".info-text > h2").textContent = "Flyrejse";
  document.querySelector(".placeholder").textContent = "Hvorfor blive herhjemme i kulden, når man kan tage ud at rejse?";
  document.querySelector("#efficiency").innerHTML = `<h3> Thailand: Hvor Varmen Er Så Voldsom, At Du Glemmer Vinteren </h3>  <p> Dyk ned i varmen, der får din hud til at gløde (og svede). Thailand garanterer, at du glemmer alt om vinterstøvler. Perfekt til dig, der vil bytte den danske regnvejrsjakke ud med en bikinikøb-krise. </p>`;
  document.querySelector("#requirement").innerHTML = `<h3> Tenerife: Redningen for Din Sæsonbetingede Depression </h3>  <p> Glem alt om de nordiske wellness-trends. Tenerife er den eneste kur mod kronisk kulde. Her er temperaturen altid godkendt til let påklædning. Bestil nu – din krop fortjener en pause fra alt det uld. </p>`;

  /* fly animation */
  fly.style.transition = "transform 0.5s ease-out";
  fly.style.transform = "translateY(-50px)";

  setTimeout(() => {
    fly.style.transition = "transform 0.5s ease-in, fill 0.2s ease-out";
    fly.style.transform = "translateY(0)";
  }, 200);

  // --- slide-in animation --- //

  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#requirement").classList.remove("hide");

  document.querySelector("#efficiency").classList.remove("slide-in");
  document.querySelector("#requirement").classList.remove("slide-in");

  void document.querySelector("#efficiency").offsetWidth;
  void document.querySelector("#requirement").offsetWidth;

  document.querySelector("#efficiency").classList.add("slide-in");
  document.querySelector("#requirement").classList.add("slide-in");
}

//////* hotspot vante */////
vante.addEventListener("mouseover", mouseOverVante);
vante.addEventListener("mouseout", mouseOutVante);

function mouseOverVante() {
  console.log("mouseOverVante");
  vante.style.fill = "#736de3";
}

function mouseOutVante() {
  console.log("mouseOutVante");
  vante.style.fill = "red";
}

//////* tekst vante *//////
vante.addEventListener("click", clickVante);
function clickVante() {
  console.log("clickVante");
  document.querySelector(".info-text > h2").textContent = "Påklædning";
  document.querySelector(".placeholder").textContent = "Klæd dig på som en fornuftig voksen.";
  document.querySelector("#efficiency").innerHTML = `<h3> Lag-på-lag </h3>  <p>  Moden dikterer tyndt, men fornuften skriger uld. Se bort fra spejderne, som tilsyneladende har lavet en pagt med kulden og stadig går i shorts. Vi andre pakker os ind i et lag-på-lag system, der får en sibirisk mormor til at nikke anerkendende.</p>`;
  document.querySelector("#requirement").innerHTML = `<h3> Huen: Den vigtigeste beklædning </h3>  <p> Huen er ikke en modeerklæring; den er en livsvigtig nødvendighed! Vidste du, at op til 50% af din dyrebare kropsvarme suser ud gennem dit hoved? Uden hue er du i bund og grund en utæt skorsten. Undgå at ligne en frossen pind, hvis hjerne er underafkølet. Tag huen på, og bevis, at du har mindst én funktionel hjernecelle tilbage i kulden. Det er simpelthen en investering i din kropsøkonomi! </p>`;
  document.querySelector("#efficiency").classList.remove("hide");

  /* vante animation */
  vante.style.transition = "transform 0.5s ease-out";
  vante.style.transform = "translateY(-50px)";

  setTimeout(() => {
    vante.style.transition = "transform 0.5s ease-in, fill 0.2s ease-out";
    vante.style.transform = "translateY(0)";
  }, 200);

  // --- slide-in animation --- //

  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#requirement").classList.remove("hide");

  document.querySelector("#efficiency").classList.remove("slide-in");
  document.querySelector("#requirement").classList.remove("slide-in");

  void document.querySelector("#efficiency").offsetWidth;
  void document.querySelector("#requirement").offsetWidth;

  document.querySelector("#efficiency").classList.add("slide-in");
  document.querySelector("#requirement").classList.add("slide-in");

  /* blade falder */
  for (let i = 0; i < 40; i++) {
    setTimeout(makeLeaf, i * 150);
  }
}

//////* hotspot sne */////
sne.addEventListener("mouseover", mouseOverSne);
sne.addEventListener("mouseout", mouseOutSne);

function mouseOverSne() {
  console.log("mouseOverSne");
  sne.style.fill = "#736de3";
}

function mouseOutSne() {
  console.log("mouseOutSne");
  sne.style.fill = "red";
}

//////* tekst sne *//////
sne.addEventListener("click", clickSne);
function clickSne() {
  console.log("clickSne");
  document.querySelector(".info-text > h2").textContent = "Vinterhi";
  document.querySelector(".placeholder").textContent = "Den eneste rationelle respons på kulden er selfølgelig at gå i vinterhi.";
  document.querySelector("#efficiency").innerHTML = `<h3> Vinterhi er Logik: Din Krop Råber på Pause </h3>  <p>  Hvorfor kæmpe, når du kan sove? Vinterhi er den mest rationelle respons på kulden. Vi er trætte, D-vitamin-underskuddet er kritisk, og sengen venter. Sluk mobilen, træk stikket ud, og vågn op, når solen har vundet. </p>`;
  document.querySelector("#requirement").innerHTML = `<h3> Har Bjørnen Haft Ret? Den Geniale Løsning på Vinteren </h3>  <p> Bjørnen har vidst det i årtusinder: Vinteren er spild af tid. Ved at gå i hi følger du en tidstestet, evolutionær strategi. Stop med at lade som om, du nyder kulden. Du er ikke bedre end en bjørn. Sov, til foråret kommer. </p>`;

  /* animation til sne */
  sne.style.transition = "transform 0.5s ease-out";
  sne.style.transform = "translateY(-50px)";

  setTimeout(() => {
    sne.style.transition = "transform 0.5s ease-in, fill 0.2s ease-out";
    sne.style.transform = "translateY(0)";
  }, 200);

  /* 'det sner' animation */
  for (let i = 0; i < 50; i++) {
    setTimeout(makeSnow, i * 100);
  }

  // --- slide-in animation --- //

  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#requirement").classList.remove("hide");

  document.querySelector("#efficiency").classList.remove("slide-in");
  document.querySelector("#requirement").classList.remove("slide-in");

  void document.querySelector("#efficiency").offsetWidth;
  void document.querySelector("#requirement").offsetWidth;

  document.querySelector("#efficiency").classList.add("slide-in");
  document.querySelector("#requirement").classList.add("slide-in");
}

////* animation */////

document.querySelector("#efficiency").classList.remove("hide2");
document.querySelector("#efficiency").classList.add("fadeIn");
document.querySelector("#requirement").classList.remove("hide2");
document.querySelector("#requirement").classList.add("fadeIn");

document.querySelector("#requirement").addEventListener("animationend", cleanup);

function cleanup() {
  console.log("cleanup");
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}

////* 'det sner' animation *////
function makeSnow() {
  const snow = document.createElement("div");
  snow.classList.add("snowflake");
  snow.textContent = "❄";

  snow.style.left = Math.random() * 100 + "vw";
  snow.style.fontSize = Math.random() * 10 + 10 + "px";

  document.body.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  }, 3000);
}

////* 'det falder blade' animation *////
function makeLeaf() {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");
  leaf.textContent = "🍁";

  leaf.style.left = Math.random() * 100 + "vw";
  leaf.style.fontSize = Math.random() * 10 + 20 + "px";

  document.body.appendChild(leaf);

  setTimeout(() => leaf.remove(), 4000);
}
