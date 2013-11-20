var config = {
  initialNumber: 1545,
  name: "sac_lady_dior_",
  delay: 1000
};
config.initialNumber = config.initialNumber;

var listOfImage = ["005", "006", "007", "008", "009"];

$(function() {
  window.setInterval(function updateImage() {
    //$("#current").backstretch("/img/pictures/" + config.name + config.initialNumber + ".jpg");
    config.initialNumber++;
    //PopulateMini();
    ShiftArray(listOfImage);
  }, config.delay);
  PopulateMini();
});

var displayImage = function(src){
  $("#current").backstretch(src);
}

var PopulateMini = function() {
  var index = 0;
  $(".gallery").each(function(index, el) {
    var img = $('<img>', {
      src: "/img/pictures/" + listOfImage[index] + ".jpg"
    });
    var img2 = $('<img>', {
      src: "/img/pictures/" + listOfImage[index+1] + ".jpg",
      "class":"next"
    });
    $(el).html(img).prepend(img2);
    index++;
  });
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
    $.each(array, function(index,el){
      if(index+1<array.length)
        array[index] = array[index+1];
    });
    array[array.length-1] = temp;

    return array;
  }
  
}