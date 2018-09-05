
// to start with black screen

TweenMax.to("svg", 1, { opacity: 1,
  transformOrigin: '50% 50%' }, 0.5)

// just checking id works ok for group target
  // TweenMax.to("#FirstRight", 0, { opacity: 0,
  // transformOrigin: '50% 50%' }, 0.5)




// LINES

// LINES TOP
var tlinesTop = new TimelineMax({ ease: Power1.easeInOut, yoyo: true  });
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

var tlinesBottom = new TimelineMax({yoyo: true });
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



// rotation essays 



let birdTimeline1 = new TimelineMax({ repeat: -1, yoyo: true });
birdTimeline1
.staggerFromTo("#FirstLeft", 3,
  {
    rotation: -7,
    ease: Power3.easeInOut
  },
  {
    rotation: -10,
    ease: Power3.easeInOut,
    opacity: 0.7
  })



let birdTimeline2 = new TimelineMax({ repeat: -1,  yoyo: true });
birdTimeline2
.staggerFromTo("#FirstRight", 3,
    {
      rotation: -5,
      ease: Power3.easeInOut
    },
    {
      rotation: -10,
      ease: Power3.easeInOut,
      opacity: 0.7,
    })



let birdTimeline3 = new TimelineMax({ repeat: -1, yoyo: true });
birdTimeline3
  .staggerFromTo("#SecondLeft", 3,
    {
      rotation: -7,
      ease: Power3.easeInOut,
      opacity: 0.7
    },
    {
      rotation: -1,
      ease: Power3.easeInOut
    })



let birdTimeline4 = new TimelineMax({ repeat: -1, yoyo: true });
birdTimeline4
  .staggerFromTo("#SecondRight", 3,
    {

      rotation: -25,
      ease: Power3.easeInOut,

    },
    {
      rotation: -2,
      ease: Power3.easeInOut,
      opacity: 0.5,
  
    })














// BIRDS: 


// var tl = new TimelineMax({
//   ease: Power1.easeInOut,
// });

// tl
// .staggerFrom(".FirstLeft", 1, {
//   drawSVG: 0,
//   delay: 1
//   }, 0.03, "Time1")
// .staggerFrom(".SecondLeft", 1, {
//   drawSVG: 0,
//   }, 0.03, "Time1")
// .staggerFrom(".ThirdLeft", 1, {
//   drawSVG: 0,
//   }, 0.03, "Time1")
//   .staggerFrom(".FourthLeft", 1, {
//   drawSVG: 0
//   }, 0.03, "Time1")
// .staggerFrom(".FifthLeft", 1, {
//   drawSVG: 0,
//   }, 0.03, "Time1")
//   .staggerFrom(".FifthRight", 1, {
//     drawSVG: 0,
//   }, 0.1, "Time1 -=30")
//   .staggerFrom(".FirstRight", 1, {
//   drawSVG: 0,
//   }, 0.03, "Time1")
//   .staggerFrom(".SecondRight", 1, {
//   drawSVG: 0,
//   }, 0.03, "Time1")
//   .staggerFrom(".ThirdRight", 1, {
//   drawSVG: 0,
//   }, 0.03, "Time1")
//   .staggerFrom(".FourthRight", 1, {
//   drawSVG: 0,
//   }, 0.1, "Time1")


// var tflight = new TimelineMax({
//   delay: 30,
//   ease: Power1.easeInOut,
//   repeat: -1,
//   repeatDelay: 2,
//   onReverseComplete: reverseRepeat﻿,
//   onReverseCompleteParams: ['{self}']
// });

// var reverseRepeat = function (tflight) {
//   tl.reverse(0); // 0 sets the playhead at the end of the animation
// }


// tflight
// .staggerFrom(".FirstLeft", 1, {
//   drawSVG: 0,
//   rotation: 360,
//   delay: 5
//   }, 0.02, "Time1+=10")
// .staggerFrom(".SecondLeft", 1, {
//   drawSVG: 0,
//   rotation: 360,
//   }, 0.05, "Time1+=10")
// .staggerFrom(".ThirdLeft", 1, {
//   drawSVG: 0,
//   rotation: 360
//   }, 0.03, "Time1+=10")
//   .staggerFrom(".FourthLeft", 1, {
//   drawSVG: 0
//   }, 0.04, "Time1+=10")
// .staggerFrom(".FifthRight", 1, {
//   drawSVG: 0,
//   rotation: 360
//   }, 0.1, "Time1-=60")
//   .staggerFrom(".FifthLeft", 1, {
//     drawSVG: 0,
//     rotation: 360
//   }, 0.055, "Time1+=10")
//   .staggerFrom(".FirstRight", 1, {
//   drawSVG: 0,
//     rotation: 360
//   }, 0.025, "Time1+=10")
//   .staggerFrom(".SecondRight", 1, {
//   drawSVG: 0,
//     rotation: 360
//   }, 0.045, "Time1+=10" )
//   .staggerFrom(".ThirdRight", 1, {
//   drawSVG: 0,
//     rotation: 360
//   }, 0.015, "Time1+=10")
//   .staggerFrom(".FourthRight", 1, {
//   drawSVG: 0,
//     rotation: 360
//   }, 0.035, "Time1+=10")

// // tl.timeScale(2);



// OLD 

// BIRSDS


// LEFT 

//  TweenMax.staggerFrom(".FirstLeft", 5, {
//   drawSVG: 0
// }, 0.02)
//  TweenMax.staggerFrom(".SecondLeft", 5, {
//   drawSVG: 0
// }, 0.01);
//  TweenMax.staggerFrom(".ThirdLeft", 5, {
//   drawSVG: 0
// }, 0.01);
//  TweenMax.staggerFrom(".FourthLeft", 5, {
//   drawSVG: 0
// }, 0.02);
//  TweenMax.staggerFrom(".FifthLeft", 5, {
//   drawSVG: 0
// }, 0.01);
// TweenMax.staggerFrom(".FifthRight", 5, {
//   drawSVG: 0
// }, 0.01);

//  // RIGHT 

//  TweenMax.staggerFrom(".FirstRight", 5, {
//   drawSVG: 0
// }, 0.01);
//  TweenMax.staggerFrom(".SecondRight", 5, {
//   drawSVG: 0
// }, 0.02);
//  TweenMax.staggerFrom(".ThirdRight", 5, {
//   drawSVG: 0
// }, 0.02);
//  TweenMax.staggerFrom(".FourthRight", 5, {
//   drawSVG: 0,
// }, 0.01);

