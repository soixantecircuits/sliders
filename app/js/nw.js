var isNode = typeof global !== "undefined" && {}.toString.call(global) == '[object global]';
if (isNode) {
    var config = {
      watch:{
        path:"/Users/gabrielstuff/Sources/node/nodewebkit/"
      }
    };
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

  })

} else {
  console.log("browse man !");
}