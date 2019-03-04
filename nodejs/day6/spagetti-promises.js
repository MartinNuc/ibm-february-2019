let pot = {
  temperature: 0,
  content: []
};

// promise chain
preheatCookier()
  .then(() => addSpagetti())
  .then(() => addSalt())
  .then(() => boil(5))
  .then(() => console.log('ready'))
  .catch(() => console.log('something went wrong'));

// using async/await (advanced, not covered)
async function doWork() {
  await preheatCookier();
  addSpagetti();
  addSalt();
  await boil(5);
  console.log('ready');
}



function preheatCookier() {
  return new Promise((resolve) => {
    setTimeout(() => {
      pot.temperature = 100;
      resolve();
    }, 2000);
  });
}

function addSpagetti() {
  pot.content.push('spagetti');
}

function addSalt() {
  pot.content.push('salt');
}

function boil(seconds) {
  // wait <time> seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}