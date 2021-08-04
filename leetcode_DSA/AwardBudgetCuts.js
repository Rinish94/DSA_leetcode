let gntsArray = [2, 100, 50, 120, 1000]
let newBudget = 190

function findGrantsCap(gntsArray, newBudget) {
 
  var currentBadge = 0;
  for(var i = 0; i < gntsArray.length; i++)
    currentBadge += gntsArray[i];

  if(currentBadge < newBudget)
    return;

  const cap = findCap(gntsArray, currentBadge, newBudget);

  var iter = 0;
  while(iter >= 0 && gntsArray[iter] > cap) {
    gntsArray[iter] = cap;
    iter++;
  }

  return gntsArray[0];
}
console.log(findGrantsCap(gntsArray, newBudget))

 function findCap(gntsArray,  currentBadge, newBudget) {
  gntsArray.sort(function(a, b) { return b - a });
  if(gntsArray[gntsArray.length - 1] * gntsArray.length > newBudget)
    return newBudget / gntsArray.length;

  var diff = currentBadge - newBudget;
  var iter = 0;
  while(iter < gntsArray.length - 1 && diff > 0) {
    const substraction = gntsArray[iter] - gntsArray[iter + 1]
    diff -= (iter + 1)  * substraction;
    iter++;
  }

  return gntsArray[iter] + (-diff) / iter;
}
