
// to start with black screen

// TweenMax.to(".L", 1, {
//   fill: "#EA4C88"
// }, 0.5)



TweenMax.to("svg", 1, { opacity: 1,
  transformOrigin: '50% 50%' }, 0.5);


var tcouverture = new TimelineMax({ delay: 0, repeatDelay: 3, repeat: -1});
tcouverture
  .staggerFromTo( ".couverture", 0.05, 
  { 
    autoAlpha: 0 } ,
  { autoAlpha: 1 })
  .staggerFromTo(".couverture", 0.03,
    { opacity: 0 },
    { opacity: 1 })
  .staggerFromTo(".couverture", 0.2,
    { opacity: 0 },
    { opacity: 1 })
  .staggerFromTo(".couverture", 0.1,
    { opacity: 0 },
    { opacity: 1 })
  .staggerFromTo(".couverture", 0.6,
    { opacity: 0 },
    { opacity: 1 })
  .staggerFromTo(".couverture", 0.5,
    { opacity: 0 },
    { opacity: 1 })
  .staggerFromTo(".couverture", 0.1,
    { opacity: 0 },
    { opacity: 1 })
  .staggerFromTo(".couverture", 0.1,
    { opacity: 0 },
    { opacity: 1 })
  .staggerFromTo(".couverture", 0.05,
    { opacity: 0 },
    { opacity: 1 })
  .staggerFromTo(".couverture", 0.03,
    { opacity: 0 },
    { opacity: 1 })
  .staggerFromTo(".couverture", 0.5,
    { opacity: 0 },
    { opacity: 1 })
  .staggerFromTo(".couverture", 0.1,
    { opacity: 0 },
    { opacity: 1 })
  .staggerFromTo(".couverture", 2,
    { opacity: 0 },
    { opacity: 1 })
  .staggerFromTo(".couverture", 0.5,
    { opacity: 0 },
    { opacity: 1 })
  .staggerFromTo(".couverture", 0.1,
    { opacity: 0 },
    { opacity: 1 })
  .staggerFromTo(".couverture", 0.1,
    { opacity: 0 },
    { opacity: 1 })
  .staggerFromTo(".couverture", 0.8,
    { opacity: 0 },
    { opacity: 1 })
  .staggerFromTo(".couverture", 0.1,
    { opacity: 0 },
    { opacity: 1 })


// https://www.youtube.com/watch?v=K8eRXvLL7Wo&index=3&list=PLzCxunOM5WFLNCSF0UEHZqFJJlmdeL71S
// LINES


// LINES TOP
var tlinesTop = new TimelineMax({ delay: 0, ease: Power1.easeInOut, yoyo: true  });
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
  }, 0.01, "-= 25")

tlinesTop.timeScale(2);


// LINES BOTTOM

var tlinesBottom = new TimelineMax({ delay: 0, yoyo: true });
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

// REMOVE LINES ADTER INITIAL

TweenLite.to("#FirstLineTop", 1, { delay: 15, autoAlpha:0});
TweenLite.to("#MiddleLineTop", 1, { delay: 15, autoAlpha:0});
TweenLite.to("#LastLineTop", 1, { delay: 15, autoAlpha:0});
TweenLite.to("#TopLineBottom", 1, { delay: 15, autoAlpha:0});
TweenLite.to("#BottomLineBottom", 1, { delay: 15, autoAlpha:0});
TweenLite.to("#MiddleLineBottom", 1, { delay: 15, autoAlpha:0});

// ETOILES DEFILANTES

// // top

var tlineTop1Then = new TimelineMax({ delay: 20, repeat: -1, repeatDelay: 0, ease: Power1.easeInOut  });
tlineTop1Then
  .staggerFromTo(["#FirstLineTopThen"], 10, 
  { opacity: 1, x: 3500, ease: Power3.easeInOut},
  { x: -3800, ease: Power3.easeInOut })

var tlineTop2Then = new TimelineMax({ delay: 20, repeat: -1, repeatDelay: 0, ease: Power1.easeInOut  });
tlineTop2Then
  .staggerFromTo(["#MiddleLineTopThen"], 20, 
  { opacity: 1, x: 4100, ease: Power3.easeInOut},
  { x: -3800, ease: Power3.easeInOut })

var tlineTop3Then = new TimelineMax({ delay: 20, repeat: -1, repeatDelay: 0, ease: Power1.easeInOut  });
tlineTop3Then
  .staggerFromTo(["#LastLineTopThen"], 15, 
  { opacity: 1, x: 4000, ease: Power3.easeInOut},
  { x: -3800, ease: Power3.easeInOut })

  // bottom

var tlineTop4Then = new TimelineMax({ delay: 20, repeat: -1, repeatDelay: 0, ease: Power1.easeInOut  });
tlineTop4Then
  .staggerFromTo(["#TopLineBottomThen"], 17, 
  { opacity: 1, x: 5500, ease: Power3.easeInOut},
  { x: -3800, ease: Power3.easeInOut })

var tlineTop5Then = new TimelineMax({ delay: 20, repeat: -1, repeatDelay: 0, ease: Power1.easeInOut  });
tlineTop5Then
  .staggerFromTo(["#MiddleLineBottomThen"], 13, 
  { opacity: 1, x: 6000, ease: Power3.easeInOut},
  { x: -3800, ease: Power3.easeInOut })

var tlineTop6Then = new TimelineMax({ delay: 20, repeat: -1, repeatDelay: 0, ease: Power1.easeInOut  });
tlineTop6Then
  .staggerFromTo(["#BottomLineBottomThen"], 21, 
  { opacity: 1, x: 5500, ease: Power3.easeInOut},
  { x: -3800, ease: Power3.easeInOut })


// // BIRDS: 


var tl = new TimelineMax({
  delay: 0,
  ease: Power1.easeInOut,
});

tl
.staggerFrom(".FirstLeft", 1, {
  drawSVG: 0,
  delay: 1,
  }, 0.03, "Time1")
.staggerFrom(".SecondLeft", 1, {
  drawSVG: 0,
  }, 0.03, "Time1")
.staggerFrom(".ThirdLeft", 1, {
  drawSVG: 0,
  }, 0.03, "Time1")
  .staggerFrom(".FourthLeft", 1, {
  drawSVG: 0
  }, 0.03, "Time1")
.staggerFrom(".FifthLeft", 4, {
  drawSVG: 0,
  }, 0.03, "Time1")
  .staggerFrom(".FifthRight", 2, {
    drawSVG: 0,
  }, 0.1, "Time1 -=50")
  .staggerFrom(".FirstRight", 1, {
  drawSVG: 0,
  }, 0.03, "Time1")
  .staggerFrom(".SecondRight", 1, {
  drawSVG: 0,
  }, 0.03, "Time1")
  .staggerFrom(".ThirdRight", 1, {
  drawSVG: 0,
  }, 0.03, "Time1")
  .staggerFrom(".FourthRight", 1, {
  drawSVG: 0,
  }, 0.1, "Time1")


tl.timeScale(2);


// rotation ok 


let birdTimeline1 = new TimelineMax({ delay: 15, repeat: -1, yoyo: true });
birdTimeline1
.staggerFromTo("#FirstLeft", 2,
  {
    rotation: -7,
    ease: Power3.easeInOut,
    y: 200,
    x: 1300
  },
  {
    rotation: -10,
    ease: Power3.easeInOut,
    opacity: 0.7,
    y: 0,
    x: 1500
  })


let birdTimeline2 = new TimelineMax({ delay: 15, repeat: -1,  yoyo: true }); //18 delay
birdTimeline2
.staggerFromTo("#FirstRight", 2,
    {
      rotation: -5,
      ease: Power3.easeInOut,
      y: 200,
      x: 2000
    },
    {
      rotation: -10,
      ease: Power3.easeInOut,
      opacity: 0.7,
      y: 0,
      x: 2200
    })



let birdTimeline3 = new TimelineMax({ delay: 14, repeat: -1, yoyo: true });
birdTimeline3
  .staggerFromTo("#SecondLeft", 3,
    {
      rotation: -7,
      ease: Power3.easeInOut,
      opacity: 1
    },
    {
      rotation: -1,
      ease: Power3.easeInOut,
      opacity: 0.5
    })



let birdTimeline4 = new TimelineMax({ delay: 14, repeat: -1, yoyo: true });
birdTimeline4
  .staggerFromTo("#SecondRight", 3,
    {

      rotation: -25,
      ease: Power3.easeInOut,
      opacity: 1

    },
    {
      rotation: -2,
      ease: Power3.easeInOut,
      opacity: 0.5,
  
    })


let birdTimeline5 = new TimelineMax({ delay: 14, repeat: -1, yoyo: true }); // 17
birdTimeline5
.staggerFromTo("#ThirdLeft", 2.5,
  {
    rotation: -7,
    ease: Power3.easeInOut,
    opacity: 0.6,
    y: 900,
    x: 1500
  },
  {
    rotation: -9,
    ease: Power3.easeInOut,
    opacity: 1,
    x: 1700
  })



let birdTimeline6 = new TimelineMax({ delay: 14, repeat: -1,  yoyo: true }); // 17
birdTimeline6
.staggerFromTo("#ThirdRight",  2.5,
    {
      rotation: -5,
      ease: Power3.easeInOut,
      opacity: 0.6,
      y: 870,
      x: 2200,
    },
    {
      rotation: -10,
      ease: Power3.easeInOut,
      opacity: 1,
      x: 2400
    })


let birdTimeline7 = new TimelineMax({ delay: 15, repeat: -1, yoyo: true }); //18
birdTimeline7
  .staggerFromTo("#FourthLeft", 3,
    {
      rotation: -4.1,
      ease: Power3.easeInOut,
      opacity: 1,
      y: 1000,
    },
    {
      rotation: -1,
      ease: Power3.easeInOut,
      opacity: 0.5,
      x: -500,
      y: 800
    })



let birdTimeline8 = new TimelineMax({ delay: 15, repeat: -1, yoyo: true }); //18
birdTimeline8
  .staggerFromTo("#FourthRight", 3,
    {
      rotation: -7,
      ease: Power3.easeInOut,
      opacity: 1,
      y: 1100,
      x: 1050
    },
    {
      rotation: 0,
      ease: Power3.easeInOut,
      opacity: 0.5,
      y: 900,
      x: 600
    })


let birdTimeline9 = new TimelineMax({ delay: 14, repeat: -1, yoyo: true });
birdTimeline9
  .staggerFromTo("#FifthLeft", 2.5,
    {
      rotation: -4.1,
      ease: Power3.easeInOut,
      opacity: 1,
      x: 1150
    },
    {
      rotation: 1,
      ease: Power3.easeInOut,
      opacity: 0.6,
      x: 1800
    })



let birdTimeline10 = new TimelineMax({ delay: 14, repeat: -1, yoyo: true }); //10
birdTimeline10
.staggerFromTo("#FifthRight", 2.5,
    {
      rotation: -7,
      ease: Power3.easeInOut,
      opacity: 1,
      x: 1850

    },
    {
      rotation: 1,
      ease: Power3.easeInOut,
      opacity: 0.6,
      x: 2500

    })






// var tflight = new TimelineMax({
//   delay: 0,
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

// tl.timeScale(2);



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

// //  // RIGHT 

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

