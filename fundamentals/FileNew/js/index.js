controller.loadCss('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
controller.loadCss('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
controller.loatScript('https://code.jquery.com/jquery-3.4.1.min.js')
.then(()=>{
    $(document).ready(function () {
        view.setActiveScreen('pageHome');
        console.log(location)
    $('.hm-menu').click(function(){
        $('.hm-menu span').toggleClass('active');
        $('header').toggleClass('active');
         $('header').removeClass('activex');
     });
      $('.menuPage a').click(function(){
          $('.hm-menu span').removeClass('active');
          $('header').removeClass('active');
          $('header').addClass('activex');
      });
        
});
});