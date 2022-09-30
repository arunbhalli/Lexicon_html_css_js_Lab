/*  Rectangle  */

class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  calcArea() {
    return this.width * this.height;
  }
}
let rect = new Rectangle(2, 5, 'Red');
document.getElementById('width').innerHTML = rect.width;
document.getElementById('height').innerHTML = rect.height;
document.getElementById('color').innerHTML = rect.color;
document.getElementById('area').innerHTML = rect.calcArea();
