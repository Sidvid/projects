class Person {
    constructor() {
        this.count =0
        
    }
    increase(){
        this.count ++
        
    }
}
const p1 = new Person();
const p2 = new Person()
console.log(p1.increase());
console.log(p1.count);
console.log(p2.count);