class A {
  static dev = "BFE";
  dev = "bigfrontend";
}

class B extends A {
  log() {
    console.log(this.dev);
  }

  static log() {
    console.log(this.dev);
  }
}

B.log();//BFE
new B().log();//bigfrontened
