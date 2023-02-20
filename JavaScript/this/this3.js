this.name="mike"
function fun (){
    console.log(this.name);
}
const data ={
    name:"sid",
    myFun : fun
}
function outside (){
    console.log(this.name);
}
data.myFun()
outside()