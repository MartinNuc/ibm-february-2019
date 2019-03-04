// preheat pot (takes 2 seconds)
// add spagetti
// add salt
// boil for 5 seconds
// invite family for a dinner

let pot = {
  temperature: 0,
  content: []
};

// preheat pot (takes 2 seconds)
setTimeout(() => {
  pot.temperature = 100;
  
  // add spagetti
  pot.content.push('spagetti');
  
  // add salt
  pot.content.push('salt');

  // boil for 5 seconds
  setTimeout(() => {
    // invite family for a dinner
    console.log('come for a dinner!');
  }, 5000);
}, 2000);