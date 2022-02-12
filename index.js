function getBox(type, key, i) {
  const ele = document.createElement(type);
  ele.className = key;
  ele.id = key + i;
  return ele;
}

const app = document.querySelector("#app");

// Creating 25 divs for 5x5 grid
for (let i = 0; i < 25; i++) {
  app.appendChild(getBox("div", "box", i));
}
