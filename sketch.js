let hueX=0;
function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  frameRate(1);
   noLoop();
   background(220); 
}

function draw() {
  console.log('test commit')
  for (let i= 0;i<20;i++){
    fill(130,100,100);
    ellipse(i*8,20,20,20);
    hueX+=10;
  }
  for (let j= 0;j<20;j++){
    fill(hueX,100,100);
    ellipse(j*8,80,30,30);
    hueX+=10;
  }
  for (let j= 0;j<10;j++){
    fill(hueX,100,100);
    ellipse(j*8,180,30,30);
    hueX+=10;
  }
}