console.log("Start");
function createDelay(cb, interval, message) {
  setTimeout(() => {
    cb(message);
  }, interval);
}
function getName (message){
    console.log(message);
}
createDelay(getName , 4000 , "sid")
console.log("End");
