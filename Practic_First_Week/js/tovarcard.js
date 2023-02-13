$(document).ready(function () {
   $('.details__title').click(function (event){
       $(this).toggleClass('active').next().slideToggle(300);
   })
});