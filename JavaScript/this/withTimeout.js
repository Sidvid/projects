const data = {
    name:"siddhartha!!!!",
    getName : function (){
        console.log( this.name)
    }
}
setTimeout(function (){
    return data.getName()
} , 2000);
