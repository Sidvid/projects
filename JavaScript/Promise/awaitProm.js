const createProm = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  });
};
async function prom1() {
  await createProm().then((msg) => {
    console.log(msg);
  });
  console.log("end");
}
function prom2() {
  createProm().then((msg) => {
    console.log(msg);
  });
  console.log("end");
}
prom1();
prom2();
