
// #region nav
var menu=document.getElementById("menu");
var ham=document.getElementById("ham");
var cross=document.getElementById("cross");
var da=document.getElementsByClassName("da");
var submenu=document.getElementsByClassName("submenu");
var subm=document.getElementsByClassName("subm");

document.querySelectorAll(".ham")[0].addEventListener('click',function (){
   menu.classList.toggle("left-0")
   menu.classList.toggle("translate-x-0")
   menu.classList.toggle("translate-x-[-100rem]")
   
   ham.classList.toggle("hidden")
   cross.classList.toggle("hidden")
})

subm[0].addEventListener('click',function(){
   da[0].classList.toggle('rotate-180')
   submenu[0].classList.toggle('hidden')
})
subm[1].addEventListener('click',function(){
   da[1].classList.toggle('rotate-180')
   submenu[1].classList.toggle('hidden')
})
subm[2].addEventListener('click',function(){
   da[2].classList.toggle('rotate-180')
   submenu[2].classList.toggle('hidden')
})
subm[3].addEventListener('click',function(){
   da[3].classList.toggle('rotate-180')
   submenu[3].classList.toggle('hidden')
})
subm[4].addEventListener('click',function(){
   da[4].classList.toggle('rotate-180')
   submenu[4].classList.toggle('hidden')
})
subm[5].addEventListener('click',function(){
   da[5].classList.toggle('rotate-180')
   submenu[5].classList.toggle('hidden')
})

var allms=document.getElementsByClassName('allms');
allms[0].addEventListener('click',function(){
   allms[0].classList.toggle('outline-dashed')
   allms[1].classList.toggle('hidden')
})
var search=document.getElementsByClassName('search');
var searchbar=document.getElementsByClassName('searchbar');
var back=document.getElementsByClassName('back');
search[0].addEventListener('click',function () {
   searchbar[0].classList.toggle('flex')
   searchbar[0].classList.toggle('hidden')
})
back[0].addEventListener('click',function () {
   searchbar[0].classList.toggle('flex')
   searchbar[0].classList.toggle('hidden')
})

search[1].addEventListener('click',function () {
   searchbar[1].classList.toggle('flex')
   searchbar[1].classList.toggle('hidden')
   menu.classList.toggle('lg:hidden')
   menu.classList.toggle('lg:flex')
})
back[1].addEventListener('click',function () {
   searchbar[1].classList.toggle('flex')
   searchbar[1].classList.toggle('hidden')
   menu.classList.toggle('lg:hidden')
   menu.classList.toggle('lg:flex')

})
//#endregion

//#region promo
var a=1
var b=1 
var paused=0
var clicked_pp=false


var dot1=document.getElementsByClassName("filled");
var dot2=document.getElementsByClassName("unfilled");
var pimage=document.getElementsByClassName("pimage");
var info=document.getElementsByClassName("info");
var pause=document.getElementsByClassName("pause");
var play=document.getElementsByClassName("play");
var promo=document.getElementsByClassName("promo");
var promot=document.getElementsByClassName("promot");

var change=function (){
   dot1[0].classList.toggle("hidden")
   dot1[1].classList.toggle("hidden")
   dot2[0].classList.toggle("hidden")
   dot2[1].classList.toggle("hidden")
   pimage[0].classList.toggle("hidden")
   pimage[1].classList.toggle("hidden")
   info[0].classList.toggle('hidden')
   info[1].classList.toggle('invisible')
   promo[0].classList.toggle('lg:bg-[#f2f2f2]')
   promot[0].classList.toggle('lg:bg-[#f2f2f2]')
   promo[0].classList.toggle('lg:bg-[#c2e1ff]')
   promot[0].classList.toggle('lg:bg-[#c2e1ff]')

}

var changeInterval=setInterval(change, 5000);



document.querySelectorAll(".lefta")[0].addEventListener('click',function (){
   clearInterval(changeInterval)
   change()
   if(paused==0)
   changeInterval=setInterval(change,5000)
})
document.querySelectorAll(".lefta")[1].addEventListener('click',function (){
   clearInterval(changeInterval)
   change()
   if(paused==0)
   changeInterval=setInterval(change,5000)
})

document.querySelectorAll(".pause")[0].addEventListener('mouseenter',function (event){
   //console.log("in pause0")
   pause[0].classList.toggle("hidden")
   pause[1].classList.toggle("hidden")
})


document.querySelectorAll(".pause")[1].addEventListener('mouseleave',function (){
   if(a==1){
   pause[0].classList.toggle("hidden")
   //console.log("in pause1")
   pause[1].classList.toggle("hidden")
   }
})

document.body.addEventListener('click',function (e) {
   
      
   if(document.getElementsByClassName("pp")[0].contains( e.target )){
      //console.log('hurray')
   }
   else if((a==0 || b==0)){
      //console.log(a+" "+b)
      if(clicked_pp==true){
         pp.classList.toggle("outline-dotted")
         clicked_pp=false
         }
         
      if(paused==1)
      {
         play[0].classList.toggle("hidden")
         //console.log("in pause1")
         play[1].classList.toggle("hidden")
         setTimeout(() => {
            a=1
            b=1
         }, 100);
      }
      else if(paused==0)
      {
         pause[0].classList.toggle("hidden")
         //console.log("in pause1")
         pause[1].classList.toggle("hidden")
         setTimeout(() => {
            a=1
            b=1
         }, 100);
      }
   }
})


document.querySelectorAll(".play")[0].addEventListener('mouseenter',function (){
   play[0].classList.toggle("hidden")
   //console.log("in play0")
   play[1].classList.toggle("hidden")
})


document.querySelectorAll(".play")[1].addEventListener('mouseleave',function (){
   if(b==1){
   play[0].classList.toggle("hidden")
   //console.log("in play1")
   play[1].classList.toggle("hidden")
   }
})



document.querySelectorAll(".pause")[1].addEventListener('click',function (){
   a=0
   b=0
   //console.log(a)
   //console.log("Click pause")
   pause[1].classList.toggle("hidden")
   play[1].classList.toggle("hidden")
   clearInterval(changeInterval)
   paused=1
   // setTimeout(() => {
   //    a=1
   // }, 1);
})
   

document.querySelectorAll(".play")[1].addEventListener('click',function (){
   //console.log("Click play")
   b=0
   a=0
   pause[1].classList.toggle("hidden")
   play[1].classList.toggle("hidden")
   changeInterval=setInterval(change,5000)
   paused=0
   // setTimeout(() => {
   //    b=1
   // }, 1);
})

var pp=document.querySelectorAll('.pp')[0]

pp.addEventListener('click',function(){
   //console.log('focus')
   if(clicked_pp==false){
   pp.classList.toggle("outline-dotted")
   clicked_pp=true
   }
})
//#endregion

