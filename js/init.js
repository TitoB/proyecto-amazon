$(document).ready(function (){
   $('.carrousel').slick({
     arrows:true, //Mostrar flrchas de navegacion
    // appendArrows: $('.navcarrousel'), //Que las flechas se agregen a ese elemento con esa clase, se puede usar un id si se quiere
     infinite: true, //true indica que nuca termina, o sea, llega al final y no se detienen, vuelve a comenzar
     speed: 300, //la velocidad de la transición en milisegundos
     slidesToShow: 1, //Cuentos mostrar por vez
     slidesToScroll: 1, //Cuantos se desplaza al hacer click en las flechas
     autoplay : true,
     responsive: [ //rea la version responsive, para que se adapte
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }]
   });

   setTimeout(function(){
      mismaAltura($(".igualaltura"));
      mismaAltura($(".mismaalturaimg"));
   },1500);

    $('.carrouselmini').slick({
     arrows:true, //Mostrar flrchas de navegacion
    // appendArrows: $('.navcarrousel'), //Que las flechas se agregen a ese elemento con esa clase, se puede usar un id si se quiere
     infinite: true, //true indica que nuca termina, o sea, llega al final y no se detienen, vuelve a comenzar
     speed: 300, //la velocidad de la transición en milisegundos
     slidesToShow: 7, //Cuentos mostrar por vez
     slidesToScroll: 7, //Cuantos se desplaza al hacer click en las flechas
     autoplay : false,
     responsive: [ //rea la version responsive, para que se adapte
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 7,
           slidesToScroll: 7,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }]
   });
   
  $('.imglink').click(function(){
    var element = $(this);
    var id = element.data('id');
    
    $('.gallerylink').each(function(index,value){
      var ga = $(this);
      if( ga.data('gallery') == id ){
        ga.removeClass('hide').siblings().addClass('hide');
      }
    });
  });
});

function mismaAltura(midiv) {
    alto = 0;
    midiv.each(function() {
        altura = $(this).height();
        if(altura > alto) {
            alto = altura;
        }
    });
    midiv.height(alto);
}