const rimraf = require('rimraf');

const pathsToClean = [
  './node_modules',
  './ios/build',
  './android/build',
  './temp' // Add any other paths you need to clean
];

pathsToClean.forEach((path) => {
  rimraf(path, (err) => {
    if (err) {
      console.error(`Error cleaning path: ${path}`, err);
    } else {
      console.log(`Successfully cleaned path: ${path}`);
    }
  });
});
