/**
 * Merge overlapping or nearby time ranges depending on a threshold
 * 
 * @param {Array<[number, number]>} ranges - 
 * @param {number} threshold -
 * @returns {Array<[number, number]>} 
 */

function mergeTimeRanges(ranges, threshold) {
  
  if (!ranges || ranges.length === 0) {
    return [];
  }

  
  ranges.sort((a, b) => a[0] - b[0]);

  let result = [];
  let current = ranges[0];

  for (let i = 1; i < ranges.length; i++) {
    let next = ranges[i];

   
    if (next[0] <= current[1] + threshold) {
      
      current[1] = Math.max(current[1], next[1]);
    } else {
     
      result.push(current);
      current = next;
    }
  }

  result.push(current);

  return result;
}

module.exports = { mergeTimeRanges };
