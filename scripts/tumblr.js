$(document).ready(function(){
     $('.post').each(function(index) {
         $(this).addClass(function() {
             return 'post-' + $(this).index();
         });
     });
});