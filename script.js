// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
(function(){var e=0;var t=["ms","moz","webkit","o"];for(var n=0;n<t.length&&!window.requestAnimationFrame;++n){window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(t,n){var r=(new Date).getTime();var i=Math.max(0,16-(r-e));var s=window.setTimeout(function(){t(r+i)},i);e=r+i;return s};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(e){clearTimeout(e)}})()

//.......my code......

//var testInfo=document.getElementById('testInfo');

  var elSec=document.getElementById('a'); 
	var elHour=document.getElementById('b'); 
	var elMin=document.getElementById('c');
  var adjTime, wiHi, minTop, minLeft, minMoveAng, minStopAng;
  var d = new Date();
	var	hours, mins, secs;

  function position(){
  	 d = new Date();
		hours=d.getHours();
		secs=d.getSeconds()+(d.getMilliseconds()/1000);
    mins=d.getMinutes()+secs/60;

    //testInfo.innerHTML='seconds: '+secs;
    adjTime = secs%10;
    if(adjTime>5){adjTime=5-(adjTime-5)};
    
		wiHi = adjTime*3/2+7;
    
    elSec.style.width=wiHi+'rem';
    elSec.style.height=wiHi+'rem';
    elSec.style.top=(-wiHi/2) +'rem';
    elSec.style.left=(-wiHi/2) +'rem';/**/
    // cos or sin of degrees in radaians(pi/180) times radius of outer circle(path) + offset of center.
    
    minTop = (-(Math.cos(secs*500*Math.PI/180)*4.5)+2);
    minLeft = ((Math.sin(secs*500*Math.PI/180)*4.5)+2);/**/
    minMoveAng = (secs*500)%360;
    minStopAng = ((mins)*6)%360;
    
    if(((( minStopAng<minMoveAng ) &&
       ( (((mins+20)%60)*6)%360>minMoveAng) )) || ( ( (mins>=40) && ( minStopAng<minMoveAng ) || ( (mins>=40) && ( (mins-40)*6)%360>minMoveAng ) ) )) {
      minTop = -(Math.cos(mins*6*Math.PI/180)*4.5)+2;
      minLeft = (Math.sin(mins*6*Math.PI/180)*4.5)+2;
    }
    
    elMin.style.top=minTop+'rem';
    elMin.style.left=minLeft+'rem';
   
    
    elHour.style.top=(-(Math.cos(hours*3*Math.PI/18)*14)-4) + 'rem';
    elHour.style.left=((Math.sin(hours*3*Math.PI/18)*14)-4) + 'rem';/**/
   
    testInfo.innerHTML='Hours: '+hours+'<br /> Mins: '+mins+'<br /> seconds: '+secs+'<br /> adjTime: '+adjTime+'<br /><br /> minTop: '+minTop+'<br /> minLeft: '+minLeft;
    
    globalID = requestAnimationFrame( position );
  }

position();