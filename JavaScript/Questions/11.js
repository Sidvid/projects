class A {
  a = "a";
}

A.prototype.c = "c";

class B extends A {
  b = "b";
}

const a = new A();
const b = new B();

console.log(a.a);//a
console.log(a.b);//un
console.log(a.c);//c
console.log(b.a);//a
console.log(b.b);//b
console.log(b.c);//c
