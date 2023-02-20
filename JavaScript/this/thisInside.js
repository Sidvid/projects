const user ={
    name : "siddhartha",
    age : 30 ,
    getData : function (){
        console.log("this of function=>",this);
        return function(){
            console.log("this of function", this);
        }
    },
    getDataArrow : ()=>{
        console.log("this of arrow function", this);
        return ()=>{
             console.log("this of arrow function", this);

        }

    }

}
const user2 = {
    name : "user2" ,
    getData : user.getData ,
    getDataArrow : user.getDataArrow
}
console.log(user2.getData()())
console.log(user2.getDataArrow()());