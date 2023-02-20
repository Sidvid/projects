Array.prototype.myFilter = function (callback){
    let filterArr = []
    for(let i=0;i<this.length ; i++){
        if(callback(this[i])) {
            filterArr.push(this[i])
        }
    }
    return filterArr

}
const newArr =[1,2,3,4,5,6,7,8,9].myFilter((elem)=>{
    return elem%2===0;

})
console.log("newArr" , newArr)
