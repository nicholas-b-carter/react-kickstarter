const path = require('path');
const fs = require('fs');
const paths = require('../../config/paths');

function getFromPackageJson() {
  const packageJson = require(path.join(paths.appRoot, 'package.json'));

  return Object.keys(packageJson.dependencies);
}

function remove(name, dependencyNames) {
  const index = dependencyNames.indexOf(name);

  if (index > -1) {
    dependencyNames.splice(index, 1);
  }

  return dependencyNames;
}

module.exports = function getDllDependencyNames(config) {
  // get dependencies from package.json or create an empty array
  var dependencyNames = (config.readFromPackageJson)
    ? getFromPackageJson()
    : [];

  // include dependencies from config
  if (config.include) {
    dependencyNames = dependencyNames.concat(config.include);
  }

  // exclude dependencies from config
  if (config.exclude) {
    config.exclude.forEach(function(value, key) {
      dependencyNames = remove(value, dependencyNames);
    });
  }

  return dependencyNames;
}
