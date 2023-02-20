var name = "mike"
const myObj = {
  name : "sid" ,
  timeout1 : setTimeout(()=>{
console.log(this.name);
  } , 1000),
  timeout2 : setTimeout(function (){
    console.log(this.name);
  } , 1000)
}
console.log(myObj.timeout1);
console.log(myObj.timeout2);
