
const user = {
  name: "sid",
  age: 40,
  outer: function () {
    console.log("outer", this);
    return () => {
      console.log("inner", this);
    };
  },
  outerTwo: function () {
    console.log("outertwo", this);
    return function (){
         console.log("inner two", this);

    }
   
  },
};
console.log(user.outerTwo()());