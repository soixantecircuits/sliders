var isNode = typeof global !== "undefined" && {}.toString.call(global) == '[object global]';
if (isNode) {
    var watch = require('watch');
    watch.createMonitor(config.watch.path, function (monitor) {
      monitor.on("created", function (path, stat) {
        if (/^[^\.].*$/.test(path.split("/").pop())) {
          try {
            console.log(path);
            displayImage(path);
          }catch(err){
            console.log(err)
          }
        }
      });
      monitor.on("changed", function (path, curr, prev) {
        if (/^[^\.].*$/.test(path.split("/").pop()))
          console.log("changed, ",path);
      });

      monitor.on("removed", function (path, stat) {
        if (/^[^\.].*$/.test(path.split("/").pop()))
          console.log("removed, ",path);
      });

    });
} else {
  console.log("browser, man!");
}

var populateGallery = function(){
  if(isNode){
    var fs = require("fs");
    app.listOfImage = fs.readdirSync(config.watch.path);
    console.log(app.listOfImage.length);
  } else {
    console.log("browser, man!");
    app.listOfImage = ["007.jpg", "010.jpg", "065.jpg", "014.jpg", "024.jpg", "012.jpg"];
  }
};
