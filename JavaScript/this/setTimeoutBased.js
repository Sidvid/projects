var status = "global";
const testObj = {
  name: "sid",
  status: "sid staus",
  getMyDetails: function () {
    setTimeout(() => {
      let status = "inside timeout";
      let data = {
        status: "inside obj",
        getStatus() {
          return this.status;
        },
      };
      console.log("this ==>>", this);
      console.log(data.getStatus());
      console.log(data.getStatus.call(this));
    }, 0);
  },
};
testObj.getMyDetails();
