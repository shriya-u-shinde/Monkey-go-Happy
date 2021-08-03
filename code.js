var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","daf3675e-9816-4271-9be6-8600ebb9ea0a","cf478b95-f63e-423a-8e45-b96c9ba537d0","7dc52cc0-9c3b-48a9-a81e-cffcb0220747"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"Vd1hIorXrnP_bCXguQhxVgjAMWsoe.UB","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"_Zi.ui0bo44ifoTu5Klg._fVcFFTqp_q","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"SnpRTMub2KwguDkepNxODeOGNy0UXAuj","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"daf3675e-9816-4271-9be6-8600ebb9ea0a":{"name":"ground_grass_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.xUQB0vdGDWHYaiv77BrpTnxeNBV_bNj/category_environment/ground_grass.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":".xUQB0vdGDWHYaiv77BrpTnxeNBV_bNj","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.xUQB0vdGDWHYaiv77BrpTnxeNBV_bNj/category_environment/ground_grass.png"},"cf478b95-f63e-423a-8e45-b96c9ba537d0":{"name":"farm_land_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png"},"7dc52cc0-9c3b-48a9-a81e-cffcb0220747":{"name":"pine_trees_1","sourceUrl":"assets/api/v1/animation-library/gamelab/z8Dgk.em0WaIbb.0CaPSgLIoJa8HoEZe/category_backgrounds/pine_trees.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"z8Dgk.em0WaIbb.0CaPSgLIoJa8HoEZe","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/z8Dgk.em0WaIbb.0CaPSgLIoJa8HoEZe/category_backgrounds/pine_trees.png"}}};
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

//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var backdrop = createSprite(0, 0 ,400, 400);
backdrop.setAnimation("pine_trees_1");
backdrop.scale = 2;
backdrop.x = backdrop.width/2;

//create a trex sprite
var monkey = createSprite(200,380,20,50);
monkey.setAnimation("monkey");

//set collision radius for the trex
monkey.setCollider("circle",0,0,30);

//scale and position the trex
monkey.scale = 0.1;
monkey.x = 50;

//create a ground sprite
var ground = createSprite(200,400,400,20);
ground.x = ground.width /2;
ground.scale = 1/2 ;



//invisible Ground to support Trex
var invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;
monkey.collide(invisibleGround);

//create Obstacle and Cloud Groups
var ObstaclesGroup = createGroup();
var CloudsGroup = createGroup();





//display score

//set text
textSize(15);
textFont("Georgia");
textStyle(BOLD);

text("Survival Time: "+ count, 250, 100);

//score
var count = 0;

  
function draw() {
  //set background to white
  background("white");
  
  console.log(gameState);
  
  if(gameState === PLAY){
    //move the ground
    ground.velocityX = -(6 +3*count/100);
    ground.visible="false";
    //scoring
    count = count + Math.round(World.frameRate/30);
    //count++ ;
    if(CloudsGroup.isTouching(monkey)){
      CloudsGroup.destroyEach();
      count=count+2;
      playSound("assets/category_hits/puzzle_game_button_01.mp3")
    }
    
    if (count>0 && count%100 === 0){
      playSound("assets/category_bell/bells_win.mp3");
    }
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
     //jump when the space key is pressed
    if(keyDown("space") && monkey.y >= 359){
      monkey.velocityY = -12 ;
      playSound("assets/category_bell/vibrant_game_correct_answer_1.mp3");
    }
  
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
    
    //spawn the clouds
    spawnClouds();
  
    //spawn obstacles
    spawnObstacles();
    
    //End the game when trex is touching the obstacle
    if(ObstaclesGroup.isTouching(monkey)){
      playSound("jump.mp3");
      gameState = END;
      playSound("die.mp3");
    }
  }
  
  else if(gameState === END) {

    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    monkey.velocityY = 0;
    ObstaclesGroup.setVelocityXEach(0);
    CloudsGroup.setVelocityXEach(0);
    
    //set lifetime of the game objects so that they are never destroyed
    ObstaclesGroup.setLifetimeEach(-1);
    CloudsGroup.setLifetimeEach(-1);
    
    
  }

  
  //console.log(trex.y);
  
  //stop trex from falling down
  monkey.collide(invisibleGround);
  
  drawSprites();
}

function reset(){
  gameState = PLAY ;
  gameOver.visible = false ;
  restart.visible = false ;
  ObstaclesGroup.destroyEach();
  CloudsGroup.destroyEach();
  count = 0;
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var stone = createSprite(400,385,10,40);
    stone.velocityX = - (6 + 3*count/100);
    
    //generate random obstacles
    var rand = randomNumber(1,6);
    stone.setAnimation("stone");
    
    //assign scale and lifetime to the obstacle           
    stone.scale = 0.1;
    stone.lifetime = 70;
    //add each obstacle to the group
    ObstaclesGroup.add(stone);
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var banana = createSprite(400,320,40,10);
    banana.y = randomNumber(280,320);
    banana.setAnimation("Banana");
    banana.scale = 0.1/2;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    CloudsGroup.add(banana);
  }
  
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
