/******************
 * YOUR CODE HERE *
 ******************/
const onlyOdds = function(nums){
  const odds =[];
  for(const num of nums){
    if(num%2 ===1){odds.push(num);}
  }
  return odds;
}

const onlyEvens = function(nums){
  const evens= [];
  for(const num of nums){
    if(num%2 ===0){evens.push(num)}
  }
  return evens;
}

const shortNamesOnly = function(names){
  const short =[];
  for(const name of names){
    if(name.length < 7){short.push(name);}
  }
  return short;
}

const dNames = function(names){
  const iniD = [];
  for(const name of names){
    if(name[0] === 'D'){iniD.push(name)}
  }
  return iniD;
}





/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
