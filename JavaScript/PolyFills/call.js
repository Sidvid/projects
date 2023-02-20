

Function.prototype.myCall = function(context , ...args){
    context._this = this;
    return context._this(...args)

}
const user = {
    name: "sid" ,
    age :20,

}
function testing (val){
    console.log(`my name is ${this.name} and age is ${this.age} ${val}`);
}
testing.call(user , "HIIii...") //actual call
testing.myCall(user , "heyy")  // custom call
