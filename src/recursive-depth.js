// Recursive depth calculator
// 
// Your task is to implement the class DepthCalculator with method calculateDepth that takes an array and returns its depth.
// calculateDepth method must pass the given array recursively. Depth of a flat array is 1. Method must correctly work with arrays that contain no elements or contain empty arrays.
// 
// For example:
// const depthCalc = new DepthCalculator();
// 
// depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
// depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
// depthCalc.calculateDepth([[[]]]) => 3
// 
// Write your code in src/recursive-depth.js.

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;

    if (Array.isArray(arr)) {
      for(let i = 0; i < arr.length; i++){
        depth = Math.max(depth, this.calculateDepth(arr[i]));
      }
      depth++;
    }

    return depth;
  }
};