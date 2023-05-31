function randomGame() {
  let counter = 0;
  let number = setInterval(function () {
    let randomNumber = Math.random();
    counter++;
    if (randomNumber > 0.75) {
      clearInterval(number);
      console.log(counter);
    }
  }, 1000);
}
