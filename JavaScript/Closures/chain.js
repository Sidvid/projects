this.fName="i am on window object"
function outer(){
    let fName= "siddhartha"
    return function (){
        return function (){
            return function (){
                console.log(fName);
                return function (lName){
                    console.log(this);
                }
            }
        }

    }
}
let test =outer()()()()()
console.log(test);