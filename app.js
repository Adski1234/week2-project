console.log ("Yo! Whatsup")

 const images = [
  { src: "https://www.goodwood.com/globalassets/.road--racing/road/news/2021/1-january/frankel-renault-5-gt-turbo/renault-5-gt-turbo-1990-andrew-frankel-goodwood-22012021.jpg?rxy=0.5,0.5&width=1280&height=720", alt: "renault 5 gt turbo" },
  { src: "https://www.razaoautomovel.com/wp-content/uploads/2016/01/peugeot_205_1.6_gti_12-e1532192973158.jpeg", alt: "peugeot 205 gti" },
  { src: "https://www.razaoautomovel.com/wp-content/uploads/2016/01/VW-Golf-GTi-Mk1.jpg.webp", alt: "vw golf gti mk1" },
  { src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.sJ1gwaLEwCYaHmOzyyxTUgHaE8%3Fpid%3DApi&f=1&ipt=df4985c291ad881a022f700e0125485655530453ab7c6f3d801f9a28c5c23909&ipo=images", alt: "ford escort rs turbo" },
  { src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.cGVHtn5Th2e7wU2y-onk3wHaE8%3Fpid%3DApi&f=1&ipt=a767538e98f8db59b5abfcd2443ec0c8941642846df83fc44659e593045cbbe1&ipo=images", alt: "vauxhall nova sr" }
];

let imageNumberThing = 0;


const track = document.getElementById("track");
const thumbBtn = document.getElementById("thumbBtn");
const thumbImg = document.getElementById("thumbImg");

function buildSlides(){
  track.innerHTML = "";

  for(let i = 0; i < images.length; i++){
    const img = document.createElement("img");
    img.className = "slide";
    img.src = images[i].src;
    img.alt = images[i].alt;
    track.appendChild(img);
  }
}

function updateView(){

  const moveX = imageNumberThing * window.innerWidth;
  track.style.transform = "translateX(-" + moveX + "px)";

  document.body.style.backgroundImage = "url('" + images[imageNumberThing].src + "')";

  thumbImg.src = images[imageNumberThing].src;
  thumbImg.alt = "thumbnail for " + images[imageNumberThing].alt;
}

function goNext(){
  imageNumberThing = imageNumberThing + 1;

  if(imageNumberThing >= images.length){
    imageNumberThing = 0;
  }

  updateView();
}

function goPrev(){
  imageNumberThing = imageNumberThing - 1;

  if(imageNumberThing < 0){
    imageNumberThing = images.length - 1;
  }

  updateView();
}

thumbBtn.addEventListener("click", function(){
  goNext();
});

document.addEventListener("keydown", function(e){
  if(e.key === "ArrowRight"){
    goNext();
  }
  if(e.key === "ArrowLeft"){
    goPrev();
  }
});

window.addEventListener("resize", function(){
  updateView();
});

buildSlides();
updateView();
