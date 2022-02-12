### Google Map Implementation

In this repo, I had tried implementing google maps ui rendering.

### How I implemented it?

1. I needed a very high resolution picture (1Mx1M+), So I went to [EarthCam](https://www.earthcam.net/projects/empirestatebuilding/gigapixelpanorama/2021/) and captured screenshots at different levels.

2. Then I chopped the images into 25x25 square slice using [this tool](https://www.imgonline.com.ua/eng/cut-photo-into-pieces.php).

3. I needed a CDN for storing the images, I uploaded it in this repo and used [JsDelivr](https://jsdelivr.com) to serve the images.

4. I maintained a folder structure to map the files to zoom levels.

5. Created a 5x5 grid using CSS and created 25 image element and injected the images in the elements.

Follow me for more interesting projects.
