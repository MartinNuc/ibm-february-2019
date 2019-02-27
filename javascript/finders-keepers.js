  /////// method 1 - for loop
  // for(let i = 0; i < arr.length; i++) {
  //   let item = arr[i];
  //   if (func(item)) {
  //     return item;
  //   }
  // }
  // return undefined;

  ///////// method 2 - forEach
  // let result = undefined;
  // arr.forEach((item) => {
  //   if (func(item) && typeof result === 'undefined') {
  //     result = item;
  //   }
  // });
  // return result;

  ///////// method 3 - filter
  // let passedItems = arr.filter(func);
  // return passedItems[0];

  ///////// method 3 - filter
  return arr.find(func);