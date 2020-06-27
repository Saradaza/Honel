// Navegation Menu
let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContent = document.querySelector('.menu');
var activador = true;

btnMenu.addEventListener('click', (event) => {

  //Icon X
  barIconX.classList.toggle('fa-times');

   if(activador){
     menu.style.left = '0%'; 
     menu.style.transition = '0.5s';
  
     activador = false;
   }
   else{
    activador = false;
    menu.style.left = '-100%';

    activador = true;
   }

});

// Add class "active"
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {
   
  element.addEventListener('click', (event) => {
   enlaces.forEach((link) => {
     link.classList.remove('active');
   });
    event.target.classList.add('active');

  });

});

//Scroll Efect

 let prevScrollPos = window.pageYOffset;
 let goTop = document.querySelector('.go-top');

window.onscroll = () => {
  
  //Hide & Show - Scroll Menu (Function)
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    menuContent.style.top = '0px';
    menuContent.style.transition = '0.5s';
  }else{
    menuContent.style.top = '-60px';
    menuContent.style.transition = '0.5s';
  }
  prevScrollPos = currentScrollPos;
  
  //Scoll Menu & Go Top & See Down (Styles)
  let arriba = window.pageYOffset;

  //Conditions
  if(arriba <= 600){
    menuContent.style.borderBottom = 'none';

    //Ocultar Go Top
    goTop.style.right = '-100px';
  }else{
    menuContent.style.borderBottom = '3px solid #ff2e63';

    //Mostrar Go Top
    goTop.style.right = '0px';
  }
  
}

//Go Top Click
goTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

let abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
  document.body.scrollTop = 600;
  document.documentElement.scrollTop = 600;
  
});

$.fn.radialprogress = function() {
  var thisElement = this;
  var thisElementId ='#'+$(thisElement).attr('id');
  var rProgress = {	 
  viejoval:  $(thisElement).val(),
  init:function(){
      this.events();
      this.makeRotation();
      this.changeColor();
  },
  events:function(){
    var _this = this;	   
    $(document).on('change',thisElementId,function(){
          porcentaje = $(thisElement).val();          
           $(thisElementId).attr('value',porcentaje);
           _this.detectChange(porcentaje);
         
    });		
  },
  detectChange:function(value){
    
    var _this = this;
   
      nuevoval =  value;

      _this.changeColor(value);
      if(nuevoval !=  _this.viejoval){
       _this.makeRotation();
       _this.viejoval = nuevoval;
     }else{ 
       _this.viejoval = progress;         
     }
  },
  makeRotation:function(){
        var progress = $(thisElementId).val();
        var anchotexto = $('.radial-progress .numbers span:first-child').width();
        var fontsize=   $('.radial-progress .numbers span:first-child').css('line-height').replace(/\D/g,'');
        var margintop= fontsize; 
          var rotation = progress/100 *360;
        var rotation2 = 180/100 * progress * 2;
        var rotation3 = 180/100 * progress;
        var numberswith = 0;
        $('.radial-progress').find('.numbers').width(numberswith);
        $('.radial-progress').find('.circulo').rotateAndTranslate(rotation);
        $('.radial-progress').find('.fill.fix').rotate(rotation2);
        $('.radial-progress').find('.mask.full').rotate(rotation3);
        $('.radial-progress').find('.fill').rotate(rotation3);           
        $('.radial-progress').find('.numbers').css('margin-top',-margintop+'px');
        numberswith = progress * anchotexto + anchotexto;	
        $('.radial-progress').find('.numbers').width(numberswith);
},
changeColor:function(){
  var progress = $(thisElementId).val();
  if(progress <= 50){
      $('.radial-progress').removeClass('bad');
      $('.radial-progress').removeClass('excellent');
      $('.radial-progress').addClass('good');
  }
  if(progress <= 20){
      $('.radial-progress').removeClass('good');
      $('.radial-progress').removeClass('excellent');
      $('.radial-progress').addClass('bad');
  }
  if(progress > 50){
      $('.radial-progress').removeClass('bad');
      $('.radial-progress').removeClass('good');
      $('.radial-progress').addClass('excellent');
  }

}
};
jQuery.fn.rotateAndTranslate = function(degrees) {
    var translateval =  64;
    
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg) translateY(-'+translateval+'px)',
                 '-moz-transform' : 'rotate('+ degrees +'deg) translateY(-'+translateval+'px)',
                 '-ms-transform' : 'rotate('+ degrees +'deg) translateY(-'+translateval+'px)',
                 'transform' : 'rotate('+ degrees +'deg) translateY(-'+translateval+'px)'
    });
    return $(this);
};
jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'
    });
    return $(this);
};
rProgress.init();
};
}(jQuery));

$(document).ready(function(){
setTimeout(function(){
  $('#Mp_Porcentaje').radialprogress();
},1000);

});
