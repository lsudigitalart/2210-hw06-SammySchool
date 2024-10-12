let imgAtom, imgFuelRod, imgHelloKittyNuclear, imgNuclearSymbol, imgPowerPlant, imgMushroomCloud, imgHazmat

let fontName = 'Permanent Marker';

let pressed = false;
let imgPlaceX, imgPlaceY;

canvasWidth = 1500;
canvasHeight = 825;

function preload() {
  imgAtom = loadImage("https://i.imgur.com/f90EKic.jpeg");
  imgFuelRod = loadImage("https://i.imgur.com/INM39h7.jpeg");
  imgHelloKittyNuclear = loadImage("https://i.imgur.com/fJJlbZH.jpeg");
  imgNuclearSymbol = loadImage("https://i.imgur.com/fChJP31.jpeg");
  imgPowerPlant = loadImage("https://i.imgur.com/oUii1gs.jpeg");
  imgMushroomCloud = loadImage("https://i.imgur.com/NQu7y2a.jpeg");
  imgHazmat = loadImage("https://i.imgur.com/pMVhirf.jpeg")
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  imgAtomScalar = 1.78;
  imgAtomSize = 400;
  
  imgFuelRodScalar = 1.5;
  imgFuelRodSize = 200;
  
  imgHelloKittyNuclearScalar = 1.78;
  imgHelloKittyNuclearSize = 150;
  
  imgNuclearSymbolScalar = 1.5;
  imgNuclearSymbolSize = 300;
  
  imgPowerPlantScalar = 1.5;
  imgPowerPlantSize = 500;
  
  imgMushroomCloudScalar = 1.5;
  imgMushroomCloudSize = 200;

  imgHazmatScalar = 1.5;
  imgHazmatSize = 200;

  atomX = getRandomPosition(canvasWidth, imgAtomSize);
  atomY = getRandomPosition(canvasHeight, imgAtomSize / imgAtomScalar);
  
  fuelRodX = getRandomPosition(canvasWidth, imgFuelRodSize);
  fuelRodY = getRandomPosition(canvasHeight, imgFuelRodSize / imgFuelRodScalar);
  
  helloKittyX = getRandomPosition(canvasWidth, imgHelloKittyNuclearSize);
  helloKittyY = getRandomPosition(canvasHeight, imgHelloKittyNuclearSize / imgHelloKittyNuclearScalar);
  
  nuclearSymbolX = getRandomPosition(canvasWidth, imgNuclearSymbolSize);
  nuclearSymbolY = getRandomPosition(canvasHeight, imgNuclearSymbolSize / imgNuclearSymbolScalar);
  
  powerPlantX = getRandomPosition(canvasWidth, imgPowerPlantSize);
  powerPlantY = getRandomPosition(canvasHeight, imgPowerPlantSize / imgPowerPlantScalar);

  fuelRodX = getRandomPosition(canvasWidth, imgHazmatSize);
  fuelRodY = getRandomPosition(canvasHeight, imgHazmatSize / imgHazmatScalar);

  hazmatX = getRandomPosition(canvasWidth, imgHazmatSize);
  hazmatY = getRandomPosition(canvasHeight, imgHazmatSize / imgHazmatScalar);

  textSize(100);
  textAlign(CENTER, CENTER);
  textFont(fontName);

  textX = random(0, canvasWidth);
  textY = random(0, canvasHeight);
}

function draw() {
  background(40);
  
  image(imgAtom, atomX, atomY, imgAtomSize, imgAtomSize / imgAtomScalar);
  image(imgFuelRod, fuelRodX, fuelRodY, imgFuelRodSize, imgFuelRodSize / imgFuelRodScalar);
  image(imgHelloKittyNuclear, helloKittyX, helloKittyY, imgHelloKittyNuclearSize, imgHelloKittyNuclearSize / imgHelloKittyNuclearScalar);
  image(imgNuclearSymbol, nuclearSymbolX, nuclearSymbolY, imgNuclearSymbolSize, imgNuclearSymbolSize / imgNuclearSymbolScalar);
  image(imgPowerPlant, powerPlantX, powerPlantY, imgPowerPlantSize, imgPowerPlantSize / imgPowerPlantScalar);
  image(imgHazmat, hazmatX, hazmatY, imgHazmatSize, imgHazmatSize / imgHazmatScalar);
  fill(100,235,52); 
  text("16,000 MW", textX, textY);

  if (pressed) {
    image(imgMushroomCloud, imgPlaceX, imgPlaceY, imgMushroomCloudSize, imgMushroomCloudSize / imgMushroomCloudScalar);
  }
}

function mousePressed() {
  imgPlaceX = mouseX;
  imgPlaceY = mouseY;
  pressed = true;
}

function getRandomPosition(maxBoundary, imageDimension) {
  return Math.random() * (maxBoundary - imageDimension);
}
