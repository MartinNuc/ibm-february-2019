wait(2)
  .then(() => console.log('after 2 seconds'))
  .then(() => wait(1))
  .then(() => console.log('after another 1 seconds'));

function wait(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
}