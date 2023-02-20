{
  let i = 0;
  {
    //scope 1
    let i = 0;
    if (i < 4) {
      setTimeout(() => {
        console.log(i);
      });
    }
  }

  {
    //scope 2
    let i = 0;
    i++;
    if (i < 4) {
      setTimeout(() => {
        console.log(i);
      });
    }
  }
}
