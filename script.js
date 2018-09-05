
// to start with black screen

TweenMax.to("svg", 1, { opacity: 1,
  transformOrigin: '50% 50%' }, 0.5)


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

TweenLite.to("#FirstLineTop", 5, {delay: 20, autoAlpha:0});
TweenLite.to("#MiddleLineTop", 5, { delay: 20, autoAlpha:0});
TweenLite.to("#LastLineTop", 5, { delay: 20, autoAlpha:0});
TweenLite.to("#TopLineBottom", 5, { delay: 20, autoAlpha:0});
TweenLite.to("#BottomLineBottom", 5, { delay: 20, autoAlpha:0});
TweenLite.to("#MiddleLineBottom", 5, { delay: 20, autoAlpha:0});

// ETOILES DEFILANTES

// // top

var tlineTop1Then = new TimelineMax({ delay: 20, repeat: -1, repeatDelay: 0, ease: Power1.easeInOut  });
tlineTop1Then
  .staggerFromTo(["#FirstLineTopThen"], 20, 
  { opacity: 1, x: 3500, ease: Power3.easeInOut},
  { x: -3800, ease: Power3.easeInOut })

  var tlineTop2Then = new TimelineMax({ delay: 20, repeat: -1, repeatDelay: 0, ease: Power1.easeInOut  });
tlineTop2Then
  .staggerFromTo(["#MiddleLineTopThen"], 20, 
  { opacity: 1, x: 4100, ease: Power3.easeInOut},
  { x: -3800, ease: Power3.easeInOut })

    var tlineTop3Then = new TimelineMax({ delay: 20, repeat: -1, repeatDelay: 0, ease: Power1.easeInOut  });
tlineTop3Then
  .staggerFromTo(["#LastLineTopThen"], 20, 
  { opacity: 1, x: 4000, ease: Power3.easeInOut},
  { x: -3800, ease: Power3.easeInOut })

  // bottom

  var tlineTop4Then = new TimelineMax({ delay: 20, repeat: -1, repeatDelay: 0, ease: Power1.easeInOut  });
tlineTop4Then
  .staggerFromTo(["#TopLineBottomThen"], 20, 
  { opacity: 1, x: 5500, ease: Power3.easeInOut},
  { x: -3800, ease: Power3.easeInOut })

  var tlineTop5Then = new TimelineMax({ delay: 20, repeat: -1, repeatDelay: 0, ease: Power1.easeInOut  });
tlineTop5Then
  .staggerFromTo(["#MiddleLineBottomThen"], 20, 
  { opacity: 1, x: 6000, ease: Power3.easeInOut},
  { x: -3800, ease: Power3.easeInOut })

    var tlineTop6Then = new TimelineMax({ delay: 20, repeat: -1, repeatDelay: 0, ease: Power1.easeInOut  });
tlineTop6Then
  .staggerFromTo(["#BottomLineBottomThen"], 20, 
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



// rotation essays 



let birdTimeline1 = new TimelineMax({ delay: 18, repeat: -1, yoyo: true });
birdTimeline1
.staggerFromTo("#FirstLeft", 2.5,
  {
    rotation: -7,
    ease: Power3.easeInOut
  },
  {
    rotation: -10,
    ease: Power3.easeInOut,
    opacity: 0.7
  })



let birdTimeline2 = new TimelineMax({ delay: 18, repeat: -1,  yoyo: true });
birdTimeline2
.staggerFromTo("#FirstRight", 2.5,
    {
      rotation: -5,
      ease: Power3.easeInOut
    },
    {
      rotation: -10,
      ease: Power3.easeInOut,
      opacity: 0.7,
    })



let birdTimeline3 = new TimelineMax({ delay: 17, repeat: -1, yoyo: true });
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



let birdTimeline4 = new TimelineMax({ delay: 17, repeat: -1, yoyo: true });
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


    let birdTimeline5 = new TimelineMax({ delay: 17, repeat: -1, yoyo: true });
birdTimeline5
.staggerFromTo("#ThirdLeft", 2,
  {
    rotation: -7,
    ease: Power3.easeInOut,
    opacity: 0.6
  },
  {
    rotation: -9,
    ease: Power3.easeInOut,
    opacity: 1
  })



let birdTimeline6 = new TimelineMax({ delay: 17, repeat: -1,  yoyo: true });
birdTimeline6
.staggerFromTo("#ThirdRight",  2,
    {
      rotation: -5,
      ease: Power3.easeInOut,
      opacity: 0.6
    },
    {
      rotation: -10,
      ease: Power3.easeInOut,
      opacity: 1
    })


let birdTimeline7 = new TimelineMax({ delay: 18, repeat: -1, yoyo: true });
birdTimeline7
  .staggerFromTo("#FourthLeft", 3,
    {
      rotation: -4.1,
      ease: Power3.easeInOut,
      opacity: 1
    },
    {
      rotation: -1,
      ease: Power3.easeInOut,
      opacity: 0.5
    })



let birdTimeline8 = new TimelineMax({ delay: 18, repeat: -1, yoyo: true });
birdTimeline8
  .staggerFromTo("#FourthRight", 3,
    {
      rotation: -7,
      ease: Power3.easeInOut,
      opacity: 1

    },
    {
      rotation: 0,
      ease: Power3.easeInOut,
      opacity: 0.5,

    })


    let birdTimeline9 = new TimelineMax({ delay: 17, repeat: -1, yoyo: true });
birdTimeline9
  .staggerFromTo("#FifthLeft", 1.5,
    {
      rotation: -4.1,
      ease: Power3.easeInOut,
      opacity: 1
    },
    {
      rotation: -1,
      ease: Power3.easeInOut,
      opacity: 0.6
    })



    let birdTimeline10 = new TimelineMax({ delay: 17, repeat: -1, yoyo: true });
birdTimeline10
.staggerFromTo("#FifthRight", 1.5,
    {
      rotation: -7,
      ease: Power3.easeInOut,
      opacity: 1

    },
    {
      rotation: 0,
      ease: Power3.easeInOut,
      opacity: 0.6,

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

