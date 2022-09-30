



function distance(arr) {
  let x1 = arr[0];
  let y1 = arr[1];
  let x2 = arr[2];
  let y2 = arr[3];
  let a1 = x2 - x1;
  let a2 = y2 - y1;
  let distance = a1 * a1 + a2 * a2;
  console.log('Distance between points is '+ ' '+Math.sqrt(distance));
}
distance(['6', '6', '3', '3']);
