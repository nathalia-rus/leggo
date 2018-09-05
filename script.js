
// to start with black screen

TweenMax.to("svg", 2, { opacity: 1,
  transformOrigin: '50% 50%' }, 0.5)



// LINES

// LINES TOP
var tlinesTop = new TimelineMax();
  // { repeat: -1,
  // repeatDelay: 37 }



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

var tlinesBottom = new TimelineMax();
  // { repeat: -1,
  // repeatDelay: 37 }


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


var tl = new TimelineMax({
  repeat: -1,
  repeatDelay: 2,
  onReverseComplete: reverseRepeat﻿,
  onReverseCompleteParams﻿: ['{self}']
});

var reverseRepeat = function (tl) {
  tl.reverse(0); // 0 sets the playhead at the end of the animation
}



tl
.staggerFrom(".FirstLeft", 1, {
  drawSVG: 0,
  rotation: 360,
  delay: 1
  }, 0.02, "-10")
.staggerFrom(".SecondLeft", 1, {
  drawSVG: 0,
  rotation: 360,
  }, 0.01, "-=18")
.staggerFrom(".ThirdLeft", 1, {
  drawSVG: 0,
  rotation: 360
  }, 0.01, "-=16")
  .staggerFrom(".FourthLeft", 1, {
  drawSVG: 0
  }, 0.01, "-=17")
.staggerFrom(".FifthLeft", 1, {
  drawSVG: 0,
  rotation: 360
  }, 0.01, "-=15")
  .staggerFrom(".FirstRight", 1, {
  drawSVG: 0,
    rotation: 360
  }, 0.01, "-=14")
  .staggerFrom(".SecondRight", 1, {
  drawSVG: 0,
    rotation: 360
  }, 0.01, "-=13" )
  .staggerFrom(".ThirdRight", 1, {
  drawSVG: 0,
    rotation: 360
  }, 0.01, "-=12")
  .staggerFrom(".FourthRight", 1, {
  drawSVG: 0,
    rotation: 360
  }, 0.01, "-=20").tl.reverse();

tl.timeScale(2);

