
var helperFunctions = {};

helperFunctions.formatDateTime = (date)=>{
  date = date.replace('T', ' ');
  date = date.replace('Z', '');
  return date;
};

helperFunctions.extractSorted = (array, key)=>{
  var sortedArray = [];

  for (var x = 0; x < array.length; x++) {
    var added = false;
    for (var i = 0; i < sortedArray.length; i ++) {
      if (array[x][key] < sortedArray[i]) {
        added = true;
        sortedArray.splice(i, 0, array[x][key]);
        break;
      }
    }
    if (!added) {
      sortedArray.push(array[x][key]);
    }
  }


  return sortedArray;
};

helperFunctions.extractSortedDates = (array, key)=>{
  var sortedArray = [];

  for (var x = 0; x < array.length; x++) {
    var added = false;
    for (var i = 0; i < sortedArray.length; i ++) {
      if (Date.parse(array[x][key]) < Date.parse(sortedArray[i])) {
        added = true;
        sortedArray.splice(i, 0, new Date(array[x][key]));
        break;
      }
    }
    if (!added) {
      sortedArray.push(new Date(array[x][key]));
    }
  }

  return sortedArray;
};
module.exports = helperFunctions;