$(document).ready(function(){

  /*FOR YOUR UNDERSTANDING OF SCROLL MAGIC
    
    go here: https://scrollmagic.io/

    To summarize: scrollmagic is used here
    to toggle CSS classes of elements on 
    and off based on scroll position with 
    ease*/

  var controller = new ScrollMagic.Controller();

 //here lies scene pins for every section as you scroll through page
 //scene pins allow you to pin the page view to a certain section
 //for a certain duration of scrolling the user does
 
  var welcomePinScene = new ScrollMagic.Scene({
  triggerElement: '#welcomeSpace',
  triggerHook: 0,
})
.setPin('#welcomeSpace')
  .addTo(controller);
  
  var sectionPinScene1 = new ScrollMagic.Scene({
  triggerElement: '#scenario',
      triggerHook: 0,
      duration: '90%'
})
.setPin('#scenario')
  .addTo(controller);

  var sectionPinScene2 = new ScrollMagic.Scene({
    triggerElement: '#truckRatio',
        triggerHook: 0,
        duration: '90%'
  })
  .setPin('#truckRatio')
    .addTo(controller);
  
  var sectionPinScene3 = new ScrollMagic.Scene({
  triggerElement: '#fuelSave',
      triggerHook: 0,
      duration: '90%'
})
.setPin('#fuelSave')
  .addTo(controller);
  
  var sectionPinScene4 = new ScrollMagic.Scene({
  triggerElement: '#emissions',
      triggerHook: 0,
      duration: '90%'
})
.setPin('#emissions')
  .addTo(controller);
  
  
  var sectionPinScene5 = new ScrollMagic.Scene({
  triggerElement: '#roadDamage',
      triggerHook: 0,
      duration: '90%'
})

.setPin('#roadDamage')
  .addTo(controller);

  var sectionPinScene5 = new ScrollMagic.Scene({
    triggerElement: '#vegetation',
        triggerHook: 0,
        duration: '90%'
  })
  
  .setPin('#vegetation')
    .addTo(controller);
  
  var sectionPinScene6 = new ScrollMagic.Scene({
  triggerElement: '#summary',
      triggerHook: 0,
      duration: '90%'
})
.setPin('#summary')
.addTo(controller);

  //end pin scene for every section


    /*The rest of the scrollmagic functions below are
    for the purpose of removing and adding css class elements
    
    There are lots of them because there are lots of moving parts
    with different timing and different triggers
    
    Each section's scroll magic animations below are grouped and
    almost entirely in sequence. There is a comment above each grouping
    to label its HTML parent section.*/

    
    //persona/scenario content animation starts

      var michaelScene = new ScrollMagic.Scene({
          triggerElement: '#persona',
          triggerHook: .7,
          reverse: false
        })
          .setClassToggle('#michael', 'scroll-anim')
        .addTo(controller);

      var clouds1Scene = new ScrollMagic.Scene({
        triggerElement: '#clouds1',
        triggerHook: .8
        })
        .setClassToggle('#clouds1', 'scroll-anim')
        .addTo(controller);

      var personaTextScene = new ScrollMagic.Scene({
        triggerElement: '#personaText',
        triggerHook: .1,
        reverse:false
        })
        .setClassToggle('#personaText', 'scroll-anim')
        .addTo(controller);

      var scenarioTextScene = new ScrollMagic.Scene({
        triggerElement: '#personaText',
        triggerHook: .1,
        reverse:false
        })
        .setClassToggle('#scenarioText', 'scroll-anim')
        .addTo(controller);

        
      var scenarioDetailScene = new ScrollMagic.Scene({
        triggerElement: '#scenarioDetail',
        triggerHook: 1,
        reverse:false
        })
        .setClassToggle('#scenarioDetail', 'scroll-anim')
        .addTo(controller);

    
        /*ratio/18:1 truck content animation trigger*/

        var ratioRow1Scene = new ScrollMagic.Scene({
          triggerElement: '#ratioRow1',
          triggerHook: 1,
          reverse:false
        })
          .setClassToggle('#ratioRow1', 'scroll-anim')
          .addTo(controller);

        var ratioRow2Scene = new ScrollMagic.Scene({
          triggerElement: '#ratioRow2',
          triggerHook: .95,
          reverse:false
        })
          .setClassToggle('#ratioRow2', 'scroll-anim')
          .addTo(controller);  

        var ratioRow3Scene = new ScrollMagic.Scene({
          triggerElement: '#ratioRow3',
          triggerHook: .9,
          reverse:false
        })
          .setClassToggle('#ratioRow3', 'scroll-anim')
          .addTo(controller);  

        var ratioRow4Scene = new ScrollMagic.Scene({
          triggerElement: '#ratioRow4',
          triggerHook: .8,
          reverse:false
           })
          .setClassToggle('#ratioRow4', 'scroll-anim')
          .addTo(controller);
      
        var ratioRow5Scene = new ScrollMagic.Scene({
          triggerElement: '#ratioRow5',
          triggerHook: .7,
          reverse:false
        })
          .setClassToggle('#ratioRow5', 'scroll-anim')
          .addTo(controller);
        
        var ratioRow6Scene = new ScrollMagic.Scene({
          triggerElement: '#ratioRow6',
          triggerHook: .6,
          reverse:false
        })
          .setClassToggle('#ratioRow6', 'scroll-anim')
          .addTo(controller);  

        var ratioRow6Scene = new ScrollMagic.Scene({
          triggerElement: '#iecsTruckratio',
          triggerHook: .6,
          reverse:false
        })
          .setClassToggle('#iecsTruckratio', 'scroll-anim')
          .addTo(controller);  

        var scrollBtn2Scene = new ScrollMagic.Scene({
          triggerElement: '#scrollBtn2',
          triggerHook: 1,
          reverse:false
        })
          .setClassToggle('#scrollBtn2', 'scroll-anim')
          .addTo(controller); 

        var lineOneScene = new ScrollMagic.Scene({
          triggerElement: '#lineOne',
          triggerHook: .7,
          reverse:false
          })
          .setClassToggle('#lineOne', 'scroll-anim')
          .addTo(controller);  

        var lineTwoScene = new ScrollMagic.Scene({
          triggerElement: '#lineTwo',
          triggerHook: .7,
          reverse:false
          })
            .setClassToggle('#lineTwo', 'scroll-anim')
            .addTo(controller);  
        
        
        
        /*fuel savings content trigger animation*/
          
        var fuelTextScene = new ScrollMagic.Scene({
          triggerElement: '#iecsFuel',
          triggerHook: .6,
          reverse:false
        })
          .setClassToggle('#fuelText', 'scroll-anim')
          .addTo(controller);  

        var fuelFactScene = new ScrollMagic.Scene({
          triggerElement: '#iecsFuel',
          triggerHook: .6,
          reverse:false
        })
          .setClassToggle('#fuelFact', 'scroll-anim')
          .addTo(controller);  


        var fuelAnim1Scene = new ScrollMagic.Scene({
          triggerElement: '#iecsFuel',
          triggerHook: .8,
          reverse:true
        })
          .setClassToggle('#fuelAnim1', 'scroll-anim')
          .addTo(controller);  


        var fuelAnim1Scene = new ScrollMagic.Scene({
          triggerElement: '#rrFuel',
          triggerHook: .8,
          reverse:true
        })
          .setClassToggle('#fuelAnim2', 'scroll-anim')
          .addTo(controller); 


        var indc1Scene = new ScrollMagic.Scene({
          triggerElement: '#rrFuel',
          triggerHook: .8,
          reverse:true
        })
          .setClassToggle('#indc1Div', 'scroll-anim')
          .addTo(controller); 


        var indc2Scene = new ScrollMagic.Scene({
          triggerElement: '#rrFuel',
          triggerHook: .8,
          reverse:true
          })
          .setClassToggle('#indc2Div', 'scroll-anim')
          .addTo(controller); 

                        
          /*co2 emissions content triggers animations*/

            var emissionsFactScene = new ScrollMagic.Scene({
              triggerElement: '#emissions',
              triggerHook: .5,
              reverse:false
            })
              .setClassToggle('#emissionsFact', 'scroll-anim')
              .addTo(controller); 

            var iecsSmogTruckScene = new ScrollMagic.Scene({
              triggerElement: '#emissions',
              triggerHook: .5,
              reverse:false
            })
              .setClassToggle('#iecsTruck', 'scroll-anim')
              .addTo(controller);

            var cityTruckRow1Scene = new ScrollMagic.Scene({
              triggerElement: '#emissions',
              triggerHook: .5,
              reverse:false
            })
              .setClassToggle('#citytruckRow1', 'scroll-anim')
              .addTo(controller);

            var cityTruckRow2Scene = new ScrollMagic.Scene({
              triggerElement: '#emissions',
              triggerHook: .5,
              reverse:false
            })
              .setClassToggle('#citytruckRow2', 'scroll-anim')
              .addTo(controller);

            var cityTruckRow2Scene = new ScrollMagic.Scene({
              triggerElement: '#emissions',
              triggerHook: .5,
              reverse:false
            })
              .setClassToggle('#citytruckRow3', 'scroll-anim')
              .addTo(controller);


            var iecsSmogScene = new ScrollMagic.Scene({
              triggerElement: '#emissions',
              triggerHook: .5,
              reverse:false
            })
              .setClassToggle('#iecsSmog', 'scroll-anim')
              .addTo(controller);


            var iecsSmogDataScene = new ScrollMagic.Scene({
              triggerElement: '#emissions',
              triggerHook: .5,
              reverse:false
            })
              .setClassToggle('#iecsSmogData', 'scroll-anim')
              .addTo(controller);
      
            var rirapSmogScene = new ScrollMagic.Scene({
              triggerElement: '#emissions',
              triggerHook: .5,
              reverse:false
            })
              .setClassToggle('#riprapSmog', 'scroll-anim')
              .addTo(controller); 

            var rirapSmogScene = new ScrollMagic.Scene({
              triggerElement: '#emissions',
              triggerHook: .5,
              reverse:false
            })
              .setClassToggle('#riprapSmogSmall', 'scroll-anim')
              .addTo(controller); 
    
              
            var riprapSmogDataScene = new ScrollMagic.Scene({
              triggerElement: '#emissions',
              triggerHook: .5,
              reverse:false
            })
              .setClassToggle('#riprapSmogData', 'scroll-anim')
              .addTo(controller);



            /*road damage content trigger animations*/
            
          
              var damageTXTScene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('.roadDamage-column-1', 'scroll-anim')
                .addTo(controller);

      
              var damageTXT2Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('.roadDamage-column-2', 'scroll-anim')
                .addTo(controller); 
                
              var damageTXT3Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('.roadDamage-column-3', 'scroll-anim')
                .addTo(controller); 

            /*bottom lane of road damage section ordered by sequence*/ 

              var car1Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('#car1', 'scroll-anim')
                .addTo(controller);


              var rrDmgTruck1Scene = new ScrollMagic.Scene({
               triggerElement: '#roadDamage',
               triggerHook: .7,
               reverse:false
               })
                .setClassToggle('#rrDamageTruck1', 'scroll-anim')
                .addTo(controller);


              var car2Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('#car2', 'scroll-anim')
                .addTo(controller);

              var rrDmgTruck2Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('#rrDamageTruck2', 'scroll-anim')
                .addTo(controller);

              var roadCrack4Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('#roadCrack4', 'scroll-anim')
                .addTo(controller);

              var car3Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('#car3', 'scroll-anim')
                .addTo(controller);

              var roadCrack5Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('#roadCrack5', 'scroll-anim')
                .addTo(controller);

              var roadCrack6Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('#roadCrack6', 'scroll-anim')
                .addTo(controller);

              var potHoleScene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('#potHole', 'scroll-anim')
                .addTo(controller);



          /*top lane of road damage section*/ 

          var vehicleLoopScene = new ScrollMagic.Scene({
            triggerElement: '#roadDamage',
            triggerHook: .7,
            reverse:false
           })
           .setTween(vehicleLoop)
           .addTo(controller);
       
        
       /*javascript infinite animation loop for the upper lane 
       in the road damage section*/

        function vehicleLoop(){
           
          let vehicles = document.querySelector("#trafficLoop");
          let timer = setInterval(moveTruck, 4);
          let speed=-500;
          let loopcount = 0;
          let opac = 1;

          vehicles.style.left = -50+'vh'; //set the truck off screen left initially
                     function moveTruck() {
                         //console.log(speed);
                         if(speed >= 200) { //truck is out of view now
                             vehicles.style.left = '-650vh'; //so bring it back to the leftmost start point
                             speed = -600; //need to reset the speed value at the same time as the truck position
                         }else{
                         speed += .4; //value determines the speed, bigger is faster
                         vehicles.style.left = speed+'vh'; //apply the speed number to the DOM object
                         loopcount++;
                        }
                      }
                     
                    }

          
            /*top lane damage done by vehicles*/

            var roadCrack3Scene = new ScrollMagic.Scene({
              triggerElement: '#roadDamage',
              triggerHook: .7,
              reverse:false
            })
              .setClassToggle('#roadCrack3', 'scroll-anim')
              .addTo(controller);

            var roadCrack1Scene = new ScrollMagic.Scene({
              triggerElement: '#roadDamage',
              triggerHook: .7,
              reverse:false
            })
              .setClassToggle('#roadCrack1', 'scroll-anim')
              .addTo(controller);

            var roadCrack2Scene = new ScrollMagic.Scene({
              triggerElement: '#roadDamage',
              triggerHook: .7,
              reverse:false
            })
              .setClassToggle('#roadCrack2', 'scroll-anim')
              .addTo(controller);


            /*tarmac/repair truck for road damage trigger animations*/ 

            var repairTruckScene = new ScrollMagic.Scene({
              triggerElement: '#roadDamage',
              triggerHook: .7,
              reverse:false
            })
              .setClassToggle('#repairTruckDiv', 'scroll-anim')
              .addTo(controller);

            var repairFadeScene = new ScrollMagic.Scene({
              triggerElement: '#roadDamage',
              triggerHook: .7,
              reverse:false
            })
              .setClassToggle('.repairFade', 'scroll-anim')
              .addTo(controller);


          /*vegetation section photos trigger animations*/
          
          var ccPhase1Scene = new ScrollMagic.Scene({
            triggerElement: '#vegetation',
            triggerHook: .7,
            reverse:false
          })
            .setClassToggle('.construction-phase-1', 'scroll-anim')
            .addTo(controller);

          var ccPhase2Scene = new ScrollMagic.Scene({
            triggerElement: '#vegetation',
            triggerHook: .7,
            reverse:false
            })
            .setClassToggle('.construction-phase-2', 'scroll-anim')
            .addTo(controller);

          var ccPhase3FadeScene = new ScrollMagic.Scene({
              triggerElement: '#vegetation',
              triggerHook: .7,
              reverse:false
            })
              .setClassToggle('.construction-phase-3', 'scroll-anim')
              .addTo(controller);

   

/*summary (final section) trigger animations*/

/*scrollMagic and tweenMax work togther here to both create functions and trigger
the activation for dashboard counter*/

var countMagic = new ScrollMagic.Controller();

function countDownCost(){

  var cont = { val: 1990 },
    newVal = 110;

  TweenLite.to(cont, 3, { val:newVal, roundProps:"val",  delay: 3, onUpdate:function(){document.getElementById("amount0").innerHTML=cont.val}});

}

function countDownCostSave(){

  var cont = { val: 0 },
    newVal = 1880;

  TweenLite.to(cont, 3, { val:newVal, roundProps:"val",  delay: 3, onUpdate:function(){document.getElementById("saving0").innerHTML=cont.val}});

}


function countDownFuel(){

  var cont = { val: 1422 },
    newVal = 79;

  TweenLite.to(cont, 3, { val:newVal, roundProps:"val",  delay: 3, onUpdate:function(){document.getElementById("amount1").innerHTML=cont.val}});

}

function countDownFuelSave(){

  var cont = { val: 0 },
    newVal = 1343;

  TweenLite.to(cont, 3, { val:newVal, roundProps:"val",  delay: 3, onUpdate:function(){document.getElementById("saving1").innerHTML=cont.val}});

}

function countDownEmissions(){

  var cont = { val: 5424 },
    newVal = 298;

  TweenMax.to(cont, 3, { val:newVal, roundProps:"val",  delay: 3, onUpdate:function(){document.getElementById("amount2").innerHTML=cont.val}});

}

function countDownEmissionsSave(){

  var cont = { val: 0 },
    newVal = 5126;

  TweenMax.to(cont, 3, { val:newVal, roundProps:"val",  delay: 3, onUpdate:function(){document.getElementById("saving2").innerHTML=cont.val}});

}


function Counter() {
  countDownFuel();
  countDownEmissions();
  countDownCost();
  countDownFuelSave();
  countDownEmissionsSave();
  countDownCostSave();
}


 /*here the dashboard Counter numbers are triggered*/

  var countDownScene = new ScrollMagic.Scene({
   triggerElement: '#finale',
   triggerHook: 1,
   reverse:false
  })
  .setTween(Counter)
  .addTo(countMagic);

/*the follows triggers are to change the background colour and image switch, 
final statement, and also the change of text content for road damage and dashboard title*/

var dashboardScene = new ScrollMagic.Scene({
  triggerElement: '#finale',
  triggerHook: 1,
  reverse:false
})
  .setClassToggle('#dashboard', 'scroll-anim')
  .addTo(countMagic);


  var dashboardScene = new ScrollMagic.Scene({
    triggerElement: '#finale',
    triggerHook: 1,
    reverse:false
  })
    .setClassToggle('#dashboardTitle', 'scroll-anim')
    .addTo(countMagic);


    
var roadTextScene = new ScrollMagic.Scene({
  triggerElement: '#finale',
  triggerHook: 1,
  reverse:false
})
  .setClassToggle('#amount3', 'scroll-anim')
  .addTo(countMagic);

  var roadTextScene = new ScrollMagic.Scene({
    triggerElement: '#finale',
    triggerHook: 1,
    reverse:false
  })
    .setClassToggle('.companySwitch', 'scroll-anim')
    .addTo(countMagic);



var bgIMGfadeScene = new ScrollMagic.Scene({
  triggerElement: '#finale',
  triggerHook: 1,
  reverse:false
})
  .setClassToggle('#finaleBGcc', 'scroll-anim')
  .addTo(countMagic);

    
var bgLinearfadeScene = new ScrollMagic.Scene({
  triggerElement: '#finale',
  triggerHook: 1,
  reverse:false
})
  .setClassToggle('#finale', 'scroll-anim')
  .addTo(countMagic);

var bgIMGfadeOutScene = new ScrollMagic.Scene({
  triggerElement: '#finale',
  triggerHook: 1,
  reverse:false
})
  .setClassToggle('#finaleBGrr', 'scroll-anim')
  .addTo(countMagic);

var bgIMGfadeOutScene = new ScrollMagic.Scene({
  triggerElement: '#finale',
  triggerHook: 1,
  reverse:false
})
  .setClassToggle('.call-to-actionCon', 'scroll-anim')
  .addTo(countMagic);
 
var bgIMGfadeOutScene = new ScrollMagic.Scene({
  triggerElement: '#finale',
  triggerHook: 1,
  reverse:false
})
  .setClassToggle('.actionBtn', 'scroll-anim')
  .addTo(countMagic);


});

