class UIMap {
  constructor(cdnBaseURL) {
    this.zoom = 1;
    this.cdnBaseURL = cdnBaseURL;
    this.app = document.querySelector("#app");

    for (let i = 1; i <= 25; i++) {
      this.app.appendChild(this.getImageNode("box", i));
    }
  }

  getImageURL(key) {
    const url = new URL(
      `z${this.zoom}/image-slice-${key}.jpg`,
      this.cdnBaseURL
    );

    return url.href;
  }

  getImageNode(key, i) {
    const ele = document.createElement("img");
    ele.loading = "lazy";
    ele.className = key;
    ele.id = key + i;
    return ele;
  }

  render() {
    const imgs = document.querySelectorAll(".box");

    imgs.forEach((img, i) => (img.src = this.getImageURL(i + 1)));
  }

  zoomIn() {
    if (this.zoom === 6) return;
    this.zoom++;
    this.render();
  }

  zoomOut() {
    if (this.zoom === 1) return;
    this.zoom--;
    this.render();
  }
}

const CDN_BASE_URL =
  "https://cdn.jsdelivr.net/gh/abhishekraj272/google-map-implementation/images/";

const uiMap = new UIMap(CDN_BASE_URL);

document.onload = uiMap.render();

document
  .querySelector("#zoom-in-btn")
  .addEventListener("click", uiMap.zoomIn.bind(uiMap));

document
  .querySelector("#zoom-out-btn")
  .addEventListener("click", uiMap.zoomOut.bind(uiMap));
