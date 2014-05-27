var themes = {

  init: function() {
    $('body').one('click',"#start", function() {
      $('#start').transition({
        x: '40px'
      }).transition({
        x: '-2000px'
      }, function() {
        $(this).remove();
      });
    });
    registerAnimationTitle();
  },
  restart: function(){
    themes.init();
    $('h1').transition({y:'0px'});
  }

};

var registerAnimationTitle = function(){
  $('body').one('click', '#send', function() {
      if(!$("#send").hasClass("disable")){
        $('h1').transition({
          y: '10px'
        }).transition({
          y: '-1000px'
        });
      } else {
        registerAnimationTitle();
      }
  });  
}
