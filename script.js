let click = document.querySelector("#click");
let draw = document.querySelector("#draw");
let color = document.querySelector("#color");
let header = document.querySelector("header");

let drawing = false;

// Click eventti

click.addEventListener("click", (event) => {
  console.log("Clicked!");
  console.log(event);
});

color.addEventListener("dblclick", () => {
  console.dir(header);
  header.style.backgroundColor = "blue";
});

const drawDot = (event) => {
  console.log("Toimmii");
  console.log(event.pageX, event.pageY);
  let dot = document.createElement("div");
  dot.className = "dot";
  // Asemoi div ennen kuin lisätään se dokumenttiin
  dot.style.left = event.pageX - 20 + "px";
  dot.style.top = event.pageY - 20 + "px";
  document.body.appendChild(dot);
};

const myHandler = () => {
  if (drawing) {
    // poistaa ikkunalle eventListenerin
    window.removeEventListener("click", drawDot);
    // muokkaa piirto päälle/pois nappulan tekstiä
    draw.textContent = "Piiro päälle";
  } else {
    // lisätä ikkunalle eventListenerin
    window.addEventListener("click", drawDot);
    // muokkaa piirto päälle/pois nappulan tekstiä
    draw.textContent = "Piiro pois";
  }
  drawing = !drawing;
};

draw.addEventListener("click", myHandler);

// Näppäimistö eventti

window.addEventListener("keydown", (event) => {
  console.log(`Näppäintä ${event.key} painettu`);
  if (event.key === "r") {
    header.style.backgroundColor = "red";
  } else {
    header.style.backgroundColor = "lightgreen";
  }
});

window.addEventListener("keyup", (event) => {
  console.log(`Näppäintä ${event.key} painettu`);
  header.style.backgroundColor = "";
});

// Pass in the id of an element
let confetti = new Confetti("demo");

// Edit given parameters
confetti.setCount(75);
confetti.setSize(1);
confetti.setPower(25);
confetti.setFade(false);
confetti.destroyTarget(true);

// Scroll eventti

window.addEventListener("scroll", (event) => {
  console.log(event);
  let top = pageYOffset;

  let layers = document.getElementsByClassName("layer");
  var layer, speed, yPos;
  for (var i = 0; i < layers.length; i++) {
    layer = layers[i];
    speed = layer.getAttribute("data-speed");
    var yPos = -((top * speed) / 100);
    layer.setAttribute(
      "style",
      "transform: translate3d(0px, " + yPos + "px, 0px)"
    );
  }
});
