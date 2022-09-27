function figurearea(str) {
  let nocommonarea = 0;
  let h = parseInt(str[1]);
  let H = parseInt(str[3]);
  let w = parseInt(str[0]);
  let W = parseInt(str[2]);
  let area = 0;
  if (w > W) {
    nocommonarea = (w - W) * h;
    rect1 = H * W;
    area = nocommonarea + rect1;
    console.log('Area of figure'+ ' '+area);
  } else if (W > w) {
    nocommonarea = (W - w) * H;
    rect1 = h * w;
    area = nocommonarea + rect1;
    console.log('Area of figure'+ ' '+area);
  } else {
    console.log('It is not comination of rectangals');
  }
}
figurearea(['13', '2', '5', '8'] );

//---You can try with -- ['2', '4', '5', '3']  
