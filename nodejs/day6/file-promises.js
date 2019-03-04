
function writeFile(filename, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    })
  })
}

function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, content) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(content);
    });
  });
}

writeFile('./file.txt')
  .then(() => console.log('finished writing'))
  .then(() => readFile('./file.txt'))
  .then(content => console.log(content))
  .catch(err => console.log('something went wrong', err));
