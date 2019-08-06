$(document).ready(function(){

    /*scroll magic is used here to trigger css animations when
    the user reaches a certain section by its id/class*/

    var controller = new ScrollMagic.Controller();

   //scene pins for every section as you scroll through page
   
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
  
     
      //persona/scenario content animation

        var michaelScene = new ScrollMagic.Scene({
            triggerElement: '#persona',
            triggerHook: .7,
            reverse: false
          })
            .setClassToggle('#michael', 'fade-in')
          .addTo(controller);

        var clouds1Scene = new ScrollMagic.Scene({
          triggerElement: '#clouds1',
          triggerHook: .8
          })
          .setClassToggle('#clouds1', 'fade-in')
          .addTo(controller);

        var personaTextScene = new ScrollMagic.Scene({
          triggerElement: '#personaText',
          triggerHook: .1,
          reverse:false
          })
          .setClassToggle('#personaText', 'fade-in')
          .addTo(controller);

        var scenarioTextScene = new ScrollMagic.Scene({
          triggerElement: '#scenarioText',
          triggerHook: .1,
          reverse:false
          })
          .setClassToggle('#scenarioText', 'fade-in')
          .addTo(controller);

          
        var scenarioDetailScene = new ScrollMagic.Scene({
          triggerElement: '#scenarioDetail',
          triggerHook: 1,
          reverse:false
          })
          .setClassToggle('#scenarioDetail', 'fade-in')
          .addTo(controller);

      /*ratio/18:1 truck content animation trigger*/

          var ratioRow1Scene = new ScrollMagic.Scene({
            triggerElement: '#ratioRow1',
            triggerHook: 1,
            reverse:false
          })
            .setClassToggle('#ratioRow1', 'fade-in')
            .addTo(controller);

          var ratioRow2Scene = new ScrollMagic.Scene({
            triggerElement: '#ratioRow2',
            triggerHook: .95,
            reverse:false
          })
            .setClassToggle('#ratioRow2', 'fade-in')
            .addTo(controller);  

          var ratioRow3Scene = new ScrollMagic.Scene({
            triggerElement: '#ratioRow3',
            triggerHook: .9,
            reverse:false
          })
            .setClassToggle('#ratioRow3', 'fade-in')
            .addTo(controller);  

          var ratioRow4Scene = new ScrollMagic.Scene({
            triggerElement: '#ratioRow4',
            triggerHook: .8,
            reverse:false
             })
            .setClassToggle('#ratioRow4', 'fade-in')
            .addTo(controller);
        
          var ratioRow5Scene = new ScrollMagic.Scene({
            triggerElement: '#ratioRow5',
            triggerHook: .7,
            reverse:false
          })
            .setClassToggle('#ratioRow5', 'fade-in')
            .addTo(controller);
          
          var ratioRow6Scene = new ScrollMagic.Scene({
            triggerElement: '#ratioRow6',
            triggerHook: .6,
            reverse:false
          })
            .setClassToggle('#ratioRow6', 'fade-in')
            .addTo(controller);  

          var ratioRow6Scene = new ScrollMagic.Scene({
            triggerElement: '#iecsTruckratio',
            triggerHook: .6,
            reverse:false
          })
            .setClassToggle('#iecsTruckratio', 'fade-in')
            .addTo(controller);  

          var scrollBtn2Scene = new ScrollMagic.Scene({
            triggerElement: '#scrollBtn2',
            triggerHook: 1,
            reverse:false
          })
            .setClassToggle('#scrollBtn2', 'fade-in')
            .addTo(controller); 

          var lineOneScene = new ScrollMagic.Scene({
            triggerElement: '#lineOne',
            triggerHook: .7,
            reverse:false
            })
            .setClassToggle('#lineOne', 'fade-in')
            .addTo(controller);  

          var lineTwoScene = new ScrollMagic.Scene({
            triggerElement: '#lineTwo',
            triggerHook: .7,
            reverse:false
            })
              .setClassToggle('#lineTwo', 'fade-in')
              .addTo(controller);  
          
          
          
          /*fuel savings content trigger animation*/
            
          var fuelTextScene = new ScrollMagic.Scene({
            triggerElement: '#iecsFuel',
            triggerHook: .6,
            reverse:false
          })
            .setClassToggle('#fuelText', 'fade-in')
            .addTo(controller);  

          var fuelFactScene = new ScrollMagic.Scene({
            triggerElement: '#iecsFuel',
            triggerHook: .6,
            reverse:false
          })
            .setClassToggle('#fuelFact', 'fade-in')
            .addTo(controller);  


          var fuelAnim1Scene = new ScrollMagic.Scene({
            triggerElement: '#iecsFuel',
            triggerHook: .8,
            reverse:true
          })
            .setClassToggle('#fuelAnim1', 'fade-in')
            .addTo(controller);  


          var fuelAnim1Scene = new ScrollMagic.Scene({
            triggerElement: '#rrFuel',
            triggerHook: .8,
            reverse:true
          })
            .setClassToggle('#fuelAnim2', 'fade-in')
            .addTo(controller); 

  
          var indc1Scene = new ScrollMagic.Scene({
            triggerElement: '#rrFuel',
            triggerHook: .8,
            reverse:true
          })
            .setClassToggle('#indc1Div', 'fade-in')
            .addTo(controller); 


          var indc2Scene = new ScrollMagic.Scene({
            triggerElement: '#rrFuel',
            triggerHook: .8,
            reverse:true
            })
            .setClassToggle('#indc2Div', 'fade-in')
            .addTo(controller); 
 
                          
            /*co2 emissions content triggers animations*/

              var emissionsFactScene = new ScrollMagic.Scene({
                triggerElement: '#emissions',
                triggerHook: .5,
                reverse:false
              })
                .setClassToggle('#emissionsFact', 'fade-in')
                .addTo(controller); 

              var iecsSmogTruckScene = new ScrollMagic.Scene({
                triggerElement: '#emissions',
                triggerHook: .5,
                reverse:false
              })
                .setClassToggle('#iecsTruck', 'fade-in')
                .addTo(controller);

              var cityTruckRow1Scene = new ScrollMagic.Scene({
                triggerElement: '#emissions',
                triggerHook: .5,
                reverse:false
              })
                .setClassToggle('#citytruckRow1', 'fade-in')
                .addTo(controller);

              var cityTruckRow2Scene = new ScrollMagic.Scene({
                triggerElement: '#emissions',
                triggerHook: .5,
                reverse:false
              })
                .setClassToggle('#citytruckRow2', 'fade-in')
                .addTo(controller);

              var cityTruckRow2Scene = new ScrollMagic.Scene({
                triggerElement: '#emissions',
                triggerHook: .5,
                reverse:false
              })
                .setClassToggle('#citytruckRow3', 'fade-in')
                .addTo(controller);


              var iecsSmogScene = new ScrollMagic.Scene({
                triggerElement: '#emissions',
                triggerHook: .5,
                reverse:false
              })
                .setClassToggle('#iecsSmog', 'fade-in')
                .addTo(controller);


              var iecsSmogDataScene = new ScrollMagic.Scene({
                triggerElement: '#emissions',
                triggerHook: .5,
                reverse:false
              })
                .setClassToggle('#iecsSmogData', 'fade-in')
                .addTo(controller);
        
              var rirapSmogScene = new ScrollMagic.Scene({
                triggerElement: '#emissions',
                triggerHook: .5,
                reverse:false
              })
                .setClassToggle('#riprapSmog', 'fade-in')
                .addTo(controller); 

              var rirapSmogScene = new ScrollMagic.Scene({
                triggerElement: '#emissions',
                triggerHook: .5,
                reverse:false
              })
                .setClassToggle('#riprapSmogSmall', 'fade-in')
                .addTo(controller); 
      
                
              var riprapSmogDataScene = new ScrollMagic.Scene({
                triggerElement: '#emissions',
                triggerHook: .5,
                reverse:false
              })
                .setClassToggle('#riprapSmogData', 'fade-in')
                .addTo(controller);



              /*road damage content trigger animations*/
              
            
                var damageTXTScene = new ScrollMagic.Scene({
                  triggerElement: '#roadDamage',
                  triggerHook: .7,
                  reverse:false
                })
                  .setClassToggle('.roadDamage-column-1', 'fade-in')
                  .addTo(controller);

        
                var damageTXT2Scene = new ScrollMagic.Scene({
                  triggerElement: '#roadDamage',
                  triggerHook: .7,
                  reverse:false
                })
                  .setClassToggle('.roadDamage-column-2', 'fade-in')
                  .addTo(controller); 
                  
                var damageTXT3Scene = new ScrollMagic.Scene({
                  triggerElement: '#roadDamage',
                  triggerHook: .7,
                  reverse:false
                })
                  .setClassToggle('.roadDamage-column-3', 'fade-in')
                  .addTo(controller); 

              /*bottom lane of road damage section ordered by sequence*/ 

                var car1Scene = new ScrollMagic.Scene({
                  triggerElement: '#roadDamage',
                  triggerHook: .7,
                  reverse:false
                })
                  .setClassToggle('#car1', 'fade-in')
                  .addTo(controller);


                var rrDmgTruck1Scene = new ScrollMagic.Scene({
                 triggerElement: '#roadDamage',
                 triggerHook: .7,
                 reverse:false
                 })
                  .setClassToggle('#rrDamageTruck1', 'fade-in')
                  .addTo(controller);


                var car2Scene = new ScrollMagic.Scene({
                  triggerElement: '#roadDamage',
                  triggerHook: .7,
                  reverse:false
                })
                  .setClassToggle('#car2', 'fade-in')
                  .addTo(controller);

                var rrDmgTruck2Scene = new ScrollMagic.Scene({
                  triggerElement: '#roadDamage',
                  triggerHook: .7,
                  reverse:false
                })
                  .setClassToggle('#rrDamageTruck2', 'fade-in')
                  .addTo(controller);

                var roadCrack4Scene = new ScrollMagic.Scene({
                  triggerElement: '#roadDamage',
                  triggerHook: .7,
                  reverse:false
                })
                  .setClassToggle('#roadCrack4', 'fade-in')
                  .addTo(controller);

                var car3Scene = new ScrollMagic.Scene({
                  triggerElement: '#roadDamage',
                  triggerHook: .7,
                  reverse:false
                })
                  .setClassToggle('#car3', 'fade-in')
                  .addTo(controller);

                var roadCrack5Scene = new ScrollMagic.Scene({
                  triggerElement: '#roadDamage',
                  triggerHook: .7,
                  reverse:false
                })
                  .setClassToggle('#roadCrack5', 'fade-in')
                  .addTo(controller);

                var roadCrack6Scene = new ScrollMagic.Scene({
                  triggerElement: '#roadDamage',
                  triggerHook: .7,
                  reverse:false
                })
                  .setClassToggle('#roadCrack6', 'fade-in')
                  .addTo(controller);

                var potHoleScene = new ScrollMagic.Scene({
                  triggerElement: '#roadDamage',
                  triggerHook: .7,
                  reverse:false
                })
                  .setClassToggle('#potHole', 'fade-in')
                  .addTo(controller);



            /*top lane of road damage section*/ 
                

              var rrDmgTruck3Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              
              })
                .setClassToggle('#rrDamageTruck3', 'fade-in')
                .addTo(controller);

              var car4Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('#car4', 'fade-in')
                .addTo(controller);

              var car5Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('#car5', 'fade-in')
                .addTo(controller);

              var rrDmgTruck4Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('#rrDamageTruck4', 'fade-in')
                .addTo(controller);

              var rrDmgTruck5Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse: false
              })
                .setClassToggle('#rrDamageTruck5', 'fade-in')
                .addTo(controller);

           
              /*top lane damage*/

              var roadCrack3Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('#roadCrack3', 'fade-in')
                .addTo(controller);

              var roadCrack1Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('#roadCrack1', 'fade-in')
                .addTo(controller);

              var roadCrack2Scene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('#roadCrack2', 'fade-in')
                .addTo(controller);
  

              /*construction truck for road damage trigger animations*/ 

              var repairTruckScene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('#repairTruck', 'fade-in')
                .addTo(controller);

              var repairFadeScene = new ScrollMagic.Scene({
                triggerElement: '#roadDamage',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('.repairFade', 'fade-in')
                .addTo(controller);


            /*vegetation section photos trigger animations*/
            
            var ccPhase1Scene = new ScrollMagic.Scene({
              triggerElement: '#vegetation',
              triggerHook: .7,
              reverse:false
            })
              .setClassToggle('.construction-phase-1', 'fade-in')
              .addTo(controller);

            var ccPhase2Scene = new ScrollMagic.Scene({
              triggerElement: '#vegetation',
              triggerHook: .7,
              reverse:false
              })
              .setClassToggle('.construction-phase-2', 'fade-in')
              .addTo(controller);

            var ccPhase3FadeScene = new ScrollMagic.Scene({
                triggerElement: '#vegetation',
                triggerHook: .7,
                reverse:false
              })
                .setClassToggle('.construction-phase-3', 'fade-in')
                .addTo(controller);

     

 /*summary trigger animations*/

 /*isolated scrollMagic and tweenMax function for summary counter*/


  var countMagic = new ScrollMagic.Controller();
  
  function countDownCost(){

    var cont = { val: 1990 },
      newVal = 110;
  
    TweenLite.to(cont, 3, { val:newVal, roundProps:"val",  delay: 3, onUpdate:function(){document.getElementById("amount0").innerHTML=cont.val}});

  }


  function countDownFuel(){

    var cont = { val: 1422 },
      newVal = 79;
  
    TweenLite.to(cont, 3, { val:newVal, roundProps:"val",  delay: 3, onUpdate:function(){document.getElementById("amount1").innerHTML=cont.val}});

  }

  function countDownEmissions(){

    var cont = { val: 5424 },
      newVal = 298;
  
    TweenMax.to(cont, 3, { val:newVal, roundProps:"val",  delay: 3, onUpdate:function(){document.getElementById("amount2").innerHTML=cont.val}});

  }


  function Counter() {
    countDownFuel();
    countDownEmissions();
    countDownCost();
  }


    var countDownScene = new ScrollMagic.Scene({
     triggerElement: '#finale',
     triggerHook: 1,
     reverse:false
    })
    .setTween(Counter)
    .addTo(countMagic);


  var dashboardScene = new ScrollMagic.Scene({
    triggerElement: '#finale',
    triggerHook: 1,
    reverse:false
  })
    .setClassToggle('#dashboard', 'fade-in')
    .addTo(countMagic);

  
  var roadTextScene = new ScrollMagic.Scene({
    triggerElement: '#finale',
    triggerHook: 1,
    reverse:false
  })
    .setClassToggle('#amount3', 'fade-in')
    .addTo(countMagic);
  

  var bgIMGfadeScene = new ScrollMagic.Scene({
    triggerElement: '#finale',
    triggerHook: 1,
    reverse:false
  })
    .setClassToggle('#finaleBGcc', 'fade-in')
    .addTo(countMagic);

      
  var bgLinearfadeScene = new ScrollMagic.Scene({
    triggerElement: '#finale',
    triggerHook: 1,
    reverse:false
  })
    .setClassToggle('#finale', 'fade-in')
    .addTo(countMagic);
 
  var bgIMGfadeOutScene = new ScrollMagic.Scene({
    triggerElement: '#finale',
    triggerHook: 1,
    reverse:false
  })
    .setClassToggle('#finaleBGrr', 'fade-in')
    .addTo(countMagic);

  var bgIMGfadeOutScene = new ScrollMagic.Scene({
    triggerElement: '#finale',
    triggerHook: 1,
    reverse:false
  })
    .setClassToggle('.call-to-actionCon', 'fade-in')
    .addTo(countMagic);
   
  var bgIMGfadeOutScene = new ScrollMagic.Scene({
    triggerElement: '#finale',
    triggerHook: 1,
    reverse:false
  })
    .setClassToggle('.actionBtn', 'fade-in')
    .addTo(countMagic);


});

