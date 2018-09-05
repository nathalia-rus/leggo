

// 

TweenMax.to("svg", 2, { opacity: 1 }, 0.5)

// LINES

// LINES TOP
var tlinesTop = new TimelineLite();  
tlinesTop
  .staggerFrom("#FirstLineTop", 25, { 
    fill: "#000000",
    drawSVG: 0,
    delay: 1, 
    ease: Power1.easeInOut,
  }, 0.01)
  .staggerFrom("#MiddleLineTop", 25, {
    fill: "#000000",
    drawSVG: 0,
    ease: Power1.easeInOut
  }, 0.01, "-= 15 MiddleLineTop")
  .staggerFrom("#LastLineTop", 25, {
  fill: "#000000",
  drawSVG: 0,
    ease: Power1.easeInOut
  }, 0.01, "-= 25");

tlinesTop.timeScale(2);

// LINES BOTTOM

var tlinesBottom = new TimelineLite();  

tlinesBottom
  .staggerFrom("#BottomLineBottom", 25, {
    fill: "#000000",
    drawSVG: 0,
    delay: 1,
    ease: Power1.easeInOut
  }, 0.01)
  .staggerFrom("#MiddleLineBottom", 25, {
    fill: "#000000",
    drawSVG: 0,
    ease: Power1.easeInOut
  }, 0.01, "-= 15 MiddleLineBottom")
  .staggerFrom("#TopLineBottom", 25, {
    fill: "#000000",
    drawSVG: 0,
    ease: Power1.easeInOut
  }, 0.01, "-=25");

tlinesBottom.timeScale(2);

// TweenMax.staggerFrom("#TopLineBottom", 25, {
//   fill: "#000000",
//   drawSVG: 0,
//   delay: 2
// }, 0.01);

// TweenMax.staggerFrom("#MiddleLineBottom", 25, {
//   fill: "#000000",
//   drawSVG: 0,
//   delay: 1
// }, 0.01);

// TweenMax.staggerFrom("#BottomLineBottom", 25, {
//   fill: "#000000",
//   drawSVG: 0,
//   delay: 0
// }, 0.01);

var tl = new TimelineLite(); 

tl
.staggerFrom(".FirstLeft", 1, {
  drawSVG: 0,
  delay: 1
  }, 0.02, "-10")
.staggerFrom(".SecondLeft", 1, {
  drawSVG: 0
  }, 0.01, "-=18")
.staggerFrom(".ThirdLeft", 1, {
  drawSVG: 0
  }, 0.01, "-=16")
  .staggerFrom(".FourthLeft", 1, {
  drawSVG: 0
  }, 0.01, "-=17")
.staggerFrom(".FifthLeft", 1, {
  drawSVG: 0
  }, 0.01, "-=15")
  .staggerFrom(".FirstRight", 1, {
  drawSVG: 0
  }, 0.01, "-=14")
  .staggerFrom(".SecondRight", 1, {
  drawSVG: 0
  }, 0.01, "-=13" )
  .staggerFrom(".ThirdRight", 1, {
  drawSVG: 0
  }, 0.01, "-=12")
  .staggerFrom(".FourthRight", 1, {
  drawSVG: 0,
  }, 0.01, "-=20").tl.reverse();

tl.timeScale(2);

// LEFT 

// TweenMax.staggerFrom(".FirstLeft", 5, {
//   drawSVG: 0
// }, 0.02);

// TweenMax.staggerFrom(".SecondLeft", 5, {
//   drawSVG: 0
// }, 0.01);

// TweenMax.staggerFrom(".ThirdLeft", 5, {
//   drawSVG: 0
// }, 0.01);

// TweenMax.staggerFrom(".FourthLeft", 5, {
//   drawSVG: 0
// }, 0.02);

// TweenMax.staggerFrom(".FifthLeft", 5, {
//   drawSVG: 0
// }, 0.01);



// // RIGHT 

// TweenMax.staggerFrom(".FirstRight", 5, {
//   drawSVG: 0
// }, 0.01);

// TweenMax.staggerFrom(".SecondRight", 5, {
//   drawSVG: 0
// }, 0.02);

// TweenMax.staggerFrom(".ThirdRight", 5, {
//   drawSVG: 0
// }, 0.02);

// TweenMax.staggerFrom(".FourthRight", 5, {
//   drawSVG: 0,
// }, 0.01);


 




// TWEEN MAX VERSION

// TweenMax.staggerFrom("#FirstLineTop", 25, {
//   fill: "#000000",
//   drawSVG: 0,
//   delay: 0
// }, 0.01);

// TweenMax.staggerFrom("#MiddleLineTop", 25, {
//   fill: "#000000",
//   drawSVG: 0,
//   delay: 1
// }, 0.01);


// TweenMax.staggerFrom("#LastLineTop", 25, {
//   fill: "#000000",
//   drawSVG: 0,
//   delay: 2
// }, 0.01);