function fill(image, startPixel, i, j, color) {
  if (image[i][j] === startPixel) {
    image[i][j] = color;
    if (i - 1 >= 0) fill(image, startPixel, i - 1, j, color);
    if (j + 1 < image[0].length) fill(image, startPixel, i, j + 1, color);
    if (j - 1 >= 0) fill(image, startPixel, i, j - 1, color);
    if (i + 1 < image.length) fill(image, startPixel, i + 1, j, color);
  }
}

var floodFill = function (image, sr, sc, color) {
  if (image[sr][sc] == color) return image;
  fill(image, image[sr][sc], sr, sc, color);
  return image;
};
