this.name = "window siddhartha"
const user = {
    name : "siddhartha",
    getName (){
        console.log(`My name is ${this.name}`);
    }
}
const user2 ={
    name:"user 2 siddhartha"
}
const testUser ={
    name : "test siddhartha" ,
    userTest(){
        user.getName()
    }
}
testUser.userTest()