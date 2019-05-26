const h1 = document.querySelector('h1');

console.log(document.body.clientWidth);
console.log(document.body.clientHeight)

window.addEventListener('mousemove', (e) => {
  const width = Math.floor((256 / document.body.clientWidth) * e.clientX);
  const height = Math.floor((256 / document.body.clientHeight) * e.clientY);

  h1.textContent = `${e.clientX}, ${e.clientY}`;
  document.body.style.backgroundColor = `rgb(${width},${height},${width})`;

  const colorWidth = 255 - width;
  const colorHeight = 255 - height;

  // document.body.style.color = `rgb(${colorWidth}),${height}, ${0}`;
  document.body.style.color = `rgb(${colorWidth},${colorHeight},${colorWidth})`;
})