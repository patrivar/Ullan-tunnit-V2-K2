const layers = [
  document.querySelector(".space2"),
  document.querySelector(".space3"),
];

document.addEventListener("mousemove", (event) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const offsetX = event.clientX - centerX;
  const offsetY = event.clientY - centerY;

  layers.forEach((layer, index) => {
    const speed = (index + 1) * 0.05;
    const translateX = offsetX * speed;
    const translateY = offsetY * speed;

    layer.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
});
