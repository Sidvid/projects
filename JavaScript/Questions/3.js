function A() {
  this.dev1 = "BFE";
  this.dev2 = "dev";
  console.log(this);
  return {
    dev1: "bigfrontend",
  };
}

const a = new A();
console.log(a.dev1);//bigfrontned
console.log(a.dev2);//und
