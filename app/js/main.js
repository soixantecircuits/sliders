'use strict';

var app = {
   listOfImage: [],
   listOfMini:[],
   currentNumber: 0,
   refreshSlideshow:"",
   refreshMini:""
};


$(function() {
  populateGallery();
  for (var indexImg = app.listOfImage.length-1; indexImg >= app.listOfImage.length-4; indexImg--) {
    app.listOfMini.push(app.listOfImage[indexImg]);
  }
  $("#current > img").attr("src", "file://"+config.watch.path+"/"+app.listOfImage[app.currentNumber]);
  initSlideshow();
  initMini();
  PopulateMini();
  $("#photoNumber").html(app.listOfImage.length);
});


var initMini = function(){
  app.refreshMini = window.setInterval(function updateMini() {
    PopulateMini();
  }, config.delay.mini);
}

var initSlideshow = function(){
  app.refreshSlideshow = window.setInterval(function updateImage() {
    $("#current > img").attr("src", "file://"+config.watch.path+"/"+app.listOfImage[app.currentNumber]);
    app.currentNumber++;

    if(app.currentNumber == app.listOfImage.length)
      app.currentNumber = 0;
  }, config.delay.slideshow);
}

var displayImage = function(src){
  $("#current > img").attr("src", "file://"+src);
}

var PopulateMini = function() {
  app.listOfMini = ShiftArray(app.listOfMini, 1);
  var index = 0;
  $(".gallery").each(function(index, el) {
    /*var img = $('<img>', {
      src: "file://"+config.watch.path+"/"+ app.listOfMini[index]
    });
    var img2 = $('<img>', {
      src: "file://"+config.watch.path+"/"+ app.listOfMini[index+1],
      "class":"next"
    });
    $(el).html(img).prepend(img2);*/

    //$(el).find('img.current').attr("src", "file://"+config.watch.path+"/"+ app.listOfMini[index]);

    
    $(el).find('img.next').attr("src", "file://"+config.watch.path+"/"+ app.listOfMini[index]);

    $(el).find('img.next').animate({top:"0px"}, 3000, function(){
      $(el).find('img.current').attr("src", $(el).find('img.next').attr("src"));
      $(el).find('img.next').css({top:"-382px"});
    });

    index++;
  });
}

var newPhoto = function(name){
  clearInterval(app.refreshSlideshow);
  $("#current > img").attr("src", "file://"+config.watch.path+"/"+name);
  window.setTimeout(function runSlideshow(){
    clearInterval(app.refreshMini);
    initSlideshow();
    app.listOfMini = ShiftArray(app.listOfMini, 1);
    app.listOfMini[0] = name;
    window.setTimeout(function runMini(){
      initMini();
    }, config.delay.restartMini);
      
  }, config.delay.restartSlideshow);
}

var ShiftArray = function(array, direction){
  var temp = array[0];
  if(direction > 0){
    $.each(array, function(index,el){
    if(index+1<array.length)
      array[index] = array[index+1];
    });
    array[array.length-1] = temp;

    return array;  
  } else {
    console.log("woot");
    var index = array.length-1;
    tempArray=[];
    temp = array[index];
    $.each(array, function(i,el){
      if(index-1 >= 0){
        console.log(array[index]);
        tempArray.push(array[index]);
      }
      index--;
    });
    array[0] = temp;

    return tempArray;
  }
}