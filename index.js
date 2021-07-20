const HQ = 42;

function distanceFromHqInBlocks(street) {
  return street >= HQ ? street - HQ : HQ - street;
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(location, destination) {
  const blocks = location > destination ? location - destination : destination - location;
  return blocks * 264;
}

//i
  //starting destination
  //ending destination
//o
  //returns a fare for the customer
/*
  first 400 feet are free
    -->price=free
  for a distance between 400(non-inclusive) and 2000 feet(inclusive)
    -->price=2 cents per foot
  for a distance between 2000(non-inclusive) and 2500 feet
    -->price=flat rate of 25 dollars
  for a distance over 2500 feet
    -->cannot travle that far
*/
function calculatesFarePrice(start, destination) {
  //calculate distance of start and destination
  //if distance is less than or equal to 400
    //return 0
  //if distance is between 400 and 2000
    //return the product of distance and .02
  //if distance is between 2000 and 2500
    //return 25
  //if distance is greater than 2500
    //return 'cannot travel that far'
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance-400) * .02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
}