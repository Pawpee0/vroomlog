var helperFunctions = {};

helperFunctions.formatDateTime = (date)=>{
  date = date.replace('T', ' ');
  date = date.replace('Z', '');
  return date;
};

module.exports = helperFunctions;