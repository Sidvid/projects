const person = {
    name:"sid",
    age:30,
}

const p1=new Proxy(person , {
    get:(obj,key)=>{
       return key in obj ? obj[key] : "Does not exists"
        
    }
})
console.log(p1.age)