var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bc40d1f9-8214-4206-9e99-0d2e974fcd07","b563eb0b-2232-45af-8cc7-6a8102e320d6"],"propsByKey":{"bc40d1f9-8214-4206-9e99-0d2e974fcd07":{"name":"ufo_1","sourceUrl":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png","frameSize":{"x":386,"y":267},"frameCount":1,"looping":true,"frameDelay":2,"version":"1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":267},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png"},"b563eb0b-2232-45af-8cc7-6a8102e320d6":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var carro1, carro2, carro3,carro4;
var borda1, borda2;
var sam;
var backg = createSprite(200, 200);
backg.setAnimation("space_1");
var start = createSprite(26, 190, 52, 137);
start.shapeColor = "lightblue";
  borda1 = createSprite(190,120,420,3);
  borda1.shapeColor = "black";
  borda2 = createSprite(190,260,420,3);
  borda2.shapeColor = "black";
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  carro1 = createSprite(100,130,10,10);
  carro1.setAnimation("ufo_1");
  carro1.scale=0.09
  carro2 = createSprite(215,130,10,10);
  carro2.setAnimation("ufo_1");
  carro2.scale=0.09
  carro3 = createSprite(165,250,10,10);
  carro3.setAnimation("ufo_1");
  carro3.scale=0.09
  carro4 = createSprite(270,250,10,10);
  carro4.setAnimation("ufo_1");
  carro4.scale=0.09
var chegada = createSprite(375,190,52,137);
chegada.shapeColor = "yellow";
  
 
//adicione velocidade para fazer o carro se mover.
  carro1.velocityY=8;
  carro2.velocityY=8;
  carro3.velocityY=-8;
  carro4.velocityY=-8;

function draw() {
  fill("browm");
  text("Mortes: " + life,200,100);
  strokeWeight(0);
  rect(0,120,52,140);
  
  carro1.bounceOff(borda1);
  carro1.bounceOff(borda2);
  carro2.bounceOff(borda1);
  carro2.bounceOff(borda2);
  carro3.bounceOff(borda1);
  carro3.bounceOff(borda2);
  carro4.bounceOff(borda1);
  carro4.bounceOff(borda2);
  sam.bounceOff(borda1);
  sam.bounceOff(borda2);
  

  
  if(keyDown("RIGHT_ARROW")){
    sam.x=sam.x+4;
  }
  if(keyDown("LEFT_ARROW")){
    sam.x=sam.x-4;
  }
  if(keyDown("UP_ARROW")){
    sam.y=sam.y-4;
  }
  if(keyDown("DOWN_ARROW")){
    sam.y=sam.y+4;
  }
  if(sam.isTouching(carro1) || sam.isTouching(carro2) || sam.isTouching(carro3) || sam.isTouching(carro4)){
    sam.x=20;
    sam.y=190;
    life = life + 1;
  }
  if(sam.isTouching(chegada)){
    sam.x=20;
    sam.y=190;
  }
// crie a função rebater, para fazer o carro rebater nos limites
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
