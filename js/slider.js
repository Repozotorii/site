$(function(){
$('.top-slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/next-arrow.png" alt="next arrow" style="width: 14px;height: 14px;"></button>',
  prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/prev-arrow.png" alt="prev arrow" style="width: 14px;height: 14px;"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
       
      }
    },
   
    {
      breakpoint: 640,
      settings: {
        arrows: false
      }
    }
    
    ]
  });
});
